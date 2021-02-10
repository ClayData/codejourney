import React, { useState } from 'react';
import { Grid, Paper, Typography, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import LogInForm from '../../components/LogInForm/LogInForm';
import API from '../../utils/API';
import AuthenicationService from '../../utils/AuthenticationService';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root:{
        display: "flex"
    }
})

function SignIn(props) {
    const history = useHistory(); 
    const classes = useStyles();
    const [ userInfo, setUserInfo ] = useState({});
    // const { jwt, setJwt } = useContext(JwtContext);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserInfo({...userInfo, [name]:value })
    }

    const onClick = data => {
        console.log("Clicked");
        API.getUser({
            email: userInfo.email,
            password:userInfo.password
        })
        .then(res => {
            
            if(res.status === 200){
                AuthenicationService.registerSuccessfulLoginForJwt(userInfo.email, res.headers.token);

                // setJwt(res.headers.token);
                history.push("/tomato");
            }
        })
        .catch(err => {
            
            console.log(err);
        })
    }

    return(
        <Grid container className={classes.root}>
            <Paper>
                <Grid item>
                    <Grid item>
                        <Typography>
                            Log-In 
                        </Typography>
                    </Grid>
                    <Grid item>
                        <LogInForm onClick={onClick} onChange={handleChange}/>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography>
                        Register an Account
                    </Typography>
                    <Button 
                    onClick={() => {history.push("/register")}}>
                        Register
                    </Button> 
                </Grid>
            </Paper>
        </Grid>
    )
}

export default SignIn;