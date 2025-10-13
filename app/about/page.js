'use client';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Container, Heading, Text, Box, Button, VStack, HStack, SimpleGrid } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Box
        minH="100vh"
        position="relative"
        backgroundImage="url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundAttachment="fixed"
      >
        {/* Overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)"
        />
        
        {/* Content */}
        <Box position="relative" zIndex="1">
          <Container maxW="8xl" py={20}>
            <VStack spacing={12} align="center" textAlign="center">
              {/* Main Title */}
              <VStack spacing={6}>
                <Heading
                  fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
                  fontWeight="bold"
                  color="white"
                  textShadow="0 0 30px rgba(0,0,0,0.8)"
                  lineHeight="1.1"
                >
                  Dubai Real Estate
                  <Text
                    as="span"
                    display="block"
                    bgGradient="linear(to-r, #00d4ff, #ff00ff, #00ff88)"
                    bgClip="text"
                    textShadow="0 0 20px rgba(0, 212, 255, 0.5)"
                  >
                    Analytical Platform
                  </Text>
                </Heading>
                
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color="white"
                  maxW="3xl"
                  textShadow="0 0 10px rgba(0,0,0,0.8)"
                  opacity={0.9}
                >
                  Advanced analytics and insights for Dubai&apos;s premium real estate market. 
                  Powered by cutting-edge technology and comprehensive market data.
                </Text>
              </VStack>

              {/* Features Grid */}
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full" maxW="6xl">
                <Box
                  bg="rgba(255, 255, 255, 0.1)"
                  backdropFilter="blur(10px)"
                  border="1px solid rgba(255, 255, 255, 0.2)"
                  borderRadius="xl"
                  p={8}
                  textAlign="center"
                  _hover={{
                    transform: "translateY(-5px)",
                    boxShadow: "0 20px 40px rgba(0, 212, 255, 0.3)"
                  }}
                  transition="all 0.3s ease"
                >
                  <Box
                    w="16"
                    h="16"
                    bg="linear-gradient(135deg, #00d4ff, #0099cc)"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mx="auto"
                    mb={4}
                    boxShadow="0 0 20px rgba(0, 212, 255, 0.5)"
                  >
                    <Text fontSize="4xl" color="white">📊</Text>
                  </Box>
                  <Heading size="lg" color="white" mb={3}>Market Analytics</Heading>
                  <Text color="rgba(255,255,255,0.8)">
                    Comprehensive market trends and property valuations
                  </Text>
                </Box>

                <Box
                  bg="rgba(255, 255, 255, 0.1)"
                  backdropFilter="blur(10px)"
                  border="1px solid rgba(255, 255, 255, 0.2)"
                  borderRadius="xl"
                  p={8}
                  textAlign="center"
                  _hover={{
                    transform: "translateY(-5px)",
                    boxShadow: "0 20px 40px rgba(255, 0, 255, 0.3)"
                  }}
                  transition="all 0.3s ease"
                >
                  <Box
                    w="16"
                    h="16"
                    bg="linear-gradient(135deg, #ff00ff, #cc00cc)"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mx="auto"
                    mb={4}
                    boxShadow="0 0 20px rgba(255, 0, 255, 0.5)"
                  >
                    <Text fontSize="4xl" color="white">🤖</Text>
                  </Box>
                  <Heading size="lg" color="white" mb={3}>AI Insights</Heading>
                  <Text color="rgba(255,255,255,0.8)">
                    Machine learning predictions and investment opportunities
                  </Text>
                </Box>

                <Box
                  bg="rgba(255, 255, 255, 0.1)"
                  backdropFilter="blur(10px)"
                  border="1px solid rgba(255, 255, 255, 0.2)"
                  borderRadius="xl"
                  p={8}
                  textAlign="center"
                  _hover={{
                    transform: "translateY(-5px)",
                    boxShadow: "0 20px 40px rgba(0, 255, 136, 0.3)"
                  }}
                  transition="all 0.3s ease"
                >
                  <Box
                    w="16"
                    h="16"
                    bg="linear-gradient(135deg, #00ff88, #00cc66)"
                    borderRadius="full"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    mx="auto"
                    mb={4}
                    boxShadow="0 0 20px rgba(0, 255, 136, 0.5)"
                  >
                    <Text fontSize="4xl" color="white">⭐</Text>
                  </Box>
                  <Heading size="lg" color="white" mb={3}>Premium Service</Heading>
                  <Text color="rgba(255,255,255,0.8)">
                    Exclusive access to luxury property data and insights
                  </Text>
                </Box>
              </SimpleGrid>

              {/* CTA Section */}
              <VStack spacing={6}>
                <Text
                  fontSize={{ base: "xl", md: "2xl" }}
                  color="white"
                  fontWeight="semibold"
                  textShadow="0 0 10px rgba(0,0,0,0.8)"
                >
                  Ready to unlock Dubai&apos;s real estate potential?
                </Text>
                
                <HStack spacing={4}>
                  <Button
                    as={NextLink}
                    href="/contact"
                    size="lg"
                    bg="linear-gradient(135deg, #00d4ff, #0099cc)"
                    color="white"
                    _hover={{
                      bg: "linear-gradient(135deg, #0099cc, #006699)",
                      transform: "translateY(-2px)",
                      boxShadow: "0 10px 25px rgba(0, 212, 255, 0.4)"
                    }}
                    _active={{
                      transform: "translateY(0)"
                    }}
                    px={8}
                    py={6}
                    fontSize="lg"
                    fontWeight="bold"
                    borderRadius="xl"
                    boxShadow="0 0 20px rgba(0, 212, 255, 0.3)"
                    transition="all 0.3s ease"
                  >
                    Get in Touch
                  </Button>
                  
                  <Button
                    as={NextLink}
                    href="/dashboard"
                    size="lg"
                    variant="outline"
                    borderColor="white"
                    color="white"
                    _hover={{
                      bg: "rgba(255, 255, 255, 0.1)",
                      borderColor: "#00d4ff",
                      color: "#00d4ff",
                      transform: "translateY(-2px)"
                    }}
                    px={8}
                    py={6}
                    fontSize="lg"
                    fontWeight="bold"
                    borderRadius="xl"
                    transition="all 0.3s ease"
                  >
                    View Dashboard
                  </Button>
                </HStack>
              </VStack>
            </VStack>
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
}
