import {
    Avatar,
    Button,
    Container,
    Heading,
    Input,
    Text,
    VStack,
  } from '@chakra-ui/react';
  import React from 'react';
  import { useNavigate } from 'react-router-dom';
  
  const ForgetPassword = () => {
    const navigate = useNavigate();
  
    const handleSubmit = (event) => {
      event.preventDefault();
      navigate('/confirmation'); 
    };
  
    return (
      <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
        <form onSubmit={handleSubmit}>
          <VStack
            alignItems={'stretch'}
            spacing={'8'}
            w={['full', '96']}
            m={'auto'}
            my={'16'}
          >
            <Heading>Forgot Password</Heading>
            <Avatar alignSelf={'center'} boxSize={'32'} />
  
            <Input
              placeholder={'Email'}
              type={'email'}
              required
              focusBorderColor={'purple.500'}
            />
  
            <Button colorScheme={'purple'} type={'submit'}>
              Reset Password
            </Button>
  
            <Text textAlign={'right'}>
              Remembered your password?{' '}
              <Button variant={'link'} colorScheme={'purple'} onClick={() => navigate('/login')}>
                Login In
              </Button>
            </Text>
          </VStack>
        </form>
      </Container>
    );
  };
  
  export default ForgetPassword;
  