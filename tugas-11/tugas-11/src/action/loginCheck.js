export const setLogin = (data) => {
  if (data === 1) {
    return {
      type: 1,
    };
  } else if(data === 2){
      return {
          type: 2
      }
  }
};

export const setLogout = () => {
  return {
    type: 0,
  };
};
