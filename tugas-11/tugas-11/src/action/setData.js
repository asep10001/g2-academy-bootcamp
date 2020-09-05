export const saveInputUserData = (
  stateimage,
  statename,
  statemoto,
  stategithub
) => {
  //push ke global dataArray
  // defaultData.push({
  //   img: stateimage,
  //   name: statename,
  //   moto: statemoto,
  //   github: stategithub,
  // });

  //debug
  // console.log("ini data array" + JSON.stringify(defaultData));

  return (
    // defaultData,
    {
      type: "ADD",
      payload: {img: stateimage, name: statename, moto: statemoto, github: stategithub}
    }
  );
};

export const deleteData = (indeks) => {
  //menyesuaikan indeks array dari dataArray Variable
  //kemudian mensplice dengan indeksNow

  //set kembali data di studentsData
  return {
    type: "DELETE",
    payload: indeks
  };
};

//untuk update data
export const updateUserData = (ind, image, name, moto, github) => {

  // kemudian update default array
  return {
    type: "UPDATE",
    indeks: ind,
    payload: {img: image, name: name, moto: moto, github: github}
  };
};
