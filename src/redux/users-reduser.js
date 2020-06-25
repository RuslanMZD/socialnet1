import { usersAPI } from '../api/api';
 
 const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE="SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "setTotalUsersCount";
const TOGGLE_IS_FETCHING = "toggleIsFetching";
const TOGGLE_IS_FOLLOWING_PROGRESS="TOGGLE_IS_FOLLOWING_PROGRESS";


let initialState = {

    users:[ ],
    pageSize: 5,
    totalUsersCount:20,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
        
        
    // [{id: 1,fullName:"Ruslan",status:"I AM SUPER PROGRAMMIST",location:{city:'Irkutsk', country:"Russia"},img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",followed: true},
    // {id: 2,fullName:"Max",status:"I AM SUPER PROGRAMMIST",location:{city:'Irkutsk', country:"Belarus"},img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",followed: true},
    // {id: 3,fullName:"Pasha",status:"I AM SUPER PROGRAMMIST",location:{city:'Perm', country:"Egipet"},img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",followed: false},
    // {id: 4,fullName:"Loh",status:"I AM SUPER PROGRAMMIST",location:{city:'UlanUde', country:"Gonduras"},img:"https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",followed: false}],
    
    
};



 const usersReducer = (state= initialState,action)=>{
    
    switch(action.type){
case FOLLOW:
        return{

            ...state,
            users:state.users.map(u=>{

                if (u.id===action.userId){
                    return {...u, followed:true}
                }

                return u;


            })



        }
  
          case UNFOLLOW:

                    return{
                        
                        ...state,
                        users:state.users.map(u=>{
            
                            if (u.id===action.userId){
                                return {...u, followed:false}
                            }
            
                            return u;
            
            
                        })
            
                    }
        case SET_USERS:{

                    return{...state, users: [ ...action.users ]}

        }
        case SET_CURRENT_PAGE:{

                        return{
                                ...state,
                                currentPage:action.currentPage


                        }



        }

        case SET_TOTAL_USERS_COUNT:{

            return{
                    ...state, 
                    totalUsersCount:action.totalUsers



            }




        }
        case TOGGLE_IS_FETCHING:{

            return{

                    ...state, 
                    isFetching:action.isFetching


            }

        }

        case TOGGLE_IS_FOLLOWING_PROGRESS:{

            return{

                    ...state, 
                    followingInProgress:action.followingInProgress ? 
                    [...state.followingInProgress, action.userId]:
                    [...state.followingInProgress.filter(id=>id!=action.userId)]


            }

        }
        
        
        default:
                   return state;
  
  





   }}  


    






export const follow = (userId) =>  ({type:FOLLOW , userId}) ;


  
  export const unFollow = (userId)=>  ({type:UNFOLLOW ,userId}) ;
    
    
  

    
  export const setUsers=(users)=>{
    return({type:SET_USERS,users})
    
    
    };


    export const setCurrentPage=(currentPage)=>{
        return({type:SET_CURRENT_PAGE, currentPage})

    };



    export const setTotalUsersCount=(totalUsers)=>{
        return({type:SET_TOTAL_USERS_COUNT, totalUsers})

    };

    export const setToggleIsFetching=(isFetching)=>{
        return({type:TOGGLE_IS_FETCHING, isFetching})

    };

    export const setToggleFollowingProgress=(followingInProgress, userId)=>{
        return({type:TOGGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId})

    };

export const getUsers=( currentPage, pageSize) => {

    return (dispatch) => {
    dispatch(setCurrentPage(currentPage));
   
    dispatch (setToggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize)
   .then(data=>{
        dispatch (setToggleIsFetching(false));
        dispatch (setUsers(data.items));
        dispatch (setTotalUsersCount(data.totalCount));


     }); }}


 
     export const followSuccess = (userId) => {
      
      return (dispatch) => { 
        dispatch (setToggleFollowingProgress(true, userId));

        usersAPI.follow(userId)

        // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true,
        // headers:{"API-KEY" : "03743d57-5d42-4009-b627-b66c154de361"}} )
        
        
        .then(respons=>{

            if(respons.data.resultCode===0){
                dispatch(follow(userId))

            }
            dispatch(setToggleFollowingProgress(false,userId));
            });




     }}






   export const unFollowSuccess = (userId) => {
       return (dispatch) => {
    dispatch (setToggleFollowingProgress(true,userId));
    usersAPI.unfollow(userId)

                   
                    .then(respons=>{

                        if(respons.data.resultCode===0){
                           dispatch ( unFollow(userId))

                        }
                       dispatch ( setToggleFollowingProgress(false, userId));

                        });

     }}

    export default usersReducer;