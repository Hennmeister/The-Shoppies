import { useState } from 'react'
import Particles from 'react-particles-js'
import Search from './Search'
import { createMuiTheme } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/styles'
import { Provider } from './movie-context'
import classes from './App.module.css'
import Nominations from './Nominations'
import HelpMenu from './HelpMenu'

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            light: '#757ce8',
            main: '#9b0000',
            dark: '#002884',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
        },
    },
})

function App() {
    const [showHelpMenu, updateShowHelpMenu] = useState(true)
    return (
        <ThemeProvider theme={theme}>
            <div>
                <header className={classes.flexWrapper}>
                    {showHelpMenu ? (
                        <HelpMenu toggleActive={updateShowHelpMenu} />
                    ) : (
                        <>
                            <Provider>
                                <Search />
                                <Nominations />
                            </Provider>
                            <Button
                                className={classes.helpButton}
                                onClick={() => updateShowHelpMenu(true)}
                                color="secondary"
                                variant="outlined"
                            >
                                What am I doing again?
                            </Button>
                        </>
                    )}
                </header>
                <Particles
                    className={classes.particles}
                    params={{
                        particles: {
                            number: {
                                value: 25,
                            },
                            size: {
                                value: 10,
                            },
                            line_linked: {
                                enable: false,
                            },
                        },
                    }}
                />
            </div>
        </ThemeProvider>
    )
}

export default App
