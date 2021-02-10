import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';

function formatTime(totalSeconds) {
    let minutes = Math.floor(totalSeconds/60);
    let seconds = totalSeconds % 60;

    if(minutes < 10) {
        minutes = "0" + minutes.toString();
    }
    else {
        minutes = minutes.toString()
    }
    if(seconds < 10) {
        seconds = "0" + seconds.toString()
    }
    else {
        seconds = seconds.toString()
    }
    return minutes + ":" + seconds;
}

let totalTime;
function Timer(props) {
    const [displayTime, setDisplayTime] = useState(["00:00"]);
    const [runningTimer, setRunningTimer] = useState(false);

    let time = props.tomato.time;

    function runTimer(totalTime) {
        
       setDisplayTime(formatTime(totalTime));
       let timeInterval = setInterval(function() {
            totalTime--;

            if(totalTime === 0) {
                clearInterval(timeInterval);
                props.setStart(false);
                console.log("stop")
            }
            setDisplayTime(formatTime(totalTime));
        }, 100)
    }

    if(props.start === true && runningTimer === false) {
        setRunningTimer(true); 
        totalTime = parseInt(time)*60;
        runTimer(totalTime);
    } 
    if (props.start === false && runningTimer === true) {
        setRunningTimer(false);
    }

    return(
        <Grid container>
            <Grid item>
                <div style={{fontSize: "16vw"}}>
                    {displayTime}
                </div>
            </Grid>
        </Grid>
    )
}

export default Timer;