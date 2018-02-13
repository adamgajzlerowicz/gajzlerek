import React, { Component } from 'react';
import {
    AsyncStorage,
    ScrollView,    
    AppRegistry,
    StyleSheet,
    Button,
    Text,
    View,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';
import SendSMS from 'react-native-sms-x';

export default class RNSMS extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    // message: {
    // status: string,
    // id: number
    // }
    state = {
        messages: [],
        number: '',
        contentOn: '',
        contentOff: ''
    };

    componentDidMount() {
        AsyncStorage.multiGet(['number','contentOn', 'contentOff', 'messages'])
            .then(([[a, number], [b, contentOn], [c, contentOff], [d, messages]]) => {
                this.setState({
                    number: number ? number : '',
                    contentOn: contentOn ? contentOn : '',
                    contentOff: contentOff ? contentOff : '',
                    messages: messages ? messages : [],
                })
            });
    }

    sendSMSFunction(type) { //ON | OFF
        const id = new Date().valueOf();
        SendSMS.send(id, this.state.number, type === 'ON' ? this.state.contentOn : this.state.contentOff , 
            (id, msg)=>{
                AsyncStorage.getItem('messages').then(res=>{
                    let messages = !res ? [] : JSON.parse(res);
                    messages.push({
                        id, status: msg 
                    })
                    AsyncStorage.setItem('messages', JSON.stringify(messages)).then(()=>{
                        ToastAndroid.show(msg, ToastAndroid.SHORT);
                        this.setState({ messages });
                    })
                })
            }
        );
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>        
                <Button
                    title="Ustawienia"
                    onPress={() => navigate('Options') }
                />
                <Button 
                    title="ON"
                    color="green"
                    onPress={()=>this.sendSMSFunction('ON')}
                />
                <Button
                    title="OFF"
                    color="red"
                    onPress={()=>this.sendSMSFunction('OFF')}
                />
                <ScrollView>
                    <Text>lkjsdf</Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },  
    button: {
        padding: 10,
        borderWidth: .5,
        borderColor: '#bbb',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
