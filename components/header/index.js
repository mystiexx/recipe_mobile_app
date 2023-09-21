import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../../constants";

const Header = ({ headerText, headerIcon }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 22, fontWeight: "700" }}>{headerText}</Text>

      <Ionicons name={headerIcon} size={24} color={COLORS.primary} />
    </View>
  );
};

export default Header;
