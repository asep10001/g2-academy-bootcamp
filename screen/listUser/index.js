import React, {Component} from 'react';
import {View, Text, AsyncStorage, Button} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient';
import {ScrollView} from 'react-native-gesture-handler';

export class ListUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: true,
      //  userData : []
    };
    // this.data = this.props.userData
  }

  componentDidMount() {
    this.props.userData;
  }

  listingUser = () => {
    let list = [];

    this.props.userData.map((l, ind) => {
      if (ind < 300) {
        console.log(ind, l.id, l.thumbnailUrl);
        list.push(
          <ListItem
            key={ind}
            Component={TouchableScale}
            friction={90} //
            tension={100} // These props are passed to the parent component (here TouchableScale)
            activeScale={0.95} //
            linearGradientProps={{
              colors: ['#FF9800', '#F44336'],
              start: {x: 1, y: 0},
              end: {x: 0.2, y: 0},
            }}
            ViewComponent={LinearGradient} // Only if no expo
          >
            <Avatar rounded source={{uri: l.url}} />
            <ListItem.Content>
              <ListItem.Title style={{color: 'white', fontWeight: 'bold'}}>
                {l.username}
              </ListItem.Title>
              <ListItem.Subtitle style={{color: 'white'}}>
                {l.email}
              </ListItem.Subtitle>
            </ListItem.Content>
            <Button
              title="delete"
              onPress={() => {
                this.props.deleteUser(ind);
                alert('anda telah mendelete ' + l.username);
                this.props.navigation.navigate('List User');
              }}></Button>
            <Button
              title="edit"
              onPress={() => {
                this.props.dataUpdate(ind);
                this.props.navigation.navigate('update');
              }}></Button>
          </ListItem>,
        );
      }
      //   console.log(list)
    });
    return list;
  };
  render() {
    return (
      <ScrollView>
        {this.listingUser()}
        <Button
          onPress={() => {
            this.props.changeLoginStatus(), alert('selamat tinggal ');
          }}
          title="Log Out"
          color="red"
        />
      </ScrollView>
    );
  }
}

export default ListUser;
