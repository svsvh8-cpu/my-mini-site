import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Container, Heading, Text } from '@chakra-ui/react';

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <Container maxW="6xl" py={10}>
        <Heading mb={3}>About</Heading>
        <Text color="gray.600">Tiny 3-page site using Next.js + Chakra UI.</Text>
      </Container>
      <Footer />
    </>
  );
}
