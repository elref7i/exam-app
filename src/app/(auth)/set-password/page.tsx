import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import LeftAuth from '@/components/features/left-auth/left-auth';
import ContinueWith from '@/components/features/continue/continue-with';
import HeaderAuth from '@/components/layout/nav-auth';

export default function Page() {
  return (
    <main className="flex min-h-screen max-h-screen items-center h-screen gap-32">
      {/* Left Section */}
      <LeftAuth />

      {/* Right Section */}
      <section className="sign-in">
        {/* Header */}
        <HeaderAuth />

        {/* Form */}
        <form className="w-[410px]">
          {/* Sign in */}
          <section className="sign-in mb-8">
            {/* Inputs */}
            <div className="space-y-3  mb-8">
              {/* Title */}
              <h2 className="font-bold text-2xl">Set a Password</h2>

              {/* Password */}
              <div className="password">
                <Input type="password" placeholder="Password" />
              </div>

              {/* Confirm password */}
              <div className="confirm-password">
                <Input type="password" placeholder="Confirm Password" />
              </div>
            </div>

            {/* Button */}
            <Button
              type="submit"
              className="w-full h-14 shadow-primary-shadow rounded-[20px]"
            >
              Set Change
            </Button>
          </section>

          {/* Continue with */}
          <ContinueWith />
        </form>
      </section>
    </main>
  );
}
