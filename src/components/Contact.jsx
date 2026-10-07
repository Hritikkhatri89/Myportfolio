import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { Send, CheckCircle2, AlertCircle, Mail, MapPin, Copy, Check, Sparkles, MessageSquare } from 'lucide-react'

const Contact = () => {
  const form = useRef()
  const [status, setStatus] = useState('idle') 
  const [copiedEmail, setCopiedEmail] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      form.current, 
      'YOUR_PUBLIC_KEY'
    )
    .then((result) => {
        console.log(result.text)
        setStatus('success')
        form.current.reset()
        setTimeout(() => setStatus('idle'), 5000)
    }, (error) => {
        console.log(error.text)
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
    })
  }

  const copyEmail = () => {
    navigator.clipboard.writeText('ritikkhatri51@gmail.com')
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  return (
    <section id="contact" className="py-20 pb-36 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Unified Box Container */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-900/80 border border-white/15 p-6 sm:p-10 shadow-2xl shadow-violet-950/40 backdrop-blur-2xl relative overflow-hidden">
          
          {/* Ambient Glow inside the main box */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-violet-600/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

          {/* Header Inside Box */}
          <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
            <div className="glow-badge mb-3">
              <MessageSquare size={14} className="text-violet-400" />
              <span>Get in Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Let's Build Something <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Great Together</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-2 font-light">
              Have a project in mind, job opportunity, or just want to connect? Send me a message below.
            </p>
          </div>

          {/* Inner Content Grid */}
          <div className="grid lg:grid-cols-12 gap-6 relative z-10 items-stretch">
            
            {/* Left Side: Contact Info Inner Boxes */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-4">
              
              {/* Direct Email Inner Box */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 flex-1 flex flex-col justify-between hover:border-violet-500/30 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">Direct Email</h4>
                    <p className="text-[11px] text-slate-400">Click box to copy address</p>
                  </div>
                </div>

                <button 
                  onClick={copyEmail}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-white/10 text-xs font-mono text-violet-300 hover:border-violet-500/40 transition-colors"
                >
                  <span className="truncate mr-2">ritikkhatri51@gmail.com</span>
                  {copiedEmail ? <Check size={16} className="text-emerald-400 shrink-0" /> : <Copy size={16} className="text-slate-400 shrink-0" />}
                </button>
              </div>

              {/* Location Inner Box */}
              <div className="p-5 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center gap-3.5 hover:border-cyan-500/30 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Location</h4>
                  <p className="text-xs text-slate-300">Surat, Gujarat, India</p>
                </div>
              </div>

              {/* Available Status Inner Box */}
              <div className="p-4 rounded-2xl bg-gradient-to-tr from-violet-950/40 via-slate-950 to-indigo-950/40 border border-violet-500/30 flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Available for Hire & Roles
                </span>
              </div>

            </div>

            {/* Right Side: Form Inner Box */}
            <div className="lg:col-span-7">
              <div className="p-6 rounded-2xl bg-slate-950/80 border border-white/10 h-full flex flex-col justify-between">
                <form ref={form} onSubmit={sendEmail} className="space-y-4 flex-1 flex flex-col justify-between">
                  
                  <div className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-slate-400">Your Name</label>
                        <input 
                          type="text" 
                          name="user_name"
                          required
                          className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:border-violet-500 outline-none transition-colors text-white" 
                          placeholder="e.g. Rahul Sharma" 
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase tracking-wider text-slate-400">Email Address</label>
                        <input 
                          type="email" 
                          name="user_email"
                          required
                          className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:border-violet-500 outline-none transition-colors text-white" 
                          placeholder="rahul@example.com" 
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono uppercase tracking-wider text-slate-400">Message</label>
                      <textarea 
                        name="message"
                        required
                        rows="3" 
                        className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:border-violet-500 outline-none transition-colors text-white leading-relaxed resize-none" 
                        placeholder="Describe your project or query..."
                      ></textarea>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button 
                      type="submit" 
                      disabled={status === 'sending'}
                      className="btn-primary w-full py-3 text-xs uppercase tracking-wider font-extrabold flex items-center justify-center gap-2"
                    >
                      {status === 'idle' && (
                        <>
                          Send Message <Send size={15} />
                        </>
                      )}
                      {status === 'sending' && 'Sending...'}
                      {status === 'success' && (
                        <>
                          Sent Successfully <CheckCircle2 size={16} className="text-emerald-400" />
                        </>
                      )}
                      {status === 'error' && (
                        <>
                          Error Sending <AlertCircle size={16} />
                        </>
                      )}
                    </button>

                    {status === 'success' && (
                      <p className="text-emerald-400 text-center text-xs font-medium mt-2 animate-pulse">
                        Thank you! Your message has been sent.
                      </p>
                    )}
                  </div>

                </form>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact
