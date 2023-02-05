import  React,{useEffect, useState} from "react"
import { Form,Checkbox,Button } from 'semantic-ui-react'
import axios from 'axios'
import { API_URL } from "./API/URL"
import {useNavigate} from 'react-router-dom'



const Edit = () => {
    const [name,setName] = useState('')
    const [price,setPrice] = useState ('')
    const [model,setModel] = useState ('')
    const [contactnumber,setContactnumber] = useState ('')
    const [image,setImage] = useState ('')
    const [id,setId] = useState ('')

    const navigate = useNavigate();

const editing = async ()=>{
    await axios.put(`https://63ce2e97fdfe2764c71d9f64.mockapi.io/Bike3/${id}`,{
name,
price,
model,
contactnumber,
image,
})
navigate('/read')
}
useEffect(()=>{ 
    setName(localStorage.getItem('name',name))
    setPrice(localStorage.getItem('price',price))
    setModel(localStorage.getItem('model',model))
    setContactnumber(localStorage.getItem('contactnumber',contactnumber))
    setImage(localStorage.getItem('image',image))
    setId(localStorage.getItem('id',id))
},[])

return (
    <Form>
<Form.Field>
<input placeholder="name" value={name} onChange ={event =>setName(event.target.value) } />   
</Form.Field>
<Form.Field>
<input placeholder="price" value={price} onChange = {event =>setPrice(event.target.value)}/>   
</Form.Field>
<Form.Field>
<input placeholder="model" value={model} onChange = {event =>setModel(event.target.value)}/>   
</Form.Field>
<Form.Field>
<input placeholder="contact number" value={contactnumber} onChange = {event =>setContactnumber(event.target.value)}/>   
</Form.Field>
<Form.Field>
<input placeholder="image" value={image} onChange={event =>setImage(event.target.value)}/>   
</Form.Field>
<Button onClick={editing}>submit </Button>
</Form>
  )
}

export default Edit