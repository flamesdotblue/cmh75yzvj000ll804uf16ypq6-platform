import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/60 to-slate-950"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-300 px-3 py-1 text-xs font-medium ring-1 ring-emerald-500/30">Modern LIMS for high-performing labs</span>
            <h1 className="mt-5 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              Streamline Your Laboratory Operations with <span className="bg-gradient-to-r from-emerald-300 to-sky-300 bg-clip-text text-transparent">LabTasker</span>
            </h1>
            <p className="mt-4 text-slate-300 text-lg">
              A complete laboratory management system for research teams, scientists, and institutions.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 text-slate-950 px-5 py-3 font-medium hover:bg-emerald-400 transition-colors">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 font-medium hover:border-slate-500 hover:bg-slate-900/40 transition-colors">
                <PlayCircle className="h-5 w-5 text-emerald-300" />
                Request Demo
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative"
          >
            <DashboardMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DashboardMock() {
  return (
    <div className="w-full max-w-2xl mx-auto rounded-2xl border border-slate-800/70 bg-slate-900/60 backdrop-blur shadow-2xl overflow-hidden">
      <div className="flex items-center gap-1 px-4 py-3 bg-slate-900/50 border-b border-slate-800">
        <span className="h-3 w-3 rounded-full bg-red-400/80" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        <div className="ml-4 text-xs text-slate-400">LabTasker Dashboard</div>
      </div>
      <div className="p-5 grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-4">
          <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-sm text-slate-300">Project Progress</h4>
              <div className="text-xs text-slate-500">This Quarter</div>
            </div>
            <div className="h-32 w-full bg-gradient-to-br from-slate-800/40 to-slate-900/60 rounded-lg relative overflow-hidden">
              <div className="absolute inset-x-0 bottom-0 h-[55%] bg-emerald-500/30" />
              <div className="absolute bottom-2 left-2 text-emerald-200 text-xs">72% complete</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
              <div className="text-sm text-slate-300 mb-2">Experiments</div>
              <div className="flex items-end gap-1">
                <div className="h-16 w-6 bg-emerald-500/40 rounded" />
                <div className="h-10 w-6 bg-emerald-500/30 rounded" />
                <div className="h-20 w-6 bg-emerald-500/50 rounded" />
                <div className="h-12 w-6 bg-emerald-500/40 rounded" />
                <div className="h-24 w-6 bg-emerald-500/60 rounded" />
              </div>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
              <div className="text-sm text-slate-300 mb-2">Alerts</div>
              <ul className="space-y-2 text-xs text-slate-400">
                <li className="flex items-center justify-between"><span>Inventory: Ethanol low</span><span className="text-amber-300">Action</span></li>
                <li className="flex items-center justify-between"><span>Incubator maintenance</span><span className="text-emerald-300">Scheduled</span></li>
                <li className="flex items-center justify-between"><span>Protocol update</span><span className="text-sky-300">Review</span></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
            <div className="text-sm text-slate-300 mb-2">Tasks</div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center justify-between"><span>Run PCR batch 12</span><span className="text-emerald-300">Today</span></li>
              <li className="flex items-center justify-between"><span>Calibrate pipettes</span><span className="text-sky-300">Tomorrow</span></li>
              <li className="flex items-center justify-between"><span>QA review</span><span className="text-amber-300">Fri</span></li>
            </ul>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
            <div className="text-sm text-slate-300 mb-2">Compliance</div>
            <div className="h-24 rounded-lg bg-gradient-to-br from-emerald-500/20 to-sky-500/20 flex items-center justify-center text-emerald-200 text-sm">Audit-ready</div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-4">
            <div className="text-sm text-slate-300 mb-2">Storage</div>
            <div className="text-xs text-slate-400">Used 68% of 1 TB</div>
            <div className="mt-2 h-2 w-full bg-slate-800 rounded">
              <div className="h-2 bg-emerald-400 rounded" style={{ width: '68%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
