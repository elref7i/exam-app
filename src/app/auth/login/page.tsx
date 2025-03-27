import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ContinueWith from '@/components/features/continue/continue-with';

export default function Page() {
  return (
    <form className="w-[410px]">
      {/* Sign in */}
      <section className="sign-in mb-8">
        {/* Inputs */}
        <div className="space-y-3  mb-8">
          {/* Title */}
          <h2 className="font-bold text-2xl">Sign in</h2>

          {/* Email */}
          <div className="email">
            <Input type="email" placeholder="Email" />
          </div>

          {/* Password */}
          <div className="password">
            <Input className="mb-2" type="password" placeholder="Password" />

            {/* Link */}
            <Link
              className="text-base text-end block text-hiro"
              href={'/auth/forgot-password'}
            >
              Recover Password ?
            </Link>
          </div>
        </div>

        {/* Button */}
        <Button
          type="submit"
          className="w-full h-14 shadow-primary-shadow rounded-[20px]"
        >
          Sign in
        </Button>
      </section>

      {/* Continue with */}
      <ContinueWith />
    </form>
  );
}
