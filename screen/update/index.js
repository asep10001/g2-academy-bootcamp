import React, {Component} from 'react';
import {
  View,
  Image,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export class UpdateData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.dataUpdate.username,
      password: this.props.dataUpdate.password,
      email: this.props.dataUpdate.email,
      url: this.props.dataUpdate.url,
      dataUSer: this.data,
    };
  }

  componentDidMount() {
    this.setState({
      dataUser: this.data,
    });
  }

  saveData = () => {
    this.data.push({
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      url: this.state.url,
    });
    this.setState({
      dataUSer: this.data,
    });
  };

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
              value={this.state.username}
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
              value={this.state.email}
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
              value={this.state.password}
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
              value={this.state.url}
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
                this.props.update(this.props.dataUpdate.index, {
                  username: this.state.username,
                  password: this.state.password,
                  email: this.state.email,
                  url: this.state.url,
                });
                this.props.navigation.navigate('List User');
              }}>
              <Text style={{color: '#fb5854'}}>
                UPDATE {this.props.dataUpdate.username}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  }
}

export default UpdateData;
