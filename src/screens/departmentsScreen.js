import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const DepartmentsScreen = ({navigation})=>{
    return(
        <View style={styles.container}>
            <Text>الأقسام</Text>
            <Button onPress={()=> navigation.navigate('DetailDep')}>اذهب إلى التفاصيل</Button>
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

export default DepartmentsScreen;