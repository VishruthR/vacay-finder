import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features'
import Card from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <Card />
    </>
  )
}
