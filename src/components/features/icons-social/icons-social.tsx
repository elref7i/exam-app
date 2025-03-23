import IconSocial from '@/components/common/icon-social';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
export default function IconsSocial() {
  return (
    <ul className="flex justify-center items-center gap-8">
      {/* Icon Twitter */}
      <IconSocial>
        <FcGoogle />
      </IconSocial>

      {/* Icon Facebook */}
      <IconSocial>
        <FaFacebook className=" text-[#1877F2]" />
      </IconSocial>

      {/* Icon Twitter */}
      <IconSocial>
        <FaTwitter className=" text-[#1D9BF0]" />
      </IconSocial>

      {/* Icon Twitter */}
      <IconSocial>
        <FaApple className=" text-black" />
      </IconSocial>
    </ul>
  );
}
