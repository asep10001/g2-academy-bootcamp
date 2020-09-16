import React, {Component} from 'react';
import { View, Image, Text, Button } from 'react-native';

export class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
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
            source={require('../../assets/heart.png')}
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
          <Button
            onPress={() =>
              this.props.navigation.navigate( 'Register')
          
            }
            color="pink"
            style={{border: 10}}
            title="Sign Up"
          />
          <Button
            onPress={() =>{
              this.props.navigation.navigate('Log In')
            }
            }
            title="Log In"
          />
                    {/* <Button
                    color='black'
            onPress={() =>{
              this.props.navigation.navigate('List Album')
            }
            }
            title="List Album"
          /> */}
        </View>
      </View>
    );
  }
}

export default HomeScreen;
