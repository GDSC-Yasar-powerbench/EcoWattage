import Box from '@mui/material/Box'
import Appbar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import Toolbar from '@mui/material/Toolbar'

function Navbar() {
    return (
        <Box sx={{flexGrow: 1}}>
            <Appbar position='static'>
                <Toolbar>
                    <Typography variant='h6' component='div'>power-bench</Typography>
                </Toolbar>
            </Appbar>
        </Box>
    )
}

export default Navbar
