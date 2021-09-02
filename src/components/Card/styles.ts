import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
    paddingRight: 8,
    flexDirection: "row",

    backgroundColor: "#212029",
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 8,
    borderColor: "#25242E",
  },

  image: {
    height: 120,
    width: 120,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },

  infoContainer: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },

  infoTitle: {
    fontSize: 16,
    color: "#A2A2A3",
  },

  info: {
    fontSize: 16,
    color: "#D1D1D3",
    width: "100%",
  },
});

export default styles;
