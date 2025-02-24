import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sourceCodePro } from '@/utils/fonts';
import { profile, socials } from '@/data/profile';
import Image from 'next/image'
import VisitorCounter from './VisitorCounter';

const Header: React.FC = ({}) => {
  return (
    <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-20 max-w-4xl w-full">
      <div className="w-48 h-48 relative animate-fade-in-up shrink-0">
        <Image
          src={profile.image}
          alt="Profile picture"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-2xl"
          priority
        />
      </div>
      <div className="text-center md:text-left animate-fade-in-up delay-1">
        <div className="flex flex-col items-center md:items-start gap-2">
          <h1 className={`bg-gradient-to-r from-orange-500 to-[#a770ad] text-4xl font-bold mb-4 ${sourceCodePro.className}`}>
            {profile.name}. 
          </h1>
        </div>
        <p className="text-lg mb-4 bg-white inline-block text-transparent bg-clip-text">
          {profile.description}
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:opacity-80 transition-opacity"
            >
              <FontAwesomeIcon icon={social.icon} className="text-green-400" />
            </a>
          ))}
          <VisitorCounter />
        </div>
      </div>
    </div>
  )
}

export default Header;