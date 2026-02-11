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
        href: 'https://jamlstudio.lemonsqueezy.com/checkout/buy/17c9711c-2bff-47bb-89fe-5473bf212a5b?logo=0&discount=0',
        label: 'Start building',
      },
    },
  ],
}
