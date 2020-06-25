import {createStore, combineReducers} from 'redux';
import profileReducer from './profile-reduser';
import dialogReducer from "./dialogs-reduser";
import sidebarReducer from "./sidebar-reducser";
import usersReducer from './users-reduser';
import authReducer from './auth-reduser';
import { applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";
import {compose} from 'redux';




let reducers = combineReducers({
    profile:profileReducer,
    dialogs:dialogReducer,
    sidebar:sidebarReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form:formReducer,
    app:appReducer
  
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));



// let store = createStore(reducers, applyMiddleware(thunkMiddleware)); это без приложения redux dev tools в Хроме 

window.store = store;




export default store; 