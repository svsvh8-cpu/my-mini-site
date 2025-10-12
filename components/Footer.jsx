'use client';
import { Box, Container, Flex, HStack, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Footer() {
  return (
    <Box as="footer" borderTop="1px solid #eee" mt={10} bg="white">
      <Container maxW="6xl" py={6}>
        <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" gap={4}>
              <Text fontSize="sm">© {new Date().getFullYear()} PropertiX</Text>
          <HStack spacing={6}>
            <Link as={NextLink} href="/">Home</Link>
            <Link as={NextLink} href="/about">About</Link>
            <Link as={NextLink} href="/contact">Contact</Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
