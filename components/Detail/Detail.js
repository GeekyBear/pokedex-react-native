import React, { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet, Dimensions } from 'react-native';
import axios from 'axios';

export default function Detail({ navigation, route }) {
    const { pokemonId } = route.params;
    const [pokemonData, setPokemonData] = useState({})

    useEffect(() => {
        async function fetchData() {
            try {
                const fulldata = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);

                if (fulldata) {
                    setPokemonData(fulldata)
                }
            } catch (error) {
                console.log(error)
            }
        };
        fetchData();
    }, [])

    return (
        <View style={styles.container}>
            {pokemonData !== undefined
                ? <View>
                    <Image style={styles.pokeball} source={require('../../assets/images/pokeball.png')} />
                    <View style={styles.title}>
                        <Text>Name</Text>
                        <Text>Number</Text>
                    </View>
                    <View style={styles.empty}>
                        <Image style={styles.pokeImage} source={require('../../assets/images/bulbasaur.png')} />
                    </View>
                    <View style={styles.info}>
                        {
                            pokemonData.data !== undefined ? pokemonData.data.types.map(({ slot, type, url }) =>
                                <Text>{type.name}</Text>
                            ) : null
                        }
                        <Text style={styles.sectionTitle}>About</Text>
                        <View style={styles.about}>
                            <View style={{ width: '30%', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
                                    <Image source={require('../../assets/images/vectors/weight.png')} />
                                    <Text>6.9 kg</Text>
                                </View>
                                <Text>Weight</Text>
                            </View>
                            <Text>|</Text>
                            <View style={{ width: '30%', alignItems: 'center', }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
                                    <Image source={require('../../assets/images/vectors/height.png')} />
                                    <Text>0,7 m</Text>
                                </View>
                                <Text>Height</Text>
                            </View>
                            <Text>|</Text>
                            <View style={{ width: '30%', alignItems: 'center' }}>
                                <View>
                                    <Text>Chlorophyll
                                        Overgrow</Text>
                                </View>
                                <Text>Moves</Text>
                            </View>
                        </View>
                        <Text style={styles.description}>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.</Text>
                        <Text style={styles.sectionTitle}>Base Stats</Text>
                    </View>
                </View>
                : <Text>Loading...</Text>}
        </View>
    )
}

const screenWidth = Dimensions.get('screen').width;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#74CB48',
        alignItems: 'center',
        width: screenWidth,
    },
    pokeball: {
        position: 'absolute',
        width: screenWidth * .6,
        height: screenWidth * .6,
        right: 8,
        top: 8,
    },
    title: {
        flexDirection: 'row',
        width: screenWidth,
        height: '10%',
    },
    empty: {
        width: screenWidth,
        height: '20%',
        alignItems: 'center',
        zIndex: 2
    },
    pokeImage: {
        position: 'absolute',
        top: 20,
        width: 200,
        height: 200
    },
    info: {
        width: screenWidth * .96,
        height: '69%',
        backgroundColor: '#fff',
        borderRadius: 8,
        paddingTop: 56,
        alignItems: 'center',
        gap: 16
    },
    about: {
        flexDirection: 'row',
    },
    sectionTitle: {
        color: '#74CB48',
        fontWeight: 700,
        fontSize: 16,
    },
    description: {
        minHeight: 60,
        textAlignVertical: 'center'
    }

});
