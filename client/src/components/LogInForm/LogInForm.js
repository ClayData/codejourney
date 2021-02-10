import React from 'react';
import { TextField, Button, Grid }from '@material-ui/core/';
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

function LogInForm(props) {
    const classes = useStyles();
    const { register, handleSubmit, errors } = useForm();

    return (
        <Grid contianer="true" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}} direction="column">
            <form onSubmit={handleSubmit(props.onSubmit)}>
            <Grid item >
                    <TextField label="email" variant="outlined" name="email" inputRef={register({
                        minLength: 1,
                        maxLength: 15,
                    })} 
                    required className={classes.input}
                    onChange={props.onChange}
                    />
                   <p className={classes.errMsg}>{errors.password && "Must be between 1 - 15 characters"}</p>
                </Grid>
                <Grid item >
                    <TextField label="Password" variant="outlined" name="password" inputRef={register({
                        minLength: 5,
                        maxLength: 15,
                        
                    })} required className={classes.input}
                    onChange={props.onChange}
                    />
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
               </Button> <br/> <br/>
               </Grid>
            </form>
        </Grid>
    )
}

export default LogInForm;