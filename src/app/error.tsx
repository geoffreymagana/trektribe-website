
'use client';

import { Button } from '@/components/ui/button';
import { TriangleAlert } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container flex flex-col items-center justify-center min-h-[60vh] text-center">
      <TriangleAlert className="w-16 h-16 text-destructive mb-4" />
      <h1 className="text-4xl font-extrabold mb-2 font-headline">
        Oops! Something Went Wrong
      </h1>
      <p className="text-lg text-muted-foreground max-w-md mb-6">
        An unexpected error occurred. We've been notified and are looking into it. Please try again later.
      </p>
      <div className="flex gap-4">
        <Button onClick={() => reset()}>Try Again</Button>
        <Button variant="outline" asChild>
          <Link href="/">Go to Homepage</Link>
        </Button>
      </div>
    </div>
  );
}
