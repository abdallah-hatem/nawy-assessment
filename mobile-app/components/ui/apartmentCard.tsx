import { useNavigation, useRouter } from "expo-router"
import React from "react"
import {
  View,
  Text,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native"

interface CardProps {
  name: string
  description: string
  location: string
  price?: number
  id: number
}

const ApartmentCard: React.FC<CardProps> = ({
  name,
  description,
  location,
  price,
  id,
}) => {
  const router = useRouter()

  const handlePress = () => {
    router.push({ pathname: "apartmentDetails", params: { id } })
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      {/* image */}
      <Image
        source={{
          uri: "https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=600",
        }}
        style={styles.image}
      />

      {/* details */}
      <View style={styles.content}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.location}>{location}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 15,
    marginVertical: 10,
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

export default ApartmentCard
