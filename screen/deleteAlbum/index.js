import React, {Component} from 'react';
import {View, Alert, SafeAreaView} from 'react-native';
import Mytextinput from '../text_input';
import Mybutton from '../button';
import SQLiteContext from '../../config/sqlite/sqliteContext';
import { deleteAlbumData } from '../../actions/setAlbumData';
import { connect } from 'react-redux';


class DeletealbumOld extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      updatedData: ''
    };
  }
  deletealbum = () => {
    this.props.sqlite
      .runQuery('DELETE FROM album WHERE id=?', [this.state.id])
      .then(alert('berhasil menghapus data'))
      .catch((err) =>
        console.error('Error menghapus data album: ', err.message),
      )
      .then(([results]) => {
        console.log('Results', results.rowsAffected);
        if (results.rowsAffected > 0) {
          Alert.alert(
            'Success',
            'album deleted successfully',
            [
              {
                text: 'Ok',
                onPress: () => {this.props.navigation.navigate('List Album')}
              },
            ],
            {cancelable: false},
          );
        } else alert('deletion Failed');
      });
      this.props.deleteAlbum(this.state.id)
  };
  

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <View style={{flex: 1}}>
            <Mytextinput
              placeholder="Enter album Id"
              onChangeText={(id) =>
                this.setState({
                  id: id,
                })
              }
              style={{padding: 10}}
            />
            <Mybutton
              title="Delete album"
              customClick={() => this.deletealbum()}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => ({
dataAlbumReducer: state.dataAlbum.dataAlbum
})

const mapDispatchToProps = (dispatch) =>({
  deleteAlbum : (index) => {
    return dispatch(deleteAlbumData(index))
  }
})

class Deletealbum extends Component {
  render() {
    return (
      <SQLiteContext.Consumer>
        {(sqlite) => <DeletealbumOld {...this.props} sqlite={sqlite} />}
      </SQLiteContext.Consumer>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Deletealbum)
