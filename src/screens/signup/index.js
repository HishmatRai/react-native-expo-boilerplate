import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import ThemeColors from './../../theme/colors'
function Signup() {
    return (
        <View style={style.container}>
            <StatusBar
                barStyle="white"
                hidden={false}
                backgroundColor={ThemeColors.statusBarBgColor}
                translucent={true}
            />
            <Text>iskillers</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: ThemeColors.screensBgColor
    }
})

export default Signup