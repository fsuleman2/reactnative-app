import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View  style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Todo List'/>
        <Button title='Add Todo'/>
      </View>
      <View>
        <Text style="List of Todos..."/>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
 appContainer:{
  padding:50,
  paddingTop:50,
  paddingHorizontal:16
 },
 inputContainer:{
  flex:1,
  flexDirection:'row',
  justifyContent:"space-between",alignItems:"center",paddingBottom:24,borderBottomWidth:1,borderBottomColor:'blue'
 },
 textInput:{
  borderWidth:1,
  borderColor:'#cccccc',
  width:'70%',
  marginRight:5,
  padding:8,
 },
 goals:{
flex:3
 }
});
