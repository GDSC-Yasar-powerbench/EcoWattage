from flask import Flask, request
from flask_cors import CORS, cross_origin
import base64
import subprocess
import time
from pathlib import Path

app = Flask(__name__)
cors = CORS(app, origins=["http://localhost:3000"])

COMPILER = "gcc"
BINARY = "./tmp/a.out"

def to_hours(seconds):
    return seconds / 3600

@app.post("/benchmark")
def benchmark():
    try:
        json = request.json
        language = json["language"]
        print("Benchmarking...")
        print(f"- Language: {language}")
        Path("./tmp").mkdir(parents=True, exist_ok=True)
        filename = f"./tmp/main.{language}"
        print(f"- Temporary source: {filename}")
        with open(filename, 'wb') as tmpfile:
            code = base64.b64decode(json["code"])
            tmpfile.write(code)
            print(f"- Wrote {len(code)} bytes of code")
        print("- Compiling...")
        compile_start = time.time()
        compile_result = subprocess.run([COMPILER, "-o", BINARY, filename], capture_output=True, text=True)
        compile_time = time.time() - compile_start
        print(f"- Compilation took {compile_time} seconds")
        if (compile_result.returncode != 0):
            print("- Compilation failed. Returning error")
            return {"compiler_code": compile_result.returncode, "stderr": compile_result.stderr}, 400
        print("- Compiled successfully")
        print("- Executing...")
        exec_start = time.time()
        exec_result = subprocess.run([BINARY])
        exec_time = time.time() - exec_start
        print(f"- Execution took {exec_time} seconds")
        print("- Finished executing.")
        watts = float(json["watts"])
        print(f"- Using {watts} as power consumption...")
        compile_power = watts * to_hours(compile_time)
        print(f"- Compilation consumed {compile_power} kWh")
        exec_power = watts * to_hours(exec_time)
        print(f"- Execution consumed {exec_power} kWh")
        return {"compile_power": compile_power, "exec_power": exec_power}
    except KeyError as e:
        return str(e), 400
