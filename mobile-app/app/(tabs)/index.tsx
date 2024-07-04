import { GET_APARTMENTS } from "@/api/apartments"
import { ApiBaseUrl } from "@/api/request"
import ApartmentCard from "@/components/ui/apartmentCard"
import { Appartment } from "@/interface"
import { useEffect, useState } from "react"
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"
import { ActivityIndicator } from "react-native-paper"

export default function HomeScreen() {
  const [data, setData] = useState<Appartment[]>([])

  function getData() {
    GET_APARTMENTS().then((res) => setData(res.result))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={() => getData()} />
      }
      style={{ flex: 1, backgroundColor: "white" }}
    >
      <SafeAreaView>
        {data.length > 0 ? (
          data.map((el, index) => <ApartmentCard key={index} {...el} />)
        ) : (
          <Spinner />
        )}
      </SafeAreaView>
    </ScrollView>
  )

  function Spinner() {
    return <ActivityIndicator style={{ flex: 1 }} size="large" />
  }
}

const styles = StyleSheet.create({})
