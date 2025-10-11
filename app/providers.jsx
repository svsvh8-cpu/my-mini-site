'use client';
import { ChakraProvider, createSystem, defaultConfig } from '@chakra-ui/react';
import { ClerkProvider } from '@clerk/nextjs';

const system = createSystem(defaultConfig);

export default function Providers({ children }) {
  return (
    <ClerkProvider>
      <ChakraProvider value={system}>{children}</ChakraProvider>
    </ClerkProvider>
  );
}
