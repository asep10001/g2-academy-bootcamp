export const setAlbumData = (data) =>{
    return{
        type: 'ADD_ALBUM',
        payload: data
    }
}

export const registerAlbum = (data, index) =>{
    return{
        type: 'REGISTER_ALBUM',
        payload: data,
        index: index
    }
}

export const updateAlbumData = (data, index) =>{
    return{
        type: 'UPDATE_ALBUM',
        payload: data,
        index : index
    }
}

export const deleteAlbumData = (index)=>{
    return{
        type: 'DELETE_ALBUM',
        index: index
    }
}
export const dividedAlbumData = (data) =>{
    return{
        type: 'DIVIDED_ALBUM',
        payload: data
    }
}

