import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default StyleSheet.create({
  button: {
    height: hp("8%"),
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  btn_text: {
    color: "#fff",
    fontSize: hp("4%"),
    fontFamily: "Roboto-Bold",
  },
});
