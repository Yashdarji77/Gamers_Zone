import {
  Box,
  Button,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import {
  AiOutlineSend,
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineLinkedin,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'blackAlpha.900'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading
            size="md"
            textTransform={'uppercase'}
            textAlign={['center', 'left']}
          >
            Stay Updated
          </Heading>
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter Email Here..."
              border={'none'}
              borderRadius="none"
              outline={'none'}
              focusBorderColor="none"
            />
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />
            </Button>
          </HStack>
        </VStack>

        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textTransform={'uppercase'} textAlign={'center'}>
          Gamer's Zone
          </Heading>
          <Text fontSize="sm" textAlign={'center'} mt={2}>
            © {new Date().getFullYear()} Gamer's Zone. All Rights Reserved.
          </Text>
          <Text fontSize="sm" textAlign={'center'} mt={1}>
            Thank you for visiting!
          </Text>
        </VStack>

        <VStack w={'full'} spacing={4} alignItems="center">
          <Heading size={'md'} textTransform={'uppercase'}>
            Follow Us
          </Heading>
          <Button
            variant={'link'}
            colorScheme={'white'}
            _hover={{ textDecoration: 'underline' }}
            display="flex"
            alignItems="center"
          >
            <a
              target={'_blank'}
              rel="noopener noreferrer"
              href="https://instagram.com/_yash_darji_7"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <AiOutlineInstagram size={20} style={{ marginRight: '8px' }} />
              Instagram
            </a>
          </Button>
          <Button
            variant={'link'}
            colorScheme={'white'}
            _hover={{ textDecoration: 'underline' }}
            display="flex"
            alignItems="center"
          >
            <a
              target={'_blank'}
              rel="noopener noreferrer"
              href="https://github.com/Yashdarji77"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <AiOutlineGithub size={20} style={{ marginRight: '8px' }} />
              GitHub
            </a>
          </Button>
          <Button
            variant={'link'}
            colorScheme={'white'}
            _hover={{ textDecoration: 'underline' }}
            display="flex"
            alignItems="center"
          >
            <a
              target={'_blank'}
              rel="noopener noreferrer"
              href="https://linkedin.com/in/yash-darji-61735a250"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <AiOutlineLinkedin size={20} style={{ marginRight: '8px' }} />
              LinkedIn
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
