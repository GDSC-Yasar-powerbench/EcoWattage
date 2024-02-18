
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import InputAdornment from '@mui/material/InputAdornment'
import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'

import Results from './Results'

import { useState } from 'react'

import { GetBenchmark } from './API'

function Benchmark({ code }) {
    const [watts, setWatts] = useState(0)
    const [advanced, setAdvanced] = useState(false)
    const [loading, setLoading] = useState(false)
    const [results, setResults] = useState(null)
    const [errors, setErrors] = useState(null)
    const [cpus, setCPUs] = useState([
        {
            label: 'AMD Ryzen 5 3600X',
            power: 81.6
        }
    ])



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
            <Autocomplete
                disablePortal
                id='cpu-name'
                options={cpus}
                renderInput={(params) => <TextField {...params} label='CPU Name' />}
                onChange={(_, value) => setWatts(value ? value.power : 0)}
                sx={{ marginBottom: '1rem' }}
                disabled={advanced}
            />
            <FormControlLabel
                label='Advanced'
                control={<Checkbox onChange={(_, checked) => setAdvanced(checked)} />}
            />
            <TextField
                id='cpu-power'
                label='CPU Power'
                variant='outlined'
                InputProps={{
                    endAdornment: <InputAdornment position='end'>watts</InputAdornment>,
                }}
                fullWidth
                onChange={(event) => setWatts(event.target.value)}
                value={watts}
                disabled={!advanced}
            />
            <Button type='submit' fullWidth variant='contained' onClick={doBenchmark}>Benchmark</Button>
            <Results loading={loading} results={results} errors={errors} />
        </Box>
    )
}

export default Benchmark
