import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

const RecoveryPassword = ({navigation})=>{
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Recovery Password</Text>
            <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Login')}}>
                <Text style={styles.textButton}>Aceptar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default RecoveryPassword;