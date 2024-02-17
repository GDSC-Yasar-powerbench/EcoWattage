import './App.css';

import Navbar from './Navbar';
import CodeEditor from './CodeEditor'
import Results from './Results'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

function App() {
  return (
    <Box className="App" sx={{display: 'flex', flexDirection: 'column'}}>
      <Box sx={{flexShrink: 1}}>
        <Navbar></Navbar>
      </Box>
      <Box sx={{flexGrow: 1, display: 'flex'}}>
        <Grid container>
          <Grid item xs={6}>
            <CodeEditor></CodeEditor>
          </Grid>
          <Grid item xs={6}>
            <Results></Results>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
