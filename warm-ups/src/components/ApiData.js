import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Flex, Box, Container, Heading, Stack,Text, } from '@chakra-ui/react';
import { Link, Link as ReachLink, useNavigate } from 'react-router-dom';


const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const ApiData = ( ) => {
    
  const [postData, setPostData] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setPostData(data);
  };

  return (
    <>
        <Container mt='3'>
        <button onClick={fetchData}>Fetch Users</button>
          {postData.map((item, i) => {
            return <>
          <Box key={i}>  
            <Text >{item.id}</Text>
            <Text>{item.title}</Text>
            <Text>{item.body}</Text> 
            <Link to={`/postDisplay/${item.id}}`}>Next</Link> 
          </Box>
            </>
          })}
        </Container> 
    </>
  )
}

export default ApiData