import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import LeftAuth from '@/components/features/left-auth/left-auth';
import ContinueWith from '@/components/features/continue/continue-with';
import HeaderAuth from '@/components/layout/nav-auth';

export default function Page() {
  return (
    <main className="flex min-h-screen max-h-screen items-center j h-screen gap-32">
      {/* Left Section */}
      <LeftAuth />

      {/* Right Section */}
      <section className="sign-in flex-1">
        {/* Header */}
        <HeaderAuth />

        {/* Form */}
        <form className="w-[410px] mt-10">
          {/* Sign in */}
          <section className="sign-up mb-8">
            {/* Inputs */}
            <div className="space-y-3 mb-8">
              {/* Title */}
              <h2 className="font-bold text-2xl">Sign up</h2>

              {/* First Name */}
              <div className="first-name">
                <Input type="text" placeholder="First Name" />
              </div>

              {/* Last Name */}
              <div className="last-name">
                <Input type="text" placeholder="Last Name" />
              </div>

              {/* Email */}
              <div className="email">
                <Input type="email" placeholder="Email" />
              </div>

              {/* Password */}
              <div className="password">
                <Input type="password" placeholder="Password" />
              </div>

              {/* Confirm password */}
              <div className="password">
                <Input
                  className="mb-2"
                  type="password"
                  placeholder="Confirm Password"
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
