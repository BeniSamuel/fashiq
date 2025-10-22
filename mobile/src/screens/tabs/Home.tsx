import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { dimensions } from '../../theme/dimensions.theme'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import MenuButton from '../../components/common/MenuButton'
import { TextInput } from 'react-native-gesture-handler'
import { bg_colors } from '../../theme/color.theme'
import AvailableProduct from '../../components/home/AvailableProduct'

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <MenuButton />
      </View>

      {/* Greetings */}
      <View style={styles.greetings_container}>
        <Text style={styles.greetings_text}>Good Morning  👋</Text>
      </View>

      <View style={styles.search_container}>
        <TextInput placeholder='Search' style={styles.input_container}/>
        <TouchableOpacity style={styles.button_container}>
          <Ionicons name="search" color={"white"} size={15}/>
        </TouchableOpacity>
      </View>

      <View>
        <AvailableProduct />
      </View>

    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    paddingVertical: dimensions.height * 0.055,
    paddingHorizontal: dimensions.width * 0.035
  },
  greetings_text: {
    fontFamily: "poppins-semibold",
    fontSize: 15
  },
  greetings_container: {
    paddingVertical: dimensions.height * 0.04
  },
  search_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    
  },
  input_container: {
    paddingVertical: dimensions.height * 0.012,
    paddingHorizontal: dimensions.width * 0.035,
    backgroundColor: "rgba(224, 220, 221, 1)",
    width: dimensions.width * 0.8,
    fontFamily: "poppins-medium",
    borderRadius: 10
  },
  button_container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: bg_colors.active_bg,
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 10
  }
})