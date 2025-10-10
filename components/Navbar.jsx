'use client';
import { Box, Container, Flex, HStack, Link, Button, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Navbar() {
  return (
    <Box as="header" borderBottom="1px solid #eee" bg="white" position="sticky" top="0" zIndex="docked">
      <Container maxW="6xl" py={3}>
        <Flex align="center" justify="space-between">
          <HStack spacing={3}>
          <Box w="10px" h="10px" bg="purple.500" borderRadius="full" />
            <Text fontWeight="bold">My Mini Site</Text>
          </HStack>

          <HStack spacing={6}>
            <Link as={NextLink} href="/">Home</Link>
            <Link as={NextLink} href="/about">About</Link>
            <Link as={NextLink} href="/contact">Contact</Link>
            <Button as={NextLink} href="/contact" colorScheme="purple" variant="solid" size="sm">
              Get in touch
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
