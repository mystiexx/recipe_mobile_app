import { View, Text } from "react-native";
import { COLORS } from "../../constants";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const SearchFilter = ({ handleChange }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.light,
        flexDirection: "row",
        paddingVertical: 16,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginVertical: 16,
        shadowColor: COLORS.dark,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 7,
      }}
    >
      <Ionicons name="search-outline" size={24} color={COLORS.primary} />
      <TextInput
        placeholder="Enter your Favorite recipe"
        onChangeText={(text) => handleChange(text)}
        style={{
          paddingLeft: 8,
          fontSize: 16,
          color: COLORS.dark,
          width: "100%",
        }}
      />
    </View>
  );
};

export default SearchFilter;
