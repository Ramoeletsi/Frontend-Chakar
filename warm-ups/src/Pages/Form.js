import { Box, Container, Heading, Text, } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';

function PotsDisplay() {


  const [user, setUser] = useState([])
  const id = useParams();

  // function fetchData() {
   
      // .then(data => {
      //   setUser(data[0].name)
      // })
  // }

  useEffect(() => {
    // fetchData()
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response=>response.json())
    .then(response => {
      const {id}= response
      console.log(id)      
      // return response.json()
    })
  }, [])

  return <div>Name: {user}</div>

}

export default PotsDisplay