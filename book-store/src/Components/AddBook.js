import { FormLabel, TextField ,Box, Button, FormControlLabel, Checkbox} from '@mui/material'
import React, { useState ,useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const AddBook = () => {
  const history=useNavigate();
  const [inputs, setInputs] = useState({
    name:'',
    author:'',
    description:'',
    available:'false',
    price:'',
    img:''

  });
  const[checked,setChecked]=useState(false);

  const handleChange=(e)=>{
      setInputs((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
      }));
   } ;

  const sendRequest=async()=>{
      axios.post("http://localhost:5000/books",{
      name:String(inputs.name),
      author:String(inputs.author),
      description:String(inputs.description),
      price:Number(inputs.price),
      img:String(inputs.img),
      available:Boolean(checked)

      }).then(res=>res.data);
  } 

   const handleSubmit=(e)=>{
    e.preventDefault();
    sendRequest().then(()=>history('/books'));

   }
  return (

    <form onSubmit={handleSubmit}>
      <Box flex-direction="column" justifyContent={'center'} maxWidth={700} alignContent={'center'} alignSelf="center" marginLeft={'auto'} marginRight={'auto'} marginTop={10}>
        <FormLabel>Name</FormLabel>
        <TextField value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant='outlined' name="name"/>
        <FormLabel>Image</FormLabel>
        <TextField value={inputs.img} onChange={handleChange} margin="normal" fullWidth variant='outlined' name="img"/>     
        <FormLabel>Author</FormLabel>
        <TextField value={inputs.author} onChange={handleChange} margin="normal" fullWidth variant='outlined' name="author"/>
        <FormLabel>Description</FormLabel>
        <TextField value={inputs.description} onChange={handleChange} margin="normal" fullWidth variant='outlined' name="description"/>
        <FormLabel>Price</FormLabel>
        <TextField value={inputs.price} onChange={handleChange} tyoe="number" margin="normal" fullWidth variant='outlined' name="price"/>
        <FormControlLabel control={<Checkbox checked={checked} onChange={()=>setChecked(!checked)} />} label="Available" />
        <br></br>
        <Button variant="contained" type="submit">Add Book</Button>
        </Box>

    </form>
  )
}
