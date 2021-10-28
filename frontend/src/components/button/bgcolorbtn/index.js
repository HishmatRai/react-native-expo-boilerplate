import * as React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./styles";
export default function BgColorButton(props) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { width: props.buttonWidth },
        { marginTop: props.marginTop },
      ]}
      onPress={props.path}
    >
      <Text style={styles.btn_text}>{props.buttonValue}</Text>
    </TouchableOpacity>
  );
}
