import {
  Button,
  Heading,
  Stack,
  Text,
  VStack,
  Box,
  useColorModeValue,
  useBreakpointValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const Videos = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const buttonBgColor = useColorModeValue('purple.500', 'purple.300');
  const buttonHoverBgColor = useColorModeValue('purple.600', 'purple.400');

  const videoTitleSize = useBreakpointValue({ base: 'md', md: 'lg' });
  const videoDescriptionSize = useBreakpointValue({ base: 'sm', md: 'md' });
  const buttonSize = useBreakpointValue({ base: 'sm', md: 'md' });

  const videosArr = [
    {
      src: 'https://www.youtube.com/embed/KXbi0FyBOpo',
      title: 'Shroud',
      description: 'Shroud, or Michael Grzesiek, is a top-tier gamer and streamer known for his exceptional skills in first-person shooters like CS and Valorant.',
    },
    {
      src: 'https://www.youtube.com/embed/tiGsupnGVWM',
      title: 'Scout',
      description: 'Scout, whose real name is Tanmay Singh, is a popular Indian gamer and streamer known for his exceptional skills in PUBG Mobile and his engaging content on platforms like YouTube and Twitch.',
    },
    {
      src: 'https://www.youtube.com/embed/dejBYYFs_Cc',
      title: 'Ninja',
      description: 'Ninja, or Tyler Blevins, is a prominent gamer and streamer recognized for his dynamic gameplay in Fortnite and his influence in popularizing gaming and streaming as a mainstream entertainment medium.',
    },
    {
      src: 'https://www.youtube.com/embed/JDill44J0wk',
      title: 'TenZ',
      description: 'TenZ, or Jared Lau, is a highly skilled Valorant player recognized for his impressive aim and gameplay. He gained fame as a top-tier professional and content creator in the Valorant esports scene.',
    },
    {
      src: 'https://www.youtube.com/embed/AKYPvEqR5wI',
      title: 'Nova Paraboy',
      description: 'Nova Paraboy, or Zhu Bocheng, is a top-tier PUBG Mobile player from China renowned for his exceptional gameplay and precision. As a member of Nova Esports, he has gained recognition for his impressive performances in international tournaments.',
    },
    {
      src: 'https://www.youtube.com/embed/L678M0y86dw',
      title: 'MrBeast Gaming',
      description: 'MrBeast Gaming is a YouTube channel by MrBeast featuring gaming challenges and competitions with big rewards and entertaining content.',
    },
  ];

  const [currentVideo, setCurrentVideo] = useState(videosArr[0]);

  return (
    <Stack
      direction={['column', 'column', 'row']} // Stack direction changes with screen size
      spacing={4}
      p={4}
      overflowX="auto"
    >
      <VStack
        flex={2}
        spacing={4}
        w="full"
        display={['block', 'block', 'flex']} // Ensure VStack is visible on all sizes
        mt={['4', '4', '0']} // Add top margin for smaller screens
      >
        <Box
          as="iframe"
          src={currentVideo.src}
          width="100%"
          height={['250px', '300px', '500px']} // Responsive height
          maxWidth="100%"
          allowFullScreen
          title={currentVideo.title}
          borderRadius="lg"
          boxShadow="md"
          bg={bgColor}
        />
        <Box
          p={6}
          borderWidth={1}
          borderColor={borderColor}
          borderRadius="lg"
          boxShadow="md"
          bg={bgColor}
          w="full"
          mt={['4', '4', '0']} // Add margin-top for smaller screens
        >
          <Heading as="h3" size={videoTitleSize} mb={2} color={textColor}>
            {currentVideo.title}
          </Heading>
          <Text fontSize={videoDescriptionSize} color={textColor}>
            {currentVideo.description}
          </Text>
        </Box>
      </VStack>
      <VStack
        flex={1}
        spacing={4}
        alignItems={'stretch'}
        p={4}
        borderLeftWidth={1}
        borderLeftColor={borderColor}
        display={['block', 'block', 'flex']} // Ensure VStack is visible on all sizes
      >
        <Heading as="h4" size="md" mb={4} color={textColor}>
          Top Gaming Channels
        </Heading>
        {videosArr.length > 0 ? (
          videosArr.map((video, index) => (
            <Button
              key={index}
              variant={'solid'}
              colorScheme={'purple'}
              onClick={() => setCurrentVideo(video)}
              borderRadius="md"
              bg={buttonBgColor}
              _hover={{ bg: buttonHoverBgColor, color: 'white' }}
              boxShadow="sm"
              size={buttonSize}
              mb={['3', '3', '3']}
              mr={['2', '2', '2']} 
            >
              {video.title}
            </Button>
          ))
        ) : (
          <Text color={textColor}>No videos available</Text>
        )}
      </VStack>
    </Stack>
  );
};

export default Videos;
