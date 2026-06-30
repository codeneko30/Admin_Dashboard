import { useState } from 'react';
import { CircleCheck } from 'lucide-react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

 

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      name: 'Free',
      monthly: 0,
      yearly: 0,
      description: 'For individuals getting started',
      features: [
        'Single user',
        'Basic components library',
        'Community support',
        '1GB storage space',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Pro',
      monthly: 49,
      yearly: 39,
      description: 'For professionals',
      features: [
        'Up to 5 team members',
        'Advanced components library',
        'Priority support',
        '2GB storage space',
        'Team collaboration',
        'Custom branding',
      ],
      cta: 'Purchase',
      highlighted: true,
    },
  ];

  return (
    <div className="w-full bg-white">
        <Header/>
      <main className="  max-w-5xl mx-auto px-4 pt-10 pb-14 sm:px-5 sm:pt-14 sm:pb-20 ">

        
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Pricing</h2>
          <p className="text-sm sm:text-base text-gray-500">
            Check out our affordable pricing plans
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10">
          <span className={`text-sm font-semibold ${!yearly ? 'text-gray-900' : 'text-gray-400'}`}>
            Monthly
          </span>
          <button
            onClick={() => setYearly(!yearly)}
            className={`relative w-12 h-6 rounded-full transition-colors ${
              yearly ? 'bg-gray-900' : 'bg-gray-200'
            }`}
            aria-label="Toggle billing period"
          >
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                yearly ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-sm font-semibold ${yearly ? 'text-gray-900' : 'text-gray-400'}`}>
            Yearly
          </span>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col ${
                plan.highlighted
                  ? 'border-2 border-gray-900'
                  : 'border border-gray-200'
              }`}
            >
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                  ${yearly ? plan.yearly : plan.monthly}
                </span>
                <span className="text-sm sm:text-base text-gray-400">/per month</span>
              </div>
              <p className="text-sm text-gray-400 mb-5 sm:mb-6">{plan.description}</p>

              <div className="border-t border-gray-100 mb-5 sm:mb-6" />

              <ul className="space-y-3 mb-6 sm:mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CircleCheck size={15} strokeWidth={1.5} className="shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg text-sm font-medium transition ${
                  plan.highlighted
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'border border-gray-300 text-gray-900 hover:bg-gray-50'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

      </main>
      <Footer/>
    </div>
  );
}