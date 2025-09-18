'use client'

import {
  Box,
  ButtonGroup,
  Container,
  HStack,
  Heading,
  Icon,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiTerminal,
  FiToggleLeft,
  FiTrendingUp,
  FiMail
} from 'react-icons/fi'
import { SiAuth0, SiTypescript } from 'react-icons/si'
import { GrLicense, GrStorage } from 'react-icons/gr'
import { GiPlatform } from 'react-icons/gi'
import { MdOutlineDesignServices, MdMiscellaneousServices, MdOutlineRocketLaunch, MdMemory } from 'react-icons/md'
import { TbProtocol } from "react-icons/tb";
import { IoCloudOffline } from "react-icons/io5";
import { IoRepeat } from "react-icons/io5";
import { FaApple } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { ElectronLogo, SupabaseLogo, LemonsqueezyLogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

export const meta: Metadata = {
  title: 'Supasqueezy',
  description: 'The fastest way to build cross-platform desktop apps with licensing and user accounts.',
}

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      {/* <TestimonialsSection /> */}

      <PricingSection />

      {/* <FaqSection /> */}
    </Box>
  )
}

const HeroSection: React.FC = () => {
  const logoHeight = '28px'

  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                SupaSqueezy 🚀
                {/* <Br /> software faster */}
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                A production-ready Electron boilerplate that helps developers ship desktop apps with built-in user authentication, license management, and cross-platform builds.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <ElectronLogo height={logoHeight} />
                <SupabaseLogo height={logoHeight} />
                <LemonsqueezyLogo height={logoHeight} />
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="#">
                  Start building
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="mailto:jaml17@proton.me"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiMail}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  Contact
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'User Authentication',
            icon: SiAuth0,
            description: 'Supabase-powered auth with pre-built UI.',
            iconPosition: 'left',
            delay: 0.6,
          },
          {
            title: 'License Management',
            icon: GrLicense,
            description:
              'LemonSqueezy integration with secure license validation.',
            iconPosition: 'left',
            delay: 0.8,
          },
          {
            title: 'Cross-Platform Builds',
            icon: GiPlatform,
            description:
              'Ship for Windows, macOS, and Linux with a single command.',
            iconPosition: 'left',
            delay: 1,
          },
          {
            title: 'Secure Storage',
            icon: GrStorage,
            description:
              'Encrypted local storage for license keys.',
            iconPosition: 'left',
            delay: 1.1,
          },
          {
            title: 'Modern UI',
            icon: MdOutlineDesignServices,
            description:
              'Mantine components, easy to customize and swap for your preferred library.',
            iconPosition: 'left',
            delay: 1.1,
          },
          {
            title: 'Backend Services',
            icon: MdMiscellaneousServices,
            description:
              'Simple service container for your business logic.',
            iconPosition: 'left',
            delay: 1.1,
          },
          {
            title: 'Production Ready',
            icon: MdOutlineRocketLaunch,
            description:
              'Electron Forge with proper packaging and signing.',
            iconPosition: 'left',
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Solid foundations">
        <Text color="muted" fontSize="lg">
          We don&apos;t like to re-invent the wheel, neither should you. We
          selected the most productive and established tools in the scene and
          build Supasqueezy on top of it.
        </Text>
      </HighlightsItem>
      <HighlightsItem colSpan={[1, null, 2]} title="Who It’s For">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Developers and startups who want to skip boilerplate setup and focus on building features that matter. Perfect for indie hackers, small teams, and SaaS founders.
          </Text>
        </VStack>
      </HighlightsItem>
      <HighlightsItem
        colSpan={[1, null, 4]}
        title="Start your next idea two steps ahead"
      >
        <Text color="muted" fontSize="lg">
          We took care of all your basic desktop app needs, so you can start
          building functionality that makes your product unique.
        </Text>
        <Wrap mt="8">
          {[
            'authentication',
            'navigation',
            'layouts',
            'billing',
            'documentation',
            'theming',
            'upselling',
            'feature flags',
            'responsiveness',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Not your standard boilerplate.
        </Heading>
      }
      description={
        <>
          SupaSqueezy includes everything you need to build modern cross-platform desktop apps.
          <Br />
          Use it as a template for your next product or foundation for your app.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Custom Protocol Handling.',
          icon: TbProtocol,
          description:
            'Deep linking support for authentication callbacks and external integrations.',
          variant: 'inline',
        },
        {
          title: 'License Activation Tracking.',
          icon: GrLicense,
          description:
            'Device-based instance management with activation limits and usage monitoring.',
          variant: 'inline',
        },
        {
          title: 'Offline License Validation.',
          icon: IoCloudOffline,
          description:
            '24-hour cached license validation for offline operation with automatic fallback.',
          variant: 'inline',
        },
        {
          title: 'Retry Logic with Exponential Backoff.',
          icon: IoRepeat,
          description:
            "Network resilience with intelligent retry mechanisms for failed API calls.",
          variant: 'inline',
        },
        {
          title: 'Service Lifecycle Management.',
          icon: FiTrendingUp,
          description:
            'License-gated backend services that automatically start/stop based on validation status.',
          variant: 'inline',
        },
        {
          title: 'Health Check System.',
          icon: FiToggleLeft,
          description:
            'Built-in service monitoring and status reporting for backend integrations.',
          variant: 'inline',
        },
        {
          title: 'Environment Configuration Validation.',
          icon: FiTerminal,
          description:
            'Automated setup validation with helpful error messages and configuration guidance.',
          variant: 'inline',
        },
        {
          title: 'macOS Code Signing & Notarization.',
          icon: FaApple,
          description:
            'Production-ready Apple Developer integration with Gatekeeper compatibility.',
          variant: 'inline',
        },
        {
          title: 'TypeScript Throughout.',
          icon: SiTypescript,
          description:
            'Comprehensive type safety with full TypeScript implementation and type definitions.',
          variant: 'inline',
        },
        {
          title: 'Example Service Implementations.',
          icon: FaGears,
          description:
            'Ready-to-use API and Database service examples with integration patterns.',
          variant: 'inline',
        },
        {
          title: 'Memory Management.',
          icon: MdMemory,
          description:
            'Proper cleanup and resource management for long-running desktop applications.',
          variant: 'inline',
        }
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
