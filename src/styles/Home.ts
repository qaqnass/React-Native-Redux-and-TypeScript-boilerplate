import { StyleSheet } from "react-native";
import { BACKGROUND } from './Colors'
import { PAD2, PAD6 } from "./Spacing";

export const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: BACKGROUND
  },
  title: {
    textAlign: "center",
    paddingTop: PAD2,
    paddingBottom: PAD2,
  },
  language: {
    textAlign: "center",
    marginBottom: PAD6,
  }

});