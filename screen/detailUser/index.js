import React, {Component} from 'react';
import {View, Text, Button, RefreshControl} from 'react-native';
import {Card, Icon, ListItem} from 'react-native-elements';
import {
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native-gesture-handler';

export class DetailUSer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pagination: 0,
      data: [],
      refreshing: false,
    };
  }

  componentDidMount() {
    this.props.userData;
  }
  makeList = () => {
    let list = [];
    for (
      let i = this.state.pagination;
      i < this.props.userData.url.length;
      i++
    ) {
      if (i < this.state.pagination + 10) {
        list.push(
          <TouchableOpacity
            key={i}
            onPress={() => {
              this.props.modalData(
                this.props.userData.url[i],
                this.props.userData.title[i],
              );
              this.props.navigation.navigate('Modal')
            }}>
            <Card>
              <Card.Title>{this.props.userData.name}</Card.Title>
              <Card.Divider />
              <Card.Image source={{uri: this.props.userData.url[i]}}>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: 'green',
                    marginBottom: 10,
                  }}>
                  {this.props.userData.title[i]}
                </Text>
              </Card.Image>
            </Card>
          </TouchableOpacity>,
        );
      }
    }

    return list;
  };

  render() {
    return (
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.refreshing}
            onRefresh={() => alert('hi')}
          />
        }>
        {/* {alert(JSON.stringify(this.props.userData))}
        <FlatList
          data={this.props.userData}
          renderItem={({item}) => {
            <ListItem>
              <Card>
                <Card.Title>{item.name}</Card.Title>
                <Card.Divider />
                {item.map((data, index) => (
                  <Card.Image source={{uri: data.url[index]}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                        color: 'green',
                        marginBottom: 10,
                      }}>
                      {data.title[index]}
                    </Text>
                  </Card.Image>
                ))}
              </Card>
              ;
            </ListItem>;
          }}
        /> */}

        {this.makeList()}
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Button
              color="black"
              onPress={() => {
                if (this.state.pagination > 10) {
                  this.setState({pagination: this.state.pagination - 10});
                  this.makeList();
                } else alert('ga bisa lagi peaaaa!!!');
              }}
              title="previous"></Button>
          </View>
          <View style={{flex: 1}}>
            <Button
              color="red"
              onPress={() => {
                if (this.state.pagination !== this.props.userData.url.length) {
                  this.setState({pagination: this.state.pagination + 10});
                  this.makeList();
                } else {
                  alert('udah maksimal nih previous aja yaaaa!!!');
                }
              }}
              title="next"></Button>
          </View>
        </View>
        <Button
          onPress={() => {
            this.props.navigation.navigate('List Album');
          }}
          icon={<Icon name="code" color="#ffffff" />}
          buttonStyle={{
            borderRadius: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
          }}
          title="BACK TO LIST ALBUM"
        />
      </ScrollView>
    );
  }
}

export default DetailUSer;
