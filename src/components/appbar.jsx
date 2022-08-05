import { useState } from "react";

import Axios from "axios";

import {
    AppBar,
    Toolbar,
    Box,
    Container,
    Typography,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    TextField,
    Button,
    Alert,
    Snackbar,
} from "@mui/material";

const Navbar = () => {
    const env = process.env;
    const baseUrl = env.REACT_APP_BACKEND_API;

    const [openAddDialog, setOpenAddDialog] = useState(false);

    const [snackOpen, setSnackOpen] = useState(false);
    const [snackTitle, setSnackTitle] = useState('');
    const [snackType, setSnackType] = useState('');
    const createSnack = (title, type) => {
        setSnackTitle(title);
        setSnackType(type);

        setSnackOpen(true);
    }

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);

    const [surname, setSurname] = useState('');
    const [surnameError, setSurnameError] = useState(false);

    const [age, setAge] = useState('');
    const [ageError, setAgeError] = useState(false);

    const [addr, setAddr] = useState('');
    const [addrError, setAddrError] = useState(false);

    const [addLoading, setAddLoading] = useState(false);

    const addUser = () => {
        const data = {
            name,
            surname,
            age,
            addr,
        }

        setAddLoading(true);

        Axios.post(`${baseUrl}/api/users/add`, data)
            .then((result) => {
                setName('');
                setSurname('');
                setAddr('');
                setAge('');

                setAddLoading(false);
                setOpenAddDialog(false);
                createSnack('User added', 'success');
            })
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <Box>
            <AppBar
                elevation={0}
            >
                <Container>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            sx={{
                                flexGrow: 1,
                            }}
                        >
                            MERN + LowDB
                        </Typography>
                        <Button
                            variant="text"
                            color="inherit"
                            onClick={() => setOpenAddDialog(true)}
                            disableElevation
                        >
                            Add new user
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
            <Toolbar />

            <Dialog
                maxWidth="xs"
                open={openAddDialog}
                onClose={() => setOpenAddDialog(false)}
                fullWidth
            >
                <DialogTitle
                    color="primary"
                >
                    Add new user
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>Fill blank fields and press add button.</DialogContentText>
                    <TextField
                        label="Name"
                        placeholder="Enter name"
                        color="primary"
                        margin="normal"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        error={nameError}
                        fullWidth
                    />
                    <TextField
                        label="Surname"
                        placeholder="Enter surname"
                        color="primary"
                        margin="normal"
                        onChange={(e) => setSurname(e.target.value)}
                        value={surname}
                        error={surnameError}
                        fullWidth
                    />
                    <TextField
                        label="Age"
                        placeholder="Enter age"
                        color="primary"
                        margin="normal"
                        onChange={(e) => setAge(e.target.value)}
                        value={age}
                        error={ageError}
                        fullWidth
                    />
                    <TextField
                        label="Address"
                        placeholder="Enter address"
                        color="primary"
                        margin="normal"
                        onChange={(e) => setAddr(e.target.value)}
                        value={addr}
                        error={addrError}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="text"
                        color="primary"
                        onClick={() => addUser()}
                        disabled={addLoading}
                    >
                        Add
                    </Button>
                </DialogActions>
            </Dialog>

            <Snackbar open={snackOpen} autoHideDuration={6000} onClose={() => setSnackOpen(false)}>
                <Alert onClose={() => setSnackOpen(false)} severity={snackType}>
                    {snackTitle}
                </Alert>
            </Snackbar>
        </Box>
    );
}

export default Navbar;