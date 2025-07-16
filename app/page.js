'use client';
import Image from 'next/image';
import { useState } from 'react';
import FormDelivery from '@/components/FormDelivery.jsx';

export default function Home() {
  const [formResult, setFormResult] = useState(null);

  const handleResult = (result) => {
    setFormResult(result);
  };

  const renderStep = (step) => {
    let badgeText = 'PASS';
    let badgeColor = 'gray';
    let label = `Nothing to do at ${step.address} 🤷🏼‍♀️`;

    if (step.action === 'pickup') {
      badgeText = 'PICKUP';
      badgeColor = '#00a63e';
      label = `Pickup at ${step.address}`;
    } else if (step.action === 'dropoff') {
      badgeText = 'DROPOFF';
      badgeColor = '#1447e6';
      label = `Dropoff at ${step.address}`;
    }

    return (
      <li key={step.address} className="flex items-center gap-2 mb-2">
        <span
          className="text-white text-xs px-2 py-1 rounded"
          style={{ backgroundColor: badgeColor }}
        >
          {badgeText}
        </span>
        <span>{label}</span>
      </li>
    );
  };

  return (
    <div className="App grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-manrope)]">
      <main className="App-main flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <header className="App-header">
          <Image
            src="https://a.storyblok.com/f/171339/x/6ae07675ed/logo-dashdoc-black.svg"
            alt="Dashdoc logo"
            width={180}
            height={38}
            priority
            className="m-auto"
          />
          <h1 className="App-title text-center m-auto">Delivery Checker 🚚💨</h1>
          <p className="App-description text-center m-auto">Find out your path for the day 🛣️</p>
        </header>
        <FormDelivery onResult={handleResult} />

        {formResult && (
          <section className="App-result">
            {formResult.status === 'error' && (
              <div className="bg-red-100 text-red-700 border border-red-400 rounded-lg p-4 mb-4">
                <p className="text-md">{formResult.error_message}</p>
                <p className="text-italic text-xs">Error code: {formResult.error_code}</p>
              </div>
            )}
            {formResult.status === 'success' && (
              <div className="App-result--success">
                <h2 className="App-title">Delivery Steps</h2>
                <ul>{formResult.steps.map((step) => renderStep(step))}</ul>
              </div>
            )}
          </section>
        )}
      </main>
    </div>
  );
}
