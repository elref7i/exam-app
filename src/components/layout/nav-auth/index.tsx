import Link from 'next/link';
import { Button } from '@/components/ui/button';
import SelectLanguage from './components/select-language';

/**
 * A functional component that renders a navigation bar for authentication.
 *
 * @component
 * @example
 * return (
 *   <HeaderAuth />
 * )
 *
 * @returns `JSX.Element` The HeaderAuth component displaying authentication links and language selection.
 */

export default function HeaderAuth() {
  return (
    <nav className="flex fixed top-10 right-20  justify-end items-center space-x-2">
      {/* Select */}
      <SelectLanguage />

      {/* Button */}
      <Button variant="ghost">
        <Link href={'/login'}>Sign in</Link>
      </Button>

      {/* Button */}
      <Button variant="outline">
        <Link href={'/register'}>Register</Link>
      </Button>
    </nav>
  );
}
