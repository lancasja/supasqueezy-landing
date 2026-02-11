'use client'

import {
  Button,
  HStack,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react'
import React, { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (status === 'loading') return

    setErrorMessage('')
    setStatus('loading')

    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setStatus('error')
        setErrorMessage(
          typeof data?.error === 'string' ? data.error : 'Something went wrong. Please try again.',
        )
        return
      }

      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <Text color="green.500" _dark={{ color: 'green.400' }} fontSize="sm" mt="8">
        You&apos;re on the list. We&apos;ll be in touch.
      </Text>
    )
  }

  return (
    <VStack as="form" onSubmit={handleSubmit} alignItems="stretch" spacing="2" w="full" maxW="md" mt="8">
      <HStack gap="2" flexWrap={{ base: 'wrap', sm: 'nowrap' }}>
        <Input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          focusBorderColor="primary.500"
          borderColor="gray.600"
          _dark={{ borderColor: 'whiteAlpha.300' }}
          isDisabled={status === 'loading'}
          flex="1"
          minW="0"
          aria-invalid={status === 'error'}
          aria-describedby={status === 'error' ? 'waitlist-error' : 'waitlist-helper'}
        />
        <Button
          type="submit"
          colorScheme="primary"
          isLoading={status === 'loading'}
          loadingText="Joining…"
          flexShrink={0}
        >
          Join waitlist
        </Button>
      </HStack>
      {status === 'error' && (
        <Text id="waitlist-error" color="red.500" fontSize="sm">
          {errorMessage}
        </Text>
      )}
      <Text id="waitlist-helper" color="muted" fontSize="xs">
        No spam. Updates on new features and releases only.
      </Text>
    </VStack>
  )
}
