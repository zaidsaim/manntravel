import React,{useState,useRef,useContext,useEffect} from 'react';
import {View, Text, StyleSheet, Dimensions,TextInput, Alert, ImageBackground,windows,TouchableOpacity,AsyncStorage} from 'react-native'
import {colors, parameters,title} from "../../global/styles"
import * as Animatable from 'react-native-animatable'
import {Icon, Button,SocialIcon} from 'react-native-elements'
import { Formik } from 'formik';
import Header from '../../components/Header'

import { SignInContext } from '../../contexts/authContext';
import { COLORS } from '../../../constants';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import localStorage from 'localStorage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import 'localstorage-polyfill'
import Formbutton from '../../components/Formbutton';


const ClientTabs = createBottomTabNavigator();

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

 const image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb2ypu0v6IkokzMtGvrtASf8vjWKy44y1GOg&usqp=CAU'

export default function SignInScreen({route}){

    const navigation  = useNavigation();


    const {dispatchSignedIn} = useContext(SignInContext)

    const [data,setData]=useState([])
    const [ loginid,setLoginid]=useState()
    const [password,setPassword]=useState()
    const [isLoading,setIsLoading]=useState(true)

    const[textInput2Fossued, setTextInput2Fossued] =useState(false)
    const textInpput1 = useRef(1)
    const textInput2 = useRef(2)

    const [items, setItems] = useState([]);
    const [user, setUser] = useState([]);
    const [ numberHolder ,setNumberHolder]=useState()
    localStorage.setItem('items', JSON.stringify(items))
    // localStorage.setItem('items', JSON.stringify(items));

    const GenerateRandomNumber=()=>
    {
     
    var RandomNumber = Math.floor(Math.random() * 100) + 1 ;
     
    setNumberHolder({
     
      numberHolder : RandomNumber
     
    })
    }
     




// useEffect(()=>{
//     getUser()
// },[])



  async function getUser(items) {
    
    GenerateRandomNumber()
    try {
        const response = await 
      axios.get(`http://52.66.67.209:8087/ords/tasp/mobile/getloginstatus/?loginid=${loginid}&&password=${password}&&token=${numberHolder}`
      );
      if(response.data.Responce === 1){
    navigation.navigate('HomeScreen')
        console.log('true')
        console.log('tokennn',numberHolder)
        localStorage.setItem('items', JSON.stringify(response.data))
        console.log('login-->',response.data)
        // {navigation.navigate('RootClientTabs')}
       
      }
      console.log('response=>',items);
      setItems(response.data)
      setData({data:response.data})
    //  console.log('meandata',data)
    }
     catch (error) {
      console.error(error);
    }
  }



 

  

    return(
      

        <View style={styles.container}>
        <ImageBackground resizeMode="cover"  source={require('../../../asset/images/loginimg.jpg')} style={{ flex: 1,
        justifyContent: "center"}}>
           
             {/*<Header title ="MY ACCOUNT"   onPress={()=>navigation.goBack(null)} style={{
                justifyContent:'center',
            alignItems:'center',
            textAlign:'center',
            }}/>  */}


             <View style={{marginTop:50}}>
            
      
            {/*  <View style ={{marginLeft:20, marginTop:'0%'}}>
                 <Text style ={{color:'#24ada2',fontSize:20,fontWeight:'bold',paddingTop:30}}>Sign-In</Text>
             </View> */}
           
 
            {/*<View style ={{alignItems:"center",marginTop:10}}>
                <Text style= {styles.text1} >Please enter the email and password</Text>
                <Text style= {styles.text1} >registered with your account</Text> 
    </View>*/}

    {/*initialValues = {{email:'',password:''}}
    onSubmit = {(values)=>{
               signIn(values)

            }}
        >
        { (props)=>(*/}
            <Formik>
               
                <View>
                <View style ={{marginTop:20}}>
                <View>
                    <TextInput 
                      style ={styles.TextInput1}
                      placeholder ="loginid"
                      ref ={textInpput1}
                     onChangeText = {(loginid)=>setLoginid(loginid)}
                     value ={loginid}
                    />
                </View>



                <View style ={styles.TextInput2}>
                <Animatable.View animation ={textInput2Fossued?"":"fadeInLeft"} duration={400} >
                    <Icon 
                        name ="lock"
                        iconStyle ={{color:colors.grey1}}
                        type ="material"
                        style={{}}
                      
                        
                    />
                </Animatable.View>

                     <TextInput 
                      style= {{flex:1,color:colors.grey1}}
                      placeholder ="Password"
                      ref ={textInput2}
                      onFocus ={()=>{
                          setTextInput2Fossued(false)
                      }}

                      onBlur ={()=>{
                          setTextInput2Fossued(true)
                      }}
                      onChangeText = {(password)=>setPassword(password)}
                     value = {password}
                    />

                <Animatable.View animation ={textInput2Fossued?"":"fadeInLeft"} duration={400} >
                     
                        <Icon 
                                name ="visibility-off"
                                iconStyle ={{color:colors.grey1}}
                                type ="material"
                                style={{marginRight:10}}
                                
                            />

                </Animatable.View>
                </View>

            </View>
            <TouchableOpacity style={{paddingVertical:50}}>
            <Formbutton buttonTitle='SIGN IN' onPress={()=>getUser(loginid,password)}/>
            </TouchableOpacity>
            </View>
                   
        </Formik>


           
         {/*<TouchableOpacity onPress={()=>{navigation.navigate('ChangePassword')}}>
            <View style ={{alignItems:"center",marginTop:15}} >
                <Text style ={{...styles.text1, textDecorationLine:"underline"}}> Forgot Password ?</Text>
            </View> 
                    </TouchableOpacity>*/}

             {/* <View style ={{alignItems:"center",marginTop:30, marginBottom:30}}>
                <Text style ={{fontSize:20, fontWeight:"bold"}}>OR</Text>
            </View>    */}

            {/*<View style ={{marginHorizontal:10,marginTop:10}}>
                <SocialIcon 
                        title ="Sign In With Facebook"
                        button
                        type ="facebook"
                        style ={styles.SocialIcon}
                        onPress ={()=>{}}
                    />
            </View>     

            <View style ={{marginHorizontal:10,marginTop:10}}>
                <SocialIcon 
                        title ="Sign In With Google"
                        button
                        type ="google"
                        style ={styles.SocialIcon}
                        onPress ={()=>{}}
                    />
                    </View> */}

           {/*} <View style ={{marginTop:25,marginLeft:20}}>
                <Text style ={{...styles.text1,}}>New on Travel</Text>
                </View>           */}
  {/*
<TouchableOpacity onPress={()=>navigation.navigate('SignUpScreen')}>
            <View style ={{alignItems:"flex-end",marginHorizontal:20}}>
                <Button 
                    title ="Create an account"
                    buttonStyle ={styles.createButton}
                    titleStyle ={styles.createButtonTitle}
                  
                />
            </View>
            </TouchableOpacity>*/}

   
            </View>
    
        </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container :{
        flex:1
    },

    text1:{
        color:'white',
        fontSize:16
    },

    TextInput1:{
        borderWidth:1,
        // borderColor:"#86939e",
        marginHorizontal:20,
        borderRadius:12,
        marginBottom:20,
        paddingLeft:15,
        backgroundColor:'white',
        color:colors.grey1
      },

      TextInput2:{
        borderWidth:1,
         borderRadius:12,
         marginHorizontal:20,
        //  borderColor:"#86939e",
         flexDirection:"row",
         justifyContent:"space-between",
         alignContent:"center",
         alignItems:"center",
         paddingLeft:15,
         backgroundColor:'white',
         color:colors.grey1
      },

      SocialIcon :{
        borderRadius :12,
        height:50
      },

      createButton:{
        backgroundColor:"white",
        alignContent:"center",
        justifyContent:"center",
        borderRadius:12,
        // borderWidth:1, 
        // borderColor:'#8B0000',
        height:40,
        paddingHorizontal:20,
      },

      createButtonTitle:{
        color:'#8B0000',
        fontSize:16,  
        fontWeight:"bold" ,
        alignItems:"center",
        justifyContent:"center"  ,
        marginTop:-3
      }


    
})