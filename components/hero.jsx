"use client"

import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'
import Image from "next/image" 

function HeroSection() {
  return (
    <section className='w-full pt-36 md:pt-48 pb-10'>
        <div className='space-y-6 text-center'>
            <div className='space-y-6 mx-auto'>
                <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl gradient font-extrabold tracking-tighter bg-gradient-to-b from-gray-400 via-gray-200 to-gray-600 bg-clip-text pb-2 pr-2 animate-gradient">
                    YOUR AI HEALTH PLANNER
                    <br />
                    FOR LIFELONG WELLNESS
                </h1>
                <p>
                    Advance your health with personalized diet plans, fitness tracking, and 
                    AI-powered tools for lifelong wellness
                </p>
            </div>
        

            <div className='space-x-4'>
                <Link href='/sign-up'>
                    <Button size='lg' className='px-8'>
                        Sign Up
                    </Button>
                </Link>
                <Link href='/healthAssistant'>
                    <Button size='lg' className='px-8' variant='outline'>
                        Chat with AI
                    </Button>
                </Link>
            </div>

        <div>
            <div>
                <Image
                src={"/banner1.jpeg"}
                width={1100}
                height={500}
                alt="Banner"
                className='rounded-lg shadow-2xl border mx-auto'
                priority
                />
            </div>
        </div>
        </div>
    </section>
  )
}

export default HeroSection
