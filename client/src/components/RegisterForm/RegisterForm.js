import React from 'react';
import { TextField, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';

const useStyles = makeStyles({
    input:{
        marginTop: '1rem'
    },
    btn:{
        marginTop: '1rem'
    },
    errMsg: {
        fontFamily: "Roboto",
    }
})

function RegisterForm(props) {
    const classes = useStyles();
    const { register,  errors } = useForm();

    return(
        <Grid>
            <form>
            <Grid item direction="column">
                    <TextField onChange={props.onChange} label="First Name" variant="outlined" name="firstName" inputRef={register ({
                       minLength: 1,
                       maxLength: 40 
                    })}/>
                    <p className={classes.errMsg}>{errors.password && "Must be between 1 - 40 characters"}</p>
            </Grid>
            <Grid item direction="column">
                    <TextField onChange={props.onChange} label="Last Name" variant="outlined" name="lastName" inputRef={register ({
                       minLength: 1,
                       maxLength: 40 
                    })}/>
                    <p className={classes.errMsg}>{errors.password && "Must be between 1 - 40 characters"}</p>
            </Grid>    
            <Grid item direction="column">
                    <TextField onChange={props.onChange} label="Email" variant="outlined" name="email" inputRef={register({
                        minLength: 1,
                        maxLength: 15,
                    })} required className={classes.input}/>
                   <p className={classes.errMsg}>{errors.password && "Must be between 1 - 15 characters"}</p>
                </Grid>
                <Grid item direction="column">
                    <TextField onChange={props.onChange} label="Password" variant="outlined" name="password" inputRef={register({
                        minLength: 4,
                        maxLength: 15,
                        
                    })} required className={classes.input}/>
                    <p className={classes.errMsg}>{errors.password && "Must be between 5 - 15 characters"}</p>
                </Grid>
                <Grid>
                    <Button 
                    variant="contained"
                    type="submit"
                    className={classes.btn}
                    color="primary"
                    onClick={props.onClick}
                    >
                    Submit
                </Button>    
               </Grid>
            </form>
            
        </Grid>
    )
}

export default RegisterForm;