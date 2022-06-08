import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


function addValue(){
    console.log("change into adding value to json function");
}
function deleteValue(){
    console.log("change into adelete value from json function");
}

function Add() {
    return (
        <div>
            <TextField style={{margin:"5px"}} id="outlined-basic" label="Name" variant="outlined" />
            <TextField style={{margin:"5px"}} id="outlined-basic" label="IP" variant="outlined" />
            <br/>
            <Select
                style ={{margin:'5px', width:"200px",}}
                value={"VMware"}
                label="HealthStatus"
            >
                <MenuItem value={'VMware'}>VMware</MenuItem>
                <MenuItem value={'Hyper-V'}>Hyper-V</MenuItem>
                <MenuItem value={'Public'}>Public</MenuItem>
            </Select>
            <Select
                style ={{margin:'5px', width:"200px",}}
                value={"Good"}
                label="HealthStatus"
            >
                <MenuItem value={'Good'}>Good</MenuItem>
                <MenuItem value={'Warning'}>Warning</MenuItem>
                <MenuItem value={'Failure'}>Failure</MenuItem>
            </Select>
            <IconButton aria-label="comment">
                <AddCircleOutlineIcon onClick={addValue}/>
            </IconButton>
            <br/>

        </div>
    );
}

function Show() {

    var parsedJSON = require('../data/sites.json');
    const [result, setResult] = React.useState(parsedJSON.sites);

    return (
        <List sx={{
            width: '100%',
            maxWidth: '800px',
            height: '400px',
            overflow: "hidden",
            overflowY: "scroll",
        }}>
            {result.map((item) => (
                <ListItem
                    sx=
                        {{
                            borderBottom: "2px solid #F3F3F3",
                            padding: "5px",
                            margin: "5px",
                            overflowY: "scroll",
                        }}
                    key={item.ip}
                    disableGutters
                    secondaryAction={
                        <IconButton aria-label="delete">
                            <DeleteForeverIcon onClick={deleteValue}/>
                        </IconButton>
                    }
                >

                    <div>
                        <ListItemText primary={`${item.name}`}/>
                        <ListItemText secondary={`IP: ${item.ip}`}/>
                        <ListItemText secondary={`Platform: ${item.platform}`}/>
                        <ListItemText secondary={`HealthStatus: ${item.healthStatus}`}/>
                    </div>
                </ListItem>
            ))}
        </List>
    );
}


export {Add, Show};