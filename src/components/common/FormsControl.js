import React from 'react';
import styles from './FormsControl.module.css';
import { Field } from 'redux-form';





export const Textarea = ({input,meta, ...props})=>{   //РЕСТ ОПЕРАТОР передаем пропс и отдельно инпут и мета






const hasError = meta.touched && meta.error;
return(

    <div className={styles.formControl + ' '+ (hasError ? styles.error : " ")}>
       <div>
        <textarea {...input}{...props}/>
        </div>
{hasError && <span>"{meta.error}"</span>} 
{/* Если в мета есть эррор то показать  */}
    </div>
)

}




export const Input = ({input,meta, ...props})=>{   //РЕСТ ОПЕРАТОР передаем пропс и отдельно инпут и мета


    const hasError = meta.touched && meta.error;
    return(
    
        <div className={styles.formControl + ' '+ (hasError ? styles.error : " ")}>
           <div>
            <input {...input}{...props}/>
            </div>
    {hasError && <span>"{meta.error}"</span>} 
    {/* Если в мета есть эррор то показать  */}
        </div>
    )
    
    }



    




export const createField = (placeholder,name,validators,component,props={},text="")=>(
    <div>
        <Field placeholder={placeholder} name={name}
        validate={validators}
        component={component}
        {...props}

        />{text}

        
    </div>
)











// РЕФАКТЕРИНГ хуйня
    
     const FormControl = ({input,meta, ...props})=>{   //РЕСТ ОПЕРАТОР передаем пропс и отдельно инпут и мета


        const hasError = meta.touched && meta.error;
        return(
        
            <div className={styles.formControl + ' '+ (hasError ? styles.error : " ")}>
               <div>
               {props.child}
                </div>
        {hasError && <span>"{meta.error}"</span>} 
        {/* Если в мета есть эррор то показать  */}
            </div>
        )
        
        }
    
        

//         const Imput1 = (props)=> {
// return (
//     <FormControl {...props} > <input {props.input}{...props}/> </FormControl>
// )

//         }


        
//         const Textarea1 = (props)=> {
//             return (
//                 <FormControl {...props} > <textarea {...input}{...props}/> </FormControl>
//             )
            
//                     }