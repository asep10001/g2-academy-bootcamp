import React, {Component} from 'react';
import {View, RefreshControl} from 'react-native';
import {ListItem, Avatar, Button} from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient';
import {FlatList} from 'react-native-gesture-handler';
import SQLiteContext from '../../config/sqlite/sqliteContext';
import {connect} from 'react-redux';
import {setAlbumData, dividedAlbumData} from '../../actions';
// import Constants from 'expo-constants';

class ListAlbumOld extends Component {
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
      maxList: '',
      albumReducer: [],
    };
  }

  async componentDidMount() {
    // alert(this.props.dividedDataAlbumReducer)
    await fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          album: json,
        });
      });
    // this.insertDataPlaceHolder()
    await this.fecthingSQL();
    if (this.props.dataDividedAlbumReducer !== undefined) {
      this.listingAlbum(this.state.refresh);
    } else {
      alert('harap refresh halaman');
    }
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

  insertDataPlaceHolder = () =>
    // console.log(JSON.stringify(this.state.album))
    this.state.album.map((item, index) => {
      this.props.sqlite.runQuery(
        'INSERT INTO album (id, albumId, title) VALUES (?,?,?)',
        [item.id, item.userId, item.title],
      );
    });

  fecthingSQL = () => {
    let data = [];
    this.props.sqlite.runQuery('SELECT * FROM album', []).then(([results]) => {
      for (let i = 0; i < 100; i++) {
        if (results.rows.item(i) !== undefined) {
          data.push(results.rows.item(i));
        }
      }
      this.props.setAlbumData(data),
        this.setState({
          maxList: this.props.dataAlbumReducer.length,
        }),
        // this.setState({
        //   albumReducer: this.props.dataAlbumReducer,
        // });

        this.props.setBadgeNum(this.props.dividedDataAlbumReducer.length);
    });
  };

  temp = [];

  listingAlbum = (now) => {
    // alert(now)

    if (now === 0) {
      this.props.dataAlbumReducer.map((item, index) => {
        if (item !== undefined && index <= now + 9) {
          this.temp.push(item);
        }
      });
      this.props.setDividedAlbumData(this.temp);
      this.props.setBadgeNum(this.temp.length);
    } else if (now >= 10) {
      // alert(now)
      this.props.dataAlbumReducer.map((item, index) => {
        if (index > now - 1 && index < now + 10) {
          this.temp.push(item);
        }
      });
      alert('loading');
      this.props.setBadgeNum(this.temp.length);
    }
  };

  onRefresh = () => {
    if (this.props.dividedDataAlbumReducer === undefined) {
      return (
        (this.temp = []),
        this.setState({
          refresh: 0,
        }),
        this.listingAlbum(this.state.refresh)
      );
    }
    if (this.props.dividedDataAlbumReducer.length <= this.state.maxList) {
      return (
        setTimeout(() => alert('refreshed'), 1000),
        (this.temp = []),
        this.setState({
          refresh: 0,
        }),
        this.listingAlbum(this.state.refresh)
      );
    } else {
      alert('gagal');
    }
  };

  onEndReached = async () => {
    await this.setState({
      refresh: this.state.refresh + 10,
    });

    if (this.props.dividedDataAlbumReducer.length < this.state.maxList) {
      this.listingAlbum(this.state.refresh);
    } else {
      await setTimeout(() => {
        alert('data maksimal merefresh ulang');
      }, 1000).then(
        (this.temp = []),
        this.setState({
          refresh: 0,
        }),
        this.listingAlbum(this.state.refresh),
      );
    }
  };

  // data = this.props.dataAlbumReducer;
  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.props.dividedDataAlbumReducer}
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

const mapStateToProps = (state) => ({
  dataAlbumReducer: state.dataAlbum.dataAlbum,
  dividedDataAlbumReducer: state.dataAlbum.dividedData,
});

const mapDispatchToProps = (dispatch) => ({
  setAlbumData: (data) => {
    return dispatch(setAlbumData(data));
  },
  setDividedAlbumData: (data) => {
    return dispatch(dividedAlbumData(data));
  },
});

class ListAlbum extends Component {
  render() {
    return (
      <SQLiteContext.Consumer>
        {(sqlite) => <ListAlbumOld {...this.props} sqlite={sqlite} />}
      </SQLiteContext.Consumer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListAlbum);
