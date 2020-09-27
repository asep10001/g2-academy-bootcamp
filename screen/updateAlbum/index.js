import React, {Component} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
} from 'react-native';
import {Mybutton, Mytextinput} from '..';
import SQLiteContext from '../../config/sqlite/sqliteContext';
import { connect } from 'react-redux';
import { setAlbumData, updateAlbumData } from '../../actions';

// var db = openDatabase({ name: 'album.db' });

class UpdateAlbumOld extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputId: '',
      albumId: '',
      title: '',
    };
  }

  updateAllStates = (albumId, title) => {
    this.setState({
      albumId,
      title,
    });
  };

  searchAlbum = () => {
    console.log(this.state.inputId);
    this.props.sqlite
      .runQuery('SELECT * FROM album where id = ?', [this.state.inputId])
      .then(([results]) => {
        var len = results.rows.length;
        if (len > 0) {
          let res = results.rows.item(0);
          this.updateAllStates(res.albumId, res.title);
        } else {
          alert('No album found');
          this.updateAllStates('', '');
        }
      });
  };

  updateAlbum = () => {
    console.log(this.state.inputId, this.state.albumId, this.state.title);

    if (!this.state.inputId) {
      alert('Please fill album id');
      return;
    }
    if (!this.state.albumId) {
      alert('Please fill albumId Number');
      return;
    }
    if (!this.state.title) {
      alert('Please fill title');
      return;
    }

    this.props.sqlite
      .runQuery('UPDATE album set albumId=? , title=? where id=?', [
        this.state.albumId,
        this.state.title,
        this.state.inputId,
      ])
      .then(([results]) => {
        console.log('Results', results.rowsAffected);
        if (results.rowsAffected > 0) {
          Alert.alert(
            'Success',
            'album updated successfully',
            [
              {
                text: 'Ok',
                onPress: () => {this.props.navigation.navigate('List Album')}
              },
            ],
            {cancelable: false},
          );
        } else alert('Updation Failed');
      });

    this.props.updateAlbumData({albumId: this.state.albumId, id: this.state.inputId, title: this.state.title}, this.state.inputId)
  };
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{flex: 1}}>
            <ScrollView keyboardShouldPersistTaps="handled">
              <KeyboardAvoidingView
                behavior="padding"
                style={{flex: 1, justifyContent: 'space-between'}}>
                <Mytextinput
                  placeholder="Enter album Id"
                  style={{padding: 10}}
                  onChangeText={(inputid) => this.setState({
                    inputId: inputid
                  })}
                />
                <Mybutton title="Search album" customClick={this.searchAlbum} />
                <Mytextinput
                  placeholder="Enter albumId No"
                  value={'' + this.state.albumId}
                  onChangeText={(albumId) => this.setState({
                    albumId
                  })}
                  maxLength={10}
                  style={{padding: 10}}
                  keyboardType="numeric"
                />
                <Mytextinput
                  value={this.state.title}
                  placeholder="Enter title"
                  onChangeText={(title) => this.setState({
                    title
                  })}
                  maxLength={225}
                  numberOfLines={5}
                  multiline={true}
                  style={{textAlignVertical: 'top', padding: 10}}
                />
                <Mybutton title="Update album" customClick={this.updateAlbum} />
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
  dataAlbumReducer: state.dataAlbum.dataAlbum,
});

const mapDispatchToProps = (dispatch) => ({
  setAlbumData: (data) => {
    return dispatch(setAlbumData(data));
  },
  updateAlbumData: (data, index) => {
    return dispatch(updateAlbumData(data, index))
  }
});

class updateAlbum extends Component {
  render() {
    return (
      <SQLiteContext.Consumer>
        {(sqlite) => <UpdateAlbumOld {...this.props} sqlite={sqlite} />}
      </SQLiteContext.Consumer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(updateAlbum)
