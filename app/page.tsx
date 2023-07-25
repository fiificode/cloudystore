import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-5xl'>Cloudy Store</h1>
      <Button>This is Button</Button>
    </main>
  )
}