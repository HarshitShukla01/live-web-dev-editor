import React, { useState } from 'react'
import { getAllProjDetail } from './helperProj';
import TileDeco from './TileDeco';

const ListProject = (props) => {
    
    const getAllData = async () =>{
        const userData =  await getAllProjDetail(props.uniqueid);
        if(userData.status==='ok'){
            if(userData.totaldata) setDataArray(userData.totaldata)
            else setDataArray([]);
        }
        else{
            alert("Authentication Invalid")
        }
    }

    const [dataArray,setDataArray] = useState([]);
    getAllData();

  return (
   <>
     <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1 className="profile_projects_heading">&nbsp;PROJECTS&nbsp;</h1>
      <div className="profile_projects_wrapper">
       {
           dataArray.map((data,index)=>{
              return <TileDeco key={index} data={data}/> 
           })
       }
      </div>
    </div>
   </>
  )
}
/*
display: "flex", flexDirection: "column", alignItems: "center"
*/
export default ListProject