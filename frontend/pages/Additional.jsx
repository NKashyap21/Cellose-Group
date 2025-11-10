import React from "react";

/**
 * Replace the placeholder <img> src with your actual image paths when ready.
 * This component is responsive:
 * - Desktop: two-column layout with boxed sections and images
 * - Tablet/mobile: stacks into single-column
 */

export default function AdditionalPage() {
  const bulletClass = "text-sm md:text-base text-slate-800 leading-relaxed";

  return (
    <div className="min-h-screen bg-[#dff5ea] font-sans text-slate-900">
      {/* page outer padding to mimic slide margins */}
      <div className="max-w-5xl mx-auto p-4 md:p-6">

        {/* Header */}
        <header className="bg-[#dff5ea] border border-slate-300 rounded-sm mb-4 p-4 md:p-6 flex items-center gap-4">
          {/* left small logo circle (placeholder) */}
          <div className="flex-shrink-0">
            {/* replace with logo img if you have one */}
            <div className="w-16 h-16 rounded-full bg-white border border-slate-300 flex items-center justify-center text-xs">
              LOGO
            </div>
          </div>

          {/* Title area */}
          <div className="flex-1 text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-slate-900 tracking-tight">
              Cellulose &amp; Composite
            </h1>

            {/* Bacterial cellulose subtitle (blue, centered) */}
            <div className="mt-2">
              <div className="text-center text-lg md:text-xl font-bold text-[#0f2aa6]">
                BACTERIAL CELLULOSE (BC)
              </div>
              <div className="text-[#0f2aa6] mt-1 font-medium">
                A natural wonder in its purest form
              </div>
            </div>
          </div>
        </header>

        {/* Thin divider like slide */}
        <div className="h-[2px] bg-slate-300 mb-6" />

        {/* Main grid: two columns on md+ */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* HYDROGEL (left top) */}
          <section className="bg-[#dff5ea] border border-slate-300 p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:flex-1">
                <h2 className="text-xl md:text-2xl font-semibold text-[#2b6b7a] mb-2">HYDROGEL</h2>
                <ul className={bulletClass + " list-disc pl-5 space-y-2"}>
                  <li>Pure, flexible, naturally hydrated hydrogel</li>
                  <li>3D nanofibrous network with high water retention</li>
                  <li>Available as wet pellicles or custom shapes/thicknesses</li>
                  <li>Applications include wound dressings, drug delivery, skincare masks, food industry, and bioprinting</li>
                  <li>Eco-friendly, biodegradable, and sustainable</li>
                </ul>
              </div>

              <div className="md:w-48 md:h-36 flex-shrink-0 rounded-lg overflow-hidden border border-slate-200 bg-white">
                {/* placeholder image - replace src when you add images */}
                <img
                  src="/images/hydrogel-placeholder.png"
                  alt="hydrogel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* FILMS (DRIED) (right top) */}
          <section className="bg-[#dff5ea] border border-slate-300 p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-48 md:h-36 flex-shrink-0 rounded-lg overflow-hidden border border-slate-200 bg-white">
                <img
                  src="/images/film-placeholder.png"
                  alt="films"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:flex-1">
                <h2 className="text-xl md:text-2xl font-semibold text-[#2b6b7a] mb-2">FILMS (DRIED)</h2>
                <ul className={bulletClass + " list-disc pl-5 space-y-2"}>
                  <li>Lightweight, transparent, and strong</li>
                  <li>Available as air dried, oven dried, hot pressed and freeze-dried</li>
                  <li>Tunable films for drug delivery, packaging, electronics, and membranes</li>
                  <li>Functional film types such as antimicrobial, magnetic, and nanocomposites</li>
                </ul>
              </div>
            </div>
          </section>

          {/* BEADS & SPHEROIDS (left mid) */}
          <section className="bg-[#dff5ea] border border-slate-300 p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:flex-1">
                <h2 className="text-xl md:text-2xl font-semibold text-[#2b6b7a] mb-2">BEADS &amp; SPHEROIDS</h2>
                <ul className={bulletClass + " list-disc pl-5 space-y-2"}>
                  <li>Spherical 3D cellulose beads (hydrogel or dried)</li>
                  <li>High surface area with porous structure and tunable release properties</li>
                  <li>Applications across drug delivery, agriculture, enzyme immobilization and cosmetics</li>
                  <li>Functionalized (magnetic/antimicrobial) for extended uses</li>
                </ul>
              </div>

              <div className="md:w-48 md:h-36 flex-shrink-0 rounded-lg overflow-hidden border border-slate-200 bg-white">
                <img
                  src="/images/beads-placeholder.png"
                  alt="beads"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          {/* SUSPENSION / SLURRY / POWDER (right mid) */}
          <section className="bg-[#dff5ea] border border-slate-300 p-4 md:p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="md:w-48 md:h-36 flex-shrink-0 rounded-lg overflow-hidden border border-slate-200 bg-white">
                <img
                  src="/images/suspension-placeholder.png"
                  alt="suspension"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:flex-1">
                <h2 className="text-xl md:text-2xl font-semibold text-[#2b6b7a] mb-2">SUSPENSION / SLURRY / POWDER</h2>
                <ul className={bulletClass + " list-disc pl-5 space-y-2"}>
                  <li>BC nanofibril dispersions/slurries/powder</li>
                  <li>Stable, shear-thinning gels with high surface area</li>
                  <li>Availability in varied concentrations for composites and coatings</li>
                  <li>Applications in food, inks, rheology modifiers, bioplastics and liquid crystals</li>
                  <li>Functionalized form tailored for separation, filtration, biomedical uses</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Functionalized materials / contact (full width bottom) */}
          <section className="col-span-1 md:col-span-2 bg-[#dff5ea] border border-slate-300 p-4 md:p-6">
            <p className="text-sm md:text-base text-slate-900">
              <span className="font-semibold">For any material requirement or discussion to engineer the material to your technical need</span> - please contact{" "}
              <a href="mailto:mudrika@msme.iith.ac.in" className="text-[#0f2aa6] font-bold underline">
                mudrika@msme.iith.ac.in
              </a>
            </p>
          </section>
        </main>

      </div>
    </div>
  );
}
