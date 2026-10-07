import { motion } from 'framer-motion'
import { GraduationCap, Award, BarChart3, School, CheckCircle2, Calendar } from 'lucide-react'

const Education = () => {
  const schoolEducation = [
    { level: '12th Standard (HSC)', board: 'GSEB (T.N. & T.V. School, Surat)', stream: 'General', year: '2019 - 2021', status: 'Passed' },
    { level: '10th Standard (SSC)', board: 'GSEB (Jeevanbharti School, Surat)', stream: 'General', year: '2018 - 2019', status: 'Passed' },
  ]

  const bcaSemesters = [
    { sem: 'Semester 6', gpa: '7.73', status: 'Pass', year: '2024' },
    { sem: 'Semester 5', gpa: '7.27', status: 'Pass', year: '2023' },
    { sem: 'Semester 4', gpa: '6.82', status: 'Pass', year: '2023' },
    { sem: 'Semester 3', gpa: '6.73', status: 'Pass', year: '2022' },
    { sem: 'Semester 2', gpa: '6.27', status: 'Pass', year: '2022' },
    { sem: 'Semester 1', gpa: '6.09', status: 'Pass', year: '2021' },
  ]

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="glow-badge mb-3">
            <GraduationCap size={14} className="text-violet-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">& Qualifications</span>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* BCA Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bento-card p-0"
          >
            <div className="bg-gradient-to-r from-violet-900/30 via-slate-900 to-indigo-900/30 p-6 sm:p-8 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center text-violet-400 flex-shrink-0">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="font-extrabold text-xl text-white">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-slate-300 text-sm mt-0.5">Smt Z.S. Patel College of Computer Applications (VNSGU), Surat</p>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-xs font-semibold text-violet-300">
                <CheckCircle2 size={14} className="text-violet-400" />
                <span>BCA Graduate (2021 - 2024)</span>
              </div>
            </div>

            {/* SGPA Table */}
            <div className="overflow-x-auto p-4 sm:p-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10 text-xs font-mono uppercase text-slate-400">
                    <th className="pb-3 px-4">Semester</th>
                    <th className="pb-3 px-4">Year</th>
                    <th className="pb-3 px-4">SGPA</th>
                    <th className="pb-3 px-4">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  {bcaSemesters.map((sem, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 px-4 font-semibold text-white">{sem.sem}</td>
                      <td className="py-3 px-4 text-slate-400 text-xs font-mono">{sem.year}</td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-1.5 text-violet-300 font-bold code-font">
                          <BarChart3 size={14} className="text-violet-400" />
                          <span>{sem.gpa}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {sem.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* MCA Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bento-card p-0"
          >
            <div className="bg-gradient-to-r from-emerald-900/20 via-slate-900 to-teal-900/20 p-6 sm:p-8 border-b border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <GraduationCap size={28} />
                </div>
                <div>
                  <h3 className="font-extrabold text-xl text-white">Master of Computer Applications (MCA)</h3>
                  <p className="text-slate-300 text-sm mt-0.5">Dr. Babasaheb Ambedkar Open University (BAOU), Gujarat</p>
                </div>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-300">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Currently Pursuing</span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950/80 border border-white/5">
                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-emerald-400" />
                  <div>
                    <span className="text-white font-semibold text-sm">Semester 1</span>
                    <span className="text-slate-400 text-xs block">Year 2026</span>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Running
                </span>
              </div>
            </div>
          </motion.div>

          {/* Schooling Card */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bento-card p-0"
          >
            <div className="bg-slate-900 p-6 border-b border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <School size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white">School Education</h3>
                <p className="text-slate-400 text-xs">Secondary & Higher Secondary Board Examinations</p>
              </div>
            </div>

            <div className="overflow-x-auto p-4 sm:p-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10 text-xs font-mono uppercase text-slate-400">
                    <th className="pb-3 px-4">Level</th>
                    <th className="pb-3 px-4">Board / School</th>
                    <th className="pb-3 px-4">Year</th>
                    <th className="pb-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  {schoolEducation.map((item, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3 px-4 font-semibold text-white">{item.level}</td>
                      <td className="py-3 px-4 text-slate-400">{item.board} ({item.stream})</td>
                      <td className="py-3 px-4 text-slate-400 text-xs font-mono">{item.year}</td>
                      <td className="py-3 px-4">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Education
