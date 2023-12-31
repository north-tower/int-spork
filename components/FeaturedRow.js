import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import { ScrollView } from 'react-native'
import tw from "tailwind-react-native-classnames"
import ResturantCard from './ResturantCard'

const FeaturedRow = ({id, title, description }) => {
  return (
    <View>
      <View style={tw`mt-4 flex-row items-center justify-between px-4`}>
        <Text style={tw`font-bold text-lg`}>
            {title}
        </Text>
        <ArrowRightIcon color="#00bbcc" />
      </View>
      <Text style={tw`text-xs text-gray-500 px-4`}>{description}</Text>
      <ScrollView horizontal contentContainerStyle={{
        paddingHorizontal: 15,
      }} showsHorizontalScrollIndicator={false} style={tw`pt-4`} >
        <ResturantCard id={13} imgUrl="https://images.unsplash.com/photo-1478606604719-cce9b0e91569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYWRpdGlvbmFsJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
         title="Traditional" rating={4.5} genre="European"  
         short_description="This style draws inspiration from classic European designs and is characterized by ornate details, rich colors, and formal furniture arrangements." 
         dishes={[
          { name: "Sushi", price: 12.99,id: "1",
           image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" },
          { name: "Pizza", price: 9.99,id: "2", image: "https://images.unsplash.com/photo-1622192308862-8032a315dd16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdGVsJTIwZGlzaGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" }
        ]}
          long={10} lat={0} />
         <ResturantCard id={14} imgUrl="https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJ1c3RpYyUyMGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
         title="Rustic" rating={7.5} genre="Earthy"
         short_description=" Rustic design embraces a warm, earthy feel with natural materials, exposed wood, and a cozy, country-inspired atmosphere." 
         dishes={["Thai Rice","Greens"]} long={10} lat={0} />


      </ScrollView>
    </View>
  )
}

export default FeaturedRow

const styles = StyleSheet.create({})