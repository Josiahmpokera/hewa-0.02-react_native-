import * as React from 'react';
import {View, Text, ImageBackground} from 'react-native';



function NavigatorScreen(navigation) {
    return (
        <ImageBackground
        style={{
            flex: 1
        }}
        source={require('../../assets/logo.png')}
        >
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
            style={{fontSize: 26, fontWeight: 'bold', }}
            onPress={() => navigation.navigate('Home')}
            >
                    Navigator Screen
            </Text>
        </View>
        </ImageBackground>
    );
}

export default NavigatorScreen;
