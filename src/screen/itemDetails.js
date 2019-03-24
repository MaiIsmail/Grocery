import React , { Component } from 'react';
import {View, Text, StyleSheet, Image, ScrollView, FlatList,TouchableOpacity} from 'react-native';
import {Button} from '../components/Button';

const items = [
    {title:'1/2'},{title:'1'},{title:'2'},{title:'3'},{title:'4'},{title:'5'},{title:'6'},
];

export default class itemDetails extends Component {

    state={
        isSelect:true,
        isSelect2:false,
        isSelect3:false,
        weightSelect:true,
    };

    static navigationOptions = ({navigation},)=>({
        headerTitle: <Text style={styles.screenTitle}>{navigation.getParam('itemTitle')}</Text> ,
        headerRight:
            <TouchableOpacity onPress ={()=>navigation.navigate('cart')} >
                <Image style={styles.headerRight} source={require('../Images/bag.png')}/>
            </TouchableOpacity>
        ,
        headerLeft:
            <TouchableOpacity onPress={() =>navigation.openDrawer()}>
                <Image style={styles.headerLeft} source={require('../Images/menu.png') }/>
            </TouchableOpacity>
        ,
    });

    renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={()=>this.setState({weightSelect:!this.state.weightSelect})}>
                <View style={this.state.weightSelect ? styles.itemViewActive : styles.itemView} >
                     <Text style={styles.itemTitle}>{item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    };

    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={styles.V}>
                    <Text style={styles.h1}>طريقة التقطيع </Text>
                    <View style={styles.innerView}>
                        <View>
                            <TouchableOpacity onPress={()=>this.setState({isSelect:!this.state.isSelect,isSelect2:false,isSelect3:false})}>
                                <Image style={this.state.isSelect ? styles.active : styles.Img} source={{uri :'http://lohoom.ly/wp-content/uploads/2015/02/image11.jpg'}}/>
                            </TouchableOpacity>
                            <Text style={styles.h3}>شرائح</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={()=>this.setState({isSelect2:!this.state.isSelect2,isSelect:false,isSelect3:false})}>
                                <Image style={this.state.isSelect2 ? styles.active : styles.Img} source={{uri :'https://www.fatakat-a.com/wp-content/uploads/www.fatakat-ar.com-%D8%AA%D9%82%D8%B7%D9%8A%D8%B9-%D8%A7%D9%84%D8%A8%D8%B7%D8%A7%D8%B7%D8%B3-%D8%A7%D9%84%D9%8A-%D9%82%D8%B7%D8%B9patata-brava.png'}}/>
                            </TouchableOpacity>
                            <Text style={styles.h3}>مكعبات</Text>
                        </View>
                        <View>
                            <TouchableOpacity onPress={()=>this.setState({isSelect3:!this.state.isSelect3,isSelect2:false,isSelect:false})}>
                                <Image style={this.state.isSelect3 ? styles.active : styles.Img} source={{uri :'http://lohoom.ly/wp-content/uploads/2016/10/Wedges-with-skin.jpg'}}/>
                            </TouchableOpacity>
                            <Text style={styles.h3}>أصابع</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.V1}>
                    <Text style={styles.h1}> الوزن (بالكيلو) </Text>
                    <FlatList
                        style={styles.flatlist}
                        horizontal={true}
                        data={items}
                        renderItem={this.renderItem}
                        keyExtractor={(item,index)=>index}
                    />
                </View>
                <View style={styles.V1}>
                    <Text style={styles.h1}> السعر </Text>
                    <Text style={styles.Price}> 5 شيكل </Text>
                </View>
                <View style={styles.V2}>
                    <Button online title='أضف إلى السلة'/>
                    <Button title='استكمال التسوق'/>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        marginTop:20,
        marginLeft:10,
    },
    V:{
        flex:1,

    },
    V1:{
        flex:1,
        marginTop:40,
    },
    V2:{
        flex:1,
        flexDirection:'row',
        marginTop:40,
    },
    h1: {
        fontSize:20,
        fontWeight:'bold',

    },
    h3: {
        fontSize:16,
        alignSelf:'center',
    },
    Price:{
        fontSize:22,
        fontWeight:'bold',
        color:'#1adcaf'
    },
    innerView:{
        flex:1,
        flexDirection:'row',
        marginTop:5,

    },
    Img:{
        width:107,
        height:107,
        borderWidth:2,
        borderColor:'#c0c0c0',
        margin:10,
        marginLeft:0,
        borderRadius:5,
    },
    active: {
        width:107,
        height:107,
        borderWidth:2,
        borderColor:'#1adcaf',
        margin:10,
        marginLeft:0,
        borderRadius:5,
    },
    itemViewActive:{
        width:50,
        height:50,
        borderWidth:2,
        borderColor:'#1adcaf',
        borderRadius:25,
        margin:5,
        marginTop:10,
    },
    itemView: {
        width:45,
        height:45,
        borderWidth:2,
        borderColor:'#c0c0c0',
        borderRadius:23,
        margin:5,
        marginTop:15,
    },
    itemTitle: {
        fontSize:18,
        alignSelf:'center',
        margin:5,
        marginTop:10,
    },
    flatlist: {
        width:'50%',
    },
    screenTitle:{
        fontSize:18,
        color:'#000',
        fontWeight:'bold',
        marginLeft:'40%',
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
