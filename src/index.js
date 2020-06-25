
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import StoreContext from './StoreContext';
import {Provider} from 'react-redux';

ReactDOM.render(<Provider store={store}>
      <App/> </Provider>, document.getElementById('root'));
       

       

//_____________________________________________________________________________________________
// let reRender = (state)=>{ // без редакс
//     ReactDOM.render(<App state={state} dispatch={store.dispatch.bind(store)} store={store}  />, document.getElementById('root'));


// }



// let reRender = (state)=>{  // Обычный редакс
    
//     ReactDOM.render(<StoreContext.Provider value={store}>
//     <App/> </StoreContext.Provider>, document.getElementById('root'));
   

// }


//_____________________________________________________________________________________________

// let reRender = (state)=>{
    
//     ReactDOM.render(<Provider store={store}>
//     <App/> </Provider>, document.getElementById('root'));
   

// }


//  reRender(store.getState());



//  store.subscribe(()=>{    connect из react redux имеет свой subscribe и отрисовывает локально а не глобадьно как тут без нового построения DOM , достаточно отрисовать APP единыжды

//     let state = store.getState();
    
//     reRender(state);

// });
//_____________________________________________________________________________________________________________________

// store.subscribe(reRender);








//addPost('fgfdgzdfg');





// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
 
 