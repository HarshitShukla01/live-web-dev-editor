const URLINK = 'http://localhost:8081'


export const getAllProjDetail = async (uniqueid) =>{
    const userResponse = await fetch(URLINK+'/api/totaldata',{
        method :'GET',
        headers:{
            'x-access-token' : uniqueid
        }
     });
    const userData = await userResponse.json();
    return userData;
}

const getNamechk = async (uniqueid,projname) =>{
    const userResponse = await fetch(URLINK+'/api/uniquedata',{
        method :'GET',
        headers:{
            'x-access-token' : uniqueid,
            'projname' : projname
        }
     });
    const userData = await userResponse.json();
    return userData;
}

export const save_proj_func = async (uniqueid,projname,html,css,js) =>{
    
    const namechk = await getNamechk(uniqueid,projname);
    
    if(namechk.totaldata.length !== 0){
        alert('Project name already exist')
        return;
    }

    const userRes = await fetch(URLINK+'/api/filldata',{
        method :'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
            uniqueid: uniqueid,
            projname: projname,
            htmlfile: html,
            cssfile: css,
            jsfile: js,
        })
    });

    const userData = await userRes.json();
    
    if(userData.status === "ok"){
        alert("Project Saved Successfully");
    }else{
        alert(userData.status);
    }
}

export const saveInstantData = (projname) =>{
    const html1 = localStorage.getItem('codepen-clone-html');
    const css1 = localStorage.getItem('codepen-clone-css');
    const js1 = localStorage.getItem('codepen-clone-js');
    const uniqueid = localStorage.getItem('uniqueidval');

    const html = JSON.parse(html1);
    const css = JSON.parse(css1);
    let js = JSON.parse(js1);
    if(!js) js="//no js content";

    save_proj_func(uniqueid,projname,html,css,js);
}

export const deleteProj = async (projname) =>{
    
    const uniqueid = localStorage.getItem('uniqueidval');
    
    const userRes = await fetch(URLINK+'/api/deletedataval',{
        method :'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
            uniqueid: uniqueid,
            projname: projname

        })
    });

    const userData = await userRes.json();
    
    if(userData.status === "ok"){
        alert("Project Deleted Successfully");
    }else{
        alert(userData.status);
    }
}