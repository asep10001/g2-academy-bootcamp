import React, { Component } from "react";

class Member extends Component {
  constructor(props) {
    super(props);


    this.state = {
      userData: this.props.data,
    };
  }

  makeid = (length) => {
    let result = "";
    let character =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890";
    let characterLength = character.length;

    for (let i = 0; i < length; i++) {
      result += character.charAt(Math.floor(Math.random() * characterLength));
    }
    return result;
    // menyimpan result ke database
  };

//   infoLoaded = async () => {
//     try {
//       await this.showInfo();
//       console.log("berhasil menuggu");
//       return true;
//     } catch {
//       console.log("belum terdaftar semua");
//     }
//   };

  //   updateNamaDanEmail = () => {
  //         this.setState({
  //             name: this.nama,
  //             email: this.mail,
  //       })

  //       console.log(this.state.name)

  //   };

  render() {
    // console.log(this.props.data)
    return (
      <table className="uk-table">
        <caption></caption>
        <thead>
          <tr>
            <th className="uk-text-center">NAMA</th>
            <th className="uk-text-center">EMAIl</th>
          </tr>
        </thead>
        <tbody>
            {this.props.data.map((i) =><tr key={this.makeid(7)}><td key={this.makeid(7)}>{i.name}</td><td key={this.makeid(7)}>{i.email}</td></tr>
            )}

            {/* {this.state.userData.map((mail) => (
            ))} */}
        </tbody>
      </table>
    );
  }
}

export default Member;
