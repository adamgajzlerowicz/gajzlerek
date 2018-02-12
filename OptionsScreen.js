import React from 'react';
import { 
    View, 
    TextInput,
    Button
} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Opcje',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <TextInput placeholder={'Numer ON'}/>
                <TextInput placeholder={'Numer OFF'}/>
                <TextInput placeholder={'Wiadomosc ON'}/>
                <TextInput placeholder={'Wiadomosc OFF'}/>
            </View>
        );
    }
}
