import React from 'react';
import {reduxForm , Field} from 'redux-form';
import {Input} from '../../components/common/FormsControl';
import {Redirect} from 'react-router-dom';
import { required } from '../utils/validators';
import {connect} from 'react-redux';
import {logOutThunkCreater, loginThunkCreater,getCaptchaUrl} from '../../redux/auth-reduser';
import style from '../../components/common/FormsControl.module.css';







const LoginForm = (props) => {

  return (
  
  <form onSubmit={props.handleSubmit}>
  
  
  <div>
    <Field placeholder={"Email"} name={"email"}  component={Input} validate={[required]}/>
  </div>
  <div>
  
  <Field placeholder={"Password"} name={"password"} component={Input} type="password" validate={[required]}/>
  </div>
  <div>
  <Field type={"checkbox"} name={"rememberMe"} component={Input} /> Remember me
  
  </div>
{props.captchaUrl && <img src={props.captchaUrl}/>}
{props.captchaUrl && <Field placeholder="enter captcha" name={"captcha"} validate={[required]} component={Input} />}

{props.error && <div className={style.formSummaryError}> 
{props.error}
</div>}

  <div>
    <button>Login</button>
    </div>
  
  
  
  </form>
  
 
  
  
  )
  
  
  
  }




  const LoginReduxForm = reduxForm({form:'login'})(LoginForm);





  const Login = (props) => {

    const onSubmit = (formData)=> {

     props.loginThunkCreater(formData.email,formData.password,formData.rememberMe,formData.captcha);}
 
  if(props.isAuth){
    return <Redirect to={"/Profile"}/>
  }

    //let postData = props.postData;
    
   
    return (
    
        <div>
     <h1>Login</h1>
    <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
      </div>
    
    
    )
    
    
    
    }

const mapStateToProps =(state)=> ({
  isAuth: state.auth.isAuth,
  captchaUrl:state.auth.captchaUrl

})


export default connect(mapStateToProps, {loginThunkCreater,logOutThunkCreater,getCaptchaUrl})(Login);