import React from 'react';
import Profile from "./Profile";
import * as axios from 'axios';
import {connect} from "react-redux";
import {setUserProfile,getUserProfileThunkCreator,getStatus, updateStatus,savePhoto,saveProfile} from "../../redux/profile-reduser";
import {withRouter, Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from 'redux';




class ProfileContainer extends React.Component{
    constructor(props){
        super(props);


    }
    refreshProfile(){
        let userId = this.props.match.params.userId;
        if(!userId){
          userId=this.props.autorizUserId;
        
          if(!userId){
              
                this.props.history.push("/Login"); // Переброс на lOgin
            }
           
        }
        this.props.getUserProfileThunkCreator(userId);
       
        this.props.getStatus(userId);
    }




    componentDidMount(){
    
          let userId = this.props.match.params.userId;
          if(!userId){
            userId=this.props.autorizUserId;
          
            if(!userId){
                
                  this.props.history.push("/Login"); // Переброс на lOgin
              }
             
          }
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response=>{
    
        //     this.props.setUserProfile(response.data);});

        this.props.getUserProfileThunkCreator(userId);
       
        this.props.getStatus(userId);
    
    }

    componentDidUpdate(prevProps,prevState, snapshot){
       if( this.props.match.params.userId != prevProps.match.params.userId){ //Сравнивает предыдущте пропсы с текущими 
        this.refreshProfile();
       } 
  
     
    
    }
    

   
  

    render(){
       
       
     
       
       
       
        return(

        <div>
                <Profile isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto} saveProfile={this.props.saveProfile} {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
       </div>

        )



    }
}





let mapStateToProps = (state) =>({
    profile:state.profile.profile,
    status:state.profile.status,
    autorizUserId: state.auth.userId,
    isAuth: state.auth.isAuth
});



// let AuthRedirectComponent =withAuthRedirect(ProfileContainer);

// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);


// export default connect(mapStateToProps, {getUserProfileThunkCreator})(withUrlDataContainerComponent) ; 




export default compose(connect(mapStateToProps, {getUserProfileThunkCreator,getStatus, updateStatus,savePhoto,saveProfile}),withRouter)(ProfileContainer)