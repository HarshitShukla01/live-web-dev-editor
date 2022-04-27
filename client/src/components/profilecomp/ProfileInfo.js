import React from 'react'
import { Paper,Grid } from '@mui/material';
import profilepic from './profilepic3.png'
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import EmailIcon from '@mui/icons-material/Email';
import BackgroundPage from './BackgroundPage';

const ProfileInfo = ({profileName,uniqueid}) => {
  return (
    <> 
      <BackgroundPage/>
     <div>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1 className="profile_projects_heading">&nbsp;PROFILE&nbsp;</h1>
      </div>
      <div className="profile_data_main_div">
        <Paper elevation={5} className="profile_data_div_paper" >
            <Paper elevation={5} className="profile_data_div_paper_photo">
                <img src={profilepic} className="profile_data_div_paper_photo_img" />
            </Paper>
            <br></br>
            <Grid container className="profile_data_div_paper_grid">
              <Grid item xs={4} className="profile_data_div_paper_grid_icon">
                <AccountBoxIcon sx={{fontSize:30, color: "blue"}} />
              </Grid>
              <Grid item xs={8} className="profile_data_div_paper_grid_h2" >
                <h2> {profileName}</h2>
              </Grid>
            </Grid>

            <Grid container className="profile_data_div_paper_grid">
              <Grid item xs={4} className="profile_data_div_paper_grid_icon">
                <EmailIcon sx={{fontSize:30, color: "blue"}} />
              </Grid>
              <Grid item xs={8} className="profile_data_div_paper_grid_h2">
                <h2> {uniqueid}</h2>
              </Grid>
            </Grid>
        </Paper>
      </div>
    </div>
    </>
  )
}

export default ProfileInfo