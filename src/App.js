import React,{Suspense} from 'react';
// import DialogsContainer from './components/Dialogs/DialogsContainer';

import './App.css';
// import Header from './components/Header/Header';
import NavBar from './components/Navbar/Navbar';
// import Profile from './components/Profile/Profile';
// import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import {Route, Switch, Redirect} from "react-router-dom";
import {BrowserRouter,withRouter} from "react-router-dom";
import ContainerUsers from './components/Users/ContainerUsers';
// import ProfileContainer from './components/Profile/ProfileContainer';

import ContainerHeader from './components/Header/ContainerHeader';
import Login from './components/Login/Login';
// import {getUserDataThunkCreater} from './redux/auth-reduser';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
 const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


 class  App extends React.Component{
//Обработчик ошибок перехваченные reject
  catchAllUnhandleErrors=(reason,promise)=>{
    alert("SOME ERROR occured");
    // console.error(promiseRejectionEvent)
  } 

 componentDidMount(){

   this.props.initializeApp();
   window.addEventListener("unhandledrejection", this.catchAllUnhandleErrors)

  }

// Если делается addEventListener то всегда необходимо его убивать
  componentWillUnmount(){
    window.removeEventListener("unhandledrejection", this.catchAllUnhandleErrors)

  }


  render(){
    if(!this.props.initialized){
      return <Preloader />
    }








  return(
 
    <BrowserRouter>
    <div className='app-wrapper'>
     
    <ContainerHeader />
     <NavBar />
   {/* <Profile />  */}
        
        <div className='app-wrapper-content'>
        {/* <Route  path="/Dialogs" render={ ()=> <Dialogs state={props.state.dialogs} dispatch={props.dispatch}  />} /> */}



        {/* <Route  path="/Dialogs" render={ ()=> {
        return <React.Suspense fallback={<div><Preloader/></div>}><DialogsContainer/></React.Suspense>}} />  */}


       
<Switch>

        
        {/* <Route  path="/Profile/:userId?"  render={()=><React.Suspense fallback={<div>Loading...</div>}><ProfileContainer/></React.Suspense>}/>       */}
        
        <Route  path="/Dialogs" render={ withSuspense(DialogsContainer)} />
        <Route  path="/Profile/:userId?" render={ withSuspense(ProfileContainer)} />        
        <Route   path="/News"  render={()=><News />}/>
        <Route   path="/Music"  render={()=><Music />}/>
        <Route   path="/Settings"  render={()=><Settings />}/>
        <Route   path="/Friends"  render={()=><Friends />}/>
        <Route path="/Users" render={()=><ContainerUsers/>}/>
        
        
        <Route  path="/Login/facebook" render={()=><div>FACEBOOK</div>}/>
        <Route  path="/Login" render={()=><Login/>}/> 
        <Route exact path="/" render={()=><Redirect to={"/Profile"}/>} />  
        <Route  path="*" render={()=><div>404 NOT FOUND</div>}/>
        
        </Switch>
        {/* exact url должен совпадать точь в точь  либо ставить <Switch> <Switch/> будет идти сверху вниз как только найдет похожий
        то выберет */}


        {/* <Route  path="/Dialogs" render={ ()=> <DialogsContainer store={props.store}  />} />
        {/* <Route  path="/Dialogs" component={ ()=> <Dialogs />} /> */}
        {/* <Route  path="/Profile"  render={()=><Profile store={props.store}    />}/>      
        <Route   path="/News"  render={()=><News />}/>
        <Route   path="/Music"  render={()=><Music />}/>
        <Route   path="/Settings"  render={()=><Settings />}/>
        <Route   path="/Friends"  render={()=><Friends />}/> */} 


        {/* <Route   path="/Music"  component={Music} />
        <Route   path="/Settings"  component={Settings}  /> */}
        
        </div> 


    </div>

    </BrowserRouter>
  )


}}

const mapStateToProps = (state)=>({

initialized:state.app.initialized


});

export default compose (connect(mapStateToProps, {initializeApp})) (App);





// export default compose(
//   withRouter,
//   (connect(null ,{getUserDataThunkCreater}))
//   (App))
