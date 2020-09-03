export let defaultData = [
  {
    img:
      "https://lh3.googleusercontent.com/OUGpBp4h8BirMb1zHrmFXyEtIxEqkLaFD4FkyeL7qSY5aypicd-0XihmUlK7XH8eU-YU4NSGYUaYbavScaht=w2640-h1986-rw",
    name: "Asep Agus Heri Hermawan",
    moto:
      "he who didn't taste the bitterness of learning, will suffer the humiliation of ignorance for the rest of his life.",
    github: "https://github.com/asep10001",
  },
  {
    img:
      "https://lh5.googleusercontent.com/--Gfh02KA0PnDmBQl0XDtfkAAMrda2xy1jOpUU9zOIaqT8dbq4tMyZOdROJiF_-A62foamxz6d-au20lQRXB=w2640-h1986-rw",
    name: "Dian Prasetyo",
    moto: "Sabar, ikhlas, Bersyukur",
    github: "https://github.com/dianprsty",
  },
  {
    img:
      "https://lh4.googleusercontent.com/NaGbPWekLeEbllzWpH4UYzCFnjfwCP-O8BxTfc37i2DVpDcD5j2LE-uMto-TjKfC5pa5FWbNIn84tYv7tsoW=w1366-h624",
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
      "https://lh6.googleusercontent.com/lYSI9LX18lDAZDk1aBL80jXhy6XKbbsw3S6zimjjVMiYMcIT6jqJaYrngHfvgOV-nP4wW8pr_wipWzIDHwL9=w2640-h1986-rw",
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
