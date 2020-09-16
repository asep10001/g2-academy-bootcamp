import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export class Registrasi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      email: '',
      url: '',
      dataUSer: [],
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
      dataUser: this.data,
    });
  }

  checkAva = () => {
    if (
      this.state.username === '' ||
      this.state.email === '' ||
      this.state.password === '' ||
      this.state.url === ''
    ) {
      return alert('silahkan isi semua field');
    } else {
      for (let i = 0; i < this.data.length; i++) {
        if (
          this.data[i].username === this.state.username ||
          this.data[i].email === this.state.email
        ) {
          return alert(
            'data ini sudah digunakan silahkan gunakan data yang lain',
          );
        }

        continue;
      }
    }

    this.saveData();
    return (
      alert(
        'selamat ' +
          this.state.username +
          ' data anda telah di simpan silahkan log in',
      ),
      this.props.navigation.navigate('Log In')
    );
  };

  saveData = () => {
    this.data.push({
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      url: this.state.url,
    });
    this.setState({
      dataUSer: this.data
    });
  };

  deleteUser(ind) {
    this.data.splice(ind, 1);
    this.setState({
      dataUSer: this.data,
    });
  }

  render() {
    return (
      <>
        <View style={{flex: 1, backgroundColor: '#bcbabd'}}>
          <View
            style={{marginHorizontal: 160, marginTop: 160, marginBottom: 80}}>
            <Image
              source={require('../../assets/red-heart.png')}
              style={{width: 50, height: 50}}
            />
          </View>

          <View>
            <Text style={{color: '#fb5854', marginHorizontal: 40}}>
              USERNAME
            </Text>
            <TextInput
              onChangeText={(username) => {
                this.setState({username});
              }}
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
              onChangeText={(email) => {
                this.setState({email});
              }}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#fb5854',
                marginHorizontal: 40,
              }}
              placeholder="email"
            />
          </View>
          <View>
            <Text style={{color: '#fb5854', marginHorizontal: 40}}>
              PASSWORD
            </Text>
            <TextInput
              onChangeText={(password) => {
                this.setState({password});
              }}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#fb5854',
                marginHorizontal: 40,
              }}
              placeholder="password"
            />
          </View>

          <View>
            <Text style={{color: '#fb5854', marginHorizontal: 40}}>
              URL profile
            </Text>
            <TextInput
              onChangeText={(url) => {
                this.setState({url});
              }}
              style={{
                borderBottomWidth: 1,
                borderBottomColor: '#fb5854',
                marginHorizontal: 40,
              }}
              placeholder="url profile photo"
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
            <TouchableOpacity
              onPress={() => {
                this.checkAva();
                this.props.userDataHandler(this.data);
                // this.props.deleteData(this.deleteUser)
              }}>
              <Text style={{color: '#fb5854'}}>REGISTER</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

export default Registrasi;
