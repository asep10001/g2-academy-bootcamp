/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';

import {
  DetailUSer,
  HomeScreen,
  LogIn,
  Registrasi,
  ListUser,
  ListAlbum,
  UpdateData,
} from './screen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import {View, Text, Button} from 'react-native';
import {Card} from 'react-native-elements';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const SettingsStack = createStackNavigator();
const Tab = createBottomTabNavigator();
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: '',
      detailUser: '',
      isLogin: true,
      dataForUpdate: {},
      modalData: [],
      badgeNum: 0
    };
    this.data = [
      {
        username: 'asep',
        password: '123',
        email: 'asep@asep.com',
        url:
          'https://storage.googleapis.com/stateless-campfire-pictures/2019/05/e4629f8e-defaultuserimage-15579880664l8pc.jpg',
      },
    ];
  }

  componentDidMount() {
    this.setState({
      userData: this.data,
    });
  }
  userDataHandler = (data) => {
    this.setState({
      userData: data,
    });
  };

  setBadgeNum = (data) =>{
    this.setState({
      badgeNum: data
    })
  }
  dataUserupdate = (ind) => {
    this.setState({
      dataForUpdate: {
        username: this.state.userData[ind].username,
        password: this.state.userData[ind].password,
        email: this.state.userData[ind].email,
        url: this.state.userData[ind].url,
        index: ind,
      },
    });
  };
  deleteData = (ind) => {
    this.state.userData.splice(ind, 1);
    alert(JSON.stringify(this.state.userData));
    this.setState({
      userData: this.state.userData,
    });
  };

  updateData = (ind, data) => {
    let tempData = this.state.userData;
    tempData[ind] = data;
    this.setState({
      userData: tempData,
    });

    alert(
      JSON.stringify('data ' + tempData[ind].username + ' berhasil di update'),
    );
  };
  detailUserDataHandler = (data) => {
    this.setState({
      detailUser: data,
    });
  };

  changeLoginStatus = () => {
    this.setState({
      isLogin: !this.state.isLogin,
    });
  };

  // componentDidUpdate(){
  //   if(this.state.username !== ''){
  //     return alert('udah update')

  //   }
  // }

  modalData = (url, title) => {
    this.setState({
      modalData: {url: url, title: title},
    });
  };
  HomeStackScreen = () => {
    return (
      <HomeStack.Navigator>
        <Stack.Screen name="List User">
          {(props) => (
            <ListUser
              {...props}
              userData={this.state.userData}
              deleteUser={this.deleteData}
              dataUpdate={this.dataUserupdate}
              changeLoginStatus={this.changeLoginStatus}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="update">
          {(props) => (
            <UpdateData
              {...props}
              dataUpdate={this.state.dataForUpdate}
              update={this.updateData}
            />
          )}
        </Stack.Screen>
      </HomeStack.Navigator>
    );
  };
  ModalScreen = ({navigation}) => {
    return (
      <Card>
        <Card.Title>{this.state.modalData.title}</Card.Title>
        <Card.Divider />
        <Card.Image source={{uri: this.state.modalData.url}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: 'green',
              marginBottom: 10,
              textAlign: 'center',
            }}>
            {this.state.modalData.title}
          </Text>
        </Card.Image>
        <Card.Divider />
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 30,
            color: 'purple',
            marginBottom: 10,
            textAlign: 'center',
          }}>
          INI MERUPAKAN HALAMAN MODAL UNTUK PHOTO{' '}
          {this.state.modalData.title.toUpperCase()}
        </Text>
        <Button title="GO BACK" onPress={navigation.goBack}></Button>
      </Card>
    );
  };

  SettingsStackScreen = () => {
    return (
      <SettingsStack.Navigator>
        <Stack.Screen name="List Album">
          {(props) => (
            <ListAlbum
              {...props}
              detailUserDataHandler={this.detailUserDataHandler}
              setBadgeNum = {this.setBadgeNum}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Details">
          {(props) => (
            <DetailUSer
              {...props}
              userData={this.state.detailUser}
              modalData={this.modalData}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Modal" component={this.ModalScreen} />
      </SettingsStack.Navigator>
    );
  };

  Register = () => {
    return (
      // <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register">
          {(props) => (
            <Registrasi {...props} userDataHandler={this.userDataHandler} />
          )}
        </Stack.Screen>
      // </Stack.Navigator>
    );
  };

  LogIn = () => {
    return (
      <Stack.Navigator initialRouteName="Log In">
        <Stack.Screen name="Log In">
          {(props) => (
            <LogIn
              {...props}
              userData={this.state.userData}
              changeLoginStatus={this.changeLoginStatus}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    );
  };

  render() {
    return (
      <>
        {this.state.isLogin ? (
          <>
            <NavigationContainer>
              <Drawer.Navigator>
                <Drawer.Screen name="Home">
                  {(props) => <HomeScreen {...props} />}
                </Drawer.Screen>
                <Drawer.Screen name="Register" component={this.Register} />
                <Drawer.Screen name="Log In" component={this.LogIn} />
              </Drawer.Navigator>
            </NavigationContainer>
            {/* <NavigationContainer>
              
                  </NavigationContainer>*/}
          </>
        ) : (
          <NavigationContainer>
            <Tab.Navigator
              mode="modal"
              screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                  let iconName;

                  if (route.name === 'User Settings') {
                    iconName = focused ? "user" : "user";
                  } else if (route.name === 'Albums') {
                    iconName = focused ? "picture" : "picture";
                  }

                  // You can return any component that you like here!
                  return <Icon name={iconName} size={size} color={color} />;
                },
              })}>
              <Tab.Screen
                name="User Settings"
                component={this.HomeStackScreen}
                options={{tabBarBadge: this.state.userData.length}}
              />
              <Tab.Screen name="Albums" component={this.SettingsStackScreen} options={{tabBarBadge: this.state.badgeNum}}/>
            </Tab.Navigator>
          </NavigationContainer>
        )}
      </>
    );
  }
}

export default App;
