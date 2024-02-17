
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'

import Results from './Results'

import { useState } from 'react'

function Benchmark() {
    const [watts, setWatts] = useState(0)
    const [loading, setLoading] = useState(false)

    const results = [
        {
            id: "compilation",
            value: 0.0006066317028469509
        },
        {
            id: "execution",
            value: 2.1651056077745227e-05
        }
    ]

    const getBenchmark = () => {
        setLoading(true)
        setTimeout(() => setLoading(false), 2000)
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
            <Button type='submit' fullWidth variant='contained' onClick={getBenchmark}>Benchmark</Button>
            <Results loading={loading} results={results} />
        </Box>
    )
}

export default Benchmark
