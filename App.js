/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginButton: false,
      signUpButton: false,
      username: '',
      password: '',
      email: '',
      view: this.home()
    };
  }

login = () => {
    return (
        <View style={{flex: 1, backgroundColor: '#bcbabd'}}>
          <View style={{marginHorizontal: 160, marginTop: 160, marginBottom: 80}}>
            <Image
              source={require('./assets/red-heart.png')}
              style={{width: 50, height: 50}}
            />
          </View>
  
          <View>
            <Text style={{color: '#fb5854', marginHorizontal: 40}}>USERNAME</Text>
            <TextInput
            onChangeText={(username)=> this.setState({username})}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#fb5854',
                marginHorizontal: 40,
              }}
              placeholder="username"
            />
          </View>
          <View>
            <Text style={{color: '#fb5854', marginHorizontal: 40}}>PASSWORD</Text>
            <TextInput
            secureTextEntry={true}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#fb5854',
                marginHorizontal: 40,
              }}
              placeholder="password"
              onChangeText={(password)=>this.setState({password})}
            />
          </View>
  
          <View style={{marginLeft: 210, marginVertical: 10}}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Forgot Password?
            </Text>
          </View>
  
          <View
            style={{
              marginHorizontal: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              height: 40,
              borderColor: 'black',
              borderWidth: 1,
            }}>
            <TouchableOpacity onPress={()=>{alert(this.state.username + "\n" + this.state.password)}}>
              <Text style={{color: '#fb5854'}}>LOG IN</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
  };
  
regristasi = () => {
    return (
      <>
        <View style={{flex: 1, backgroundColor: '#bcbabd'}}>
          <View style={{marginHorizontal: 160, marginTop: 160, marginBottom: 80}}>
            <Image
              source={require('./assets/red-heart.png')}
              style={{width: 50, height: 50}}
            />
          </View>
  
          <View>
            <Text style={{color: '#fb5854', marginHorizontal: 40}}>USERNAME</Text>
            <TextInput
            onChangeText={(username)=>{this.setState({username})}}

              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#fb5854',
                marginHorizontal: 40,
              }}
              placeholder="username"
            />
          </View>
          <View>
            <Text style={{color: '#fb5854', marginHorizontal: 40}}>EMAIL</Text>
            <TextInput
            onChangeText={(email)=>{this.setState({email})}}

              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#fb5854',
                marginHorizontal: 40,
              }}
              placeholder="email"
            />
          </View>
          <View>
            <Text style={{color: '#fb5854', marginHorizontal: 40}}>PASSWORD</Text>
            <TextInput
            onChangeText={(password)=>{this.setState({password})}}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#fb5854',
                marginHorizontal: 40,
              }}
              placeholder="password"
            />
          </View>
  
  
          <View
            style={{
              marginTop: 20,
              marginHorizontal: 40,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ffffff',
              height: 40,
              borderColor: 'black',
              borderWidth: 1,
            }}>
            <TouchableOpacity onPress={()=>{alert('ANDA TELAH TEREGISTER SILAHKAN LOGIN' + this.state.username); this.setState({view: this.home()})}}>
              <Text style={{color: '#fb5854'}}>REGISTER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  home = () => {
    return(
      <View style={{flex: 1, backgroundColor: '#f1584f', display: 'flex'}}>
      <View style={{flex: 1}}>
        <Image
          style={{
            backgroundColor: '#f1584f',
            justifyContent: 'center',
            alignItems: 'center',
            width: 40,
            height: 40,
            marginHorizontal: 160,
            marginTop: 160,
          }}
          source={require('./assets/heart.png')}
        />
        <Text
          style={{
            marginHorizontal: 137,
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
          }}>
          heartLink
        </Text>
      </View>
      <View style={{flex: 1, margin: 40}}>
        {/* <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center', height: 40,}}>
      <Text style={{borderWidth:1, backgroundColor: 'white', borderColor: '#ffffff',  }}>Sign Up</Text>
      </TouchableOpacity> */}
        <Button onPress ={()=> this.setState({
          view: this.regristasi()
        })}color="pink" style={{border: 10}} title="Sign Up" />
        <Button onPress={() => this.setState({
          view: this.login()
        })} title="Log In" />
      </View>
    </View>
    )
  }
  

  render() {
    return (
      <>
      {this.state.view}
      </>
    );
  }
}




export default App;
