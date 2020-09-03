import { defaultData } from "../reducer/studentsData";
export const saveInputUserData = (
  stateimage,
  statename,
  statemoto,
  stategithub
) => {
  //push ke global dataArray
  defaultData.push({
    img: stateimage,
    name: statename,
    moto: statemoto,
    github: stategithub,
  });

  //debug
  console.log("ini data array" + JSON.stringify(defaultData));

  return (
    // defaultData,
    {
      type: "ADD",
    }
  );
};

export const deleteData = (indeks, closeFunction) => {
  //menyesuaikan indeks array dari dataArray Variable
  //kemudian mensplice dengan indeksNow
  defaultData.splice(indeks, 1);

  //set kembali data di studentsData
  return {
    type: "DELETE",
  };
};

//untuk update data
export const updateUserData = (ind, image, name, moto, github) => {
  //push ke global dataArray
  defaultData[ind] = {
    img: image,
    name: name,
    moto: moto,
    github: github,
  };

  //debug
  console.log("ini data array " + ind + " " + JSON.stringify(defaultData[ind]));

  // kemudian update default array
  return {
    type: "UPDATE",
  };
};
