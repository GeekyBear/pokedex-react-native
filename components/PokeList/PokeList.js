import axios from 'axios';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const numColumns = 3;
const gap = 10;

const availableSpace = screenWidth - (numColumns - 1) * gap - 24;
const itemSize = availableSpace / numColumns;

export default function Pokelist(data) {
    const { count, next, previous, results } = data.pokeData;
    const [pokeData, setPokeData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            if (results) {
                let endpoints = results.map((pokemon) => pokemon.url);

                try {
                    const fulldata = await axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
                        (data) => data
                    );

                    if (fulldata) {
                        const pokemons = fulldata.map(({ data }) => data)
                        setPokeData(pokemons)
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        };
        fetchData();
    }, [count])


    return (
        <FlatList
            style={{ marginHorizontal: 12, backgroundColor: '#fff', marginTop: 24, marginBottom: 12, borderRadius: 8, }}
            contentContainerStyle={{ gap }}
            columnWrapperStyle={{ gap }}
            numColumns={numColumns}
            data={pokeData}
            keyExtractor={item => item.id}
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
                    <Text style={{ position: 'absolute', right: 12, top: 4 }}>#{item.id}</Text>
                    <Image style={{ position: 'absolute', width: '90%', height: '90%', zIndex: 2 }}
                        source={{
                            uri: item.sprites.front_default
                        }} />
                    <View style={{ position: 'absolute', bottom: 0, width: '100%', height: '40%', backgroundColor: '#EFEFEF', borderRadius: 8, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text>{item.name}</Text>
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
