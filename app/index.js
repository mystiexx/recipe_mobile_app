import { SafeAreaView } from "react-native";
import { Stack } from "expo-router";

import { COLORS } from "../constants/index";
import Welcome from "./welcome";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light }}>
      <Stack.Screen
        options={{
          headerTitle: "",
          headerShadowVisible: false,
        }}
      />

      <Welcome />
    </SafeAreaView>
  );
};

export default Home;
