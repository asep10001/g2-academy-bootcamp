const setAddData= (username, password, email, url)=>{
    return{
        type : 'ADD',
        payload: { username, password, email, url}
    }
}

export default setAddData