// const URLINK = 'http://localhost:8081'
const URLINK = "https://mernfullstack01.herokuapp.com";
export default URLINK;


/********** AUTH CHECK  *********/
export const user_login_check = async (userToken,chk_type) =>{
    const userResponse = await fetch(URLINK+'/api/'+chk_type,{
        method :'GET',
        headers:{
            'x-access-token' : userToken
        }
     });
    const userData = await userResponse.json();
    return userData;
}



/********** REGSITER USER  *********/
export const user_register_func = async (nameField,emailField,passField) =>{
    const userRes = await fetch(URLINK+'/api/register',{
        method :'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
            userName: nameField,
            userEmail: emailField,
            userPassword: passField
        })
    });

    const userData = await userRes.json();
    return userData;
}


/********** LOGIN USER  *********/
export const user_login_func = async (emailLogin,passLogin) =>{
    const userRes = await fetch(URLINK+'/api/login',{
        method :'POST',
        headers: {
            'Content-Type' : 'application/json',
        },
        body : JSON.stringify({
            userEmail: emailLogin,
            userPassword: passLogin
        })
    });

    const userData = await userRes.json();
    return userData;
}