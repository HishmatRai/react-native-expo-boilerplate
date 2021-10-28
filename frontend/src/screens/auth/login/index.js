import React from "react";
import styles from "./styles";
import { View, Text, StatusBar } from "react-native";
import BgColorButton from "../../../components/button/bgcolorbtn";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Logo from "./../../../../assets/imagse/Logo.svg";
function Login(props) {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="white"
        hidden={false}
        backgroundColor="red"
        translucent={false}
      />
      <Text style={styles._heading}>Login In</Text>
      <View style={styles._logo_main}>
        <Logo width={"100%"} height={"100%"} fill={"#000"} />
      </View>
      <View style={{ alignSelf: "center" }}>
        <BgColorButton
          buttonValue="Sign Up"
          buttonWidth={wp("80%")}
          marginTop={hp("30%")}
          path={() => props.navigation.navigate("Signup")}
        />
      </View>
    </View>
  );
}
export default Login;
