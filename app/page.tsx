"use client";

import { useI18n } from "../lib/LanguageProvider";
import BenefitCard from "../components/BenefitCard";
import PixelBlast from "../components/PixelBlast";
import ServiceCard from "../components/ServiceCard";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
import Stepper, { Step } from "@/components/Stepper";

export default function Home() {
  const { dict } = useI18n();
  return (
    <div>
      <main className="h-screen w-full flex flex-col items-center justify-center">
        <div className="flex flex-col max-w-2xl gap-[32px] row-start-2 items-center justify-center text-white">
          <img className="w-64" src="/Isologotipoblanco.svg" alt="Isotipo" />
          <h1 className="text-3xl md:text-4xl font-semibold text-center">{dict.hero.title_strong}<span className="font-thin">{dict.hero.title_light}</span></h1>
          <p className="text-sm md:text-xl text-center" dangerouslySetInnerHTML={{ __html: dict.hero.subtitle.replace(/\n/g, '<br />') }} />
          <button
            className="bg-white font-semibold text-black px-6 py-2 rounded-full transition-shadow duration-300 hover:shadow-[0_0_18px_6px_rgba(255,255,255,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 cursor-pointer"
          >
            {dict.hero.cta}
          </button>
        </div>
      </main>
      <section id="beneficios" className="relative min-h-screen w-full pt-24 pb-12 bg-gradient-to-t from-black via-black to-transparent overflow-hidden">
        <div className="relative container mx-auto p-6 border-2 border-[#7dd3fc]/40 bg-gradient-to-t from-black via-black to-transparent rounded-2xl overflow-hidden">
          {/* Fondo PixelBlast dentro del contenedor */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <PixelBlast
              className="opacity-100"
              color="#7dd3fc"
              variant="circle"
              pixelSize={6} // Increased pixel size to reduce workload
              patternScale={4} // Reduced pattern scale to reduce workload
              patternDensity={1} // Reduced pattern density to reduce workload
              enableRipples={false}
              edgeFade={0.65}
              transparent={true}
              speed={0.2}
              style={{}}
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl z-[5]"
            style={{
              boxShadow:
                "0 0 30px 6px rgba(125, 211, 252, 0.25), inset 0 0 20px 2px rgba(125, 211, 252, 0.35)",
              border: "1px solid rgba(125, 211, 252, 0.45)",
            }}
          />
          <div className="relative max-w-2xl mx-auto z-10 flex flex-col gap-6 items-center justify-center mb-24">
            <h2
              className="relative text-sm md:text-md font-thin tracking-wider uppercase text-white text-center px-3 py-1 rounded-xl bg-black/40 backdrop-blur-xl border border-[#7dd3fc]/40 shadow-[0_0_24px_8px_rgba(125,211,252,0.25)]"
              style={{ textShadow: "0 0 10px rgba(255,255,255,0.35)" }}
            >
              {dict.benefits.title}
            </h2>
            <p className="text-4xl text-center text-white">{dict.benefits?.subtitleTitle ?? ""}</p>
            <p className="text-xl text-center text-white">{dict.benefits?.subtitleDescription ?? ""}</p>
          </div>
          <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-3">
            {dict.benefits.items.map((b, i) => (
              <BenefitCard
                key={i}
                title={b.title}
                description={b.description}
                spotlightColor="rgba(0, 229, 255, 0.2)"
                className="backdrop-blur-sm/0 bg-black/20 border-2 border-[#7dd3fc]"
              />
            ))}
          </div>
        </div>
      </section>
      <section id="servicios" className="relative min-h-screen w-full py-24 flex justify-center items-center bg-black overflow-hidden">
        <div className="absolute top-[-10rem] h-[65rem] z-20 w-full bg-radial from-cyan-500/50 via-transparent to-transparent rounded-full animate-[pulse_6s_ease-in-out_infinite]"/>
        <div className="absolute top-[-12px] z-10 w-full h-32 bg-black"/>
        <div className="relative z-50  container px-6 flex flex-col items-center justify-center gap-6">
          <div className="relative z-30 flex flex-col gap-6 items-center justify-center mb-8 rounded-2xl p-6 ">
            <div className="flex flex-col items-center justify-center gap-6 max-w-2xl mx-auto">
              <h2
                className="relative w-fit text-sm md:text-md font-thin tracking-wider uppercase text-white text-center px-3 py-1 rounded-xl bg-black/40 backdrop-blur-xl border border-[#7dd3fc]/40 shadow-[0_0_24px_8px_rgba(125,211,252,0.25)]"
                style={{ textShadow: "0 0 10px rgba(255,255,255,0.35)" }}
              >
              {dict.services?.title}
            </h2>
            <p className="text-3xl font-semibold text-white text-center">{dict.services?.introTitle ?? ""}</p>
            <p className="text-xl text-center text-white">{dict.services?.introDescription ?? ""}</p>
            </div>
            {/* Grid de servicios */}
            <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-3 w-full">
              {(dict.services?.items ?? []).map((s: any, i: number) => (
                <ServiceCard
                  key={i}
                  title={s.title}
                  description={s.description}
                  spotlightColor="rgba(0, 229, 255, 0.2)"
                />
              ))}
            </div>
            <div className="mt-12">
              <button className="bg-white font-semibold text-black px-6 py-2 rounded-full transition-shadow duration-300 hover:shadow-[0_0_30px_10px_rgba(255,255,255,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 cursor-pointer">{dict.services?.cta}</button>
            </div>
          </div>
        </div>
      </section>
      <section
        id="proceso"
        className="relative w-full py-12 flex justify-center items-center bg-black"
      >
        <div className="pointer-events-none absolute inset-0 z-0">
            <PixelBlast
              className="opacity-100"
              color="#7dd3fc"
              variant="circle"
              pixelSize={6} 
              patternScale={4} 
              patternDensity={1} 
              enableRipples={false}
              edgeFade={0.65}
              transparent={true}
              speed={0.2}
              style={{}}
            />
          </div>
        <div className="relative container mx-auto p-6 rounded-2xl">
          {/* Encabezado */}
          <div className="relative max-w-2xl mx-auto z-10 flex flex-col gap-6 items-center justify-center mb-4">
            <h2
              className="relative text-sm md:text-md font-thin tracking-wider uppercase text-white text-center px-3 py-1 rounded-xl bg-black/40 backdrop-blur-xl border border-[#7dd3fc]/40 shadow-[0_0_24px_8px_rgba(125,211,252,0.25)]"
              style={{ textShadow: "0 0 10px rgba(255,255,255,0.35)" }}
            >
              {dict.process.title}
            </h2>
            <p className="text-4xl text-center text-white">
              {dict.process.introTitle}
            </p>
            <p className="text-xl text-center text-white">
              {dict.process.introDescription}
            </p>
          </div>
          <div>
            <Stepper
              initialStep={1}
              onStepChange={(step) => {
                console.log(step);
              }}
              onFinalStepCompleted={() => console.log("All steps completed!")}
              backButtonText={dict.process.prevStep}
              nextButtonText={dict.process.nextStep}
              stepCircleContainerClassName="bg-black"
            >
               {dict.process.items.map((b, i) => (
              <Step
                key={i}
              >
                <div className="h-36">
                  <h2 className="relative text-white text-3xl font-bold z-10">{b.title}</h2>
                  <img className="absolute top-0 right-6 w-36 h-36 z-10 opacity-25" src={b.img} alt={b.title} />
                  <p className="relative text-white text-lg z-10">{b.description}</p>
                </div>
              </Step>
            ))}
            </Stepper>
          </div>
        </div>
      </section>
    </div>
  );
}
