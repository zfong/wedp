import React from "react";
import {Grid,Paper,Avatar,TextField, Button} from '@mui/material'
import background from './image1.jpg';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import AddLocationOutlinedIcon from '@mui/icons-material/AddLocationOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
const Login=()=>{
    const paperStyle={padding :20,height :'70vh',width:280,margin:'20px auto'}
    const avatarStyle={backgroundColor:'green'}
    const imageStyle={width: '100px',height:'100px'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align ='center'>
                <img src={background} style={imageStyle} alt="Background"/>
                <h1>Ray</h1>
                <Avatar style={avatarStyle} ><EmailOutlinedIcon fontSize="small"/></Avatar>
                <h4>ray@gmail.com</h4>
                <Avatar style={avatarStyle} ><AddLocationOutlinedIcon fontSize="small"/></Avatar>
                <h4>taipai</h4>
                <Avatar style={avatarStyle} ><LinkOutlinedIcon fontSize="small" /></Avatar>
                <h4>https:/</h4>
                </Grid>
                <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="follow me" />
                </FormGroup>
                <Button type='submit' color='primary' fullWidth variant="contained">Edit profile</Button>
            </Paper>
        </Grid>
    )
}
export default Login