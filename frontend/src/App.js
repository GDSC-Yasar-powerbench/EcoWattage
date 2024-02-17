import './App.css';

import Navbar from './Navbar';
import CodeEditor from './CodeEditor'
import Benchmark from './Benchmark'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import { useState } from 'react';

function App() {
  const [code, setCode] = useState("")

  return (
    <Box className="App" sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ flexShrink: 1 }}>
        <Navbar></Navbar>
      </Box>
      <Box sx={{ flexGrow: 1, display: 'flex' }}>
        <Grid container>
          <Grid item xs={6}>
            <CodeEditor setCode={setCode}></CodeEditor>
          </Grid>
          <Grid item xs={6}>
            <Benchmark code={code}></Benchmark>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
