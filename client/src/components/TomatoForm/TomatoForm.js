import React from 'react';
import { Grid, TextField, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
    entry: {
        marginBottom: '1rem'
    },
    select: {
        marginBottom: '1rem'
    }
}));

function TomatoForm(props) {
    // const [timeValue, setTimeValue] = useState();
    const classes = useStyles();

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        props.setTomato({...props.tomato, [name]:value });
    }

    // const handleSelectChange = (event, newValue) => {
    //     setTimeValue(newValue);
    //     props.setTomato({...props.tomato, time:timeValue});
    // }

    const formSubmit = (event) => {
        event.preventDefault();
        // API.addTomato(props.tomato);
        props.setStart(true);
    }

    return(
        <Grid container>
            <Grid item>
                <h2>Create a Tomato and Start Working</h2>
                <form>
                    <Grid container direction="column">
                        <TextField 
                        name="title"
                        id="title"
                        onChange={handleInputChange}
                        value={props.tomato.title}
                        label="Title of Tomato"
                        />
                        <TextField 
                        name="description"
                        id="description"
                        onChange={handleInputChange}
                        value={props.tomato.description}
                        label="Add a description"
                        />
                        <TextField 
                        name="technology"
                        id="techonology"
                        onChange={handleInputChange}
                        value={props.tomato.technology}
                        label="Technology you're working with"
                        />
                        <TextField 
                        name="day"
                        id="day"
                        type="date"
                        onChange={handleInputChange}
                        value={props.tomato.day}
                        />
                        <Typography gutterBottom>
                            Work Time
                        </Typography>
                        <TextField 
                        name="time"
                        id="time"
                        className={classes.select}
                        onChange={handleInputChange}
                        value={props.tomato.time}
                        />
                        <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        onClick={formSubmit}
                        >
                        Start Work
                        </Button>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}

export default TomatoForm;