import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';



import genre from "./genre";
import artists from "./artists";



const useStyles = makeStyles((theme) => ({
    root: {

        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240,

    },

    title: {
        color: theme.palette.primary.light,
        margin: theme.spacing.unit,

    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,

    },

}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


export default function MovieFilter() {
    const classes = useStyles();
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        setPersonName(event.target.value);
    };




    return (
        <Card className={classes.root}>
            <label className={classes.title}>FIND MOVIES BY:</label>
            <FormControl className={classes.root}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Movie Name" />
                </form>

                <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-mutiple-checkbox-label">Genres</InputLabel>
                        <Select
                            labelId="demo-mutiple-checkbox-label"
                            id="demo-mutiple-checkbox"
                            multiple
                            value={personName}
                            onChange={handleChange}
                            input={<Input />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {genre.map((genre) => (
                                <MenuItem key={genre.id} value={genre.name}>
                                    <Checkbox checked={personName.indexOf(genre.name) > -1} />
                                    <ListItemText primary={genre.name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                <div>
                    <FormControl className={classes.formControl}>
                        <InputLabel id="demo-mutiple-checkbox-label">Artists</InputLabel>
                        <Select
                            labelId="demo-mutiple-checkbox-label"
                            id="demo-mutiple-checkbox"
                            multiple
                            value={personName}
                            onChange={handleChange}
                            input={<Input />}
                            renderValue={(selected) => selected.join(', ')}
                            MenuProps={MenuProps}
                        >
                            {artists.map((names) => (
                                <MenuItem key={names.first_name} value={names.first_name +" "+ names.last_name}>
                                    <Checkbox checked={personName.indexOf(names.first_name +" "+ names.last_name) > -1} />
                                    <ListItemText primary={names.first_name +" "+ names.last_name} />
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>

                <div>
                    <FormControl className={classes.formControl}>
                        <TextField
                            id="date"
                            label="Release Date Start"
                            type="date"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </FormControl>
                </div>

                <div>
                    <FormControl className={classes.formControl}>
                        <TextField
                            id="date"
                            label="Release Date End"
                            type="date"
                            className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </FormControl>
                </div>
                <div className={classes.root}>
                    <Button className={classes.formControl} variant="contained" color="primary" >Apply</Button>
                </div>


            </FormControl>


        </Card>
    );
} 
