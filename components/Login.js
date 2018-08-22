import Button from "./Button";
import CardSection from "./CardSection";
import Card from "./Card";
import {View} from "react-native";


var t = require('tcomb-form-native');
var Form = t.form.Form;
const todoForm = t.struct({
    username: t.String,
    password: t.maybe(t.Password),
});
const options = {};

export class Login extends React.Component {
    constructor(props){
        super(props);
    }
    login(){
        this.onSubmit();
    }
    fingerPrint(){
        this.onSubmit();
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Form ref='form' type={todoForm} options={options} />
                </CardSection>
                <CardSection>
                    <View style={{flex:1 , marginRight:10}} >
                        <Button title='Login' onPress={() => this.props.navigation.navigate('TodoApp')}>
                        </Button>
                    </View>
                    <View style={{flex:1}} >
                        <Button title='Fingerprint' onPress={this.fingerPrint.bind(this)}>
                        </Button>
                    </View>
                </CardSection>
            </Card>
        );
    }
}
