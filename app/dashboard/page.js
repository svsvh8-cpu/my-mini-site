'use client';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Container, Heading, Text, Box, VStack, SimpleGrid, HStack } from '@chakra-ui/react';

export default function DashboardPage() {
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
                bgGradient="linear(to-r, #00d4ff, #ff00ff, #00ff88)"
                bgClip="text"
                textShadow="0 0 20px rgba(0, 212, 255, 0.5)"
              >
                Dashboard
              </Heading>
              <Text 
                fontSize="xl" 
                color="#00d4ff"
                textShadow="0 0 10px rgba(0, 212, 255, 0.3)"
              >
                Поехали Епт
              </Text>
            </Box>

            {/* Stats Grid */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={6} mb={8}>
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
                <Text color="#00d4ff" fontSize="sm" fontWeight="bold" mb={2}>TOTAL REVENUE</Text>
                <Text color="white" fontSize="2xl" fontWeight="bold" mb={2}>01,54,456</Text>
                <Text color="#00d4ff" fontSize="sm">+12.5% from last month</Text>
              </Box>

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
                <Text color="#ff00ff" fontSize="sm" fontWeight="bold" mb={2}>ACTIVE USERS</Text>
                <Text color="white" fontSize="2xl" fontWeight="bold" mb={2}>17,599</Text>
                <Text color="#ff00ff" fontSize="sm">+8.2% from last month</Text>
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
                <Text color="white" fontSize="2xl" fontWeight="bold" mb={2}>23.1%</Text>
                <Text color="#00ff88" fontSize="sm">+2.1% from last month</Text>
              </Box>

              <Box
                bg="rgba(255, 165, 0, 0.1)"
                border="1px solid"
                borderColor="#ffa500"
                borderRadius="xl"
                p={6}
                boxShadow="0 0 20px rgba(255, 165, 0, 0.2)"
                _hover={{
                  boxShadow: "0 0 30px rgba(255, 165, 0, 0.4)",
                  transform: "translateY(-2px)"
                }}
                transition="all 0.3s ease"
              >
                <Text color="#ffa500" fontSize="sm" fontWeight="bold" mb={2}>GROWTH</Text>
                <Text color="white" fontSize="2xl" fontWeight="bold" mb={2}>53M</Text>
                <Text color="#ffa500" fontSize="sm">+15.3% from last month</Text>
              </Box>
            </SimpleGrid>

            {/* Google Sheets iframe with neon styling */}
            <Box
              bg="rgba(0, 0, 0, 0.3)"
              border="2px solid"
              borderColor="#00d4ff"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="0 0 30px rgba(0, 212, 255, 0.3)"
              width="38%"
              mx="auto"
              backdropFilter="blur(10px)"
            >
              <Box
                bg="linear-gradient(90deg, #00d4ff, #ff00ff)"
                p={3}
                textAlign="center"
              >
                <Text color="black" fontWeight="bold" fontSize="lg">
                  📊 LIVE DATA TABLE
                </Text>
              </Box>
              <Box
                width="100%"
                height="1688"
                overflow="hidden"
                position="relative"
                style={{
                  background: 'rgba(0, 0, 0, 0.1)',
                  borderRadius: '0 0 12px 12px'
                }}
              >
                <iframe
                  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRMyfznGb7ySdDCbndf7T98f49QMd_h3q6kjd5EaAEzV_5In92BudAb4Q6vFIoVlc9PWmvNvP-TA-bz/pubhtml?gid=0&single=true&range=A:E&widget=false&chrome=false"
                  width="100%"
                  height="1688"
                  frameBorder="0"
                  title="Google Sheets Table"
                  style={{
                    border: 'none',
                    borderRadius: '0 0 12px 12px',
                    background: 'transparent',
                    transform: 'scale(0.8)',
                    transformOrigin: 'top left',
                    width: '125%',
                    height: '125%'
                  }}
                />
              </Box>
            </Box>
          </VStack>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
