import React, {Component} from 'react';
import {View, RefreshControl} from 'react-native';
import {ListItem, Avatar} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient';
import {FlatList} from 'react-native-gesture-handler';
// import Constants from 'expo-constants';

class ListAlbum extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataAlbum: [],
      album: [],
      photos: [],
      detailAlbum: [],
      refresh: 0,
      refreshing: false,
      photoTitle: [],
      photoId: [],
    };

    this.list = [];
  }

  wait = (timeout) => {
    return new Promise((resolve) => {
      setTimeout(resolve, timeout);
    });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          album: json,
        });
      })
      .then(() => this.listingAlbum(this.state.refresh))
      .then(() => {
        this.setState({
          dataAlbum: this.list,
        });
      })
      .then(()=>this.props.setBadgeNum(this.state.dataAlbum.length))
      .catch((error) => {
        console.error(error);
      });

    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          photos: json,
        });
        // console.log(this.defaultData);
      })

      .catch((error) => {
        console.error(error);
      });
  }

  looping = (indeks) => {
    let tempData = [];
    for (let i = 0; i < this.state.photos.length; i++) {
      if (this.state.photos[i].albumId === indeks) {
        tempData.push(this.state.photos[i].url);
      }
      continue;
    }

    return tempData;
  };

  loopingTitlePhoto = (indeks) => {
    let tempData = [];
    for (let i = 0; i < this.state.photos.length; i++) {
      if (this.state.photos[i].albumId === indeks) {
        tempData.push(this.state.photos[i].title);
      }
      continue;
    }

    return tempData;
  };

  loopingIdPhoto = (indeks) => {
    let tempData = [];
    for (let i = 0; i < this.state.photos.length; i++) {
      if (this.state.photos[i].albumId === indeks) {
        tempData.push(this.state.photos[i].id);
      }
      continue;
    }

    return tempData;
  };
  matchAlbum = async (id) => {
    const tempData = await this.looping(id);
    const photoTempData = await this.loopingTitlePhoto(id);
    const idTempData = await this.loopingIdPhoto(id);
    this.setState({
      detailAlbum: tempData,
      photoTitle: photoTempData,
      photoId: idTempData,
    });
  };

  listingAlbum = (now) => {
    if (now === 0) {
      for (let i = now; i < now + 10; i++) {
        this.list.push(this.state.album[i]);
      }
      return this.list;
    } else if (now >= 5) {
      for (let i = now; i < now + 10; i++) {
        this.list.push(this.state.album[i]);
      }
      return this.list;
    }
  };

  onRefresh = async () => {
    this.list = [];
    await this.setState({
      refresh: 0,
    });
    if (this.state.dataAlbum.length < 101) {
      alert('refreshing');
      this.listingAlbum(this.state.refresh);
      this.setState({
        dataAlbum: this.list,
      });
      this.props.setBadgeNum(this.state.dataAlbum.length)
    } else {
      alert('gagal');
    }
  };

  onEndReached = async () => {
    // setTimeout(() => alert('loading'), 1000);
    await this.setState({
      refresh: this.state.refresh + 10,
    });
    if (this.state.dataAlbum.length < 100) {
      alert('loading');
      this.listingAlbum(this.state.refresh);
      this.props.setBadgeNum(this.state.dataAlbum.length)
    } else {
      alert('data maksimal');
    }

    // alert('hi')
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.state.dataAlbum}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <ListItem
              onPress={async () => {
                await this.matchAlbum(item.id);
                this.props.detailUserDataHandler({
                  name: item.title,
                  url: this.state.detailAlbum,
                  title: this.state.photoTitle,
                  id: this.state.photoId,
                });
                this.props.navigation.navigate('Details');
              }}
              Component={TouchableScale}
              friction={1000} //
              tension={200} // These props are passed to the parent component (here TouchableScale)
              activeScale={0} //
              linearGradientProps={{
                colors: ['#FF9800', '#F44336'],
                start: {x: 1, y: 0},
                end: {x: 0.2, y: 0},
              }}
              ViewComponent={LinearGradient}>
              <Avatar
                rounded
                source={{
                  uri:
                    'https://previews.123rf.com/images/nataliaderiabina/nataliaderiabina1702/nataliaderiabina170200056/72026117-old-vinyl-record-and-a-collection-of-albums-.jpg',
                }}
              />
              <ListItem.Content>
                <ListItem.Title>{item.id}</ListItem.Title>
                <ListItem.Subtitle>{item.title}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh}
            />
          }
          onEndReached={this.onEndReached}
          onEndReachedThreshold={0.01}
        />
      </View>
    );
  }
}

export default ListAlbum;
