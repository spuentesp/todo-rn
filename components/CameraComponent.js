import React from 'react';
import {Button, ScrollView} from 'react-native';
import connect from "react-redux/es/connect/connect";
import Camera from "react-native-camera";

class CameraComponent extends React.Component {

    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.loadTodos();
    }

    takePicture() {
        this.camera.capture()
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }

    render() {

        return (
            <ScrollView>
                <Camera
                    ref={cam => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}
                >
                    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>
                        [CAPTURE]
                    </Text>
                </Camera>
                <Button title='Return' onPress={() => this.props.navigation.navigate('TodoApp')}/>
            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        state: state
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(CameraComponent);
