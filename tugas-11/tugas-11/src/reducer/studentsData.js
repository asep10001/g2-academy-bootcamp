import "../../node_modules/secure-ls/dist/secure-ls";
import SecureLS from "../../node_modules/secure-ls/dist/secure-ls";
var ls = new SecureLS();

export const defaultData = localStorage.defaultData
  ? ls.get("defaultData")
  : [];

const dataStudents = {
  studentsData: defaultData,
};

const studentsDataReducer = (state = dataStudents, action) => {
  switch (action.type) {
    case "ADD":
      defaultData.push(action.payload);
      ls.set("defaultData", defaultData);
      return {
        studentsData: defaultData,
      };
    case "UPDATE":
      defaultData[action.indeks] = action.payload;
      ls.set("defaultData", defaultData);
      return {
        studentsData: defaultData,
      };
    case "DELETE":
      defaultData.splice(action.payload, 1);
      ls.set("defaultData", defaultData);
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
