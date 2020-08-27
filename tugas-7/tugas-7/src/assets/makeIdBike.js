export default function makeIdBike(length) {
    let result = "BK";
    let character =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890";
    let characterLength = character.length;

    for (let i = 0; i < length; i++) {
      result += character.charAt(Math.floor(Math.random() * characterLength));
    }
    return result;
    // menyimpan result ke database
}
