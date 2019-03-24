import React, { Component } from 'react';
import {View, StyleSheet, Image, FlatList, Text, Button, TouchableOpacity} from 'react-native';

const items = [
    {   title: 'طماطم' ,
        uri: 'https://www.khodarji.com/riyadh/ar/media/catalog/product/cache/4/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/r/green-house-tomato-01.jpg',
        price: '2 شيكل'
    },
    {   title: 'خيار' ,
        uri: 'https://www.khodarji.com/riyadh/ar/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/f/i/file_1.png',
        price: '3 شيكل'
    },
    {   title: 'باذنجان' ,
        uri: 'https://www.collinsdictionary.com/images/thumb/aubergine_90502372_250.jpg?version=3.1.195',
        price: ' 2 شيكل'
    },
    {   title: 'جزر' ,
        uri: 'https://tafkah.com/wp-content/uploads/2018/07/carrot-1.jpg',
        price: '4 شيكل'

    },
    {   title: 'بطاطس' ,
        uri: 'http://www.a7la7ayat.com/sites/rdefault/files/field/image/potato.png',
        price: '5 شيكل'
    },
    {   title: 'فلفل حار' ,
        uri: 'https://images.todoorstep.com/products/20019-KTE7TB00/Ar_large.jpg',
        price: '2 شيكل'
    },
    {   title: 'طماطم' ,
        uri: 'https://www.khodarji.com/riyadh/ar/media/catalog/product/cache/4/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/r/green-house-tomato-01.jpg',
        price: '2 شيكل'
    },
    {   title: 'خيار' ,
        uri: 'https://www.khodarji.com/riyadh/ar/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/f/i/file_1.png',
        price: '3 شيكل'
    },
    {   title: 'باذنجان' ,
        uri: 'https://www.collinsdictionary.com/images/thumb/aubergine_90502372_250.jpg?version=3.1.195',
        price: ' 2 شيكل'
    },
    {   title: 'جزر' ,
        uri: 'https://tafkah.com/wp-content/uploads/2018/07/carrot-1.jpg',
        price: '4 شيكل'

    },
    {   title: 'بطاطس' ,
        uri: 'http://www.a7la7ayat.com/sites/default/files/field/image/potato.png',
        price: '5 شيكل'
    },
    {   title: 'فلفل حار' ,
        uri: 'https://images.todoorstep.com/products/20019-KTE7TB00/Ar_large.jpg',
        price: '2 شيكل'
    }
];


export default class itemList extends Component {

    static navigationOptions = ({navigation})=>({
        headerTitle: <Text style={styles.screenTitle}>اختر نوع الخضار </Text> ,
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

    renderItem = ({ item, index }) => {
        return (
            <View style={styles.container }>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <TouchableOpacity onPress ={()=>this.props.navigation.navigate('itemsDetails',{itemTitle:item.title})}>
                    <Image style={styles.itemImg} source={{uri:item.uri}}/>
                </TouchableOpacity>
                <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
        );
    };

    render() {
        return (
            <FlatList
                data={items}
                numColumns={2}
                renderItem={this.renderItem}
                keyExtractor={(item,index)=>index}
            />
        );
    }
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
    }
});