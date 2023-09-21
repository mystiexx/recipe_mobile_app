import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
  container: (color) => ({
    flex: 1,
    backgroundColor: color,
  }),

  card: {
    backgroundColor: COLORS.light,
    flex: 1,
    marginTop: 240,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    alignItems: "center",
    paddingHorizontal: 16,
  },

  image_box: {
    height: 300,
    width: 300,
    position: "absolute",
    top: -150,
  },

  name: {
    marginTop: 160,
    fontSize: 28,
    fontWeight: "bold"
  },

  description: {
    fontSize: 20,
    marginVertical: 16,
  }
});

export default styles;
