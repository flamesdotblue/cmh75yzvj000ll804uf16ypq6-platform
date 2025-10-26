import { motion } from 'framer-motion';
import { CheckCircle2, Building2, FlaskConical, GraduationCap } from 'lucide-react';

const benefits = [
  'Reduce manual errors',
  'Centralize lab data',
  'Improve research efficiency',
  'Simplify audits and compliance',
];

const useCases = [
  {
    title: 'For Research Institutes',
    icon: Building2,
    text: 'Coordinate multi-lab projects, standardize protocols, and maintain compliance across teams.',
  },
  {
    title: 'For Pharma Labs',
    icon: FlaskConical,
    text: 'Manage studies, inventory, equipment maintenance, and QA documentation in one place.',
  },
  {
    title: 'For Academic Labs',
    icon: GraduationCap,
    text: 'Support student projects, track experiments, and streamline lab resource management.',
  },
];

export default function BenefitsTestimonials() {
  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-semibold">Built for productivity, accuracy, and compliance</h2>
            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-400 mt-0.5" />
                  <span className="text-slate-300">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {useCases.map((c, idx) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * idx }}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-sky-500/15 text-sky-300 ring-1 ring-sky-500/20">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-medium">{c.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-400">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
