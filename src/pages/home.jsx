import { useState } from "react";

import {
    Box,
    Grid,
    Avatar,
    Card,
    CardHeader,
    CardContent,
    Typography,
    TextField,
} from "@mui/material";

import {
    Search,
    Info
} from "@mui/icons-material";

const HomePage = () => {
    const [userSearch, setUserSearch] = useState('');
    const searchUser = (value) => {
        setUserSearch(value);

        console.log(userSearch);
    }

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
                                value={userSearch}
                                onChange={(e) => searchUser(e.target.value)}
                                sx={{
                                    bgcolor: "background.default"
                                }}
                                fullWidth
                            />
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}

export default HomePage;