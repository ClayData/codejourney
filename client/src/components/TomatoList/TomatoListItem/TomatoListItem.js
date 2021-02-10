import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import TomatoPNG from '../../../images/tomato.png';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';

const useStyles = makeStyles((theme) => ({
    paper: {
      border: '1px solid',
      padding: theme.spacing(1),
      backgroundColor: theme.palette.background.paper,
    },
    tomato: {
      margin: '2px'
    }
  }));

function TomatoListItem(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

    return (
        <Card className={classes.tomato}>
            <CardContent>
                <button aria-describedby={id} type="button" onClick={handleClick}>
                    <img src={TomatoPNG} alt="Tomato Icon"/>
                </button>
                <Popper id={id} open={open} anchorEl={anchorEl}>
                    <ol className={classes.paper}>
                        <li>{props.title}</li>
                        <li>{props.description}</li>
                        <li>{props.day}</li>
                        <li>{props.time}</li>
                        <li>{props.technology}</li>
                    </ol>
                </Popper>
            </CardContent>
        </Card>
    )
}

export default TomatoListItem;