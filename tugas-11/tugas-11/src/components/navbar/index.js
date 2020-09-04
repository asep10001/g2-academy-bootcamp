import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavbarBrand from "react-bootstrap/esm/NavbarBrand";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavLink from "react-bootstrap/esm/NavLink";
import { Switch, Route } from "react-router-dom/esm/react-router-dom";
import Home from "../../pages/home";
import InputData from "../../pages/input";
import LogIn from "../../pages/login";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setLogin, setLogout } from "../../action/loginCheck"
import Profile from "../../pages/profile";
import myprofile from "../../pages/profile/myprofile";

export class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: 0,
      userData: ''
    };
  }

  //untuk meset data user
  grabDataUser = (data) => {
    this.setState({
      userData: data
    })
  }
  //set login
  //0 berarti belum masuk
  //1 berarti admin
  //2 berarti user
  setLogin = (status) => {
    this.setState({
      isLogin: status,
    });
  };

  userOn = () => {
    //jika islogin 0 === belum masuk
    if (this.props.statusLogin === 0) {
      return (
          <Nav>
            <Link to="/login">Log In</Link>
          </Nav>
      );
    } else if (this.props.statusLogin === 1) {
      return (
        <>
          <Nav className="mr-auto">
            <Nav>
              <Link to="/input">Input</Link>
            </Nav>
            <NavLink>Edit Data</NavLink>
          </Nav>
          <Nav>
            <Nav>
              <Link to="#" onClick={() => this.setLogin(0)}>Log out</Link>
            </Nav>
          </Nav>
        </>
      );
    } else if (this.props.statusLogin === 2) {
      return (
        <>
          <Nav>
            <Nav.Link>
              <Link to='/profile'>Profile</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/' onClick={this.props.setLogin}>Log out</Link>
            </Nav.Link>
          </Nav>
        </>
      );
    }
  };

  render() {
    //jika islogin 0 === belum masuk

    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
          <NavbarBrand>
            <Link to="/">G2 BOOTCAMP FAMILY</Link>
          </NavbarBrand>
          <NavbarToggle aria-controls="responsive-navbar-nav" />
          <NavbarCollapse id="responsive-navbar-nav">
            {this.userOn()}
          </NavbarCollapse>
        </Navbar>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login">
              <LogIn/>
            </Route>
            <Route path="/input">
              <InputData grabData={this.grabDataUser} />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/studentsprofile/:id" component={myprofile}/>

          </Switch>
      </>
    );
  }
}

// // component dibawah bisa beda file
// export class AboutComponent extends Component {
//   constructor(props) {
//       super(props)
//       this.state = {
//           data: 0
//       }
//   }


//   componentDidMount() {
//     this.setState(
//       {
//         data: this.props.match.params.id
//       })

//   }
//   render() {
//       return (
//         <>
//           <h1>Name: {this.props.dataSiswa[0].name}</h1>
//           <h1>Name: {this.props.match.params.id}</h1>
//           </>
//       )
//   }
// }

const mapStateToProps = (state) => ({
  statusLogin: state.login.isLogin,
  dataSiswa: state.setData.studentsData
})

const mapDispatchToProps = (dispatch) => ({
  setStatusLogin: (data) => dispatch(setLogin(data)),
  setStatusLogOut: () => dispatch(setLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar) ;
