import React from 'react';
import { 
    View, 
    ToastAndroid,
    AsyncStorage,
    TextInput,
    Button
} from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Opcje',
    };
    state = {
        numberOn: '',
        numberOff: '',
        contentOn: '',
        contentOff: ''
    }

    componentDidMount() {
        AsyncStorage.multiGet(['numberOn','numberOff','contentOn', 'contentOff'])
            .then(([[a, numberOn], [b, numberOff], [c, contentOn], [d, contentOff]]) => {
                this.setState({
                    numberOn: numberOn ? numberOn : '',
                    numberOff: numberOff ? numberOff : '',
                    contentOn: contentOn ? contentOn : '',
                    contentOff: contentOff ? contentOff : '',
                })
            });
    }

    setData() {
        AsyncStorage.multiSet([
            ['numberOn', this.state.numberOn],
            ['numberOff', this.state.numberOff],
            ['contentOn', this.state.contentOn], 
            ['contentOff', this.state.contentOff]
        ])
            .then(()=>ToastAndroid.show('Zapisano', ToastAndroid.SHORT));
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <TextInput placeholder={'Numer ON'} value={this.state.numberOn} onChangeText={(numberOn)=>this.setState({numberOn})}/>
                <TextInput placeholder={'Numer OFF'} value={this.state.numberOff} onChangeText={(numberOff)=>this.setState({numberOff})}/>
                <TextInput placeholder={'Wiadomosc ON'} value={this.state.contentOn} onChangeText={(contentOn)=>this.setState({contentOn})}/>
                <TextInput placeholder={'Wiadomosc OFF'} value={this.state.contentOff} onChangeText={(contentOff)=>this.setState({contentOff})}/>
                <Button
                    title="Zapisz"
                    onPress={() => this.setData()}
                />
            </View>
        );
    }
}
