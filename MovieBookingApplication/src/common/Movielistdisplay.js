import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import moviesData from "./moviesData";


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 1000,
        gridGap: 10,


    },

}));


export default function Movielistdisplay() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <GridList cellHeight={350} className={classes.gridList} cols={4}>
                <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>

                </GridListTile>
                {moviesData.map((tile) => (
                    <GridListTile key={tile.poster_url}>
                        <img src={tile.poster_url} alt={tile.title} style={{ cursor: 'pointer' }} />
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>{tile.release_date}</span>}

                        />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}  