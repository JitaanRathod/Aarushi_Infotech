
import logo1  from '../assets/customers/logo1.png';
import logo2  from '../assets/customers/logo2.png';
import logo3  from '../assets/customers/logo3.png';
import logo4  from '../assets/customers/logo4.png';
import logo5  from '../assets/customers/logo5.png';
import logo6  from '../assets/customers/logo6.png';
import logo7  from '../assets/customers/logo7.png';
import logo8  from '../assets/customers/logo8.png';
import logo9  from '../assets/customers/logo9.png';
import logo10 from '../assets/customers/logo10.png';
import logo11 from '../assets/customers/logo11.png';
import logo12 from '../assets/customers/logo12.png';
import logo13 from '../assets/customers/logo13.png';
import logo14 from '../assets/customers/logo14.png';
import logo15 from '../assets/customers/logo15.png';
import logo16 from '../assets/customers/logo16.png';

const row1Customers = [
  { name: 'JBF Industries Ltd.',  src: logo1  },
  { name: 'DASHMESH GROUPS',  src: logo2  },
  { name: 'DASHMESH GROUPS',  src: logo3  },
  { name: 'PADAM',  src: logo4  },
  { name: 'Meghna Colour  Chem',  src: logo5  },
  { name: '',  src: logo6  },
  { name: 'ERA LABXPERT',  src: logo7  },
];

const row2Customers = [
  { name: 'EIPL',  src: logo8  },
  { name: 'ALK LOGISTICS PRIVATE LIMITED',  src: logo9  },
  { name: 'SONA', src: logo10 },
  { name: 'MANISH LABCHEM PRIVATE LIMITED', src: logo11 },
  { name: 'ERA', src: logo12 },
  { name: 'AIC TECHNIK', src: logo13 },
  { name: 'NOVA INDUSTRIES', src: logo14 },
  { name: 'HARSH ACCOUNTING', src: logo15 },
  { name: 'TRITON SOLUTIONS', src: logo16 },
];

function LogoCard({ name, src }) {
  return (
    <div className="group relative flex items-center justify-center bg-white/95 px-6 py-4 rounded-2xl shadow-lg border border-white/50 mx-3.5 flex-shrink-0 w-[180px] h-[90px] transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 hover:scale-110 hover:z-20 hover:bg-white">
      <img
        src={src}
        alt={name}
        className="max-h-12 max-w-full w-auto object-contain transition-all duration-300 group-hover:scale-110"
      />
    </div>
  );
}

export default function OurCustomers() {
  // Triplicate both rows for seamless infinite coverage on all screen widths
  const row1Items = [...row1Customers, ...row1Customers, ...row1Customers];
  const row2Items = [...row2Customers, ...row2Customers, ...row2Customers];

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-brand-navy animate-fade-up">

      {/* Ambient glow background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[10%] w-[500px] h-[500px] rounded-full bg-brand-cyan/10 blur-[130px]" />
        <div className="absolute bottom-[-20%] right-[10%] w-[500px] h-[500px] rounded-full bg-brand-mint/10 blur-[130px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-brand-steelblue/10 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, #6fd1d7 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      {/* Section header */}
      <div className="relative z-10 text-center px-6 mb-10 md:mb-12">
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-cyan font-extrabold text-xs tracking-widest uppercase mb-4"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="w-2 h-2 rounded-full bg-brand-mint animate-pulse flex-shrink-0" />
          Trusted Partners
        </div>

        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 leading-tight"
          style={{ fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '-0.02em' }}
        >
          Our <span className="text-brand-cyan">Customers</span>
        </h2>

        <p className="text-white/50 text-sm md:text-base max-w-lg mx-auto leading-relaxed">
          Businesses across Maharashtra &amp; Gujarat powering their growth with Aarushi Infotech
        </p>
      </div>

      {/* Marquee wrapper */}
      <div className="relative">

        {/* Left edge fade */}
        <div
          className="absolute left-0 top-0 w-28 md:w-40 h-full z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #093c5d 0%, transparent 100%)' }}
        />
        {/* Right edge fade */}
        <div
          className="absolute right-0 top-0 w-28 md:w-40 h-full z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #093c5d 0%, transparent 100%)' }}
        />

        {/* Row 1 — 7 logos, scrolls left */}
        <div className="customers-marquee-container overflow-hidden mb-4">
          <div className="customers-track-left flex py-1" style={{ width: 'max-content' }}>
            {row1Items.map((customer, i) => (
              <LogoCard key={`r1-${i}`} {...customer} />
            ))}
          </div>
        </div>

        {/* Row 2 — 6 logos, scrolls right */}
        <div className="customers-marquee-container overflow-hidden">
          <div className="customers-track-right flex py-1" style={{ width: 'max-content' }}>
            {row2Items.map((customer, i) => (
              <LogoCard key={`r2-${i}`} {...customer} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom trust stats */}
      <div className="relative z-10 flex flex-wrap justify-center gap-8 md:gap-16 mt-10 md:mt-12 px-6">
        {[
          { value: '650+', label: 'Happy Clients' },
          { value: '28+',  label: 'Trusted Brands' },
          { value: '720+', label: 'Projects Delivered' },
        ].map(({ value, label }) => (
          <div key={label} className="text-center">
            <p
              className="text-2xl md:text-3xl font-extrabold text-brand-cyan"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {value}
            </p>
            <p className="text-white/50 text-xs md:text-sm font-medium mt-1 tracking-wide uppercase">
              {label}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}
