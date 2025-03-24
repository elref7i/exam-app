import { Input } from '@/components/ui/input';
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
              <h2 className="font-bold text-2xl">Forgot your password?</h2>

              {/* Email */}
              <div className="email">
                <Input type="email" placeholder="Enter Email" />
              </div>
            </div>

            {/* Button*/}
            <Button
              type="submit"
              className="w-full h-14 shadow-primary-shadow rounded-[20px]"
            >
              Send
            </Button>
          </section>

          {/* Continue with */}
          <ContinueWith />
        </form>
      </section>
    </main>
  );
}
