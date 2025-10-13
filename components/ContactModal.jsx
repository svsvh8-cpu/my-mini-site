'use client';
import { useState } from 'react';
import { Box, Input, Textarea, Button, VStack, Text } from '@chakra-ui/react';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '14a69291-fb0e-4c54-9cde-a205704e9367',
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          subject: 'Новое сообщение с сайта PropertiX'
        })
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        alert('Ошибка при отправке. Попробуйте еще раз.');
      }
    } catch (error) {
      alert('Ошибка при отправке. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsSuccess(false);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Button 
        onClick={handleOpen}
        colorScheme="purple" 
        variant="solid" 
        size="sm"
      >
        Get in touch
      </Button>

      {isOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(0, 0, 0, 0.5)"
          zIndex="9999"
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={handleClose}
        >
          <Box
            bg="white"
            borderRadius="xl"
            p={6}
            maxW="md"
            w="90%"
            maxH="90vh"
            overflow="auto"
            onClick={(e) => e.stopPropagation()}
            boxShadow="0 25px 50px -12px rgba(0, 0, 0, 0.25)"
          >
            <Box
              bg="linear-gradient(90deg, #00d4ff, #ff00ff)"
              color="black"
              p={4}
              borderRadius="lg"
              mb={4}
              position="relative"
            >
              <Text fontSize="xl" fontWeight="bold" textAlign="center">
                Связаться с нами
              </Text>
              <Button
                position="absolute"
                top={2}
                right={2}
                size="sm"
                variant="ghost"
                onClick={handleClose}
                color="black"
              >
                ✕
              </Button>
            </Box>
            {isSuccess ? (
              <VStack spacing={4} py={8}>
                <Text fontSize="2xl" color="green.500" fontWeight="bold">
                  ✅ Успешно отправлено!
                </Text>
                <Text color="gray.600" textAlign="center">
                  Спасибо за ваше сообщение. Мы свяжемся с вами в ближайшее время.
                </Text>
                <Button onClick={handleClose} colorScheme="green" size="md">
                  Закрыть
                </Button>
              </VStack>
            ) : (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                  <Box width="100%">
                    <Text mb={2} fontWeight="bold">Имя *</Text>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Введите ваше имя"
                      required
                    />
                  </Box>

                  <Box width="100%">
                    <Text mb={2} fontWeight="bold">Телефон *</Text>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Введите ваш телефон"
                      required
                    />
                  </Box>

                  <Box width="100%">
                    <Text mb={2} fontWeight="bold">Email *</Text>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Введите ваш email"
                      required
                    />
                  </Box>

                  <Box width="100%">
                    <Text mb={2} fontWeight="bold">Комментарий *</Text>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Расскажите о вашем проекте или вопросе"
                      rows={4}
                      required
                    />
                  </Box>

                  <Button
                    type="submit"
                    colorScheme="purple"
                    size="lg"
                    width="full"
                    isLoading={isSubmitting}
                    loadingText="Отправка..."
                  >
                    Отправить
                  </Button>
                </VStack>
              </form>
            )}
          </Box>
        </Box>
      )}
    </>
  );
}
