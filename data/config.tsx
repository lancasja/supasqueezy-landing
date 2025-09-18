import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Supasqueezy',
    description: 'The fastest way to build cross-platform desktop apps with licensing and user accounts.',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      // {
      //   id: 'faq',
      //   label: 'FAQ',
      // },
      {
        label: 'Start building',
        href: '#',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{' '}
        <Link href="#">JAML</Link>
      </>
    ),
    links: [
      {
        href: 'mailto:jaml17@proton.me',
        label: 'Contact',
      },
      {
        href: 'https://github.com/lancasja/supasqueezy',
        label: <FaGithub size="14" />,
      },
    ],
  },
}

export default siteConfig
