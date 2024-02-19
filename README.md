# power-bench
power-bench is a tool to help developers measure the power consumption of their code. It is heavily inspired by the amazing [quick-bench.com](https://quick-bench.com/) and its suite of tools.

## Project Goals
The main goal of the project is to get developers thinking about how the code they write effects the environment. Power consumption is one of the many reasons developers should care about performance today even with our computers becoming faster and faster, as the resources of our computers may feel infinite yet our planets resources are certainly not.

## How It Works
The idea is we allow the user to write their code on our frontend and send it to our backend to be compiled and executed. The backend executes and benchmarks the code and returns power consumption statistics back to the frontend. Today, the only languages supported are C and C++ however this can be extended in the future.

Currently, power consumption is measured by using a constant Wh power draw value either selected from Firestore database by the CPU model or provided manually by the user. We know this won't lead to accurate results. The idea for the future of the project is to use an interface such as Intel's RAPL or even to use hardware based measuring to be as accurate as possible.

The data stored in Cloud Firestore was taken from https://gamersnexus.net/megacharts/cpu-power

## Requirements
* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/package/npm)
* [Python 3](https://www.python.org/downloads/)
* [Python 3 venv](https://docs.python.org/3/library/venv.html)

## Getting Started
Clone the repository

```
git clone https://github.com/GDSC-Yasar-powerbench/powerbench.git
cd powerbench
```

### Starting the frontend
The frontend is built with react and javascript
```
cd frontend
npm install
npm run start
```
The dev server for the frontend will begin running at http://localhost:3000. You can open it in your browser of choice.

### Starting the backend
The backend is built with flask and python
```
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
flask run
```
The dev server for the backend will begin running at http://localhost:5000