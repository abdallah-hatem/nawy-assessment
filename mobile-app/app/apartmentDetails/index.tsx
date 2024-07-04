import { GET_APARTMENT_BY_ID } from "@/api/apartments"
import { Appartment } from "@/interface"
import { useRoute } from "@react-navigation/native"
import { useLocalSearchParams, useRouter } from "expo-router"
import React, { useEffect, useState } from "react"
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native"
import { ActivityIndicator } from "react-native-paper"

const ApartmentDetails = () => {
  const [data, setData] = useState<Appartment>()

  const { name, location, description, price } = data || {}

  const { id } = useLocalSearchParams()

  function getData() {
    id && GET_APARTMENT_BY_ID(Number(id)).then((res) => setData(res.result))
  }

  useEffect(() => {
    getData()
  }, [id])

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data ? (
        <View style={styles.card}>
          <Image
            source={{
              uri: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600",
            }}
            style={styles.image}
          />
          <View style={styles.content}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.location}>{location}</Text>
            <Text style={styles.description}>{description}</Text>
            {price !== undefined && <Text style={styles.price}>${price}</Text>}
          </View>
        </View>
      ) : (
        <Spinner />
      )}
    </ScrollView>
  )
}

function Spinner() {
  return <ActivityIndicator style={{ flex: 1 }} size="large" />
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "white",
    flex: 1,
  },
  card: {
    margin: 10,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    borderColor: "#ddd", // Add border color
    borderWidth: 1, // Add border width
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  image: {
    width: "100%",
    height: 200,
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
  location: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
    marginTop: 10,
  },
})

export default ApartmentDetails
