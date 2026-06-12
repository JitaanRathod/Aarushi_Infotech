import { BookOpen, MessageSquare, Globe, Users, Briefcase, Cpu, CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      id: 'tally-prime',
      title: 'Tally Prime Solutions',
      icon: BookOpen,
      tagline: 'Standard & Custom ERP Implementation',
      description: 'Get Tally Prime installed, configured, and optimized for your accounting teams. We handle single-user setup, multi-user server installation, remote access configurations, data migration, and full user training.',
      features: [
        'Multi-user Server Configuration',
        'Legacy Data Migration & Backup',
        'Tally Audit & Reconciliation Support',
        'Staff Training & Accounting Best Practices'
      ],
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100'
    },
    {
      id: 'whatsapp-tally',
      title: 'WhatsApp Tally Integration',
      icon: MessageSquare,
      tagline: 'Automated Real-Time Business Alerts',
      description: 'Synchronize your ledger balances and transactions with automatic customer notifications. Send out PDF invoices, ledger statements, payment reminders, and receipts instantly via WhatsApp API.',
      features: [
        'LR copy Auto send with Tax invoice',
        'DSC Digital signature print from all device',
        'Security module like SAP',
        'Authorization',
        'Tally on cloud'
      ],
      color: 'text-green-600 bg-green-50 border-green-100'
    },
    {
      id: 'website-development',
      title: 'Website Development',
      icon: Globe,
      tagline: 'Modern, SEO-ready Web Architectures',
      description: 'Represent your brand digitally with bespoke websites and progressive web apps built on clean React architectures. Fast loading speeds, responsiveness, and Google Search optimization come standard.',
      features: [
        'Headless CMS & Single Page Applications',
        'Mobile-First Layouts with dynamic UI elements',
        'Search Engine Optimization (SEO)',
        'SSL Security & Cloud Deployment'
      ],
      color: 'text-blue-600 bg-blue-50 border-blue-100'
    },
    {
      id: 'crm',
      title: 'CRM Solutions',
      icon: Users,
      tagline: 'Streamlined Lead & Pipeline Management',
      description: 'Track and nurture customer relationships. Our custom CRM modules store client histories, schedule follow-ups, monitor pipeline values, and integrate seamlessly with email/SMS gateways.',
      features: [
        'Sales pipeline drag-and-drop tracking',
        'Automatic Lead Assignment Rules',
        'Email & SMS Broadcast campaigns',
        'Bespoke Customer Ticket Support'
      ],
      color: 'text-amber-600 bg-amber-50 border-amber-100'
    },
    {
      id: 'erp',
      title: 'ERP Solutions',
      icon: Briefcase,
      tagline: 'End-to-End Enterprise Control',
      description: 'Connect all divisions of your company from inventory, dispatch, purchases, quality control, to human resource tracking in one unified interface.',
      features: [
        'Real-Time Inventory & Batch Tracking',
        'Production Planning & BOM Configuration',
        'Purchase Order Approval Workflows',
        'HR Attendance & Automated Payroll'
      ],
      color: 'text-rose-600 bg-rose-50 border-rose-100'
    },
    {
      id: 'tally-customization',
      title: 'Tally Customization (TDL)',
      icon: Cpu,
      tagline: 'TDL/TCP Extensions tailored to you',
      description: 'Expand Tally Prime beyond standard boundaries. We develop custom reports, modify voucher screen inputs, create specialized invoice layouts, and construct custom access rules.',
      features: [
        'Bespoke Invoicing formats (GST matching)',
        'Custom Fields in Ledgers and Vouchers',
        'Multi-level Price List Controls',
        'Custom TCP file compiling & deployment'
      ],
      color: 'text-teal-600 bg-teal-50 border-teal-100'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-brand-amber font-heading font-extrabold text-xs uppercase tracking-widest mb-4">
            WHAT WE DELIVER
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-navy mb-6 font-heading">
            Enterprise Services
          </h1>
          <p className="text-base md:text-lg text-brand-steelblue/80 font-medium">
            Explore our deep specialized IT capabilities. We bring technical expertise and industry knowledge together to streamline your business workflows.
          </p>
        </div>

        {/* Services Detail List */}
        <div className="flex flex-col gap-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                id={service.id}
                className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center scroll-mt-32"
              >
                {/* Left Side: Icon & Titles */}
                <div className="lg:col-span-4">
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 ${service.color}`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-brand-steelblue/60">
                    {service.tagline}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy mt-2 font-heading">
                    {service.title}
                  </h2>
                </div>

                {/* Center: Description */}
                <div className="lg:col-span-4 text-sm md:text-base text-brand-steelblue/80 leading-relaxed font-medium">
                  {service.description}
                </div>

                {/* Right Side: Features Checklist */}
                <div className="lg:col-span-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-brand-navy mb-4">
                    Key Features Included
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-xs md:text-sm text-brand-navy/80 font-medium">
                        <CheckCircle className="w-4.5 h-4.5 text-brand-mint flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

