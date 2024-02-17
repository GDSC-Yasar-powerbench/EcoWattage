
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'

import Results from './Results'

import { useState } from 'react'

import { GetBenchmark } from './API'

function Benchmark({ code }) {
    const [watts, setWatts] = useState(0)
    const [loading, setLoading] = useState(false)
    const [results, setResults] = useState(null)
    const [errors, setErrors] = useState(null)

    const doBenchmark = async () => {
        try {
            setLoading(true)
            const response = await GetBenchmark(watts, 'c', code)
            const data = await response.json()
            if (!response.ok) {
                setResults(null)
                setErrors(data["stderr"])
                return
            }
            setErrors(null)
            setResults([
                {
                    id: "compilation",
                    value: data["compile_power"]
                },
                {
                    id: "execution",
                    value: data["exec_power"]
                }
            ])
        } catch (err) {
            console.error('err', err)
            setResults(null)
            setErrors(err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Box sx={{ padding: "1rem", display: 'flex', flexDirection: 'column' }}>
            <TextField
                id='cpu-power'
                label='CPU Power'
                variant='outlined'
                InputProps={{
                    endAdornment: <InputAdornment position='end'>watts</InputAdornment>,
                }}
                fullWidth
                onChange={(event) => setWatts(event.target.value)}
            />
            <Button type='submit' fullWidth variant='contained' onClick={doBenchmark}>Benchmark</Button>
            <Results loading={loading} results={results} errors={errors} />
        </Box>
    )
}

export default Benchmark
