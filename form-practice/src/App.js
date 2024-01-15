import { useState } from "react";



function App() {
  const [formData, setFormData] = useState({ firstName: '' , isAgree:false,empstatus:''})

  function updateFieldsState(e) {
     let {name,value , type, checked} = e.target
     console.log(type,value);
     const updatedState = {}


     switch(type){
      case 'radio':
       case 'text':
         console.log(value);
         updatedState[name] = value
        break

      case'checkbox':
      updatedState[name] = checked
        break

      default:
        break
     }


     
    
     setFormData((oldState)=>{
      return {...oldState , ...updatedState}
     })
  }

  return (
    <form>
      {/*  Name should be lessthen 4 characters */}
      <div className='field'>
        <label>Enter your name</label>
        <input name='firstName' type='text'value={formData.name}  onChange={updateFieldsState}/>
      </div>
      <div className='field'>
        <label htmlFor="checkcond">Area you agree with this</label>
        <input id='checkcond' name='isAgree' type='checkbox' checked={formData.isAgree}  onChange={updateFieldsState}/>
      </div>
      <div className='field'>
       <label htmlFor="unemployed">unemployed</label>
       <input type="radio" name='empstatus' value='unemployed'  id='unemployed' onChange={updateFieldsState}/>
       <label htmlFor="employed">employed</label>
       <input type="radio" name='empstatus' value='employed'  id='employed' onChange={updateFieldsState}/>
       <label htmlFor="parttime">parttime</label>
       <input type="radio" name='empstatus' value='part-time'  id='parttime' onChange={updateFieldsState} />
      </div>
    </form>
  )
}

export default App;
