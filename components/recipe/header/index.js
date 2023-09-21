import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RecipeHeader = ({ iconRight, iconLeft, link, isLiked, onLike }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TouchableOpacity onPress={link}>
        <Ionicons name={iconLeft} size={28} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={onLike}>
        {isLiked ? (
          <Ionicons name={iconRight} size={28} color="red" />
        ) : (
          <Ionicons name={iconRight} size={28} color="white" />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default RecipeHeader;
