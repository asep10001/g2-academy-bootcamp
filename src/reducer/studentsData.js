import "../../node_modules/secure-ls/dist/secure-ls";
import SecureLS from "secure-ls/dist/secure-ls";
import "firebase/database";
import Firebase from "../config/firebase/firebase";

var ls = new SecureLS();
var ref = new Firebase();
export let defaultData = localStorage.defaultData
  ? ls.get("defaultData")
  : [];

// export let defaultData = [];

const tunggu = async () => {
  await ref.readStudent().then(() => {
    if (ref.data !== null) {
      return (
        (defaultData = ref.data),
        // alert("ini dari default data " +JSON.stringify(defaultData)),
        ls.set("defaultData", defaultData)
      );
    }
  });
};

tunggu();

const dataStudents = {
  studentsData: defaultData,
};

// for (let prop in defaultData){
//   alert(defaultData[prop].name)
// }

// alert("ini dari datastudents " +typeof(dataStudents.studentsData))

const studentsDataReducer = (state = dataStudents, action) => {
  switch (action.type) {
    case "ADD":
      defaultData.push(action.payload)
      ls.set("defaultData", defaultData)
      // alert(typeof ls.get("defaultData"))
      ref.inputStudents(action.id, action.payload);
      return {
        studentsData: defaultData,
      };
    case "UPDATE":
      defaultData[action.indeks] = action.payload;
      ls.set("defaultData", defaultData);
      ref.updateStudent(action.id, action.payload)
      // alert("ini dari update "+ action.id, action.payload)
      return {
        studentsData: defaultData,
      };
    case "DELETE":
      defaultData.splice(action.indeks, 1);
      ls.set("defaultData", defaultData);
      ref.deleteStudent(action.key)
      // alert("ini action key delete " + action.key)
      return {
        studentsData: defaultData,
      };
    default:
      return {
        studentsData: defaultData,
      };
  }
};

export default studentsDataReducer;
