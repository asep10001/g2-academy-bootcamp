import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import {View, Text, Button, Alert, RefreshControl} from 'react-native';
import {Card} from 'react-native-elements';
import {connect} from 'react-redux';
import SQLite from 'react-native-sqlite-storage';
import {ScrollView} from 'react-native-gesture-handler';
import {setLogin} from '../actions';
import {Home, Register, Login, Orders} from '../screen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: this.props.statusLogin,
    };
  }

  userLoggedin = () => {
    return (
      <>
        <Drawer.Navigator>
          <Drawer.Screen name="Home">
            {(props) => <Home {...props} />}
          </Drawer.Screen>
          <Drawer.Screen name="Orders" component={Orders} />
        </Drawer.Navigator>
        <Button title="LOG OUT" onPress={() => this.props.setStatusLogin()}></Button>
      </>
    );
  };

  userLoggedout = () => {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home">
          {(props) => <Home {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name="Register" component={Register} />
        <Drawer.Screen name="Log In" component={Login} />
      </Drawer.Navigator>
    );
  };

  render() {
    return (
      <NavigationContainer>
        {this.props.statusLogin ? this.userLoggedout() : this.userLoggedin()}
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  statusLogin: state.auth.isLoggedin,
});

const mapDispatchToProps = (dispatch) => ({
  setStatusLogin: () => dispatch(setLogin()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
