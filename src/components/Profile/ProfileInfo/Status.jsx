import React from "react";


class Status extends React.Component {
    constructor(props){
        super(props);
    }


   
    
    state ={
       
        editMode: false,
       status: this.props.status
    }

    activateEditMode() {
       this.setState({
           editMode: true


       })
      //  this.state.editMode =true; КОстыль
       // this.forceUpdate(); обновить реакт


    }

    deactivateEditMode=()=> {
        this.setState({
            editMode: false
 
        });
            this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e)=> {
        this.setState({status: e.currentTarget.value});
      


    }


componentDidUpdate=(prevProps, prevState)=>{
if (prevProps.status !== this.props.status){
    this.setState({status:this.props.status})
}
    
   
}

    render(){
        
return(
    
<div>

    {!this.state.editMode && <div><span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status || "NON STATUS" }</span></div> }

    {this.state.editMode && <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}></input></div> }
  

</div>




)
    }

}

export default Status;