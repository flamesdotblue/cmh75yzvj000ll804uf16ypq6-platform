import { motion } from 'framer-motion';
import { Check, ArrowRight, Facebook, Twitter, Linkedin } from 'lucide-react';

const plans = [
  {
    name: 'Free Trial',
    price: '$0',
    period: '14 days',
    highlight: false,
    features: ['All core modules', 'Up to 5 users', 'Community support'],
  },
  {
    name: 'Professional',
    price: '$49',
    period: 'per user / mo',
    highlight: true,
    features: ['Unlimited projects', 'Advanced permissions', 'Email & in-app notifications', 'Reporting & analytics'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'annual billing',
    highlight: false,
    features: ['SAML/SSO', 'Custom roles & approvals', 'Dedicated support', 'Onboarding & training'],
  },
];

export default function PricingCTAAndFooter() {
  return (
    <div id="pricing" className="relative">
      <section className="py-20 bg-gradient-to-b from-slate-925 to-slate-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-semibold">Simple, scalable pricing</h2>
            <p className="mt-3 text-slate-300">Start free, upgrade as your lab grows.</p>
          </motion.div>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {plans.map((p, idx) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.04 * idx }}
                className={`rounded-2xl border p-6 bg-slate-900/40 ${
                  p.highlight ? 'border-emerald-500/40 ring-1 ring-emerald-500/20' : 'border-slate-800'
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  {p.highlight && (
                    <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30">Popular</span>
                  )}
                </div>
                <div className="mt-4 flex items-end gap-2">
                  <span className="text-3xl font-semibold">{p.price}</span>
                  <span className="text-slate-400 text-sm">{p.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-slate-300 text-sm">
                      <Check className="h-5 w-5 text-emerald-400" /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#cta"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 font-medium transition-colors ${
                    p.highlight ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400' : 'border border-slate-700 hover:bg-slate-900'
                  }`}
                >
                  Choose {p.name}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="py-16">
        <div className="container mx-auto px-6 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-semibold"
          >
            Ready to transform your lab operations? Try LabTasker today!
          </motion.h3>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 text-slate-950 px-5 py-3 font-medium hover:bg-emerald-400 transition-colors">
              Start Free Trial
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 font-medium hover:border-slate-500 hover:bg-slate-900/40 transition-colors">
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-800 py-12">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <div className="text-xl font-semibold">LabTasker</div>
          <p className="mt-2 text-slate-400 text-sm max-w-md">
            LabTasker is a SaaS Laboratory Management System designed to streamline research operations, enhance collaboration, and maintain compliance.
          </p>
        </div>
        <div>
          <div className="font-medium">Features</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li><a href="#features" className="hover:text-slate-200">Project & Tasks</a></li>
            <li><a href="#features" className="hover:text-slate-200">Experiments & Protocols</a></li>
            <li><a href="#features" className="hover:text-slate-200">Equipment & Inventory</a></li>
            <li><a href="#features" className="hover:text-slate-200">Compliance & Reports</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium">Company</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-400">
            <li><a href="#home" className="hover:text-slate-200">About</a></li>
            <li><a href="#pricing" className="hover:text-slate-200">Pricing</a></li>
            <li><a href="#" className="hover:text-slate-200">Privacy Policy</a></li>
            <li className="flex items-center gap-3 pt-2">
              <a aria-label="Twitter" href="#" className="hover:text-slate-200"><Twitter className="h-4 w-4" /></a>
              <a aria-label="LinkedIn" href="#" className="hover:text-slate-200"><Linkedin className="h-4 w-4" /></a>
              <a aria-label="Facebook" href="#" className="hover:text-slate-200"><Facebook className="h-4 w-4" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-6 mt-8 text-xs text-slate-500">© {new Date().getFullYear()} LabTasker. All rights reserved.</div>
    </footer>
  );
}
