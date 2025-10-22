import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { dimensions } from '../../theme/dimensions.theme'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import MenuButton from '../../components/common/MenuButton'
import { TextInput } from 'react-native-gesture-handler'
import { bg_colors } from '../../theme/color.theme'
import AvailableProduct from '../../components/home/AvailableProduct'

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <MenuButton />
      </View>

      {/* Greetings */}
      <View style={styles.greetings_container}>
        <Text style={styles.greetings_text}>Profile Tab Screen  👋</Text>
      </View>


    </View>
  )
}

export default Profile

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
})