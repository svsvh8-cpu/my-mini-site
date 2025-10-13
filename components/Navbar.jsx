'use client';
import { Box, Container, Flex, HStack, Link, Button, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs';
import ContactModal from './ContactModal';

export default function Navbar() {
  const { isSignedIn, user } = useUser();

  return (
    <Box as="header" borderBottom="1px solid #eee" bg="white" position="sticky" top="0" zIndex="docked">
      <Container maxW="6xl" py={3}>
        <Flex align="center" justify="space-between">
          <HStack spacing={3}>
          <Box w="10px" h="10px" bg="purple.500" borderRadius="full" />
            <Text fontWeight="bold">PropertiX</Text>
          </HStack>

          <HStack spacing={6}>
            <Link as={NextLink} href="/">Home</Link>
            <Link as={NextLink} href="/about">About</Link>
            <Link as={NextLink} href="/contact">Contact</Link>
            <Link as={NextLink} href="/dashboard">Dashboard</Link>
            <Link as={NextLink} href="/analytics">Analytics</Link>
            
            {isSignedIn ? (
              <HStack spacing={3}>
                <Text fontSize="sm" color="gray.600">
                  Hello, {user?.firstName || user?.emailAddresses[0]?.emailAddress}!
                </Text>
                <SignOutButton>
                  <Button colorScheme="red" variant="outline" size="sm">
                    Sign Out
                  </Button>
                </SignOutButton>
              </HStack>
            ) : (
              <SignInButton>
                <Button colorScheme="purple" variant="solid" size="sm">
                  Sign In
                </Button>
              </SignInButton>
            )}
            
                <ContactModal />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}

