import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Button, Image, Card, Divider, Icon} from 'react-native-elements';
import React from 'react';



const  ProductionOrder = ({navigation}) => {
    return (
     <ScrollView style={styles.container}>
       <Divider color='white'width={1.5}/>

       <Card containerStyle={{borderRadius:10, marginBottom:10}}>

        <View style={{flex:1, flexDirection:'row'}}>

        <Icon
          style={{marginTop:10}}
          name='filetext1'
          type='antdesign'
          size={40}
          
         />
        <Card containerStyle={styles.cardstyle}
        
        />
        </View>

        <View style={{flex:1, flexDirection:'row',  marginLeft:40}}>



        <Card containerStyle={styles.cardstyle}
        
        />
        </View>

        <View style={{flex:1, flexDirection:'row'}}>
        <Icon
          style={{marginTop:10}}
          name='inbox'
          type='antdesign'
          size={40}
          
         />
        <Card containerStyle={styles.cardstyle}
        
        />
        </View>

        <View style={{flex:1, flexDirection:'row'}}>
        <Icon
          style={{marginTop:10}}
          name='calendar'
          type='antdesign'
          size={40}
          
         />
        <Card containerStyle={styles.cardstyle}
        
        />
        </View>

        <View style={{flex:1, flexDirection:'row',marginLeft:40}}>
       
        <Card containerStyle={styles.cardstyle}
        
        />
        </View>
        
        <View style={{flex:1, flexDirection:'row'}}>
        <Icon
          style={{marginTop:10}}
          name='edit'
          type='antdesign'
          size={40}
          
         />
        <Card containerStyle={styles.cardstyle}
        
        />

        </View>

        <Button
        raised
        title= "Production Confirm"
        onPress={() => navigation.navigate('ProductionConfirm')}
        containerStyle = {{marginVertical: 10, marginHorizontal:10}}  
        buttonStyle={{backgroundColor:'green', borderRadius:7}}
        titleStyle={{fontSize:20}}
      />

       </Card>

     </ScrollView>
    );
  }


  const styles = StyleSheet.create ({
    container:{
      flex: 1,
      padding:15,
      backgroundColor: '#FFB23E'
    },
    stext:{
      color: 'black',
      fontWeight: 'bold',
      fontSize: 30,
      marginBottom:20,
      marginLeft:'auto', marginRight:'auto'
    },
    textshow:{
      fontSize:20, 
      color:'black'
    },
    cardstyle:{
      borderRadius:5, 
      marginBottom:10, 
      backgroundColor:'#EEF1F3',
      flex:1
    }
  });

export default  ProductionOrder
