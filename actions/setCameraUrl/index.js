const setCameraUrl= (url)=>{
    return{
        type : 'GET_URL',
        payload: url
    }
}

export default setCameraUrl