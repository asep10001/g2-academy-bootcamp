const urlCamera = {
  url: '',
};

const urlCameraReducer = (state = urlCamera, action) => {
  switch (action.type) {
    case 'GET_URL':
      return (
        {
          url: action.payload
        }
      );
      default:
          return{
          state
          }
  }
};

export default urlCameraReducer
