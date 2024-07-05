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
  const [loading, setLoading] = useState<boolean>(false)

  function getData() {
    setLoading(true)
    GET_APARTMENTS()
      .then((res) => res.result && setData(res.result))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl refreshing={false} onRefresh={() => getData()} />
      }
      style={{ flex: 1, backgroundColor: "white" }}
    >
      {loading && <Spinner />}
      <SafeAreaView>
        {!loading && data.length > 0 ? (
          data.map((el, index) => <ApartmentCard key={index} {...el} />)
        ) : (
          <Text style={{ textAlign: "center" }}>No Data</Text>
        )}
      </SafeAreaView>
    </ScrollView>
  )

  function Spinner() {
    return (
      <View
        style={{
          height: 500,
          justifyContent: "center",
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { display: "flex" },
})
