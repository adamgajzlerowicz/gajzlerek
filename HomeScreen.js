import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';
import SendSMS from 'react-native-sms-x';

export default class RNSMS extends Component {
    sendSMSFunction() {
        SendSMS.send(666, "+48737909076", "Hey.., this is me!\nGood to see you. Have a nice day.",
            (id, msg)=>{
                ToastAndroid.show(msg, ToastAndroid.SHORT);
            }
        );
    }
    sendSMSFunctionBad() {
        SendSMS.send(667, "+48737909", "Hey.., this is me!\nGood to see you. Have a nice day.",
            (id, msg)=>{
                ToastAndroid.show(msg, ToastAndroid.SHORT);
            }
        );
    }
    render() {
        return (
            <View style={styles.container}>        
                <TouchableOpacity style={styles.button} onPress={this.sendSMSFunction.bind(this)}>
                    <Text>Send SMS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.sendSMSFunctionBad.bind(this)}>
                    <Text>Send bad SMS</Text>
                </TouchableOpacity>
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
