import { StyleSheet, Text, View, Image } from 'react-native';

export default function Title() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/images/icons/pokeball.png')} />
            <Text style={styles.title}>Pokédex</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        gap: 16,
        paddingHorizontal: 12,
        paddingTop: 12,
        paddingBottom: 24
    },
    image: {
        width: 24,
        height: 24
    },
    title: {
        fontSize: 24,
        fontWeight: 700,
        color: 'white'
    }
});
