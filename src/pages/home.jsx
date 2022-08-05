import { useState, useEffect } from "react";

import Axios from "axios";

import {
    Box,
    Grid,
    Avatar,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Typography,
    TextField,
    List,
    ListItem,
    ListItemButton,
    ListItemText, Button,
} from "@mui/material";

import {
    Search,
    Person,
} from "@mui/icons-material";

const HomePage = () => {
    const env = process.env;
    const baseUrl = env.REACT_APP_BACKEND_API;

    const [userSearch, setUserSearch] = useState('');
    const [usersResult, setUsersResult] = useState([]);

    const [userId, setUserId] = useState('');
    const [userResult, setUserResult] = useState({});

    useEffect(() => {
        if (userSearch === '') setUsersResult([]);
        else {
            Axios.get(`${baseUrl}/api/users/search/${userSearch}`)
                .then((result) => {
                    setUsersResult(result.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }

        if (userId === '') setUserId('');
        else {
            Axios.get(`${baseUrl}/api/users/get/${userId}`)
                .then((result) => {
                    setUserResult(result.data);
                    console.log(result.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }, [userSearch, userId]);

    return (
        <Box
            sx={{
                mt: "2rem",
            }}
        >
            <Grid
                spacing={2}
                container
            >
                <Grid
                    md={6}
                    sm={12}
                    sx={12}
                    item
                >
                    <Card
                        variant="outlined"
                        sx={{
                            border: "none",
                            borderRadius: 5,
                        }}
                    >
                        <CardHeader
                            title="Search users"
                            subheader="Search data about users"
                            avatar={
                                <Avatar sx={{ bgcolor: "primary.main" }}>
                                    <Search />
                                </Avatar>
                            }
                            sx={{
                                color: "primary.main"
                            }}
                        />
                        <CardContent>
                            <TextField
                                label="Search user"
                                placeholder="Enter any data"
                                color="primary"
                                margin="normal"
                                value={userSearch}
                                onChange={(e) => setUserSearch(e.target.value)}
                                sx={{
                                    bgcolor: "background.default"
                                }}
                                fullWidth
                            />
                            {
                                usersResult.length === 0
                                ?
                                <Box>
                                    <br />
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                    >
                                        No data is found
                                    </Typography>
                                </Box>
                                :
                                <List>
                                    {
                                        usersResult.map((user) => {
                                            return (
                                                <ListItem disablePadding>
                                                    <ListItemButton
                                                        onClick={() => setUserId(user.id)}
                                                    >
                                                        <ListItemText primary={user.name} />
                                                    </ListItemButton>
                                                </ListItem>
                                            );
                                        })
                                    }
                                </List>
                            }
                        </CardContent>
                    </Card>
                </Grid>
                {
                    userId !== ''
                    &&
                    <Grid
                        md={6}
                        sm={12}
                        sx={12}
                        item
                    >
                        <Card
                            variant="outlined"
                            sx={{
                                border: "none",
                                borderRadius: 5,
                            }}
                        >
                            <CardHeader
                                title="User information"
                                subheader="Here you can read about username"
                                avatar={
                                    <Avatar sx={{ bgcolor: "primary.main" }}>
                                        <Person />
                                    </Avatar>
                                }
                                sx={{
                                    color: "primary.main"
                                }}
                            />
                            <CardContent>

                            </CardContent>
                            <CardActions>
                                <Button
                                    variant="text"
                                    onClick={() => setUserId('')}
                                >
                                    Close
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                }
            </Grid>
        </Box>
    );
}

export default HomePage;