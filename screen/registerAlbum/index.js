import React, {Component} from 'react';
import {
  View,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  SafeAreaView,
  Text,
} from 'react-native';
import {Mytextinput, Mybutton} from '..';
import SQLiteContext from '../../config/sqlite/sqliteContext';
import { registerAlbum } from '../../actions/setAlbumData';
import { connect } from 'react-redux';

class RegisterAlbumOld extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 0,
      albumId: 0,
      title: '',
    };
  }

  createUser = () => {
    if (!this.state.id) {
      alert('Please fill id');
      return;
    }
    if (!this.state.albumId) {
      alert('Please fill this.state.');
      return;
    }
    if (!this.state.title) {
      alert('Please fill title');
      return;
    }
    this.props.sqlite
      .runQuery('INSERT INTO album (id, albumId, title) VALUES (?,?,?)', [
        this.state.id,
        this.state.albumId,
        this.state.title,
      ])
      // .then(alert(        this.state.id,
      //   this.state.albumId,
      //   this.state.title,))
      // .then((results)=>console.log('Results', results.rowsAffected))
      .then(alert('berhasil menambahkan data'))
      .catch((err) =>
        console.error('Error register data album: ', err.message),
      )
      .then(([results]) => {
        console.log('Results', results.rowsAffected);
        if (results.rowsAffected > 0) {
          Alert.alert(
            'Success',
            'album registered successfully',
            [
              {
                text: 'Ok',
                onPress: () => {this.props.navigation.navigate('List Album')}
              },
            ],
            {cancelable: false},
          );
        } else alert('Registration Failed');
      });
      this.props.registerAlbum({id : this.state.id,
        albumId : this.state.albumId,
        title : this.state.title}, this.state.albumId + 1)
  };

  //   register_album = () => {
  //     console.log(
  //       typeof parseInt(this.state.id),
  //       this.state.albumId,
  //       this.state.title,
  //     );

  // //     db.transaction(function (tx) {
  // //       tx.executeSql(
  // //         `INSERT INTO album.db (id, albumId, title) VALUES (?,?,?)`,
  // // ,
  //         (tx, results) => {
  //           if (results.rowsAffected >= 0) {
  //             alert(
  //               'Success',
  //               'Album are Registered Successfully',
  //               [
  //                 {
  //                   text: 'Ok',
  //                   onPress: () => navigation.navigate('HomeScreen'),
  //                 },
  //               ],
  //               {cancelable: false},
  //             );
  //           } else alert('Registration Failed');
  //         },
  //       );
  //     });
  // };
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
                  placeholder="Enter id"
                  onChangeText={(id) => {
                    this.setState({
                      id,
                    });
                  }}
                  style={{padding: 10}}
                />
                <Mytextinput
                  placeholder="Enter album Id"
                  onChangeText={(albumId) => {
                    this.setState({
                      albumId,
                    });
                  }}
                  maxLength={10}
                  keyboardType="numeric"
                  style={{padding: 10}}
                />
                <Mytextinput
                  placeholder="Enter Title"
                  onChangeText={(title) => {
                    this.setState({
                      title,
                    });
                  }}
                  maxLength={225}
                  numberOfLines={5}
                  multiline={true}
                  style={{textAlignVertical: 'top', padding: 10}}
                />
                <Mybutton title="Submit" customClick={this.createUser} />
              </KeyboardAvoidingView>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) =>({
  dataAlbumReducer : state.dataAlbum.dataAlbum
})

const mapDispatchToProps = (dispatch) =>({
  registerAlbum : (data) =>{
    return dispatch(registerAlbum(data))
  }
})

class RegisterAlbum extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <SQLiteContext.Consumer>
        {(sqlite) => <RegisterAlbumOld {...this.props} sqlite={sqlite} />}
      </SQLiteContext.Consumer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterAlbum)
