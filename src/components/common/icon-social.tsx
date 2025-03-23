import { ReactNode } from 'react';

export default function IconSocial({ children }: { children: ReactNode }) {
  return (
    <li className="w-16 h-16  bg-white shadow-primary-shadow border-[1px] rounded-2xl flex items-center justify-center">
      <a className="text-2xl" href="" target="_blank">
        {children}
      </a>
    </li>
  );
}
