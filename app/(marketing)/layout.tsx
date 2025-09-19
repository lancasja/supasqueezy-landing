import { MarketingLayout } from '#components/layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Supasqueezy',
  description: 'The fastest way to build cross-platform desktop apps with licensing and user accounts.',
}

export default function Layout(props: { children: React.ReactNode }) {
  return <MarketingLayout>{props.children}</MarketingLayout>
}
