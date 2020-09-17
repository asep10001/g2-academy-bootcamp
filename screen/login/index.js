import React, {Component} from 'react';
import {View, Image, Text, Button, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {setLogin} from '../../actions/login';

export class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    this.props.userData;
  }

  isLogin = () => {
    if (this.state.username === '' || this.state.password === '') {
      return alert('sialhkan isi semua field');
    } else {
      for (let i = 0; i < this.props.userData.length; i++) {
        if (this.props.userData[i].username === this.state.username) {
          return (
            this.props.setStatusLogin('PRESSED'),
            alert('anda berhasil log in ' + this.state.username))
            // this.props.navigation.navigate('User Settings')

        }
        continue;
      }
    }
    return alert('silahkan cek kembali username anda');
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#bcbabd'}}>
        <View style={{marginHorizontal: 160, marginTop: 160, marginBottom: 80}}>
          <Image
            source={require('../../assets/red-heart.png')}
            style={{width: 50, height: 50}}
          />
        </View>

        <View>
          <Text style={{color: '#fb5854', marginHorizontal: 40}}>USERNAME</Text>
          <TextInput
            onChangeText={(username) => this.setState({username})}
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
            onChangeText={(password) => this.setState({password})}
          />
        </View>

        <View style={{marginLeft: 210, marginVertical: 10}}>
          <TouchableOpacity
            onPress={() =>
              alert(
                'An email with instruction to reset your password has been sent to your email address! Please check your Inbox or your Spam/Junk E-Mail as Well!',
              )
            }>
            <Text style={{color: 'white', fontWeight: 'bold'}}>
              Forgot Password?
            </Text>
          </TouchableOpacity>
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
          <TouchableOpacity
            onPress={() => {
              this.isLogin();
            }}>
            <Text style={{color: '#fb5854'}}>LOG IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  statusLogin: state.auth.isLoggedin,
  // dataSiswa: state.setData.studentsData
});

const mapDispatchToProps = (dispatch) => ({
  setStatusLogin: (data) => {
    console.log(data);
    return dispatch(setLogin(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
