import { CircleCheck, Clock, CreditCard, ShieldCheck } from 'lucide-react';
import Header from '~/components/Header';
import Footer from '~/components/Footer';

export default function PricingPlans() {
  const time = { h: 23, m: 45, s: 12 };
  const pad = (n) => String(n).padStart(2, '0');

  const plans = [
    {
      name: 'Weekday Pass',
      price: '$120',
      oldPrice: '$150',
      dates: 'Aug 2024 to Jan 2025',
      features: ['Use any device to access', '4-6 PM in your time zone', 'Available every weekday'],
      popular: false,
    },
    {
      name: 'Everyday Pass',
      price: '$200',
      oldPrice: '$250',
      dates: 'Aug 2024 to Jan 2025',
      features: ['Everything in Weekday Pass', 'Available on weekends', 'Add multiple siblings'],
      popular: true,
    },
    {
      name: 'All-access Pass',
      price: '$240',
      oldPrice: '$300',
      dates: 'Aug 2024 to Jan 2025',
      features: ['Everything in Everyday Pass', 'Available 5 hours per day'],
      popular: false,
    },
  ];

  const trustItems = [
    {
      title: 'Unlimited Access',
      desc: 'All plans come up with unlimited access until January.',
      icon: Clock,
    },
    {
      title: 'Money Back Guarantee',
      desc: '100% satisfaction guaranteed or get your money back.',
      icon: CreditCard,
    },
    {
      title: 'Safe & Secure',
      desc: "Safety is our top priority, and we've taken a number of measures to keep kids safe.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="w-full bg-gray-50">
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-5 pt-10 sm:pt-14 pb-14 sm:pb-20">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
            Get Fall Access For<br />Less Than $1 Per Day
          </h2>
          <p className="text-sm text-gray-400">
            Get 20% off on all plans! Deal expires in{' '}
            <span className="text-red-500 font-medium">
              {pad(time.h)}h : {pad(time.m)}m : {pad(time.s)}s
            </span>
          </p>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-14">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-2xl p-5 sm:p-6 flex flex-col shadow-sm ${
                plan.popular ? 'border-2 border-green-500' : 'border border-gray-100'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base sm:text-lg font-bold text-gray-900">{plan.name}</h3>
                {plan.popular && (
                  <span className="px-2.5 py-1 bg-green-500 text-white text-xs font-medium rounded-full whitespace-nowrap">
                    Most popular
                  </span>
                )}
              </div>

              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="flex flex-col leading-none">
                  <span className="text-xs text-red-500 font-semibold">-20%</span>
                  <span className="text-xs text-gray-300 line-through">{plan.oldPrice}</span>
                </span>
              </div>
              <p className="text-xs text-gray-400 mb-5 sm:mb-6">{plan.dates}</p>

              <ul className="space-y-3 mb-6 sm:mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <CircleCheck size={16} strokeWidth={2} className="fill-green-500 text-white shrink-0" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-lg text-sm font-medium transition ${
                  plan.popular
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Get started
              </button>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex sm:flex-col items-center sm:text-center gap-4 sm:gap-0">
                <div className="w-10 h-10 shrink-0 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-700 sm:mb-3">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1 sm:mb-1.5">{item.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed sm:max-w-xs">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </main>

      <Footer />
    </div>
  );
}
