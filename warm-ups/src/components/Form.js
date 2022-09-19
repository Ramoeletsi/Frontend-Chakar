
import { useForm } from "react-hook-form";
import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Box,
  Flex
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

 function Form() {

  let formdata =[
    {
      ImgDes:""
    }
  ]
  
  const storeData =evt => {
    formdata[0].ImgDes =evt.target.value;
  }
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        navigate('/dataDispaly', {state:{name:(JSON.stringify(values, null, 2))}})
        resolve();
        console.log(values)
      }, 3000);
    });
  }
   const navigate = useNavigate();


  const registerOptions = {
        description: { required: "Description is required",
        minLength: {
            value:10,
            message: "Not less than 10"
        } 
    },    
        img: { required: "File Required",
        minLength: {
            value:"",
            message: "Please Choose A file"
        } 
    },    
};

  return (
    <Flex minWidth='max-content' alignItems='center' >
        <Box display="flex" alignContent="center" mt='10'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isInvalid={errors.img}>
                    <FormLabel htmlFor="img">Image Name</FormLabel>
                    <Input 
                        width='auto'
                        type="file"
                        id="img"
                        {...register('img', registerOptions.img) }
                    />
                    <FormErrorMessage>
                        {errors.img && errors.img.message}
                    </FormErrorMessage>
                </FormControl>

                <FormControl isInvalid={errors.description}>
                    <FormLabel htmlFor="description">Description</FormLabel>
                    <Input 
                        width='auto'
                        id="description"
                        placeholder="description"
                        onChange={storeData}
                        {...register('description', registerOptions.description) }
                    />
                    <FormErrorMessage>
                        {errors.description && errors.description.message}
                    </FormErrorMessage>
                </FormControl>
                <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
                    Submit
                </Button>
            </form>
        </Box>
    </Flex>
  );
}

export default Form;