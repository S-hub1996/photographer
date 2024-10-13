import { useState } from 'react';
import {
  Box,
  Flex,
  Link,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';

function MyNavbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement] = useState('right'); // Set placement for drawer (right)

  return (
    <Box bg="gray.800" color="white" px={4} py={2}>
      <Flex align="center" justify="space-between" maxW="1200px" mx="auto">
        <Link as={RouterLink} to="/" fontSize="xl" fontWeight="bold" _hover={{ textDecoration: 'none', color: 'teal.300' }}>
          Photography Portfolio
        </Link>

        {/* Desktop Menu */}
        <Flex display={{ base: 'none', md: 'flex' }} gap={4}>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: 'none', color: 'teal.300' }}>
            Home
          </Link>
          <Link as={RouterLink} to="/services" _hover={{ textDecoration: 'none', color: 'teal.300' }}>
            Services
          </Link>
          <Link as={RouterLink} to="/about" _hover={{ textDecoration: 'none', color: 'teal.300' }}>
            About Us
          </Link>
          <Link as={RouterLink} to="/contact" _hover={{ textDecoration: 'none', color: 'teal.300' }}>
            Contact
          </Link>
        </Flex>

        {/* Mobile Menu Icon */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          bg="grey"
          _hover={{ bg: 'gray.700' }}
        />

        {/* Mobile Menu Drawer */}
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay>
            <DrawerContent bg="gray.800" color="white">
              <DrawerCloseButton />
              <DrawerBody>
                <Stack spacing={4} mt={8}>
                  <Link as={RouterLink} to="/" onClick={onClose} _hover={{ textDecoration: 'none', color: 'teal.300' }}>
                    Home
                  </Link>
                  <Link as={RouterLink} to="/services" onClick={onClose} _hover={{ textDecoration: 'none', color: 'teal.300' }}>
                    Services
                  </Link>
                  <Link as={RouterLink} to="/about" onClick={onClose} _hover={{ textDecoration: 'none', color: 'teal.300' }}>
                    About Us
                  </Link>
                  <Link as={RouterLink} to="/contact" onClick={onClose} _hover={{ textDecoration: 'none', color: 'teal.300' }}>
                    Contact
                  </Link>
                </Stack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
    </Box>
  );
}

export default MyNavbar;
