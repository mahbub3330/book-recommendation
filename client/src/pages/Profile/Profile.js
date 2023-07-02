import React, {useEffect, useState} from 'react';
import "./Profile.css";
import {Avatar, Box, Button, Container, CssBaseline, TextField, Typography} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import Book from "../../components/BookList/BookList";
import {getUserWiseRecommendedBooks} from "../../api/RecommendedBookApi";

const Profile = ({userId, onSubmit}) => {

    const defaultTheme = createTheme();
    const [booksData, setBooksData] = useState([]);

    useEffect(() => {
        if (userId) {
            getUserWiseRecommendedBooks(userId).then((res) => {
                if (res.status === 200) {
                    if (res.data.data.length > 0) {
                        setBooksData(res.data.data)
                    }
                }
            }).catch(err => {
                console.log(err)
                setBooksData([])
            })
        }
    }, [userId])

    const handleSignIn = (event) => {
        event.preventDefault();
        onSubmit(event)
    }

    return (
        <section className='about'>
            <div className='container'>
                {
                    userId ?
                        <>
                            <div className='section-title'>
                                <h2>Recommended Book List</h2>
                            </div>

                            <Book bookList={booksData}/>
                        </>
                        :
                        <ThemeProvider theme={defaultTheme}>
                            <Container component="main" maxWidth="xs">
                                <CssBaseline/>
                                <Box
                                    sx={{
                                        marginTop: 8,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                                        <LockOutlinedIcon/>
                                    </Avatar>
                                    <Typography component="h1" variant="h5">
                                        Sign in
                                    </Typography>
                                    <Box component="form" noValidate sx={{mt: 1}} onSubmit={handleSignIn}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            autoFocus
                                        />
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                        />
                                        <Button

                                            type="submit"
                                            fullWidth
                                            variant="contained"
                                            sx={{mt: 3, mb: 2}}
                                        >
                                            Sign In
                                        </Button>
                                    </Box>
                                </Box>
                            </Container>
                        </ThemeProvider>

                }
            </div>
        </section>
    )
}

export default Profile
