import { StyleSheet } from "react-native";
import Constants from "expo-constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121116",
    paddingTop: Constants.statusBarHeight,
  },

  title: {
    marginVertical: 24,
    alignSelf: "center",

    fontSize: 32,
    fontWeight: "bold",
    color: "#D1D1D3",
  },
});

export default styles;
