import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography';

import { ResponsivePie } from '@nivo/pie'

function Results({ loading, results, errors }) {
    if (loading) {
        return <LinearProgress />
    }

    if (errors) {
        return <Typography color='error'>{errors}</Typography>
    }

    if (!results) return ""

    return <div>
        <Box sx={{ height: '400px', display: 'flex' }}>
            <ResponsivePie
                data={results}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                colors={{ scheme: 'paired' }}
            />
        </Box>
        <Typography component='div'>
            Compilation consumed <Box sx={{ fontWeight: 'bold' }}>{results[0].value} kWh</Box>
            Execution consumed <Box sx={{ fontWeight: 'bold' }}>{results[1].value} kWh</Box>
            In total, consumed <Box sx={{ fontWeight: 'bold' }}>{results[0].value + results[1].value} kWh</Box>
        </Typography>
    </div>
}

export default Results
