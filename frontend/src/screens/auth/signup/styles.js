import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
  },
  _heading: {
    color: "red",
    fontFamily: "Roboto-Bold",
    fontSize: hp("5%"),
    textAlign: "center",
  },
  _logo_main: {
    height: hp("20%"),
  },
});
