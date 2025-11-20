
import { Button } from '@/components/ui/button';
import { SearchX } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[60vh] text-center">
        <SearchX className="w-16 h-16 text-primary mb-4" />
        <h1 className="text-4xl font-extrabold mb-2 font-headline">404 - Page Not Found</h1>
        <p className="text-lg text-muted-foreground max-w-md mb-6">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <Button asChild>
            <Link href="/">Go to Homepage</Link>
        </Button>
    </div>
  );
}
