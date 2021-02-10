import React,{useState} from 'react';
import TomatoList from '../../components/TomatoList/TomatoList';
import Timer from '../../components/Timer/Timer';
import { Grid } from '@material-ui/core';
import TomatoForm from '../../components/TomatoForm/TomatoForm';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root:{
        display: "flex",
        width: "100vw"
    },
    list: {
        display: "flex",
        width: "60vw",
        justifyContent: "center",
        alignItems: "center"
    }
})


function Tomato() {
    const curUser = sessionStorage.getItem("authenticatedUser");
    const classes = useStyles();

    const [ tomato, setTomato ] = useState({
        title:"",
        description:"",
        technology:"",
        userEmail: curUser,
        day:"",
        time: 25
    });
    const [ start, setStart ] = useState();
    

    return (
        <Grid container className={classes.root}>
            <Grid container>
                <Grid item>
                    <Timer 
                    tomato={tomato}
                    start={start}
                    setStart={setStart}
                    />
                </Grid>
                <Grid item>
                    <TomatoForm 
                    tomato={tomato}
                    setTomato={setTomato}
                    setStart={setStart}
                    />
                </Grid>
            </Grid>
            <Grid container>
                <Grid item className={classes.list}>
                    <TomatoList />
                </Grid>
            </Grid>
                <Grid item><div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div></Grid>
        </Grid>
        
    )
}
export default Tomato;