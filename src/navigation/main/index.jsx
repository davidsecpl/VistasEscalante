import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {Login, Register, RecoveryPassword} from '../../screens';

const Stack = createNativeStackNavigator();

const MainNavigator = () =>{
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='RecoveryPassword' component={RecoveryPassword}/>
            <Stack.Screen name='Register' component={Register}/>
        </Stack.Navigator>
    );
};

export default MainNavigator;