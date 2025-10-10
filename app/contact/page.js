import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Container, Heading, Text } from '@chakra-ui/react';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Container maxW="6xl" py={10}>
        <Heading mb={3}>Contact</Heading>
        <Text color="gray.600">Write to us at hello@example.com</Text>
      </Container>
      <Footer />
    </>
  );
}
