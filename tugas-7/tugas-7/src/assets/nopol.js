const nopol = ()=> {
    let result = "";
    let charAlfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let charAngka = "01234567890";
    let charAlfaLength = charAlfa.length;
    let charAngkaLength = charAngka.length;

    result += charAlfa.charAt(Math.floor(Math.random() * charAlfaLength));

    for (let i = 0; i < 4; i++) {
      result += charAngka.charAt(Math.floor(Math.random() * charAngkaLength));
    }
    for (let i = 0; i < 3; i++) {
      result += charAlfa.charAt(Math.floor(Math.random() * charAlfaLength));
    }
    return result;
    // menyimpan result ke database
  }

  export default nopol;