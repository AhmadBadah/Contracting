import React from "react";
import { View, StyleSheet, Text ,Button } from "react-native";

const MainScreen = ({navigation})=>{
    return(
        <View style={styles.container}>
            <Text>الصفحة الرئيسية</Text>
            <Button onPress={()=> navigation.navigate('Detail')}>اذهب للتفاصيل</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default MainScreen;