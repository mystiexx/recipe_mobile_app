import { View, Text, Image, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/index";
import styles from "./welcome.style";
import { welcome1 } from "../../assets/index";
import { useRouter } from "expo-router";

const Welcome = () => {
    const router = useRouter()
    return (
        <View style={styles.container}>
            <Image source={welcome1} style={{ height: 500, }} />
            <Text
                style={{
                    color: COLORS.primary,
                    textAlign: "center",
                    fontSize: 22,
                    fontWeight: "bold",
                }}
            >
                40k+ Premium Recipes
            </Text>

            <Text
                style={{
                    fontSize: 42,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: COLORS.dark_semi,
                    marginTop: 10,
                    marginBottom: 20,
                }}
            >
                Cook like a Chef
            </Text>

            <TouchableOpacity style={styles.btn} onPress={() => router.push('/recipes')}>
                <Text style={{ color: COLORS.light, fontSize: 18, fontWeight: '700' }}>Let's go</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Welcome;
