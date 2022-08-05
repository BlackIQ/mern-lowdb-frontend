import { useState } from "react";

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
} from "@mui/material";

const Navbar = () => {
    const [openAddDialog, setOpenAddDialog] = useState(false);

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState(false);

    const [surname, setSurname] = useState('');
    const [surnameError, setSurnameError] = useState(false);

    const [age, setAge] = useState('');
    const [ageError, setAgeError] = useState(false);

    const [addr, setAddr] = useState('');
    const [addrError, setAddrError] = useState(false);

    const addUser = () => {
        console.log('user adding');
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
                    >
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default Navbar;