import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import tw from "tailwind-react-native-classnames"
import { ArrowLeftIcon, ChevronRightIcon, MapPinIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/solid'
import DishRow from '../components/DishRow'


const ResturantScreen = () => {

    const navigation = useNavigation();
    const { params: 
        {id, imgUrl, title, rating, genre, address, short_description, dishes, long, lat,},
    } = useRoute()

  return (
    <ScrollView>
        <View style={tw`relative`}>
            <Image 
            source={{ uri: imgUrl }} style={tw`w-full h-56 bg-gray-300 p-4`} />

            <TouchableOpacity onPress={navigation.goBack} 
            style={tw`absolute top-14 left-5 p-2 bg-gray-100 rounded-full`}>
                <ArrowLeftIcon size={20} color="#00CCBB" />
            </TouchableOpacity>
        </View>
        <View style={tw`bg-white`}>
            <View style={tw`px-4 pt-4`}>
                <Text style={tw`text-3xl font-bold`}>{title}</Text>
                <View style={tw`flex-row p-2 my-1`}>
                    <View style={tw`flex-row items-center p-1`}>
                        <StarIcon color="green" opacity={0.5} size={22} />
                        <Text style={tw`text-xs text-gray-500`}>
                        <Text style={tw`text-xs text-green-500`}>{rating}
                        </Text>-{genre}</Text>
                    </View>
                    <View style={tw`flex-row items-center p-1`}>
                        <MapPinIcon color="gray" opacity={0.4} size={22} />
                        <Text style={tw`text-xs text-gray-500`}>
                         Nearby - {address}
                        </Text>
                    </View>
                    

                </View>
                <Text style={tw`text-gray-500 mt-2 pb-4`}>{short_description}</Text>

            </View>
            <TouchableOpacity style={tw`flex-row items-center p-4 
            border-gray-300`}>
                <QuestionMarkCircleIcon color="gray" opacity={0.3} size={20} />
                <Text style={tw`pl-2 flex-1 text-xs font-bold`}>
                    FAQ
                </Text>
                <ChevronRightIcon color="#00CCBB"/>
            </TouchableOpacity>
        </View>

        <View>
            <Text style={tw`px-4 pt-6 mb-3 font-bold text-xl`}>
                Catalog
            </Text>

            {dishes.map(dish=>
                (
                    <DishRow 
                    key={dish.name}
                    id={dish.id}
                    name={dish.name}
                    description={short_description}
                    price={dish.price}
                    image={dish.image} />
                ))}
        </View>
    </ScrollView>
  )
}

export default ResturantScreen

const styles = StyleSheet.create({})