import React, { useState,useEffect } from 'react'
import { Table,TableRow,TableHeader, Button} from 'semantic-ui-react'
import { API_URL } from './API/URL'
import  axios  from 'axios'
import {useNavigate} from 'react-router-dom'



export const Read = () => {
  const [jan, setJan] = useState([])

  const navigate = useNavigate();

  const update = ({name,price,model,contactnumber,image,id})=>{
    localStorage.setItem('name',name)
    localStorage.setItem('price',price)
    localStorage.setItem('model',model)
    localStorage.setItem('contactnumber',contactnumber)
    localStorage.setItem('image',image)
    localStorage.setItem('id',id)

    navigate('/edit')

  }


  const put = async()=>{
    const web = await axios.get(API_URL)
    setJan(web.data)
  }
  const del = async(id)=>{
    await axios.delete(`https://63ce2e97fdfe2764c71d9f64.mockapi.io/Bike3/${id}`)
  }
useEffect(()=>{
  put();
})


  return (
    <Table>
<TableHeader>
  <TableRow>
    <Table.HeaderCell>name</Table.HeaderCell>
    <Table.HeaderCell>price</Table.HeaderCell>
    <Table.HeaderCell>model</Table.HeaderCell>
    <Table.HeaderCell>contactnumber</Table.HeaderCell>
    <Table.HeaderCell>image</Table.HeaderCell>
    <Table.HeaderCell>delete</Table.HeaderCell>
  </TableRow>
  </TableHeader>
  {jan.map(data=>(
    <Table.Body>
      <TableRow key={data.id}>
    <Table.Cell>{data.name}</Table.Cell>
    <Table.Cell>{data.price}</Table.Cell>
    <Table.Cell>{data.model}</Table.Cell>
    <Table.Cell>{data.contactnumber}</Table.Cell>
    <Table.Cell>{data.image}</Table.Cell>
    <Table.Cell>
      <Button onClick={()=>del(data.id)}>delete</Button>
  </Table.Cell>
  <Table.Cell>
      <Button onClick={()=>update(data)}>update</Button>
  </Table.Cell>
    </TableRow>
    </Table.Body>
))}
  </Table>
  )
}

export default Read