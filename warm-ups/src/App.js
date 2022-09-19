import React from 'react';
import './App.css'
import {Link as ReachLink, Route, Routes }from 'react-router-dom'
import ApiData from './components/ApiData';
import Form from './components/Form';
import ImgForm from './components/ImgForm';
import PotsDisplay from './Pages/Form';
import { Box, Button, Heading, IconButton, Link } from '@chakra-ui/react';
import { AtSignIcon} from '@chakra-ui/icons'
import Home from './components/Home';
import UploeadImg from './components/UploeadImg';

function App() {

  return (
  <>
    <header>
        <Box display="flex" align="center" justifyContent="space-between" bg="#B0C9BA">
        <Heading >
        <IconButton
          variant='outline'
          colorScheme='teal'
          aria-label='Call Sage'
          fontSize='20px'
          icon={< AtSignIcon/>}
          as={ReachLink} to='/'
        />
        </Heading> 
            <Box>
                <Button colorScheme="cyan">
                    <Link as={ReachLink} to='/postData'>
                       ApiData
                    </Link>                
                </Button>
                <Button pr={2} colorScheme="cyan">
                    <Link as={ReachLink} to='/hookform'>
                        Form
                    </Link>
                </Button>
            </Box>
        </Box>
        </header>
      <>
        <Button> 
          <Link as={ReachLink} to='/hookform'>
          Jooo
          </Link>
        </Button>
        </>
        <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/postData' element={<ApiData/>} />
      <Route path='/hookForm' element={<Form/>} />
      <Route path='/dataDispaly' element={<ImgForm/>} />
      <Route path='/postDisplay/:id' element={<PotsDisplay />} />
    
    </Routes>
{/* 
    <UploeadImg/> */}
   
  </>
    
  );
}
export default App;
