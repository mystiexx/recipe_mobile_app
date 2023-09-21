import React from "react";
import { View, Text } from "react-native";

const ExtraDetails = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <View
        style={{
          backgroundColor: "rgba(255, 0,0, 0.38)",
          paddingHorizontal: 16,
          paddingVertical: 26,
          borderRadius: 8,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 40 }}>⏰</Text>
        <Text style={{ fontSize: 20, fontWeight: "400" }}>{item?.time}</Text>
      </View>

      <View
        style={{
          backgroundColor: "rgba(135, 206, 235, 0.8)",
          paddingHorizontal: 16,
          paddingVertical: 26,
          borderRadius: 8,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 40 }}>🥣</Text>
        <Text style={{ fontSize: 20, fontWeight: "400" }}>
          {item?.difficulty}
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "rgba(255, 165, 0, 0.48)",
          paddingHorizontal: 16,
          paddingVertical: 26,
          borderRadius: 8,
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 40 }}>🔥</Text>
        <Text style={{ fontSize: 20, fontWeight: "400" }}>
          {item?.calories}
        </Text>
      </View>
    </View>
  );
};

export default ExtraDetails;
