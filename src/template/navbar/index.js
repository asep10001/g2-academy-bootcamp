import React, { Component } from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { MenuItem, Button, Menu } from "@material-ui/core";
import {
  Admin,
  DaftarDivision,
  DaftarKaryawan,
  UpdateKaryawan,
  Login,
  Home,
  HalamanHRD,
  InputDivisi,
  RowInputKaryawan,
  Member,
  PenempatanDivisi,
  ProfileKaryawan,
  Register,
} from "../../pages";

// import Popper from '@material-ui/core/Popper';
const karyawan = localStorage.karyawan ? JSON.parse(localStorage.karyawan) : [];

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: 0,
      anchorEl: null,
      data: [],
      dataUpdate: [],
      dataShow: [],
      listDivisi: [<MenuItem value="Hokage">Hokage</MenuItem>],
      dataUser: [{
        username: "admin",
        password: "admin"
      },
      {
        username: "user",
        password: "user"
      }
    ]
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  registerUser=(data) =>{
    const list = this.state.dataUser
    list.push(data)
    this.setState({
      dataUser: list
    })
  }
  componentDidMount() {
    this.setState({
      data: karyawan,
    });
  }

  setListDivisi = (data) => {
    this.setState({
      listDivisi: data,
    });
  };
  setData = (data) => {
    this.setState({
      data,
    });
  };

  changeLogInStatus = (newStatus) => {
    this.setState({
      isLogin: newStatus,
    });
  };

  updateClickHandler = (i, data) => {
    const dataList = this.state.data;
    fetch((dataList[i] = data))
      // .then((this.state.dataUpdate = data))
      .then(
        this.setState({
          dataUpdate: data,
        })
      )
      .then(this.setData(dataList))
      .then(console.log(this.state.dataUpdate));
  };

  showClickHandler = (i, data) => {
    this.state.data[i] = data;
    this.setState({
      dataShow: data,
    });
  };

  deleteClickHandler = (ind) => {
    //ini fungsi delete karyawannya
    const dataKaryawan = this.state.data;
    console.log(ind);
    dataKaryawan.splice(ind, 1);
    this.setState({
      data: dataKaryawan,
    });
    // localStorage.setItem("karyawan", JSON.stringify(this.dataKaryawan));
  };

  hideMenu = () => {
    if (this.state.isLogin === 1) {
      return (
        <div>
          <Redirect to="/admin" />

          <MenuItem onClick={() => this.changeLogInStatus(0)}>Logout</MenuItem>
          <Link to="/admin"></Link>
          <Link to="/input_karyawan">
            <MenuItem>Input Karyawan</MenuItem>
          </Link>
          <Link to="/daftar_karyawan">
            <MenuItem>Daftar Karyawan</MenuItem>
          </Link>
          <Link to="/input_divisi">
            <MenuItem>Input Divisi</MenuItem>
          </Link>
          <Link to="/daftar_divisi">
            <MenuItem>Daftar Divisi</MenuItem>
          </Link>
        </div>
      );
    }

    if (this.state.isLogin === 2) {
      return (
        <div>
          <Redirect to="/member" />
          <MenuItem onClick={() => this.changeLogInStatus(0)}>Logout</MenuItem>
          <Link to="/member">
            <MenuItem>Member Karyawan </MenuItem>
          </Link>
        </div>
      );
    }

    if (this.state.isLogin === 0) {
      return (
        <div>
          <Redirect to="/" />
          <Link to="/login">
            <MenuItem>Login</MenuItem>
          </Link>
          <Link to="/register">
            <MenuItem>Register</MenuItem>
          </Link>
        </div>
      );
    }
  };

  handleClick(event) {
    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    // console.info(this.state.dataUpdate)
    return (
      <div>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Open Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          popper="true"
          keepMounted
          open={Boolean(this.state.open)}
          onClose={this.handleClose}
        >
          <Link to="/">
            <MenuItem>Home</MenuItem>
          </Link>
          {this.hideMenu()}
        </Menu>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login">
            <Login
              logInStatus={this.state.isLogin}
              changeLogin={this.changeLogInStatus}
              dataUser = {this.state.dataUser}
            />
          </Route>
          <Route path="/register">
            <Register
              logInStatus={this.state.isLogin}
              changeLogin={this.changeLogInStatus}
              registerUser= {this.registerUser}
              dataUser = {this.state.dataUser}
            />
          </Route>
          <Route path="/karyawan" component={ProfileKaryawan} />
          <Route path="/admin" component={Admin} />
          <Route path="/member" >
            <Member 
            dataKaryawan = {this.state.data}/>
          </Route>
          <Route path="/input_karyawan">
            <RowInputKaryawan
              setData={this.setData}
              listDivisi={this.state.listDivisi}
            />
          </Route>
          <Route path="/input_divisi">
            <InputDivisi
              listDivisi={this.state.listDivisi}
              setListDivisi={this.setListDivisi}
            />
          </Route>
          <Route path="/daftar_karyawan">
            <DaftarKaryawan
              listDivisi={this.state.listDivisi}
              dataKaryawan={this.state.data}
              dataUpdate={this.state.dataUpdate}
              dataShow={this.state.dataShow}
              updateClickHandler={this.updateClickHandler}
              showClickHandler={this.showClickHandler}
              deleteClickHandler={this.deleteClickHandler}
            />
          </Route>

          <Route path="/daftar_divisi">
            <DaftarDivision listDivisi={this.state.listDivisi} />
          </Route>
          <Route path="/update" component={UpdateKaryawan} />
        </Switch>
      </div>
    );
  }
}
export default NavBar;
