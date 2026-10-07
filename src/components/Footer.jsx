import { Github, Linkedin, Mail, Heart, ChevronRight, Code2 } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Education', path: '/results' },
    { name: 'Internship', path: '/internship' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' },
  ]

  const socials = [
    { icon: <Github size={18} />, link: 'https://github.com/Hritikkhatri89', label: 'Github' },
    { icon: <Linkedin size={18} />, link: 'https://www.linkedin.com/in/hritik-khatri-171543379', label: 'LinkedIn' },
    { icon: <Mail size={18} />, link: 'mailto:ritikkhatri51@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="bg-[#04060d] border-t border-white/10 pt-16 pb-12 relative z-10">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-violet-600 flex items-center justify-center text-white font-bold text-base shadow-lg shadow-violet-600/30">
                H
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                HRITIK<span className="text-violet-400">.STUDIO</span>
              </span>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed font-light">
              Frontend Web Developer & BCA Graduate pursuing MCA. Crafting modern, responsive, 
              and performant web applications with React & JavaScript.
            </p>

            <div className="flex gap-2 pt-2">
              {socials.map((social, index) => (
                <a 
                  key={index}
                  href={social.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:bg-violet-600 hover:text-white hover:border-violet-500 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-violet-300 flex items-center gap-1.5 transition-colors">
                    <ChevronRight size={12} className="text-violet-400" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Direct Contact</h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-violet-400" />
                <a href="mailto:ritikkhatri51@gmail.com" className="hover:text-white transition-colors">ritikkhatri51@gmail.com</a>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open for Hire & Freelance</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} Khatri Hritik Nareshbhai. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React <Code2 size={13} className="text-violet-400" /> & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
