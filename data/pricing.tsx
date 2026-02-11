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
      price: '$149',
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
        href: 'https://jamlstudio.lemonsqueezy.com/checkout/buy/d362eda0-4d9a-47cd-b63f-836d840a23bb',
        label: 'Start building',
      },
    },
  ],
}
