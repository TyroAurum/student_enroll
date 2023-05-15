
import { useState } from 'react';
import './App.css';
import { Button, Input, Label, Table, Form } from 'reactstrap';
import Field from './jsx/field';

function App() {
  const initial ={name:"",mail:"",website:"",link:"",gender:"",skills:[]};
  const [skill,setSkill] = useState([])
  const [info,setInfo] = useState(initial)
  const [users,setUsers] = useState([]);


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

  const handleSubmit = (e)=>{
    setUsers([...users,info]);
    console.log(users);
    setInfo(initial)
  }

  const handleClear = (e)=>{
    setUsers([]);
    setInfo(initial)
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
          <Input type='radio' name='gender' value='Male' onChange={handleRadio} /><Label>Male</Label>
          <Input type='radio'name='gender' value='Female' onChange={handleRadio} /><Label>Female</Label>
        </div><br />
        <div className='stdt-home-input'>
          <Label>Skills</Label>
          <Input type='checkbox' value='Java ' onChange={handleChange} /><Label>Java</Label>
          <Input type='checkbox' value='HTML ' onChange={handleChange} /><Label>HTML</Label>
          <Input type='checkbox' value='CSS ' onChange={handleChange} /><Label>CSS</Label>
        </div><br />
        <div className='stdt-home-input'>
          <Button id='stdt-home-submit' onClick={handleSubmit}>Enroll Student</Button>
          <Button id='stdt-home-clear' onClick={handleClear}>Clear</Button>
        </div>
        </Form>
        </div>
        <div>
            <div className='stdt-home-sub-section'>
              <Table bordered>
                <tr>
                  <th className='stdt-des'>Description</th>
                  <th className='stdt-img'>Image</th>
                </tr>
                  {users.map((user)=>(<Field data={user} />))}
              </Table>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
