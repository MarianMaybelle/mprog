import React, { useState } from 'react';
import {StyleSheet, Image,Text, View, TextInput, Button} from 'react-native';

export default function App(){
    const [ItemName, setItemName ]= useState('');
    const [Price, setPrice ]= useState('');
    const [Quantity, setQuantity ]= useState('');
    const [display, setdisplay ]= useState('');
    const [list, setlist] = useState('');

    const [names, setNames] = useState([]);

     const addtocart=() => {
        if ( list == 01){
            let nems = names;
            nems.push({
                'itemname' : itemname,
                'price'     : 95,
                'quantity'  : 1,
            });
            setNames (nems);
            setItemName ('');
            setPrice ('');
            setQuantity ('');

        }

     }
    
   /**  const checkout=() =>{
     pass   
    }
        */
    return (
        

        <View style={styles.container}>
            <View style={styles.listItems}>
                <View style={styles.Menu}>
                    <Text style={styles.menutext}>Menu List: </Text>
                </View>
                <View style={styles.code1}>
                    <Image
                    style={styles.coke}
                    source={require('./Mprog/milktea.jpg')}
                    />
                    <Text style={styles.listText}>Code:01 | Item Name:Milk Tea | Price:P95 | Quantity:1</Text>
                </View>
                <View style={styles.code1}>
                    <Image
                    style={styles.coke}
                    source={require('./Mprog/Cake.jpg')}
                    />
                    <Text style={styles.listText}>Code:01 | Item Name:Cake | Price:P95 | Quantity:1</Text>
                </View>
                <View style={styles.code1}>
                    <Image
                    style={styles.coke}
                    source={require('./Mprog/coke.jpg')}
                    />
                    <Text style={styles.listText}>Code:02 | Item Name:Coke| Price:P59 | Quantity:1</Text>
                    
                </View>
                <View style={styles.code1}>
                    <Image
                    style={styles.coke}
                    source={require('./Mprog/Icecream.jpg')}
                    />
                    <Text style={styles.listText}>Code:03 | Item Name:Ice Cream | Price:P120 | Quantity:1</Text>
                </View>
            </View>
            

            <View style={styles.searchItem}>
                <TextInput style={styles.input} placeholder='Search Here..' onChangeText={setlist}/>
                <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
                <Button title='Add To Cart'  onPress={() => addtocart()}/>
                <Button title='Check Out'/>
                </View>
                <View style={style.List}>
                    {
                     names.map((obj, index) => <Text style={{marginTop: 10}} key={index}> {"Item Name: " + obj.itemname + "Price: " + obj.price + "Quantity: " + obj.quantity}  </Text>)
                    }
                </View>
                

                



            </View>
            <View style={styles.checkOut}>

            </View>
        </View>
        




    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50
    },
    listItems:{
        flex:1,
        backgroundColor:'yellow',
        justifyContent:'flex-start',
        //alignItems: 'center'
    },
        Menu:{
           // justifyContent: 'flex-start',
            //justifyContent: 'center',
            alignItems: 'center'
        },

    code1:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'darksalmon', // background sa taas
        justifyContent:'flex-start',
        alignItems: 'center'
    },
    searchItem:{
        flex:1,
        backgroundColor: 'darkgray', // background sa middle
    },
    checkOut:{
        flex:1,
        
    },
    listText:{
        margin: 5,
        fontSize: 11
    },
    coke:{
        width: 50,
        height: 50
        
    },
    input:{
        height:40,
        borderWidth:2,
        
    },
    menutext:{
        fontSize: 20
    }
    List:{
        backgroundColor: 'cyan',
        borderTopWidth: 1,
        marginTop: 65,
        width: 392,
        flex: 4

    }
})