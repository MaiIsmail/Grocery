import React , {Component} from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';
import {Input} from '../components/Input';
import {Button} from '../components/Button';
import {Links} from '../components/Links';
import {SignUpBtn} from '../components/SingUpBtn';
import {Background} from '../components/Background';
import {Container} from '../components/Container';
import firebase from 'firebase';

class LoginForm extends Component{

    static navigationOptions = ({navigation})=>({
        drawerLockMode:'locked-closed',
        drawerLabel: ()=> null,
    });

    state = {
        password:'',
        email:'',
        errorMsg:'',
        errorCode:'',
    };

    renderButton(){
        const {email,password} = this.state;
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(()=>{
                this.setState({email:'', password:''});
                this.props.navigation.navigate('itemsList');
            })
            .catch((error)=> {
                this.setState({errorMsg:error.message});
                this.setState({errorCode:error.code});
            })
    };

    render(){
        return(
            <Container>
                <Background>
                    <View style={styles.view}>
                        <Text style={styles.logo}>LOGO</Text>
                        <Text style={styles.error}>{this.state.errorMsg}</Text>
                        <View style={styles.input}>
                            <Image source={require('../Images/mobile.png')} style={styles.icon}/>
                            <Input
                                placeholder ="رقم الموبايل"
                                onChangeText={email => {
                                    this.setState({email});
                                }}
                                value={this.state.email}
                            />
                        </View>
                        <View style={styles.input}>
                            <Image source={require('../Images/lock.png')} style={styles.icon}/>
                            <Input
                                placeholder ="كلمة المرور"
                                secureTextEntry={true}
                                onChangeText={password => {
                                    this.setState({password});
                                }}
                                value={this.state.password}
                            />
                        </View>
                        <Links linkName='نسيت كلمة المرور؟'/>
                        <View>
                             <Button title='دخول' onPress={()=>this.renderButton()}/>
                            {/*<Button title='دخول' onPress={()=>this.props.navigation.navigate('itemsList')}/>*/}
                        </View>
                        <Links linkName='ليس لديك حساب؟'/>
                        <SignUpBtn title='سجل الآن' onPress={()=>this.props.navigation.navigate('SignUp')}/>
                    </View>
                </Background>
            </Container>
        );
    };
};

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

export default LoginForm;