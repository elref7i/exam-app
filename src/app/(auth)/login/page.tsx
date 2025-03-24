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
            <div className="space-y-8 mb-10">
              {/* Title */}
              <h2 className="font-bold text-2xl">Sign in</h2>

              {/* Email */}
              <div className="email">
                {/* Input */}
                <Input type="email" placeholder="Email" />
              </div>

              {/* Password */}
              <div className="password">
                {/* Input */}
                <Input
                  className="mb-4"
                  type="password"
                  placeholder="Password"
                />

                {/* Link */}
                <Link
                  className="text-base text-end block text-hiro"
                  href={'/forgetpassword'}
                >
                  Recover Password ?
                </Link>
              </div>
            </div>

            {/* Button*/}
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
      </section>
    </main>
  );
}
