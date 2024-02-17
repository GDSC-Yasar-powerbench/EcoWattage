
import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'

import { ResponsivePie } from '@nivo/pie'

import { useState } from 'react'

function Results() {
    const [advanced, setAdvanced] = useState(false)
    const results = {
        compile_time: 0.98,
        exec_time: 9.14
    }

    const timeData = [
        {
            id: "compile",
            value: results.compile_time
        },
        {
            id: "execution",
            value: results.exec_time
        }
    ]

    if (results == null) {
        return <CircularProgress />
    }

    return (
        <Box sx={{ padding: "1rem" }}>
            <TextField id='cpu-name' type='text' label='CPU Name' variant='outlined' disabled={advanced} fullWidth />
            <TextField
                id='cpu-power'
                label='CPU Power'
                variant='outlined'
                InputProps={{
                    endAdornment: <InputAdornment position='end'>watts</InputAdornment>,
                }}
                disabled={!advanced}
                fullWidth
            />
            <FormControlLabel control={<Checkbox onChange={(event) => { setAdvanced(event.target.checked) }} />} label='Advanced' />
            <Button type='submit' fullWidth variant='contained'>Benchmark</Button>
            <ResponsivePie data={timeData} />
        </Box>
    )
}

export default Results
