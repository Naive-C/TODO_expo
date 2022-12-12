import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

const DoneListCell = ({textValue, id, onRemove}) => {
    return (
        <View style = {styles.container}>
            <TouchableOpacity onPressOut = {onRemove(id)}>
                <View style = {styles.completeCircle}>
                    <Icon name="circledowno" size={30} color="#3143e8"/>
                </View>
            </TouchableOpacity>
            <Text style={styles.text}>
              {textValue}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderBottomColor: '#bbb',
      borderBottomWidth: StyleSheet.hairlineWidth,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    text: {
      flex: 5,
      fontWeight: '500',
      fontSize: 18,
      marginVertical: 30,
      width: 100,
    },
    completeCircle: {
      marginRight: 20,
      marginLeft: 20,
    },
  });
  
  export default DoneListCell 