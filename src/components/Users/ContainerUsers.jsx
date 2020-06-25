import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';
import {follow} from  '../../redux/users-reduser';
import {unFollow} from  '../../redux/users-reduser';
import {setUsers} from  '../../redux/users-reduser';
import {setCurrentPage,setTotalUsersCount,setToggleIsFetching,setToggleFollowingProgress,getUsers,unFollowSuccess,followSuccess} from '../../redux/users-reduser'
import Users from './Users';
import loader from '../../image/loader.svg';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';
import { compose } from 'redux';
import { getPageSize, getTotalUsersCount, getCurrentPage, getFollowingInProgress, requestUsers, getIsFetching } from '../../redux/user-selectors';








class UsersContainer extends React.Component {  
    

    constructor(props){

super(props); 
}


        componentDidMount(){
          this.props.getUsers(this.props.currentPage,this.props.pageSize)

        //     this.props.setToggleIsFetching(true);
        //     usersAPI.getUsers(this.props.currentPage,this.props.pageSize)
        //    .then(data=>{
        //         this.props.setToggleIsFetching(false);
        //         this.props.setUsers(data.items);
        //         this.props.setTotalUsersCount(data.totalCount);
               
        //     });
        }

    

 onPageChanged = (pageNumber)=>{

  this.props.getUsers(pageNumber,this.props.pageSize)
 
    //this.props.setCurrentPage(pageNumber);
    // this.props.setToggleIsFetching(true);    
    // usersAPI.getUsers(pageNumber,this.props.pageSize)
    // .then(data=>{
    //     this.props.setToggleIsFetching(false);
    //     this.props.setUsers(data.items);
    //     this.props.setTotalUsersCount(data.totalCount);
       
    // })
}

render(){
    return(

            
         <> 
        
        {this.props.isFetching ? <Preloader/>  : null } 
        <Users  users={this.props.users} 
        totalUsersCount={this.props.totalUsersCount} 
        onPageChanged={this.onPageChanged} 
        pageSize={this.props.pageSize}
         currentPage={this.props.currentPage}
          follow={this.props.follow} 
          unFollow={this.props.unFollow}
          setToggleFollowingProgress={this.props.setToggleFollowingProgress}
          followingInProgress={this.props.followingInProgress}
          followSuccess ={this.props.followSuccess}
          unFollowSuccess={this.props.unFollowSuccess}
           />
      </>
        )}}





        // let mapStateToProps= (state)=>{                                         СТАРЫЙ  МАП СТЭЙТ ТУ ПРОПС БЕЗ СЕЛЕКТОРОВ
        //     return{
        //         users:state.usersPage.users,
        //         pageSize:state.usersPage.pageSize,
        //         totalUsersCount:state.usersPage.totalUsersCount,
        //         currentPage:state.usersPage.currentPage,
        //         isFetching:state.usersPage.isFetching,
        //         followingInProgress: state.usersPage.followingInProgress
        //     }
        
        // }


     let mapStateToProps= (state)=>{                          //   НОВЫЙ  МАП СТЭЙТ ТУ ПРОПС с СЕЛЕКТОРАМИ
            return{
               users: requestUsers(state),
                pageSize:getPageSize(state),
                totalUsersCount:getTotalUsersCount(state),
                currentPage:getCurrentPage(state),
                isFetching:getIsFetching(state),
                followingInProgress: getFollowingInProgress(state)
            }
        
        }




        
        


// let mapDispatchToProps = (dispatch)=>{

//     return{
    //         follow: (userId)=> {
    //             //let action = follow(userId);
    //             dispatch(follow(userId));
                
    //         },

    //         unfollow: (userId)=> {
                 
    //             dispatch(unFollow(userId));
               

    // },
    //         setUsers:(users)=>{
    //            dispatch(setUsers(users));

    //         },

    //         setCurrentPage:(pageNumber)=>{
    //             dispatch(setCurrentPage(pageNumber));

    //         },
    //         setTotalUsersCount:(totalUsersCount)=>{
    //             dispatch(setTotalUsersCount(totalUsersCount));

    //         },
    //         toggleIsFetching:(isFetching)=>{
    //             dispatch(setToggleIsFetching(isFetching));

    //         }
    
//         }
// }

// const ContainerUsers = connect(mapStateToProps,{
//     follow,
//     unFollow,
//     setUsers,
//    setCurrentPage,
//   setTotalUsersCount,
//    setToggleIsFetching,
//     setToggleFollowingProgress,
//    getUsers,
//    unFollowSuccess,
//    followSuccess   })(UsersContainer);

// export default ContainerUsers;


export default compose(connect(mapStateToProps,{
    follow,
    unFollow,
    setUsers,
   setCurrentPage,
  setTotalUsersCount,
   setToggleIsFetching,
    setToggleFollowingProgress,
   getUsers,
   unFollowSuccess,
   followSuccess   }))(UsersContainer);