import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
  },

  card: (selected, item) => ({
    backgroundColor: selected === item.category ? COLORS.primary : COLORS.light,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginVertical: 18,
    shadowColor: COLORS.dark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
  }),

  card_text: (selected, item) => ({
    color: selected === item.category ? COLORS.light : COLORS.dark,
  }),
});

export default styles;
