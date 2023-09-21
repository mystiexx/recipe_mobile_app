import { StyleSheet } from "react-native";
import { COLORS } from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 10,
    },

    btn: {
        backgroundColor: COLORS.primary,
        borderRadius: 18,
        paddingVertical: 18,
        width: '80%',
        alignItems: 'center',
    }
})


export default styles