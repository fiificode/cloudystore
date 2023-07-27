import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='text-5xl'>Cloudy Store</h1>
      <Link href={"/sign-in"}>
        <Button>This is Button</Button>
      </Link>
    </main>
  )
}
