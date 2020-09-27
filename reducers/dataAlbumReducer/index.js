let temp = [];
const dataAlbum = {
  dataAlbum: [],
  dividedData: []
};


const dataAlbumReducer = (state = dataAlbum, action) => {
  console.log(state.dividedData)
  switch (action.type) {
    case 'ADD_ALBUM':
      temp = action.payload;
      return {
        dataAlbum : temp
      };
    case 'REGISTER_ALBUM':
      temp.splice(action.index, 0 , action.payload)
      return{
        dataAlbum : temp
      }
    case 'DIVIDED_ALBUM':
      return (
        dividedData = action.payload,
        {
          dataAlbum: temp,
          dividedData: dividedData,
        }
      );
    case 'UPDATE_ALBUM':
      return (
        (temp[action.index - 1] = action.payload),
        {
          dataAlbum: temp,
          dataUpdate: temp[action.index - 1],
        }
      );
      case 'DELETE_ALBUM':
        return(
          temp.splice(action.index, 1),
          {
            dataAlbum: temp
          }
        )
    default:
      return {
        state,
      };
  }
};

export default dataAlbumReducer;
