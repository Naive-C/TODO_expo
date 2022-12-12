import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { collection, getDocs } from "firebase/firestore"
import { useState, useEffect } from 'react';
import { db } from '../firebaseConfig'

import DoneList from '../Components/DoneList'

const Done = () => { 
    const [done, setDone] = useState([]);

    useEffect(() => {
      ReadDone()
      console.log('render')
    },[])

    const ReadDone = async () => {
      try {
          const data = await getDocs(collection(db, 'done'))
          setDone(data.docs.map(doc => ({...doc.data(), id: doc.id})))
      } catch (error) {
          console.log(error.message)
      }
    }
    
    const onRemove = id => () => {
    };

    return (
        <SafeAreaView style = {styles.safeView}>
            <View style = {styles.card}>
                <DoneList dones = {done} onRemove = {onRemove} ReadDone = {ReadDone}></DoneList>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeView: {
      flex: 1,
    },
    card: {
      backgroundColor: '#fff',
      flex: 1,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      borderBottomStartRadius: 10,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      marginBottom: 10
    },
    header: {
      fontSize: 30, 
      fontWeight: 'bold',
      padding: 30
    }
  });

export default Done