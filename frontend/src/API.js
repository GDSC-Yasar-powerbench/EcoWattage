
export const API_HOST = 'http://localhost'
export const API_PORT = '5000'
export const API_URL = API_HOST + ':' + API_PORT

export async function GetBenchmark(watts, language, code) {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ watts, language, code })
    }

    return await fetch(API_URL + '/benchmark', options)
}
