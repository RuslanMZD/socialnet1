import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserData,getUserDataThunkCreater} from '../../redux/auth-reduser';
import {authAPI} from '../../api/api';
import {logOutThunkCreater} from '../../redux/auth-reduser';


class ContainerHeader extends React.Component{

    constructor(props){
        super(props);

    }

    //  componentDidMount(){

        //1 axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        //1     withCredentials: true
          
        //1 })

        //1 .then(response=>{
           
        //1     if(response.data.resultCode===0) {
        //1         let {id, email, login} = response.data.data;
        //1         this.props.setAuthUserData(id, email, login);

        //1     }
        //1 });


    //2 this.props.getUserDataThunkCreater();



    //  }

    render(){
        return(

            <Header {...this.props}/>



        )


    }



}


const mapStateToProps =(state)=> ({

isAuth:state.auth.isAuth,
login:state.auth.login
    
})


export default connect(mapStateToProps,{setAuthUserData,getUserDataThunkCreater,logOutThunkCreater})(ContainerHeader);