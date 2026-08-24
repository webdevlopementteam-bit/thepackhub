import React from "react";

function WeAreWorking() {
  return (
    <section className="bg-[#2E2F83] text-white py-16 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">
          We are working toward a ZERO-EMISSION future.
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-4 bg-white/10 rounded">
            <p className="text-xl font-semibold">1,413 MWp</p>
            <p className="text-sm">of power system</p>
          </div>
          <div className="p-4 bg-white/10 rounded">
            <p className="text-xl font-semibold">670 Tons</p>
            <p className="text-sm">of saved CO2 per year</p>
          </div>
          <div className="p-4 bg-white/10 rounded">
            <p className="text-xl font-semibold">279 Toe</p>
            <p className="text-sm">avoided</p>
          </div>
          <div className="p-4 bg-white/10 rounded">
            <p className="text-xl font-semibold">55,800</p>
            <p className="text-sm">Equivalent of saved trees</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WeAreWorking;
