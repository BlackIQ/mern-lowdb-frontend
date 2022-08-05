import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
    Container,
    ThemeProvider,
    createTheme,
    CssBaseline,
    Typography,
    colors as Colors,
} from "@mui/material";

import Navbar from "./components/appbar";
import HomePage from "./pages/home";

function App() {
    const theme = createTheme({
        palette: {
            background: {
                default: "#fafefe",
            },
            primary: {
                main: Colors.indigo[500],
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar />
            <Router>
                <Container>
                    <Switch>
                        <Route path={"/"} exact><HomePage /></Route>
                    </Switch>
                </Container>
            </Router>
        </ThemeProvider>
    );
}

export default App;
