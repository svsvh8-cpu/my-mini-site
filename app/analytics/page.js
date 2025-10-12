'use client';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Container, Heading, Text, Box, VStack, SimpleGrid, HStack } from '@chakra-ui/react';

export default function AnalyticsPage() {
  return (
    <>
      <Navbar />
      <Box
        minH="100vh"
        bg="linear-gradient(135deg, #0a0a23 0%, #1a1a3a 50%, #0f0f2e 100%)"
        color="white"
      >
        <Container maxW="8xl" py={10}>
          <VStack spacing={8} align="stretch">
            <Box textAlign="center" mb={8}>
              <Heading 
                mb={4} 
                fontSize="4xl" 
                fontWeight="bold"
                bgGradient="linear(to-r, #ff00ff, #00d4ff, #00ff88)"
                bgClip="text"
                textShadow="0 0 20px rgba(255, 0, 255, 0.5)"
              >
                Analytics
              </Heading>
              <Text 
                fontSize="xl" 
                color="#ff00ff"
                textShadow="0 0 10px rgba(255, 0, 255, 0.3)"
              >
                Аналитика и метрики
              </Text>
            </Box>

            {/* Analytics Stats Grid */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} mb={8}>
              <Box
                bg="rgba(255, 0, 255, 0.1)"
                border="1px solid"
                borderColor="#ff00ff"
                borderRadius="xl"
                p={6}
                boxShadow="0 0 20px rgba(255, 0, 255, 0.2)"
                _hover={{
                  boxShadow: "0 0 30px rgba(255, 0, 255, 0.4)",
                  transform: "translateY(-2px)"
                }}
                transition="all 0.3s ease"
              >
                <Text color="#ff00ff" fontSize="sm" fontWeight="bold" mb={2}>VISITORS</Text>
                <Text color="white" fontSize="2xl" fontWeight="bold" mb={2}>295,225</Text>
                <Text color="#ff00ff" fontSize="sm">+18.2% from last month</Text>
              </Box>

              <Box
                bg="rgba(0, 212, 255, 0.1)"
                border="1px solid"
                borderColor="#00d4ff"
                borderRadius="xl"
                p={6}
                boxShadow="0 0 20px rgba(0, 212, 255, 0.2)"
                _hover={{
                  boxShadow: "0 0 30px rgba(0, 212, 255, 0.4)",
                  transform: "translateY(-2px)"
                }}
                transition="all 0.3s ease"
              >
                <Text color="#00d4ff" fontSize="sm" fontWeight="bold" mb={2}>BOUNCE RATE</Text>
                <Text color="white" fontSize="2xl" fontWeight="bold" mb={2}>32.1%</Text>
                <Text color="#00d4ff" fontSize="sm">-5.3% from last month</Text>
              </Box>

              <Box
                bg="rgba(0, 255, 136, 0.1)"
                border="1px solid"
                borderColor="#00ff88"
                borderRadius="xl"
                p={6}
                boxShadow="0 0 20px rgba(0, 255, 136, 0.2)"
                _hover={{
                  boxShadow: "0 0 30px rgba(0, 255, 136, 0.4)",
                  transform: "translateY(-2px)"
                }}
                transition="all 0.3s ease"
              >
                <Text color="#00ff88" fontSize="sm" fontWeight="bold" mb={2}>CONVERSION</Text>
                <Text color="white" fontSize="2xl" fontWeight="bold" mb={2}>16.8%</Text>
                <Text color="#00ff88" fontSize="sm">+3.7% from last month</Text>
              </Box>
            </SimpleGrid>

            {/* Progress Charts */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={8}>
              <Box
                bg="rgba(0, 0, 0, 0.3)"
                border="1px solid"
                borderColor="#00d4ff"
                borderRadius="xl"
                p={6}
                boxShadow="0 0 20px rgba(0, 212, 255, 0.2)"
                backdropFilter="blur(10px)"
              >
                <Text color="#00d4ff" fontSize="lg" fontWeight="bold" mb={4}>
                  📈 PERFORMANCE METRICS
                </Text>
                <VStack spacing={4} align="stretch">
                  <Box>
                    <HStack justify="space-between" mb={2}>
                      <Text color="white" fontSize="sm">CPU Usage</Text>
                      <Text color="#00d4ff" fontSize="sm">78%</Text>
                    </HStack>
                    <Box
                      bg="rgba(0, 0, 0, 0.3)"
                      borderRadius="full"
                      height="8px"
                      position="relative"
                      overflow="hidden"
                    >
                      <Box
                        bg="#00d4ff"
                        height="100%"
                        width="78%"
                        borderRadius="full"
                        boxShadow="0 0 10px rgba(0, 212, 255, 0.5)"
                      />
                    </Box>
                  </Box>
                  <Box>
                    <HStack justify="space-between" mb={2}>
                      <Text color="white" fontSize="sm">Memory</Text>
                      <Text color="#ff00ff" fontSize="sm">65%</Text>
                    </HStack>
                    <Box
                      bg="rgba(0, 0, 0, 0.3)"
                      borderRadius="full"
                      height="8px"
                      position="relative"
                      overflow="hidden"
                    >
                      <Box
                        bg="#ff00ff"
                        height="100%"
                        width="65%"
                        borderRadius="full"
                        boxShadow="0 0 10px rgba(255, 0, 255, 0.5)"
                      />
                    </Box>
                  </Box>
                  <Box>
                    <HStack justify="space-between" mb={2}>
                      <Text color="white" fontSize="sm">Storage</Text>
                      <Text color="#00ff88" fontSize="sm">42%</Text>
                    </HStack>
                    <Box
                      bg="rgba(0, 0, 0, 0.3)"
                      borderRadius="full"
                      height="8px"
                      position="relative"
                      overflow="hidden"
                    >
                      <Box
                        bg="#00ff88"
                        height="100%"
                        width="42%"
                        borderRadius="full"
                        boxShadow="0 0 10px rgba(0, 255, 136, 0.5)"
                      />
                    </Box>
                  </Box>
                </VStack>
              </Box>

              <Box
                bg="rgba(0, 0, 0, 0.3)"
                border="1px solid"
                borderColor="#ff00ff"
                borderRadius="xl"
                p={6}
                boxShadow="0 0 20px rgba(255, 0, 255, 0.2)"
                backdropFilter="blur(10px)"
              >
                <Text color="#ff00ff" fontSize="lg" fontWeight="bold" mb={4}>
                  🎯 USER ENGAGEMENT
                </Text>
                <VStack spacing={4} align="stretch">
                  <Box>
                    <HStack justify="space-between" mb={2}>
                      <Text color="white" fontSize="sm">Page Views</Text>
                      <Text color="#00d4ff" fontSize="sm">1.2M</Text>
                    </HStack>
                    <Box
                      bg="rgba(0, 0, 0, 0.3)"
                      borderRadius="full"
                      height="8px"
                      position="relative"
                      overflow="hidden"
                    >
                      <Box
                        bg="#00d4ff"
                        height="100%"
                        width="85%"
                        borderRadius="full"
                        boxShadow="0 0 10px rgba(0, 212, 255, 0.5)"
                      />
                    </Box>
                  </Box>
                  <Box>
                    <HStack justify="space-between" mb={2}>
                      <Text color="white" fontSize="sm">Session Duration</Text>
                      <Text color="#ff00ff" fontSize="sm">4.2m</Text>
                    </HStack>
                    <Box
                      bg="rgba(0, 0, 0, 0.3)"
                      borderRadius="full"
                      height="8px"
                      position="relative"
                      overflow="hidden"
                    >
                      <Box
                        bg="#ff00ff"
                        height="100%"
                        width="72%"
                        borderRadius="full"
                        boxShadow="0 0 10px rgba(255, 0, 255, 0.5)"
                      />
                    </Box>
                  </Box>
                  <Box>
                    <HStack justify="space-between" mb={2}>
                      <Text color="white" fontSize="sm">Return Visitors</Text>
                      <Text color="#00ff88" fontSize="sm">68%</Text>
                    </HStack>
                    <Box
                      bg="rgba(0, 0, 0, 0.3)"
                      borderRadius="full"
                      height="8px"
                      position="relative"
                      overflow="hidden"
                    >
                      <Box
                        bg="#00ff88"
                        height="100%"
                        width="68%"
                        borderRadius="full"
                        boxShadow="0 0 10px rgba(0, 255, 136, 0.5)"
                      />
                    </Box>
                  </Box>
                </VStack>
              </Box>
            </SimpleGrid>

            {/* Analytics Content */}
            <Box
              bg="rgba(0, 0, 0, 0.3)"
              border="2px solid"
              borderColor="#00ff88"
              borderRadius="xl"
              p={8}
              boxShadow="0 0 30px rgba(0, 255, 136, 0.3)"
              backdropFilter="blur(10px)"
              textAlign="center"
            >
              <Text 
                color="#00ff88" 
                fontSize="2xl" 
                fontWeight="bold" 
                mb={4}
                textShadow="0 0 10px rgba(0, 255, 136, 0.3)"
              >
                🚀 ADVANCED ANALYTICS COMING SOON
              </Text>
              <Text color="white" fontSize="lg" opacity={0.8}>
                Real-time data visualization, predictive analytics, and AI-powered insights
              </Text>
            </Box>
          </VStack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
