import { Box, Container, Heading, Text, Button } from '@chakra-ui/react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Container maxW="container.md" py="20">
      <Box textAlign="center">
        <Heading size="2xl" mb="4">
          404 - Page Not Found
        </Heading>
        <Text fontSize="lg" mb="8" color="gray.600">
          The page you're looking for doesn't exist.
        </Text>
        <Button as={Link} href="/" colorScheme="primary">
          Go Home
        </Button>
      </Box>
    </Container>
  )
}
