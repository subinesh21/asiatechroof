'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';



const propertyTypes = [
  'Select your property type',
  'Landed / Bungalow',
  'HDB Flat',
  'Condominium',
  'Commercial / Office',
  'Retail / Shophouse',
  'Industrial / Factory',
  'Warehouse',
  'Other',
];

const serviceTypes = [
  'Select service type',
  'Roof Repair',
  'Leak Repair',
  'Waterproofing',
  'Structural Works',
  'General Inspection',
  'Multiple Services',
  'Not Sure — Need Assessment',
];

const contactCards = [
  { icon: '📞', label: 'Phone — Thenu', value: '+65 9054 5431', sub: 'Mon–Sat, 8am–6pm', href: 'tel:+6590545431' },
  { icon: '📞', label: 'Phone — Palani', value: '+65 9892 7202', sub: 'Mon–Sat, 8am–6pm', href: 'tel:+6598927202' },
  { icon: '✉', label: 'Email', value: 'sales@asiatechroof.sg', sub: 'Response within 1 business day', href: 'mailto:sales@asiatechroof.sg' },
];

const hours = [
  { day: 'Monday – Friday', time: '8:00am – 6:00pm' },
  { day: 'Saturday', time: '8:00am – 4:00pm' },
  { day: 'Sunday', time: 'Closed (Emergency only)', closed: true },
  { day: 'Public Holidays', time: 'Emergency only', closed: true },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    propertyType: '',
    serviceType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <>
      <Navbar />
      <PageHero
        breadcrumb="Contact"
        title={<>GET IN<br />TOUCH</>}
        subtitle="Free on-site inspections, expert advice, and transparent pricing. Contact our team today."
        minHeight="50vh"
      />

      {/* EMERGENCY BANNER */}
      <div className="bg-[#C9A84C] py-5 px-6 md:px-[60px]">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="font-bold text-[13px] text-[#0D0F12] tracking-[1px]" style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}>
            🚨 Emergency Roof Leak? <span className="opacity-70 font-normal ml-2">We offer 24-hour emergency response across Singapore.</span>
          </div>
          <a
            href="tel:+6590545431"
            className="bg-[#0D0F12] text-[#C9A84C] px-6 py-2.5 font-bold text-[11px] tracking-[2px] uppercase no-underline inline-block transition-colors hover:bg-[#1C2130]"
            style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
          >
            Call Now: +65 9054 5431
          </a>
        </div>
      </div>

      {/* MAIN CONTACT */}
      <section className="bg-[#0D0F12] py-16 md:py-[100px] px-6 md:px-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-12 md:gap-20">
          {/* Contact Info */}
          <Reveal>
            <div
              className="text-[48px] text-[#F0EDE6] mb-6 leading-none"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}
            >
              HOW TO<br />REACH US
            </div>
            <p className="text-[15px] text-[#8A8F9E] leading-[1.8] mb-10">
              Our team is ready to help with any roofing, waterproofing, or structural query. Reach us by phone, WhatsApp, or email — or fill in the form and we&apos;ll get back to you within one business day.
            </p>
            <div className="flex flex-col gap-[2px]">
              {contactCards.map((card, i) => (
                <a
                  key={i}
                  href={card.href}
                  className="bg-[#1C2130] p-[24px_28px] flex items-start gap-5 border-l-[3px] border-transparent transition-all duration-200 hover:border-[#C9A84C] no-underline"
                >
                  <div className="w-10 h-10 min-w-[40px] border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] text-[16px] mt-0.5">
                    {card.icon}
                  </div>
                  <div>
                    <div className="text-[9px] tracking-[2px] uppercase text-[#C9A84C] mb-1">{card.label}</div>
                    <div className="font-bold text-[15px] text-[#F0EDE6] mb-0.5">{card.value}</div>
                    <div className="text-[12px] text-[#8A8F9E]">{card.sub}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp */}
            <div className="mt-8 p-7 bg-[rgba(37,211,102,0.08)] border border-[rgba(37,211,102,0.2)]">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 bg-[#25D366] rounded-full flex items-center justify-center text-xl">💬</div>
                <div>
                  <strong className="text-[14px] text-[#F0EDE6] block mb-0.5">WhatsApp Us</strong>
                  <span className="text-[12px] text-[#8A8F9E]">Quick responses via WhatsApp</span>
                </div>
                <a
                  href="https://wa.link/zekbfi"
                  className="ml-auto bg-[#25D366] text-white px-5 py-2.5 font-bold text-[11px] tracking-[1.5px] uppercase no-underline inline-block transition-colors hover:bg-[#1da851]"
                  style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
                >
                  Open WhatsApp
                </a>
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={1}>
            <div className="mb-9">
              <h3
                className="text-[36px] text-[#F0EDE6] mb-2"
                style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}
              >
                SEND US A MESSAGE
              </h3>
              <p className="text-[14px] text-[#8A8F9E]">Fill in the form below and our team will contact you within one business day with a free quote.</p>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { label: 'First Name', name: 'firstName', type: 'text', placeholder: 'e.g. Michael', full: false },
                { label: 'Last Name', name: 'lastName', type: 'text', placeholder: 'e.g. Tan', full: false },
                { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+65 9XXX XXXX', full: false },
                { label: 'Email Address', name: 'email', type: 'email', placeholder: 'you@example.com', full: false },
              ].map((field) => (
                <div key={field.name} className={`flex flex-col gap-2 ${field.full ? 'sm:col-span-2' : ''}`}>
                  <label className="text-[10px] tracking-[2px] uppercase text-[#C9A84C]">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    className="bg-[#1C2130] border border-[rgba(201,168,76,0.2)] text-[#F0EDE6] px-[18px] py-3.5 text-[14px] outline-none transition-colors focus:border-[#C9A84C] placeholder-[#8A8F9E] w-full"
                    style={{ fontFamily: 'var(--font-inter, sans-serif)' }}
                  />
                </div>
              ))}

              {[
                { label: 'Property Type', name: 'propertyType', options: propertyTypes },
                { label: 'Service Required', name: 'serviceType', options: serviceTypes },
              ].map((select) => (
                <div key={select.name} className="flex flex-col gap-2 sm:col-span-2">
                  <label className="text-[10px] tracking-[2px] uppercase text-[#C9A84C]">{select.label}</label>
                  <select
                    name={select.name}
                    value={formData[select.name as keyof typeof formData]}
                    onChange={handleChange}
                    className="select-custom bg-[#1C2130] border border-[rgba(201,168,76,0.2)] text-[#F0EDE6] px-[18px] py-3.5 text-[14px] outline-none transition-colors focus:border-[#C9A84C] w-full cursor-pointer"
                    style={{ fontFamily: 'var(--font-inter, sans-serif)' }}
                  >
                    {select.options.map((opt, i) => (
                      <option key={i} value={i === 0 ? '' : opt} disabled={i === 0}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              ))}

              <div className="flex flex-col gap-2 sm:col-span-2">
                <label className="text-[10px] tracking-[2px] uppercase text-[#C9A84C]">Message</label>
                <textarea
                  name="message"
                  placeholder="Describe your roofing issue or query. The more detail you provide, the better we can help."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-[#1C2130] border border-[rgba(201,168,76,0.2)] text-[#F0EDE6] px-[18px] py-3.5 text-[14px] outline-none transition-colors focus:border-[#C9A84C] placeholder-[#8A8F9E] w-full resize-vertical"
                  style={{ fontFamily: 'var(--font-inter, sans-serif)' }}
                />
              </div>

              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  className="w-full bg-[#C9A84C] text-[#0D0F12] border-2 border-[#C9A84C] py-[18px] font-bold text-[13px] tracking-[2px] uppercase transition-all duration-200 hover:bg-transparent hover:text-[#C9A84C] cursor-pointer"
                  style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
                >
                  Send Message &amp; Request Inspection
                </button>
                <p className="text-[11px] text-[#8A8F9E] mt-3 leading-[1.6]">
                  By submitting this form, you agree to be contacted by Asia Tech Roofing regarding your enquiry. We do not share your information with third parties.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      {/* MAP + HOURS */}
      <section className="bg-[#141820] py-20 px-6 md:px-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[60px] items-center">
          <Reveal>
            <div className="h-[360px] bg-[#1C2130] border border-[rgba(201,168,76,0.2)] flex flex-col items-center justify-center gap-4">
              <div className="text-[40px]">📍</div>
              <div className="text-[13px] text-[#8A8F9E]">Singapore — Island-wide Service Coverage</div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-[#F0EDE6] border-2 border-[rgba(240,237,230,0.3)] px-5 py-2.5 font-bold text-[11px] tracking-[2px] uppercase transition-all duration-200 hover:border-[#C9A84C] hover:text-[#C9A84C] no-underline inline-block"
                style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
              >
                Open in Maps
              </a>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <span className="text-[10px] tracking-[4px] uppercase text-[#C9A84C] mb-4 block">Operating Hours</span>
            <h3
              className="text-[40px] text-[#F0EDE6] mb-4 leading-none"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)' }}
            >
              We Cover<br />All of Singapore
            </h3>
            <p className="text-[14px] text-[#8A8F9E] leading-[1.8] mb-7">
              From Jurong to Changi, we provide island-wide roofing services for residential, commercial, and industrial properties.
            </p>
            <div className="grid grid-cols-2 gap-[1px] bg-[rgba(201,168,76,0.2)]">
              {hours.map((h, i) => (
                <div key={i} className="bg-[#1C2130] p-3.5 px-5">
                  <div className="text-[12px] font-semibold text-[#F0EDE6] mb-0.5">{h.day}</div>
                  <div className={`text-[12px] ${h.closed ? 'text-[#8A8F9E] opacity-50' : 'text-[#8A8F9E]'}`}>{h.time}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </>
  );
}
