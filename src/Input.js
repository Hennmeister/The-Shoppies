import React from 'react'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'

export default function Input(props) {
    const handleInputChange = (e) => {
        props.onInputChanged(e.target.value)
    }

    const HandleKeyPress = async (e) => {
        if (e.key === 'Enter') {
            props.sendQuery()
        }
    }

    return (
        <div>
            <TextField
                label="Search for a Movie"
                id="outlined-start-adornment"
                onChange={handleInputChange}
                value={props.input}
                style={{ width: '25ch' }}
                onKeyPress={HandleKeyPress}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon></SearchIcon>
                        </InputAdornment>
                    ),
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="delete input"
                                onClick={() =>
                                    handleInputChange({ target: { value: '' } })
                                }
                            >
                                {props.input.length > 0 ? <CloseIcon /> : null}
                            </IconButton>
                        </InputAdornment>
                    ),
                    autoFocus: true,
                    autoComplete: 'off',
                }}
                variant="outlined"
            ></TextField>
        </div>
    )
}
