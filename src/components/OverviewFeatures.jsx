import { motion } from 'framer-motion';
import {
  Folder,
  ListChecks,
  Microscope,
  Wrench,
  ClipboardList,
  Package,
  ShieldCheck,
  Users,
  Bell,
  Mail,
  BarChart3,
  FileText,
} from 'lucide-react';

const features = [
  { title: 'Project Management', desc: 'End-to-end project lifecycle management', icon: Folder },
  { title: 'Task Management', desc: 'Detailed tracking with subtasks and comments', icon: ListChecks },
  { title: 'Experiment Management', desc: 'Document and track lab experiments', icon: Microscope },
  { title: 'Equipment Management', desc: 'Manage equipment inventory and maintenance schedules', icon: Wrench },
  { title: 'Protocol Management', desc: 'Standardize operating procedures', icon: ClipboardList },
  { title: 'Inventory Management', desc: 'Track chemicals, supplies, and stock', icon: Package },
  { title: 'Compliance Management', desc: 'Stay audit-ready with regulatory tracking', icon: ShieldCheck },
  { title: 'User Management', desc: 'Role-based access and team collaboration', icon: Users },
  { title: 'Notification System', desc: 'Real-time in-app alerts', icon: Bell },
  { title: 'Email Service', desc: 'Automated communications', icon: Mail },
  { title: 'Reporting & Analytics', desc: 'Actionable insights and reports', icon: BarChart3 },
  { title: 'File Management', desc: 'Secure document storage and sharing', icon: FileText },
];

export default function OverviewFeatures() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-925">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-semibold">Unified Platform for Modern Labs</h2>
          <p className="mt-4 text-slate-300">
            LabTasker is a unified platform that simplifies every aspect of laboratory management — from projects and experiments to equipment,
            inventory, and compliance.
          </p>
        </motion.div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.02 * idx }}
              className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-5 hover:bg-slate-900/60 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-emerald-500/15 text-emerald-300 p-2 ring-1 ring-emerald-500/20">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">{f.title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{f.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
