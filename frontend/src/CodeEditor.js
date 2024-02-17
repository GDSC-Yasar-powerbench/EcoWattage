import './CodeEditor.css'

import Editor from '@monaco-editor/react'

import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

import { useState } from 'react'

const languages = [
    'c',
    'cpp'
]

function CodeEditor() {
    const [language, setLanguage] = useState(languages[0])

    return (
        <Box component='form' className='code-form' noValidate>
            <Box sx={{ padding: '1rem' }}>
                <FormControl fullWidth>
                    <InputLabel>Language</InputLabel>
                    <Select value={language} label='Language' onChange={(event) => { setLanguage(event.target.value) }}>
                        {languages.map((lang, index) =>
                            <MenuItem key={index} value={lang}>{lang.toUpperCase()}</MenuItem>
                        )}
                    </Select>
                </FormControl>
            </Box>

            <Editor language={language} defaultValue='// Enter code here' width='100%' height='100%'></Editor>
        </Box>
    )
}

export default CodeEditor;
