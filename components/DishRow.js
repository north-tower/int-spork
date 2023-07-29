import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames"
import { useNavigation } from '@react-navigation/native'


const DishRow = ( {id, name, description, price, image }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={tw`bg-white border p-4 border-gray-200 border-b-0`}
    onPress={() => {
      navigation.navigate("WebScreen");
  }}

    >
        <View style={tw`flex-row`}>
          <View style={tw`flex-1 pr-2`}>
            <Text style={tw`text-lg text-black mb-1`}>
                {name}
            </Text>
            <Text style={tw`text-gray-400`}>
                {description}
            </Text>
            <Text style={tw`text-gray-400 mt-2`}>{price}</Text>
          </View>
        
        <View>
          <Image source={{ uri: image }}   
          style={tw`h-20 w-20 bg-gray-300 p-4 `}  />
        </View>
        </View>

    </TouchableOpacity>
  )
}

export default DishRow

const styles = StyleSheet.create({})