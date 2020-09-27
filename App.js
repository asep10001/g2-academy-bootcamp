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
  Image,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View
            style={{
              marginHorizontal: 17,
              flexDirection: 'row',
              paddingTop: 15,
            }}>
            <View style={{position: 'relative', flex: 1}}>
              <TextInput
                placeholder="What do you want to eat?"
                style={{
                  backgroundColor: 'white',
                  paddingLeft: 45,
                  paddingRight: 20,
                  borderWidth: 1,
                  borderColor: '#e8e8e8',
                  borderRadius: 25,
                  height: 40,
                  fontSize: 13,
                  marginRight: 12,
                }}
              />
              <Image
                source={require('./icon/search.png')}
                style={{position: 'absolute', top: 5, left: 12}}
              />
            </View>
            <View
              style={{
                width: 35,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image source={require('./icon/promo.png')} />
            </View>
          </View>

          {/* gopay */}
          <View style={{marginHorizontal: 17, marginTop: 8}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C5FB8', borderTopLeftRadius: 4, borderTopRightRadius: 4, padding: 14}}>
              <Image source={require('./icon/gopay.png')}></Image>
              <Text style={{fontSize: 17, fontWeight: 'bold', color: 'white'}}>Rp50.000</Text>
            </View>
            <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2f65bd', borderBottomLeftRadius: 4, borderBottomRightRadius: 4}}>
              <View style={{backgroundColor: '', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./icon/pay.png')}/>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}} >Pay</Text>
              </View>
              <View style={{backgroundColor: '', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./icon/nearby.png')}/>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}} >Nearby</Text>
              </View>
              <View style={{backgroundColor: '', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./icon/topup.png')}/>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}} >Top Up</Text>
              </View>
              <View style={{backgroundColor: '', flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image source={require('./icon/more.png')}/>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15}} >More</Text>
              </View>

            </View>
          </View>
          {/* main feature */}
          <View style={{flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 16, marginTop: 18}}>
            <View style={{width: 58, height : 58, borderWidth: 1, borderColor: '#EFEFE', borderRadius: 18}}></View>
            <View style={{width: 58, height : 58, borderWidth: 1, borderColor: '#EFEFE', borderRadius: 18}}></View>
            <View style={{width: 58, height : 58, borderWidth: 1, borderColor: '#EFEFE', borderRadius: 18}}></View>
            <View style={{width: 58, height : 58, borderWidth: 1, borderColor: '#EFEFE', borderRadius: 18}}></View>
            <View style={{width: 58, height : 58, borderWidth: 1, borderColor: '#EFEFE', borderRadius: 18}}></View>
            <View style={{width: 58, height : 58, borderWidth: 1, borderColor: '#EFEFE', borderRadius: 18}}></View>
            <View style={{width: 58, height : 58, borderWidth: 1, borderColor: '#EFEFE', borderRadius: 18}}></View>
            <View style={{width: 58, height : 58, borderWidth: 1, borderColor: '#EFEFE', borderRadius: 18}}></View>
          </View>
        </View>

        <View
          style={{height: 54, flexDirection: 'row', backgroundColor: 'white'}}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('./icon/home.png')}
              style={{width: 26, height: 26}}
            />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Home
            </Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('./icon/order.png')}
              style={{width: 26, height: 26}}
            />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Orders
            </Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('./icon/help.png')}
              style={{width: 26, height: 26}}
            />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Help
            </Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('./icon/inbox.png')}
              style={{width: 26, height: 26}}
            />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Inbox
            </Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              source={require('./icon/account.png')}
              style={{width: 26, height: 26}}
            />
            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Account
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default App;
