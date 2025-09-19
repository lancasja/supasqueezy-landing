'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from '@saas-ui/auth'
import { SaasProvider } from '@saas-ui/react'

import { theme } from '#theme'

export function Provider(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <SaasProvider>
        <AuthProvider>{props.children}</AuthProvider>
      </SaasProvider>
    </ChakraProvider>
  )
}
