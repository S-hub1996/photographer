import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack } from '@chakra-ui/react';
import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container maxW="800px" height={'75vh'} mt={8}>
      <Box bg="gray.50" p={6} borderRadius="md" boxShadow="lg">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Your Name</FormLabel>
              <Input
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </FormControl>

            <FormControl id="email" isRequired>
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </FormControl>

            <FormControl id="message" isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea
                placeholder="Type your message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </FormControl>

            <Button type="submit" colorScheme="teal" width="full">Send Message</Button>
          </VStack>
        </form>
      </Box>
    </Container>
  );
}

export default Contact;
