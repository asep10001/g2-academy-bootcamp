import React, {PureComponent} from 'react';
import {RNCamera} from 'react-native-camera';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {TouchableOpacity, Alert, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { setCameraUrl } from '../../actions';

class Camera extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      takingPic: false,
      // url: '',
    };
  }

  takePicture = async () => {
    if (this.camera && !this.state.takingPic) {
      let options = {
        quality: 0.85,
        fixOrientation: true,
        forceUpOrientation: true,
      };

      this.setState({takingPic: true});

      try {
        const data = await this.camera.takePictureAsync(options);
        Alert.alert('Photo Taken', JSON.stringify(data.uri));
        // this.props.onPicture(data);
        this.setState({
          url: data.uri,
        });
        // this.props.setUrlCamera(data.uri);
        this.props.getCameraData(data.uri);
        this.props.getCameraUrl(data.uri);
      } catch (err) {
        Alert.alert('Error', 'Failed to take picture: ' + (err.message || err));
        return;
      } finally {
        this.setState({takingPic: false});
      }
    }
  };

  render() {
    return (
      <RNCamera
        ref={(ref) => {
          this.camera = ref;
        }}
        captureAudio={false}
        style={{flex: 1}}
        type={RNCamera.Constants.Type.back}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btnAlignment}
          onPress={() => {
            this.takePicture();
          }}>
          <Icon name="camera" size={50} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btnAlignment}
          onPress={() => {
            this.props.navigation.navigate('List Album');
            // this.props.getCameraData(this.state.url);
            // this.props.setUrlCamera(this.state.url)
            // alert(this.state.url);
          }}>
          <Icon name="backward" size={50} color="#fff" />
        </TouchableOpacity>
      </RNCamera>
    );
  }
}

const styles = StyleSheet.create({
  btnAlignment: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});

// const mapStateToProps = (state) => ({
//   urlCamera : state.cameraUrl.url
// });

// const mapDispatchToProps = (dispatch) => ({
//   setUrlCamera: (url)=>dispatch(setCameraUrl(url))
// });

export default Camera;