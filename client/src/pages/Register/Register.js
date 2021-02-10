import React, { useState } from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import AuthenicationService from '../../utils/AuthenticationService';
import API from '../../utils/API';

function Register(props) {
    const [ userInfo, setUserInfo ] = useState({});
    const history = useHistory(); 

    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserInfo({...userInfo, [name]:value})
    }

    const onClick = event => {
        event.preventDefault();
        API.saveUser({
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            email: userInfo.email,
            password: userInfo.password,
        })
        .then(res => {
            if(res.status === 201){
                API.getUser({
                    email: userInfo.email,
                    password: userInfo.password
                }).then(res => {
                    if(res.status === 200) {
                        AuthenicationService.registerSuccessfulLoginForJwt(userInfo.email, res.headers.token);
                        history.push("/tomato");
                    }
                })
            }
        })
        .catch(err => {
            
            console.log(err);
        })
    }

    return(
        <Grid container>
            <Paper>
                <Grid item>
                    <Grid item>
                        <Typography>
                           Register
                        </Typography>
                    </Grid>
                    <Grid item>
                        <RegisterForm onClick={onClick} onChange={handleChange}/>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Register;