import React , {Component} from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';
import {Input} from '../components/Input';
import {Button} from '../components/Button';
import {Links} from '../components/Links';
import {Background} from '../components/Background';
import {Container} from '../components/Container';
import {SignUpBtn} from '../components/SingUpBtn';
import firebase from 'firebase';


class SignupForm extends Component{

    static navigationOptions = ({navigation},)=>({
        drawerLockMode:'locked-closed',
        drawerLabel: ()=> null,
    });

    state = {
        username:'',
        password:'',
        email:'',
        errorMsg:'',

    }

    renderButton(){
        const {email,password,username} = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(()=>{this.props.navigation.navigate('itemsList');
                const userId = firebase.auth().currentUser.uid;
            })
            .catch((error)=> {
                this.setState({errorMsg:error.message});
            })

        }

    render(){
        return(
            <Container>
                <Background>
                    <View style={styles.view}>
                        <Text style={styles.logo}>LOGO</Text>
                        <Text style={styles.error}>{this.state.errorMsg}</Text>
                        <View style={styles.input}>
                            <Image source={require('../Images/user.png')} style={styles.icon}/>
                            <Input placeholder ="اسم المستخدم "
                                   onChangeText={username=>{this.setState({username})}}
                                   value={this.state.username}
                            />
                        </View>
                        <View style={styles.input}>
                            <Image source={require('../Images/lock.png')} style={styles.icon}/>
                            <Input
                                placeholder ="كلمة المرور"
                                secureTextEntry={true}
                                onChangeText={password=>{this.setState({password})}}
                                value={this.state.password}

                            />
                        </View>
                        <View style={styles.input}>
                            <Image source={require('../Images/mobile.png')} style={styles.icon}/>
                            <Input placeholder ="رقم الموبايل "
                                   onChangeText={email=>{this.setState({email})}}
                                   value={this.state.email}
                            />
                        </View>
                        <Button title='تسجيل' onPress={()=>this.renderButton()}/>
                        <Links linkName=' لديك حساب؟'/>
                        <SignUpBtn title='سجل دخول' onPress={()=>this.props.navigation.navigate('Login')}/>
                    </View>
                </Background>
            </Container>
        );
    }

}

const styles = StyleSheet.create({
    logo:{
        fontSize:52,
        marginTop:50,
        marginBottom:20,
        color:'#000',
        letterSpacing:5,
    },
    view: {
        alignItems:'center',
        justifyContent:'center',
    },
    input:{
        height:50,
        flexDirection:'row',
        position:'relative',
        marginTop:10,

    },
    icon:{
        width:23,
        height:23,
        marginTop:10,
        marginLeft:30,
    },
    link: {
        fontSize:20,
        fontWeight:'bold',
        paddingTop:0,
    },
    error:{
        color:'#f00'
    }
});

export default SignupForm;