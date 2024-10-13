
import { Box, Flex,Button } from '@chakra-ui/react';
import { useState } from 'react';
import video1 from '../assets/videos/video1.mp4';
import video2 from '../assets/videos/video2.mp4';
// import video3 from '../assets/videos/video3.mp4';

const videos = [video1, video2];

function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <Box position="relative" w="full" h="700px" bg="black">
      <video
        src={videos[currentIndex]}
        autoPlay
        loop
        muted
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />

      <Flex position="absolute" top="50%" left="0" transform="translateY(-50%)" zIndex="1" w="full" justify="space-between" px={4}>
        <Button onClick={handlePrevious} colorScheme="teal" variant="outline">Previous</Button>
        <Button onClick={handleNext} colorScheme="teal" variant="outline">Next</Button>
      </Flex>
    </Box>
  );
}
export default VideoCarousel;
