import Image from 'next/image';
import broImage from '../../../../public/assets/images/bro.png';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import IconsSocial from '@/components/features/icons-social/icons-social';
export default function Page() {
  return (
    <main className="flex min-h-screen max-h-screen items-center h-screen gap-32">
      {/* Left Section */}
      <section className="left-auth shadow-custom-section pt-16 pl-20 bg-[#F0F4FC] rounded-r-[100px] w-[708px] h-full">
        <div className="w-[482px] ">
          {/* Header */}
          <header className="pb-16">
            {/* Logo */}
            <h1 className="text-[50px] font-bold w-80 mb-2">
              Welcome to
              <span className="text-[#122D9C]">ELevate</span>
            </h1>

            {/* Description */}
            <p className="text-lg leading-10">
              Quidem autem voluptatibus qui quaerat aspernatur architecto natus
            </p>
          </header>

          {/* Image */}
          <Image width={300} src={broImage} alt="bro"></Image>
        </div>
      </section>

      {/* Right Section */}
      <section className="sign-in">
        <header></header>

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
              className="w-full shadow-primary-shadow rounded-[20px]"
            >
              Sign in
            </Button>
          </section>

          {/* Continue with */}
          <section className="or-continue text-center">
            {/* Title */}
            <p className="continue-with mb-8">Or Continue with</p>

            {/* Icons */}
            <IconsSocial />
          </section>
        </form>
      </section>
    </main>
  );
}
