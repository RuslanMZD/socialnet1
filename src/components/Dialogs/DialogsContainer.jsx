import React from "react";
import s from "./Dialogs.module.css";
import {NavLink, Redirect} from "react-router-dom";
import DialogItem from  "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {updateNewMessageBodyCreater,sendMessageBodyCreater} from '../../redux/dialogs-reduser';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
//import StoreContext from '../../StoreContext';







// const DialogsContainer = (props)=>{

//     return(

// <StoreContext.Consumer>
//     {(store)=>{

       




// let addMessage = ()=>{
    
   
//    store.dispatch(sendMessageBodyCreater());
   
    
    
//     }


// let changeMessage=(body)=>{
//     //  let body = event.target.value;
//   //  let body = areaMessage.current.value;
//    store.dispatch(updateNewMessageBodyCreater(body));
  

// }



//      return   <Dialogs updateNewMessageBody={changeMessage} addMessage={addMessage} state={store.getState().dialogs}/>
//     }
//     }

// </StoreContext.Consumer>   
    
// )}


let mapStateToProps = (state) =>{
   
   
    return{
       state:state.dialogs,
     
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        updateNewMessageBody: (body) =>{
            dispatch(updateNewMessageBodyCreater(body));
        },
        addMessage: (newMessageBody)=>{
           dispatch(sendMessageBodyCreater(newMessageBody));
        }

    }

}





//let AuthRedirectComponent = withAuthRedirect(Dialogs);


// const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);




// export default DialogsContainer;

export default compose(connect(mapStateToProps,mapDispatchToProps),
withAuthRedirect)
(Dialogs);
