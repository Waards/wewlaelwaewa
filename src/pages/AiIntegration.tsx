import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Sparkle, Bot, Brain, Cpu, Cloud, Code2, Zap, Database, Globe, GitBranch, Workflow, Server, Terminal } from 'lucide-react';

const TOOLS_ROW_1 = [Bot, Brain, Cpu, Cloud, Code2, Zap, Database, Globe, GitBranch, Workflow, Server, Terminal];
const TOOLS_ROW_2 = [Cloud, Zap, Brain, Bot, Server, Database, Code2, Globe, Workflow, Cpu, Terminal, GitBranch];

export default function AiIntegration() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans antialiased overflow-x-hidden">
      <div className="px-4 sm:px-6 md:px-10 lg:px-14 py-6 sm:py-8 md:py-10 lg:min-h-screen flex flex-col">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-white/50 hover:text-white/90 transition-colors mb-6 cursor-pointer"
        >
          <ArrowLeft size={14} strokeWidth={1.5} /> Back to Portfolio
        </button>

        {/* Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 sm:gap-6 mb-10 md:mb-14 lg:mb-18">
          <div className="max-w-3xl">
            <h1 className="text-[28px] sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.15] font-normal tracking-tight text-white">
              AI Integration Hub
            </h1>
            <p className="text-sm md:text-[15px] leading-[1.6] text-white/60 max-w-3xl mt-3">
              Multi-model AI routing via OpenRouter, ultra-fast inference with Groq, and n8n workflow automation.
              Building intelligent systems at the intersection of AI, automation, and web development.
            </p>
          </div>
          <a
            href="mailto:hi@aihub.com"
            className="shrink-0 inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-medium text-white/90 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
          >
            Let's Build Together <ArrowUpRight size={16} strokeWidth={1.5} />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 flex-1 auto-rows-auto lg:auto-rows-fr">

          {/* Column 1 - Background / Timeline card */}
          <div className="relative rounded-2xl bg-black overflow-hidden min-h-[320px] md:min-h-[400px] lg:min-h-0 flex flex-col items-center justify-between p-6 md:p-8">
            <video
              src="/src/assets/images/herobg.mp4"
              autoPlay loop muted playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 w-full flex flex-col items-center">
              <span className="inline-flex items-center gap-2 uppercase tracking-[0.22em] text-[11px] text-white/70 mb-8">
                <Sparkle size={12} strokeWidth={1.5} /> BACKGROUND <Sparkle size={12} strokeWidth={1.5} />
              </span>
            </div>
            <div className="relative z-10 w-full max-w-xs mx-auto space-y-4 pb-2">
              {[
                { year: '2024-Now', role: 'AI Integration Engineer', company: 'Independent Studio' },
                { year: '2022-2024', role: 'ML Pipeline Developer', company: 'Automation Labs' },
                { year: '2021-2022', role: 'API Integration Specialist', company: 'DataFlow Inc' },
              ].map((item) => (
                <div key={item.year} className="grid grid-cols-[auto_auto_1fr_auto] items-center gap-2 text-[13px]">
                  <span className="text-white/90 font-medium">{item.year}</span>
                  <Sparkle size={12} strokeWidth={1.5} className="text-white/60 mx-1" />
                  <span className="text-white/70 truncate">{item.role}</span>
                  <span className="text-white/50 text-[11px] text-right">{item.company}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 (stacked rows) */}
          <div className="grid grid-rows-[auto_1fr] gap-4 md:gap-5">

            {/* Client Voice card */}
            <div className="relative rounded-2xl bg-[#1a2e2e] p-5 md:p-6 overflow-hidden noise-overlay min-h-[200px] flex flex-col justify-between">
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/70">
                <Sparkle size={12} strokeWidth={1.5} /> CLIENT VOICE <Sparkle size={12} strokeWidth={1.5} />
              </span>
              <div className="mt-auto">
                <p className="text-[13px] sm:text-[13.5px] leading-[1.6] text-white/85 mt-3">
                  "The AI workflow automation transformed how we handle lead processing. Response times dropped from hours to seconds, and the accuracy is remarkable."
                </p>
                <p className="text-[13px] text-white/60 mt-3">
                  <span className="font-semibold text-white/85">Marcus Chen</span>, CTO — Nexus Digital
                </p>
              </div>
            </div>

            {/* Metric card */}
            <div className="relative rounded-2xl bg-black overflow-hidden min-h-[240px] flex flex-col items-center justify-center">
              <video
                src="/src/assets/images/apicalls.mp4"
                autoPlay loop muted playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10 text-center">
                <div className="text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-light tracking-tight drop-shadow-sm text-white">
                  50K+
                </div>
                <p className="text-white/85 text-sm mt-2">AI API calls processed daily</p>
              </div>
            </div>
          </div>

          {/* Column 3 (stacked) */}
          <div className="grid grid-rows-[auto_1fr] gap-4 md:gap-5">

            {/* Daily AI Tools card */}
            <div className="relative rounded-2xl bg-black overflow-hidden min-h-[280px] flex flex-col">
              <video
                src="/src/assets/images/ai%20eco.mp4"
                autoPlay loop muted playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10 flex flex-col h-full p-5 md:p-6">
                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/70 mb-auto">
                  <Sparkle size={12} strokeWidth={1.5} /> AI ECOSYSTEM <Sparkle size={12} strokeWidth={1.5} />
                </span>
                <div className="mt-8 space-y-3 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                  <div className="flex gap-3 animate-marquee-left w-max">
                    {[...TOOLS_ROW_1, ...TOOLS_ROW_1].map((Icon, i) => (
                      <div key={i} className="liquid-glass h-14 w-14 md:h-16 md:w-16 rounded-xl flex items-center justify-center shrink-0">
                        <Icon size={22} strokeWidth={1.5} className="text-white/80" />
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3 animate-marquee-right w-max">
                    {[...TOOLS_ROW_2, ...TOOLS_ROW_2].map((Icon, i) => (
                      <div key={i} className="liquid-glass h-14 w-14 md:h-16 md:w-16 rounded-xl flex items-center justify-center shrink-0">
                        <Icon size={22} strokeWidth={1.5} className="text-white/80" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Reach Me card */}
            <div className="relative rounded-2xl bg-[#1a2e2e] p-5 md:p-6 overflow-hidden noise-overlay min-h-[160px] flex flex-col justify-between">
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-white/70">
                  <Sparkle size={12} strokeWidth={1.5} /> GET IN TOUCH <Sparkle size={12} strokeWidth={1.5} />
                </span>
                <a
                  href="mailto:sjosafatvillegas@gmail.com"
                  className="h-9 w-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <ArrowUpRight size={16} strokeWidth={1.5} className="text-white/80" />
                </a>
              </div>
              <div className="mt-auto space-y-1.5">
                <a href="mailto:sjosafatvillegas@gmail.com" className="block text-sm text-white/80 hover:text-white transition-colors">
                  sjosafatvillegas@gmail.com
                </a>
                <a href="tel:+639380438007" className="block text-sm text-white/60 hover:text-white/80 transition-colors">
                  +63 938 043 800 7
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
