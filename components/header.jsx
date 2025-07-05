import React from 'react';
import { SignInButton, UserButton } from '@clerk/nextjs';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { FileText, LayoutDashboard, StarsIcon, ChevronDown, GraduationCap, PenBox } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeToggle from './theme-toggle';

const Header = () => {
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href='/'>
          <Image
            src='/logo.svg'
            alt='Logo'
            width={200}
            height={60}
            className='h-20 py-1 w-auto object-contain'
          />
        </Link>

        <div className='flex items-center space-x-2 md:space-x-4'>
          <SignedIn>
            <Link href="/dashboard">
              <Button variant='outline'>
                <LayoutDashboard className='h-4 w-4' />
                <span className='hidden md:block'>Country Insights</span>
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button>
                  <StarsIcon className='h-4 w-4' />
                  <span className='hidden md:block'>Tools</span>
                  <ChevronDown className='h-4 w-4' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href='/diet' className='flex items-center gap-2'>
                    <FileText className='h-4 w-4' />
                    <span className='hidden md:block'>Your Diet-Plans</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href='/diet/create' className='flex items-center gap-2'>
                    <PenBox className='h-4 w-4' />
                    Create Diet-Plan
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href='/healthAssistant' className='flex items-center gap-2'>
                    <GraduationCap className='h-4 w-4' />
                    Health Assistant
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant='outline'>Sign In</Button>
            </SignInButton>
          </SignedOut>

          <ThemeToggle />
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-10 h-10',
                  userButtonPopoverCard: 'shadow-xl',
                  userPreviewMainIdentifier: 'font-semibold',
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;

