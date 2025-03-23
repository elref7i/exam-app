import Image from 'next/image';
import broImage from '../../../../public/assets/images/bro.png';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FaFacebook } from 'react-icons/fa';
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
            <div className="mb-10">
              {/* Title */}
              <h2 className="font-bold text-2xl mb-2">Sign in</h2>

              {/* Email */}
              <div className="email mb-8">
                <Input type="email" placeholder="Email" />
              </div>

              {/* Password */}
              <div className="password mb-4">
                <Input type="password" placeholder="Password" />
              </div>

              {/* Link */}
              <Link
                className="text-base text-end block text-hiro"
                href={'/forgetpassword'}
              >
                Recover Password ?
              </Link>
            </div>

            {/* Button*/}
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </section>

          {/* Continue with */}
          <section className="or-continue text-center">
            {/* Title */}
            <p className="continue-with mb-8">Or Continue with</p>

            {/* Icons */}
            <ul>
              <li className="w-16 h-16 bg-white shadow-primary-shadow border-[1px] rounded-2xl flex items-center justify-center">
                <a href="" target="_blank">
                  <FaFacebook className="text-2xl text-[#1877F2]" />
                </a>
              </li>
            </ul>
          </section>
        </form>
      </section>
    </main>
  );
}
