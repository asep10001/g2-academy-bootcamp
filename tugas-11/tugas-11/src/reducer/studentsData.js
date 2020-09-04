export let defaultData = [
  {
    img:
      "https://lh5.googleusercontent.com/mB0WrCg_PVCxvGhDk8IsukjDgszJvtv_VrS6zsttIiOBEGNI51t5v7QcgoHc1IAt8dmIKawKBvXTn6fQzphM=w2064-h1986-rw",
    name: "Asep Agus Heri Hermawan",
    moto:
      "he who didn't taste the bitterness of learning, will suffer the humiliation of ignorance for the rest of his life.",
    github: "https://github.com/asep10001",
  },
  {
    img:
      "https://lh3.googleusercontent.com/1vcZOhTDMxmYZAG87iJKa-UhirxmxWimB8BPp7TqBQ40vnh1AcSm4nBLBYHAdE7eAFeia0Aqx9P70KJ4W--K=w2064-h1986-rw",
    name: "Dian Prasetyo",
    moto: "Sabar, ikhlas, Bersyukur",
    github: "https://github.com/dianprsty",
  },
  {
    img:
      "https://lh6.googleusercontent.com/iCnPzwnoFlUuiWq11IXFFX2Try9WO2L3UpP4tNtMRQXq5dKmOux2nBlEJhw5fyJ4VHnAci4HPB4S-fEiR3nR=w1366-h624",
    name: "Shirleen Adriana",
    moto: "Mengajar adalah cara terbaik untuk belajar",
    github: "https://github.com/shirahub",
  },
  {
    img:
      "https://ch3302files.storage.live.com/y4mHeyy0uY1Y-A-Aq1jJu7TW5jJSYlyI1c3yts37BlKu1ACjnkAg-sO8jKx9BFL9ZSeslJoJR9xzukZ2aYcuQmWi55x3EBZJpDr_KfiHoBNdLVOCtuBnLmlBJpfnBFr6n0rxqYRla9h7wpTzR1KNiCju727xWdv8TAk_vErUJ5bq3RxGwxgXRmSXB_jo-DfkvX39lCulb90zy0HRPgbf4cKfQ/pas%20foto%20%28merah%3Bno%20glasses%29.jpg?psid=1&width=390&height=585",
    name: "Pramadhio Ari Putro",
    moto: "Khawatir adalah penyalahgunaan sebuah imajinasi",
    github: "https://github.com/dhioputro",
  },
  {
    img:
      "https://lh3.googleusercontent.com/elZxhk3pHFeJMH6hOdmTN767eZrQ3DRqDnRY06TcKWVy7ZELCvuDIBx3X-yBEbw6MjDL_2rYyGwWlp6uvohr=w2064-h1986-rw",
    name: "Rifki Harbi Awali",
    moto: "Basthotan Fil Ilmi Wal Jismi",
    github: "https://github.com/rifkiharbiawali",
  },
  {
    img:
      "https://media-exp1.licdn.com/dms/image/C5103AQHSe1OxoQuwog/profile-displayphoto-shrink_200_200/0?e=1604534400&v=beta&t=eicpGCTB4aWrT1wHBRmNgZVbyOEeI8NYZ6AbqR9qN8Y",
    name: "Yoseph Mario Wibowo",
    moto: "Ora Et Labora",
    github: "https://github.com/YosephMarioWibowo/",
  },
];

const dataStudents = {
  studentsData: defaultData,
};

const studentsDataReducer = (state = dataStudents, action) => {
  switch (action.type) {
    case "ADD":
      return {
        studentsData: defaultData,
      };
    case "UPDATE":
      return {
        studentsData: defaultData,
      };
    case "DELETE":
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
