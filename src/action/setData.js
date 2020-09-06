export const saveInputUserData = (id,
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
      id : id,
      payload: {id: id, img: stateimage, name: statename, moto: statemoto, github: stategithub}
    }
  );
};

export const deleteData = (indeks, key) => {
  //menyesuaikan indeks array dari dataArray Variable
  //kemudian mensplice dengan indeksNow

  //set kembali data di studentsData
  return {
    type: "DELETE",
    indeks: indeks,
    key: key
  };
};

//untuk update data
export const updateUserData = (ind, id, image, name, moto, github) => {

  // kemudian update default array
  return {
    type: "UPDATE",
    indeks: ind,
    id: id,
    payload: {id:id, img: image, name: name, moto: moto, github: github}
  };
};
