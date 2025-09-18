import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Simple, transparent pricing',
  description:
    'One-time payment for lifetime access to all features.',
  plans: [
    {
      id: 'one-time',
      title: 'SupaSqueezy',
      description: 'Complete desktop app boilerplate with licensing and authentication.',
      price: '$99',
      isRecommended: true,
      features: [
        {
          title: 'Unlimited commercial use',
        },
        {
          title: 'Source code ownership',
        },
        {
          title: 'Cross-platform distribution',
        },
        {
          title: 'Professional license management',
        },
        {
          title: 'User authentication system',
        },
        {
          title: 'Secure data storage',
        },
        {
          title: 'Modern UI components',
        },
        {
          title: 'Production-ready builds',
        },
      ],
      action: {
        href: '#',
        label: 'Start building',
      },
    },
  ],
}
