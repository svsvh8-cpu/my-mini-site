'use client';
import { Container, SimpleGrid, Heading, Text, Button, Stack, Image } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function Hero() {
  return (
    <Container maxW="6xl" py={{ base: 10, md: 16 }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
        <Stack spacing={5}>
          <Heading as="h1" size="2xl" lineHeight="1.1">
            Build something tiny, <Text as="span" color="brand.600">ship fast</Text>.
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Next.js + Chakra UI: clean layout, nice defaults, zero hassle.
          </Text>
          <Stack direction="row" spacing={3}>
            <Button as={NextLink} href="/about" colorScheme="purple" size="md">Learn more</Button>
            <Button as={NextLink} href="/contact" variant="outline" size="md">Contact</Button>
          </Stack>
        </Stack>

        <Image
          src="https://images.unsplash.com/photo-1529336953121-4c03f3e7a1fe?w=1200&q=80&auto=format&fit=crop"
          alt="Hero"
          rounded="xl"
          shadow="lg"
        />
      </SimpleGrid>
    </Container>
  );
}
