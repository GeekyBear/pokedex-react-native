import { StyleSheet, Text, View, Image, FlatList, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const numColumns = 3;
const gap = 10;

const availableSpace = screenWidth - (numColumns - 1) * gap - 24;
const itemSize = availableSpace / numColumns;

export default function Pokelist() {
    return (
        <FlatList
            style={{ marginHorizontal: 12, backgroundColor: '#fff', marginTop: 24, marginBottom: 12, borderRadius: 8, }}
            contentContainerStyle={{ gap }}
            columnWrapperStyle={{ gap }}
            numColumns={numColumns}
            data={[
                { key: 'Bulbasaur', index: 1 },
                { key: 'Charmander' },
                { key: 'Squirtle' },
                { key: 'Butterfree' },
                { key: 'Pikachu' },
                { key: 'Gastly' },
                { key: 'Ditto' },
                { key: 'Mew' },
                { key: 'Aron' },
                { key: 'Bulbasaur' },
                { key: 'Charmander' },
                { key: 'Bulbasaur' },
                { key: 'Charmander' },
                { key: 'Squirtle' },
                { key: 'Butterfree' },
                { key: 'Pikachu' },
                { key: 'Gastly' },
                { key: 'Ditto' },
                { key: 'Mew' },
                { key: 'Aron' },
                { key: 'Bulbasaur' },
                { key: 'Charmander' },
                { key: 'Bulbasaur' },
                { key: 'Charmander' },
                { key: 'Squirtle' },
                { key: 'Butterfree' },
                { key: 'Pikachu' },
                { key: 'Gastly' },
                { key: 'Ditto' },
                { key: 'Mew' },
                { key: 'Aron' },
                { key: 'Bulbasaur' },
                { key: 'Charmander' },
            ]}
            renderItem={({ item }) =>
                <View style={{
                    height: itemSize,
                    width: itemSize,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 1,
                    },
                    shadowOpacity: 0.20,
                    shadowRadius: 1.41,
                    elevation: 6,
                    borderRadius: 8,
                    backgroundColor: '#fff',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 8,
                }}>
                    <Text style={{ position: 'absolute', right: 12, top: 4 }}>#{item.index}</Text>
                    <Image style={{ position: 'absolute', width: 72, height: 72, zIndex: 2 }} source={require('../../assets/images/bulbasaur.png')} />
                    <View style={{ position: 'absolute', bottom: 0, width: '100%', height: '40%', backgroundColor: '#EFEFEF', borderRadius: 8, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text>{item.key}</Text>
                    </View>
                </View>}
        />
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DC0A2D',
        alignItems: 'center',
    },
    row: {
        flex: 1,
        justifyContent: "space-around", backgroundColor: 'blue'
    }
});
