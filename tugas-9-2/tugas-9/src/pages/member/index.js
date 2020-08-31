import React, { Component } from "react";
import { Redirect } from "react-router-dom";

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

  cek = () =>{
    if(this.props.statusLogin === false){
      return <Redirect to="/"/>
    }
  }

  render() {
    // console.log(this.props.data)
    return (
      <div id="table-member">
        <table className="uk-table">
          <caption></caption>
          <thead>
            <tr>
              <th className="uk-text-center">NAMA</th>
              <th className="uk-text-center">EMAIl</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map((i, ind) => (
              <tr key={ind}>
                <td>{i.name}</td>
                <td >{i.email}</td>
              </tr>
            ))}

            {/* {this.state.userData.map((mail) => (
            ))} */}
          </tbody>
        </table>
      {this.cek()}
      </div>
    );
  }
}

export default Member;
