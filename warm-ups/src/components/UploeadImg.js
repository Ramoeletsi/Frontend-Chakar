import React, { useState } from 'react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {useForm } from 'react-hook-form'
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Flex
} from "@chakra-ui/react";



function UploeadImg() {
  const schema = yup.object().shape({
    File: yup.mixed().test('require', 'Please select a file', value=>{
      return value && value.length;
    })
  })
  const {
    register, 
    handleSubmit, 
    watch,
    formState: {errors}
  } =useForm({
    resolver: yupResolver(schema),
  })
  const [image, setImage] = useState('');
  const convert2base64 = file => {
    const reander = new FileReader();
    reander.onloadend = () =>{
      setImage(reander.result.toString());
    };
    reander.readAsDataURL(file);
  }
  const onSubmit = data => {
    if(data.files.length > 0){
      convert2base64(data.files[0]);
    }
  };
  return (
    <Box bg='red.200' align='center' h='700'>
      {image && (<div>
        <img src={image} width='300' alt="up" />
        </div>
    )}
    <form onSubmit={handleSubmit(onSubmit)}>
      {!watch('files') || watch('files').length === 0 ? (
    <Box align='center' h='500'>
        <Input type='file' id='fileupload'{...register('files')} style={{display : 'none'}} />
        <FormLabel htmlFor="fileupload" style={{cursor: 'pointer'}}>
         Select file..   
        </FormLabel>
    </Box>
      ):(
        <strong>{watch('files')[0].name}</strong>
      )}
    <Button type="submit" className='btn'>
        Submit
    </Button>
    <FormErrorMessage>
    {errors.file && <div className='error'>{errors.file.message}</div>}
    </FormErrorMessage>
    </form>
    </Box>
  )
}

export default UploeadImg

// import React, { useState } from "react";

// function UploeadImg() {
// 	const [file, setFile] = useState();
// 	function handleChange(e) {
// 		console.log(e.target.files);
// 		setFile(URL.createObjectURL(e.target.files[0]));
// 	}

// 	return (
// 		<div className="App">
// 			<h2>Add Image:</h2>
// 			<input type="file" onChange={handleChange} />
// 			<img src={file} alt="" />

// 		</div>

// 	);
// }

// export default UploeadImg;
