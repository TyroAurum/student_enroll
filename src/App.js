
import { useState } from 'react';
import './App.css';
import { Button, Input, Label, Table, Form } from 'reactstrap';

function App() {
  const [skill,setSkill] = useState([])
  const [info,setInfo] = useState({name:"",mail:"",website:"",link:"",gender:"",skills:[]})


  const handleChhange = (e)=>{
    const {name, value} = e.target;
    setInfo({...info,[name]:value})
    console.log(info)
  }

  const handleChange = async (e)=>{
    const {value,checked} = e.target;

    if(checked){
      await setSkill([...skill,value])
      console.log(skill)
      setInfo({...info,skills:skill})
    }
  };

  const handleRadio = (e)=>{
    const gen = e.target.value;
    setInfo({...info,gender:gen})
  }
  return (
    <div className="App">
      <div className='stdt-home-titlebar'>
        <header>Student Enrollment Form</header>
      </div>
      <div className='stdt-home-main-sec'>
        <div className='stdt-home-sub-sec'>
        <Form>
        <div className='stdt-home-input'>
          <Label>Name </Label>
          <Input type='text' name='name' onChange={handleChhange}/>
        </div>
        <div className='stdt-home-input'>
          <Label>Email</Label>
          <Input type='email' name='mail' onChange={handleChhange}/>
        </div>
        <div className='stdt-home-input'>
          <Label>Website</Label>
          <Input type='text' name='website' onChange={handleChhange}/>
        </div>
        <div className='stdt-home-input'>
          <Label>Image Link</Label>
          <Input type='text' name='link' onChange={handleChhange}/>
        </div><br />
        <div className='stdt-home-input'>
          <Label>Gender</Label>
          <Input type='radio' name='gender' value='male' onChange={handleRadio} /><Label>Male</Label>
          <Input type='radio'name='gender' value='female' onChange={handleRadio} /><Label>Female</Label>
        </div><br />
        <div className='stdt-home-input'>
          <Label>Skills</Label>
          <Input type='checkbox' value='Java' onChange={handleChange} /><Label>Java</Label>
          <Input type='checkbox' value='HTML' onChange={handleChange} /><Label>HTML</Label>
          <Input type='checkbox' value='CSS' onChange={handleChange} /><Label>CSS</Label>
        </div><br />
        <div className='stdt-home-input'>
          <Button>Enroll Student</Button>
          <Button>Clear</Button>
        </div>
        </Form>
        </div>
        <div>
            <div className='stdt-home-sub-section'>
              <Table>
                <tr>
                  <thead>Description</thead>
                  <thead>Image</thead>
                </tr>
                <tr>
                  
                </tr>
              </Table>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
