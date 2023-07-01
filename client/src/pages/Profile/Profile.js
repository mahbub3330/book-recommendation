import React, {useEffect} from 'react';
import "./Profile.css";
import aboutImg from "../../images/about-img.jpg";
import {Avatar, Box, Button, Container, CssBaseline, TextField, Typography} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const Profile = ({userId, onSubmit}) => {

    const defaultTheme = createTheme();

    useEffect(() => {
        if (userId) {

            console.log(userId)

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
                                <h2>About</h2>
                            </div>

                            <div className='about-content grid'>
                                <div className='about-img'>
                                    <img src={aboutImg} alt=""/>
                                </div>
                                <div className='about-text'>
                                    <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
                                    <p className='fs-17'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Accusamus
                                        dignissimos consequuntur vero commodi provident maiores, iusto atque corrupti
                                        voluptate vel
                                        sequi consectetur unde aliquam corporis saepe animi non, tempora reiciendis
                                        molestias sed
                                        laudantium dolores. Assumenda aperiam fuga quo voluptate commodi ullam aliquam
                                        expedita
                                        voluptas delectus.</p>
                                    <p className='fs-17'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                                        dicta,
                                        possimus inventore eveniet atque voluptatibus repellendus aspernatur illo
                                        aliquam
                                        dignissimos illum. Commodi, porro omnis dolore amet neque modi quas eum!</p>
                                </div>
                            </div>
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
