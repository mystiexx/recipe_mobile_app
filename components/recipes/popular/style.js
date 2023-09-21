import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    paddingBottom: 450,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: COLORS.light,
    shadowColor: COLORS.dark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    alignItems: 'center',
    marginVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 16,
    paddingVertical: 26,
  },

  info: {
    flexDirection: 'row',
    marginTop: 8,
  }

});

export default styles;
