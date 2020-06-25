import React,{useState, useEffect} from "react";


const StatusWhithHooks=(props)=> {
    
let [editMode,setEditMode ] = useState(false);
let [status,setStatus ] =useState(props.status);


useEffect( ()=>{
    setStatus(props.status);

},[props.status]);

//     let stateWithSetState =useState(false);
// let editMode = stateWithSetState[0];
// let setEditMode = stateWithSetState[1];
 
    const activateMode = ()=>{

        setEditMode(true);

    }




    const deActivateEditMode = ()=>{

        setEditMode(false);
        props.updateStatus(status);

    }


    const onStatusChange =(e)=>{

        setStatus(e.currentTarget.value)

    }
        
return(
    
<div>

   { !editMode &&  <div><b>СТАТУС:</b> <span onDoubleClick={activateMode}>{props.status || "NON STATUS" }</span></div> }

    {editMode && <div><input  onBlur={deActivateEditMode} onChange={onStatusChange} autoFocus={true} value={status} ></input></div> }  
  

</div>




)
    

}

export default StatusWhithHooks;