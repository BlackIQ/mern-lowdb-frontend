import {
    Container,
    ThemeProvider,
    createTheme,
    CssBaseline,
    Typography,
    colors as Colors,
} from "@mui/material";

import Navbar from "./components/appbar";

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
            <Container>
                <Typography
                    variant="h1"
                >
                    Hello
                </Typography>
            </Container>
        </ThemeProvider>
    );
}

export default App;
