import React, { Component } from 'react';
import {
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
    sendSMSFunction() {
        AsyncStorage.multiGet(['numberOn','numberOff','contentOn', 'contentOff'])
            .then(([[a, numberOn], [b, numberOff], [c, contentOn], [d, contentOff]]) => {

                
            });

        SendSMS.send(666, "+48737909076", "Hey.., this is me!\nGood to see you. Have a nice day.",
            (id, msg)=>{
                ToastAndroid.show(msg, ToastAndroid.SHORT);
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
                    onPress={this.sendSMSFunction.bind(this)}
                />
                <Button
                    title="OFF"
                    color="red"
                    onPress={this.sendSMSFunction.bind(this)}
                />
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
