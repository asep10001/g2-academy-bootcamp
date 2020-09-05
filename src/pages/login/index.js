import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "../../../node_modules/react-bootstrap/Form";
import Button from "../../../node_modules/react-bootstrap/Button";
import Container from "../../../node_modules/react-bootstrap/Container";
import { setLogin, setLogout } from "../../action/loginCheck";
import { FirebaseContext } from "../../config/firebase";

export class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      dataUser: [],
    };
  }

  componentDidMount() {
    this.setState({
      dataUser: localStorage.user ? JSON.parse(localStorage.user) : [],
    });

    //debug
    console.log("ini data " + this.state.dataUser);
  }

  onchangeName = (val) => {
    this.setState({
      username: val.target.value,
    });

    //debug
    console.log("ini username " + this.state.username);
  };

  onchangePassword = (val) => {
    this.setState({
      password: val.target.value,
    });
    //debug
    console.log("ini password " + this.state.password);
  };
  //ambil props statusLogin

  //check dan rubah status login

  checkUser = (e) => {
    e.preventDefault();
    //looping data user
    this.state.dataUser.forEach((user, ind) => {
      console.log(
        user.name,
        this.state.username,
        user.password,
        this.state.password
      );
      if (
        this.state.name === user.username &&
        this.state.password === user.password
      ) {
        //cek admin atau user
        if (user.name === "admin") {
          this.props.setStatusLogin(1);
          alert("selamat datang  admin");

          console.log(this.props.statusLogin);
          return;
        } else {
          this.props.setStatusLogin(2);
          alert("selamat datang user");
          return;
        }
      }
    });
  };



  doLogin = () =>{
    const {username, password} = this.state
    this.props.firebase.oginFirebaseUser(username, password)
        .then(user => {
          console.log(user)
          alert("loginsukses")
        })
        .catch(err =>{
          console.warn(err);
          alert(err.message)
        })
  }

  doLogout = () =>{
    this.props.firebase.logoutFirebaseUser()
  }

  componentDidMount(){
    this.props.firebase.auth.onAuthStateChanged(auth => {
      console.log("auth: ", auth)
    })
  }

  render() {
    // if (this.props.statusLogin === 0) return <Redirect to="/login" />;
    return (
      <div>
        <Container>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>User Name</Form.Label>
              <Form.Control
                onChange={this.onchangeName}
                type="email"
                placeholder="Enter username"
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                onChange={this.onchangePassword}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            {/* this.checkUser(); */}
            <Button onClick={()=>{this.doLogin()}} variant="warning" type="submit">
              Submit
            </Button>
            <Button onClick={()=>{this.doLogout()}} variant="warning" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  statusLogin: state.login.isLogin,
});

const mapDispatchToProps = (dispatch) => ({
  setStatusLogin: (data) => dispatch(setLogin(data)),
  setStatusLogOut: () => dispatch(setLogout()),
});

class LogInFirebase extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <FirebaseContext.Consumer>
        {firebase => <LogIn firebase={firebase} {...this.props}/>}
      </FirebaseContext.Consumer>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LogInFirebase);
