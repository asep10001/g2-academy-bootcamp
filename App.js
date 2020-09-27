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
  updateAlbum,
  Deletealbum,
} from './screen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import {View, Text, Button, Alert, RefreshControl} from 'react-native';
import {Card} from 'react-native-elements';
import {connect} from 'react-redux';
import {setAddData, setCameraUrl} from './actions';
import RegisterAlbum from './screen/registerAlbum';
import SQLite from 'react-native-sqlite-storage';
import Camera from './components/camera';
import {ScrollView} from 'react-native-gesture-handler';

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
      isLogin: this.props.statusLogin,
      dataForUpdate: {},
      modalDataUrl: [],
      modalDataTitle: [],
      refreshing: false,
      badgeNum: 0,
      dataNow: '',
      updateCamera: '',
      imageUrlCamera: '',
      modalDataIndex: 0
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

  async componentDidMount() {
    await this.setState({
      userData: this.props.dataUser,
    });
    // this.props.addData(
    //   'asep',
    //   '123',
    //   'asep@asep.com',
    //   'https://storage.googleapis.com/stateless-campfire-pictures/2019/05/e4629f8e-defaultuserimage-15579880664l8pc.jpg',
    // );
    // console.info('ini dari userdata ' + this.props.dataUser);
    // this.createAlbum()
  }

  userDataHandler = (data) => {
    this.setState({
      userData: data,
    });
  };

  setBadgeNum = (data) => {
    this.setState({
      badgeNum: data,
    });
  };
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

  modalData = (url, title, index) => {
    this.setState({
      modalDataUrl: url,
      modalDataTitle: title,
      modalDataIndex: index
    });
  };

  getCameraData = (data) => {
    this.setState({
      modalDataUrl: data,
      modalDataTitle: data,
    });
    // Alert.alert('Dari camera', (this.state.modalDataUrl).toString())
    // this.props.setUrlCamera(data);
    // Alert.alert('Dari camera', this.props.urlCamera.toString());
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
        <Stack.Screen name="register album">
          {(props) => <RegisterAlbum {...props} />}
        </Stack.Screen>
        <Stack.Screen name="update album" component={updateAlbum} />
        <Stack.Screen name="delete album" component={Deletealbum} />
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

  onRefresh = async () => {
    await this.state.modalDataUrl;
    this.listingCard(this.state.modalDataTitle, this.state.modalDataUrl);
  };

  componentDidUpdate() {
    // alert('dari component update ' + this.state.modalDataUrl)
    // ModalScreen = ({navigation}) => {
    //   return (
    //     <ScrollView
    //       refreshControl={
    //         <RefreshControl
    //           refreshing={this.state.refreshing}
    //           onRefresh={this.onRefresh}
    //         />
    //       }>
    //       <Card>
    //         {this.listingCard(this.state.modalDataTitle, this.state.modalDataUrl)}
    //         <Card.Divider />
    //         <Text
    //           style={{
    //             fontWeight: 'bold',
    //             fontSize: 30,
    //             color: 'purple',
    //             marginBottom: 10,
    //             textAlign: 'center',
    //           }}>
    //           INI MERUPAKAN HALAMAN MODAL UNTUK PHOTO{' '}
    //           {this.state.modalDataTitle.toUpperCase()}
    //         </Text>
    //         <Button title="GO BACK" onPress={navigation.goBack}></Button>
    //         <Button
    //           title="CAMERA"
    //           onPress={() => navigation.navigate('camera')}></Button>
    //       </Card>
    //     </ScrollView>
    //   );
    // };
  }

  setUrl = (data) => {
    this.setState({
      imageUrlCamera: data
    })
  };
  ModalScreen = ({navigation}) => {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={async () => {
              await this.setState({
                modalDataUrl: this.state.modalDataUrl,
              }),
                alert(
                  'ini camera url ' + JSON.stringify(this.state.modalDataUrl),
                );
            }}
          />
        }>
            <Card>
            <Card.Title>{this.state.modalDataTitle}</Card.Title>
            <Card.Divider />
            <Card.Image source={{uri: this.state.modalDataUrl}}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: 'green',
                  marginBottom: 10,
                  textAlign: 'center',
                }}>
                {this.state.modalDataTitle}
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
              INI MERUPAKAN HALAMAN MODAL UNTUK PHOTO {this.state.modalDataUrl}
            </Text>
            <Button title="GO BACK" onPress={navigation.goBack}></Button>
            <Button
              title="CAMERA"
              onPress={() => navigation.navigate('camera')}></Button>
          </Card>
      </ScrollView>
    );
  };

  setDataNow = (data) => {
    this.setState({
      dataNow: data,
    });
    alert(JSON.stringify(this.state.dataNow));
  };

  SettingsStackScreen = () => {
    return (
      <SettingsStack.Navigator>
        <Stack.Screen name="List Album">
          {(props) => (
            <ListAlbum
              {...props}
              detailUserDataHandler={this.detailUserDataHandler}
              setBadgeNum={this.setBadgeNum}
              dataNow={this.state.dataNow}
              setDataNow={this.setDataNow}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Details">
          {(props) => (
            <DetailUSer
              {...props}
              userData={this.state.detailUser}
              modalData={this.modalData}
              imgCamera={this.state.imageUrlCamera}
              indexCamera={this.state.modalDataIndex}
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="Modal" component={this.ModalScreen} />
        <Stack.Screen name="camera">
          {(props) => <Camera {...props} getCameraData={this.getCameraData} getCameraUrl={this.setUrl}/>}
        </Stack.Screen>
      </SettingsStack.Navigator>
    );
  };

  Register = () => {
    return (
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register">
          {(props) => (
            <Registrasi {...props} userDataHandler={this.userDataHandler} />
          )}
        </Stack.Screen>
      </Stack.Navigator>
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
        {this.props.statusLogin ? (
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
              // mode="modal"
              screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                  let iconName;

                  if (route.name === 'User Settings') {
                    iconName = focused ? 'user' : 'user';
                  } else if (route.name === 'Albums') {
                    iconName = focused ? 'picture' : 'picture';
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
              <Tab.Screen
                name="Albums"
                component={this.SettingsStackScreen}
                options={{tabBarBadge: this.state.badgeNum}}
              />
            </Tab.Navigator>
          </NavigationContainer>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  statusLogin: state.auth.isLoggedin,
  dataUser: state.data.userData,
  urlCamera: JSON.stringify(state.cameraUrl),
});

const mapDispatchToProps = (dispatch) => ({
  setStatusLogin: (data) => dispatch(setLogin(data)),
  addData: (a, b, c, d) => dispatch(setAddData(a, b, c, d)),
  setUrlCamera: (url) => dispatch(setCameraUrl(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
