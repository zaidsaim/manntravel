import { StyleSheet, Text, View ,Button, TouchableOpacity,TouchableHighlight} from 'react-native'
import React, { Component } from 'react'
import  Rating from 'react-native-easy-rating';
import { colors } from '../global/styles';
import {Picker} from '@react-native-picker/picker';
// import DropDownPicker from 'react-native-dropdown-picker';

import SignatureCapture from 'react-native-signature-capture';
import Dialog from "react-native-dialog";

export default class RatingScreen extends Component {
  constructor(){
    super()
    this.state={
      ratingone:'',
      ratingtwo:'',
      ratingthree:'',
      ratingfour:'',
      ratingfive:'',
      visible:false,
      group: "",
     
      grps: [
        {
          itemName: "Client referred to office for signature"
        },
        {
          itemName: "Client was in hurry"
        },
        {
          itemName: "Released on phone call"
        },
      ],
    }
  }
  
//http://52.66.67.209:8087/ords/tasp/mobile/ratings?

inputValueUpdate = (val, prop) => {
  // alert(val)
    const state = this.state;
    state[prop] = val;
   
      this.setState({val})
}


  async postUser() {
    const {mode,reservationid, image, amount, expensedate, expensestime} = this.state;
   try {
     const response = await axios.post('http://52.66.67.209:8087/ords/tasp/mobile/addexpense/',this.state)
     // setIsLoading(false)
    
   } catch (error) {
     console.error(error);
   }
 }


  showDialog = () => {
  this.setState({visible:true});
};

 handleCancel = () => {
  this.setState({visible:false});
};

 handleDelete = () => {
  // The user has pressed the "Delete" button, so here you can do your own logic.
  // ...Your logic
this.setState({visible:false});
};


saveSign() {
  this.refs["sign"].saveImage();
}

resetSign() {
  this.refs["sign"].resetImage();
}

_onSaveEvent(result) {
  //result.encoded - for the base64 encoded png
  //result.pathName - for the file path name
  console.log(result);
}
_onDragEvent() {
   // This callback will be called when the user enters signature
  console.log("dragged");
}



 render() {

  return (
    <View style={{flex:1,padding:10}}>
    <View style={{marginTop:30,justifyContent:'center',alignSelf:'center',}}>
    <Text style={{fontSize:16,color:colors.grey1}}>Rate Our Service</Text>
    </View>
    <View style={{justifyContent:'flex-start',padding:10,}}>
    <Text style={{fontSize:14,color:colors.grey3}}>Garage Reading:</Text>
    </View>
    <View style={{justifyContent:'flex-start',padding:10,}}>
    <Text style={{fontSize:14,color:colors.grey3}}>Chauffeur Punctuality:</Text>
    <Rating
    style={{paddingTop:10,alignSelf:'center'}}
rating={this.state.ratingone}
max={5}
iconWidth={30}
iconHeight={30}
onRate={(ratingone)=>this.setState({ratingone:ratingone})}/>
    </View>
    <View style={{justifyContent:'flex-start',padding:10}}>
    <Text style={{fontSize:14,color:colors.grey3}}>Chauffeur Punctuality:</Text>
    <Rating
    style={{paddingTop:10,alignSelf:'center'}}
rating={this.state.ratingtwo}
max={5}
iconWidth={30}
iconHeight={30}
onRate={(ratingtwo)=>this.setState({ratingtwo:ratingtwo})}/>
    </View>
    <View style={{justifyContent:'flex-start',padding:10}}>
    <Text style={{fontSize:14,color:colors.grey3}}>Chauffeur Punctuality:</Text>
    <Rating
    style={{paddingTop:10,alignSelf:'center'}}
rating={this.state.ratingthree}
max={5}
iconWidth={30}
iconHeight={30}
onRate={(ratingthree)=>this.setState({ratingthree:ratingthree})}/>
    </View>
    <View style={{justifyContent:'flex-start',padding:10}}>
    <Text style={{fontSize:14,color:colors.grey3}}>Chauffeur Punctuality:</Text>
    <Rating
    style={{paddingTop:10,alignSelf:'center'}}
rating={this.state.ratingfour}
max={5}
iconWidth={30}
iconHeight={30}
onRate={(ratingfour)=>this.setState({ratingfour:ratingfour})}/>
    </View>
    <View style={{justifyContent:'flex-start',padding:10}}>
    <Text style={{fontSize:14,color:colors.grey3}}>Chauffeur Punctuality:</Text>
    <Rating
    style={{paddingTop:10,alignSelf:'center'}}
rating={this.state.ratingfive}
max={5}
iconWidth={30}
iconHeight={30}
onRate={(ratingfive)=>this.setState({ratingfive:ratingfive})}/>
    </View>
   <View style={{justifyContent:'flex-start',padding:10}}>
   <Text style={{fontSize:15,color:colors.grey3}}>Unsigned Reason</Text>
   </View>

   <View style={styles.viewStyle}>
  
   <View style={{ flex: 2, fontSize: 15 }}>
   <Picker
     itemStyle={styles.itemStyle}
     mode="dropdown"
     style={styles.pickerStyle}
     selectedValue={this.state.group}
     onValueChange={(val) => this.inputValueUpdate(val, 'group')}
   >
     {this.state.grps.map((item, index) => (
       <Picker.Item
         color="#0087F0"
         label={item.itemName}
         value={item.itemName}
         index={index}
       />
     ))}
   </Picker>
 </View>
 </View>
<View style={{backgroundColor:colors.grey2,marginHorizontal:100,paddingVertical:7}}> 
<TouchableOpacity onPress={()=>this.showDialog()}>
 <View>
 <Text style={{justifyContent:'center',textAlign:'center',color:'white'}}>Signature</Text>
 </View>
 </TouchableOpacity>
 <Dialog.Container visible={this.state.visible} >
 <View  style={{ height: '70%', width: '70%' }}>
        <Dialog.Title>Signature</Dialog.Title>
        <Dialog.Description>
        <SignatureCapture
        style={[{flex:1},styles.signature]}
        ref="sign"
        onSaveEvent={this._onSaveEvent}
        onDragEvent={this._onDragEvent}
        saveImageFileInExtStorage={false}
        showNativeButtons={false}
        showTitleLabel={false}
        backgroundColor="#ff00ff"
        strokeColor="#ffffff"
        minStrokeWidth={4}
        maxStrokeWidth={4}
        viewMode={"portrait"}/>
        </Dialog.Description>
        </View>
       
        <View style={{ flex: 1, flexDirection: "row" }}>
        <TouchableHighlight style={styles.buttonStyle}
        onPress={() => { this.handleCancel() } } >
        <Text>Cancel</Text>
    </TouchableHighlight>
                   

                    <TouchableHighlight style={styles.buttonStyle}
                        onPress={() => { this.resetSign() } } >
                        <Text>Reset</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.buttonStyle}
                    onPress={() => { this.saveSign() } } >
                    <Text>Save</Text>
                </TouchableHighlight>
                </View>
      </Dialog.Container>
 
 </View>
 <View style={{backgroundColor:colors.red,marginHorizontal:100,marginTop:10,paddingVertical:7}}>
 <Text style={{justifyContent:'center',textAlign:'center',color:'white'}}>Submit</Text>
 </View>
    </View>
     
  
  )
}

}

 const styles = StyleSheet.create({
  itemStyle: {
    fontSize:15,
    fontFamily: "Roboto-Regular",
    color: "#007aff",
    padding:20
  },
  pickerStyle: {
    width: "100%",
    height: 40,
    fontFamily: "Roboto-Regular",
    fontSize:15,
    color: "#007aff",
    padding:20
 
  },
  viewStyle: {
   
    alignSelf: "center",
    flexDirection: "row",
    width: "100%",
    padding:10,
    
    justifyContent: "space-between",
    alignItems: "center",
   fontSize:15
  },
  signature: {
    flex: 1,
    borderColor: '#000033',
    borderWidth: 1,
},
buttonStyle: {
  flex: 1, justifyContent: "center", alignItems: "center", height: 50,
  backgroundColor: "#eeeeee",
  margin: 10
}
})





// <View style={{ flex: 0.8 }}>
// <Text style={{fontSize:15,color:colors.grey3}}>Unsigned Reason</Text>
// </View>