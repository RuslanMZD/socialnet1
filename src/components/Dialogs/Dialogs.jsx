import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from  "./DialogItem/DialogItem";
import Message from "./Message/Message";
//import {updateNewMessageBodyCreater,sendMessageBodyCreater} from '../../redux/dialogs-reduser';
import {Redirect} from "react-router-dom";
import {reduxForm , Field} from 'redux-form';
import {Textarea} from '../../components/common/FormsControl';
import {required,maxLengthCreator} from '../../components/utils/validators';

const maxLength50 = maxLengthCreator(50);

const dialogForm = (props)=>{

    return(
        <form onSubmit={props.handleSubmit}>
<div><Field   component={Textarea} name={"newMessageBody"}  validate={[required,maxLength50]} placeholder={"PLEASE DIALOG DOWN "} /></div>
<div><button>Send</button></div>
</form>
    )
}

const DialogFormRedux= reduxForm ({form:"dialog"})(dialogForm);





const Dialogs = (props)=>{

//     let dialogsData = [
//         {id:1,name:"Ruslanich"},
//         {id:2,name:"Dasha"},
//         {id:3,name:"Igor"},
//         {id:4,name:"Putin"}
//     ]
    


     
    // let dialogsData = props.dialogsData;

    // let  messageData = props.messageData;
    
    
    // let messageData = [
    
    //     {id:1,message:"HI"},
    //     {id:2,message:"ZAEBIS"},
    //     {id:3,message:"NU I ZAEBIS"},
    //     {id:4,message:"YO"}
    
    
    
    // ]
    
    
    




// let dialogsElements =[


// <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
// <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
// <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
// <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>


// ]




let state = props.state;

// let areaMessage = React.createRef();


// let addMessage = ()=>{
    
   
//    props.addMessage();
//    areaMessage.current.value="";
    
    
//     }


// let changeMessage=(event)=>{
//      let body = event.target.value;
//   //  let body = areaMessage.current.value;
//     // props.dispatch(updateNewMessageBodyCreater(body));
//     props.updateNewMessageBody(body);
  

// }


let dialogsElements =props.state.dialogsData.map((dialog)=><DialogItem name={dialog.name} id={dialog.id} img={dialog.img}  />,);


let messagesElement = props.state.messageData.map((data)=><Message message={data.message}  />);

let addNewMessage=(values)=> {
    props.addMessage(values.newMessageBody);
    
    }


    return(

<div className={s.dialogs}>

<div className={s.dialogsItems}>


{dialogsElements}


</div>

<div className={s.messages}>
<div>
{messagesElement}
</div>
{/* <form>
<div><textarea ref={areaMessage} onChange={changeMessage} placeholder="ВВОДИ" ></textarea></div>
<div><button onClick={addMessage}> SEND</button></div>
</form> */}




<DialogFormRedux onSubmit={addNewMessage}/>

   
  

</div>


</div>




















)}






export default Dialogs;