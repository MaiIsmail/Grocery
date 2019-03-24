import React , {Component} from 'react';
import {FlatList, Image, Text, TouchableOpacity, StyleSheet, View} from "react-native";
import {Button} from "../components/Button";

const items = [
    {   title: 'طماطم' ,
        uri: 'https://www.khodarji.com/riyadh/ar/media/catalog/product/cache/4/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/r/green-house-tomato-01.jpg',
        price: '2 شيكل'
    },
    {   title: 'خيار' ,
        uri: 'https://www.khodarji.com/riyadh/ar/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/f/i/file_1.png',
        price: '3 شيكل'
    }
];

const data = [
    {title:'1/2'},{title:'1'},{title:'2'},{title:'3'},{title:'4'},{title:'5'},{title:'6'},
];

class Cart extends Component{

    static navigationOptions = ({navigation},)=>({
        headerTitle: <Text style={styles.screenTitle}>سلتي الشرائية</Text> ,
        headerRight:
            <TouchableOpacity onPress ={()=>navigation.navigate('cart')} >
                <Image style={styles.headerRight} source={require('../Images/bag.png')}/>
            </TouchableOpacity>
        ,
        headerLeft:
            <TouchableOpacity onPress={() =>navigation.openDrawer()}>
                <Image style={styles.headerLeft} source={require('../Images/menu.png')}/>
            </TouchableOpacity>
        ,
    });

    renderData= ({ item, index }) => {
        return (
            <TouchableOpacity disable>
                <View style={styles.itemViewActive} >
                    <Text style={styles.txtTitle}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    renderItem = ({ item, index }) => {
        return (
            <View style={styles.container }>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Image style={styles.itemImg} source={{uri:item.uri}}/>
                <FlatList
                    style={styles.flatlist}
                    horizontal={true}
                    data={data}
                    renderItem={this.renderData}
                    keyExtractor={(item,index)=>index}
                />
            </View>
        );
    };

    render(){
        return(
            <View>
                <FlatList
                    data={items}
                    numColumns={2}
                    renderItem={this.renderItem}
                    keyExtractor={(item,index)=>index}
                />
                <Text style={styles.textCon}>
                    <Text style={styles.total}> المجموع </Text>
                    <Text style={styles.span}>5 شيكل </Text>
                </Text>
                <View style={styles.deliveryBtn}>
                    <Button online title='توصيل'/>
                </View>
            </View>

        );
    };

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        borderWidth:1,
        borderColor:'#eaeaea',
    },
    itemTitle: {
        color: '#000',
        alignSelf:'center',
        fontSize:20,
        fontWeight:'bold',
        marginTop:10,
    },
    itemImg: {
        width:120,
        height:120,
        alignSelf:'center',
    },
    itemPrice: {
        color: '#000',
        alignSelf:'center',
        fontSize:14,
        marginBottom:20,
    },
    screenTitle:{
        fontSize:18,
        color:'#000',
        fontWeight:'bold',
        marginLeft:'30%',
    },
    headerRight: {
        marginRight:15,
        width:25,
        height:25,
    },
    headerLeft: {
        marginLeft:15,
        width:30,
        height:30,
    },
    flatlist: {
        margin:10,
    },
    itemViewActive:{
        width:45,
        height:45,
        borderWidth:2,
        borderColor:'#1adcaf',
        borderRadius:25,
        margin:4,
        marginTop:10,
    },
    txtTitle:{
        fontSize:18,
        alignSelf:'center',
        margin:5,
        marginTop:8,
    },
    textCon:{
        marginTop:50,
        alignSelf:'center',
    },
    total: {
        fontSize:18,
        fontWeight:'bold',
        color:'#000',
        margin:5,

    },
    span:{
        fontSize:22,
        fontWeight:'bold',
        color:'#1adcaf',
        margin:5
    },
    deliveryBtn:{
        marginTop:10,
        alignSelf:'center',
    }
});

export default Cart