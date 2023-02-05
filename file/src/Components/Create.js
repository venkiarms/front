import  React,{useState} from "react"
import { Form,Checkbox,Button } from 'semantic-ui-react'
import axios from 'axios'
import { API_URL } from "./API/URL"
import {useNavigate} from 'react-router-dom'
export const Create = () => {
const [name,setname] = useState('')
const [price,setprice] = useState ('')
const [model,setmodel] = useState ('')
const [contactnumber,setcontactnumber] = useState ('')
const [image,setimage] = useState ('')

const navigate = useNavigate();



const get =async()=>{
await axios.post(API_URL,{
  name,
  price,
  model,
  contactnumber,
  image
})
navigate ('/read')
}


  return (
<Form>
<Form.Field>
<input placeholder="name" value={name} onChange ={event =>setname(event.target.value) } />   
</Form.Field>
<Form.Field>
<input placeholder="price" value={price} onChange = {event =>setprice(event.target.value)}/>   
</Form.Field>
<Form.Field>
<input placeholder="model" value={model} onChange = {event =>setmodel(event.target.value)}/>   
</Form.Field>
<Form.Field>
<input placeholder="contact number" value={contactnumber} onChange = {event =>setcontactnumber(event.target.value)}/>   
</Form.Field>
<Form.Field>
<input placeholder="image" value={image} onChange={event =>setimage(event.target.value)}/>   
</Form.Field>
<Button onClick={get}>submit </Button>
</Form>
)
}

export default Create
