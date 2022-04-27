import React from 'react'
import './profileDec.css'
import {downloadProjData} from './fileMangerhelp';
import { useNavigate } from 'react-router-dom'
import {deleteProj} from './helperProj';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {Paper} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';


const TileDeco = ({data}) => {
  const Navigate = useNavigate(); 

  const downloadClick = () =>{
    downloadProjData(JSON.stringify(data.htmlfile),JSON.stringify(data.cssfile),JSON.stringify(data.jsfile));
  }
  
  const editorClick = () =>{
    localStorage.setItem('codepen-clone-html',JSON.stringify(data.htmlfile));
    localStorage.setItem('codepen-clone-css',JSON.stringify(data.cssfile));
    localStorage.setItem('codepen-clone-js',JSON.stringify(data.jsfile));
    Navigate('/editor');
  }

  const deleteClick = () =>{
 
    deleteProj(data.name);
  }

  return (
    <> 
        <Paper elevation={5} sx={{ width: '80%',
        borderRadius: 2 ,
        backgroundColor : "aquamarine",
        paddingLeft: 2,
        paddingRight: 2
        }} className="profile_tile_main_paper"> 
        <div className="profile_tile_main_div">
            <div className="profile_tile_main_div_h3">
              <h3>{data.name}</h3>
            </div>
            <div className="profile_tile_main_div__all_btn_div">
              <button onClick={downloadClick} className="profile_tile_main_div_btn" >
                <Tooltip TransitionComponent={Zoom} title="DOWNLOAD" placement="top">
                  <IconButton>
                    <DownloadIcon sx={{ color: "green", fontSize: 30 }} />
                  </IconButton>
                </Tooltip>
              </button>
              <button onClick={editorClick} className="profile_tile_main_div_btn" >
                <Tooltip title="EDIT" TransitionComponent={Zoom} placement="top"> 
                  <IconButton>
                    <EditIcon sx={{ color: "blue", fontSize: 30 }} />
                  </IconButton>
                </Tooltip>
              </button>
              <button onClick={deleteClick} className="profile_tile_main_div_btn" >
                <Tooltip title="DELETE" TransitionComponent={Zoom} placement="top">
                  <IconButton>
                    <DeleteIcon sx={{ color: "red", fontSize: 30 }} />
                  </IconButton>
                </Tooltip>
              </button>
            </div>
        </div>
        </Paper>
        <br></br>
    </>
  )
}

export default TileDeco