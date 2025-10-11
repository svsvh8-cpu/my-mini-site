import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Container, Heading, Text } from '@chakra-ui/react';

export default function DashboardPage() {
  return (
    <>
      <Navbar />
      <Container maxW="6xl" py={10}>
        <Heading mb={3}>Dashboard</Heading>
        <Text color="gray.600" fontSize="xl">Поехали Епт</Text>
      </Container>
      <Footer />
    </>
  );
}
