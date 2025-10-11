import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Container, Heading, Text, Box, VStack } from '@chakra-ui/react';

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <Container maxW="6xl" py={10}>
        <VStack spacing={6} align="stretch">
          <Heading mb={3}>Dashboard</Heading>
          <Text color="gray.600" fontSize="xl">Поехали Епт</Text>
          
          <Box
            border="2px solid"
            borderColor="gray.200"
            borderRadius="lg"
            overflow="hidden"
            boxShadow="md"
            width="50%"
            mx="auto"
          >
            <iframe
              src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRMyfznGb7ySdDCbndf7T98f49QMd_h3q6kjd5EaAEzV_5In92BudAb4Q6vFIoVlc9PWmvNvP-TA-bz/pubhtml?gid=0&single=true&range=A:E"
              width="100%"
              height="300"
              frameBorder="0"
              title="Google Sheets Table"
              style={{
                border: 'none',
                borderRadius: '8px'
              }}
            />
          </Box>
        </VStack>
      </Container>
      <Footer />
    </>
  );
}
