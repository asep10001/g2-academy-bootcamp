const tempData = [];
const userDataDefault = {
  userData: tempData,
};

const dataReducer = (state = userDataDefault, action) => {
//   console.log(action);
  switch (action.type) {
    case 'ADD':
      tempData.push(action.payload);
      return (
        {
          userData: tempData,
        }
        // console.warn(userDataDefault)
      );

    case 'UPDATE':
      return {
        isLoggedin: !state.isLoggedin,
      };
    default:
      return state;
  }
};

export default dataReducer;
