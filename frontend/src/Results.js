
import Box from '@mui/material/Box'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import CircularProgress from '@mui/material/CircularProgress'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography';

import { ResponsivePie } from '@nivo/pie'

import { useState } from 'react'

function Results() {
    const [advanced, setAdvanced] = useState(false)
    const results = {
        compile_power: 0.0012,
        exec_power: 0.0212
    }

    const powerData = () => [
        {
            id: "compile",
            value: results.compile_power
        },
        {
            id: "execution",
            value: results.exec_power
        }
    ]

    if (results == null) {
        return <CircularProgress />
    }

    return (
        <Box sx={{ padding: "1rem", display: 'flex', flexDirection: 'column' }}>
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
            <Box sx={{ height: '400px', display: 'flex' }}>
                <ResponsivePie
                    data={powerData()}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.5}
                />
            </Box>
            <Typography component='div'>
                Compilation consumed <Box sx={{fontWeight: 'bold'}}>{results.compile_power}kWh</Box>
                Execution consumed <Box sx={{fontWeight: 'bold'}}>{results.exec_power}kWh</Box>
                In total, consumed <Box sx={{fontWeight: 'bold'}}>{results.compile_power + results.exec_power}kWh</Box>
            </Typography>
        </Box>
    )
}

export default Results
