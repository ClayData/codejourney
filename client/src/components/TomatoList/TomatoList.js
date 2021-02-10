import React, { useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import TomatoListItem from './TomatoListItem/TomatoListItem';
import API from '../../utils/API';

const flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    width: '90vw',
    overflow: 'auto'
}

function TomatoList(props) {
    const [tomatoes, setTomatoes] = useState([]);

    useEffect(() => {
        const curUser = sessionStorage.getItem("authenticatedUser")
        API.getTomatoes(curUser).then((tomatoes) => {
            console.log(tomatoes.data);
            setTomatoes(tomatoes.data);
        })
    }, [])


    return (
        <div>
            <List style={flexContainer}>
                {
                    tomatoes.map((tomato, i) => {
                        return (
                            <TomatoListItem
                            title={tomato.title}
                            day={tomato.day}
                            time={tomato.time}
                            technology={tomato.technology}
                            description={tomato.description}
                            key={i}
                            />
                        )
                    })
                }
            </List>
        </div>
    )
}

export default TomatoList;