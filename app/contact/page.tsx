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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xredlpwl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Thank you! Your message has been sent successfully.");
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          propertyType: '',
          serviceType: '',
          message: '',
        });
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      alert("Oops! There was a problem submitting your form.");
    }
  };

  return (
    <>
      <Navbar />
      <PageHero
        breadcrumb="Contact"
        title={<>GET IN<br />TOUCH</>}
        subtitle="Need emergency roof repairs or a free site inspection? Contact our team today for professional roofing services across Singapore."
        bgImage="/contact/contact.png"
        minHeight="50vh"
      />

      {/* EMERGENCY BANNER */}
      <div className="bg-[#C9A84C] py-4 md:py-5 px-4 md:px-[60px]">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="font-bold text-[12px] sm:text-[13px] text-[#111827] tracking-[0.5px] sm:tracking-[1px]" style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}>
            🚨 Emergency Roof Leak? <span className="opacity-70 font-normal ml-1 sm:ml-2">We offer 24-hour emergency response across Singapore.</span>
          </div>
          <a
            href="tel:+6590545431"
            className="bg-[#FFFFFF] text-[#C9A84C] px-4 py-2 md:px-6 md:py-2.5 font-bold text-[10px] md:text-[11px] tracking-[2px] uppercase no-underline inline-block transition-colors hover:bg-[#F3F4F6]"
            style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
          >
            Call Now: +65 9054 5431
          </a>
        </div>
      </div>

      {/* MAIN CONTACT */}
      <section className="bg-[#FFFFFF] py-12 md:py-[100px] px-4 md:px-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-8 md:gap-20">
          {/* Contact Info */}
          <Reveal>
            <div
              className="text-[#111827] mb-4 md:mb-6 leading-none"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(32px, 5vw, 64px)' }}
            >
              HOW TO<br />REACH US
            </div>
            <p className="text-[13px] md:text-[15px] text-[#111827] leading-[1.7] md:leading-[1.8] mb-6 md:mb-10">
              Our team is ready to help with any roofing, waterproofing, or structural query. Reach us by phone, WhatsApp, or email — or fill in the form and we&apos;ll get back to you within one business day.
            </p>
            <div className="flex flex-col gap-[2px]">
              {contactCards.map((card, i) => (
                <a
                  key={i}
                  href={card.href}
                  className="bg-[#F3F4F6] p-5 md:p-[24px_28px] flex items-start gap-4 sm:gap-5 border-l-[3px] border-transparent transition-all duration-200 hover:border-[#C9A84C] no-underline"
                >
                  <div className="w-9 h-9 md:w-10 md:h-10 min-w-[36px] md:min-w-[40px] border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] text-[14px] md:text-[16px] mt-0.5">
                    {card.icon}
                  </div>
                  <div>
                    <div className="text-[8px] md:text-[9px] tracking-[2px] uppercase text-[#C9A84C] mb-1">{card.label}</div>
                    <div className="font-bold text-[13px] sm:text-[15px] text-[#111827] mb-0.5">{card.value}</div>
                    <div className="text-[11px] sm:text-[12px] text-[#111827]">{card.sub}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp */}
            <div className="mt-6 md:mt-8 p-5 md:p-7 bg-[rgba(37,211,102,0.08)] border border-[rgba(37,211,102,0.2)]">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 md:w-11 md:h-11 bg-[#25D366] rounded-full flex items-center justify-center text-lg flex-shrink-0">💬</div>
                  <div>
                    <strong className="text-[13px] md:text-[14px] text-[#111827] block mb-0.5">WhatsApp Us</strong>
                    <span className="text-[11px] md:text-[12px] text-[#111827]">Quick responses via WhatsApp</span>
                  </div>
                </div>
                <a
                  href="https://wa.link/zekbfi"
                  className="sm:ml-auto w-full sm:w-auto text-center bg-[#25D366] text-[#111827] px-5 py-2.5 font-bold text-[10px] md:text-[11px] tracking-[1.5px] uppercase no-underline inline-block transition-colors hover:bg-[#1da851]"
                  style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
                >
                  Open WhatsApp
                </a>
              </div>
            </div>
          </Reveal>

          {/* Contact Form */}
          <Reveal delay={1}>
            <div className="mb-6 md:mb-9">
              <h3
                className="text-[#111827] mb-1 md:mb-2"
                style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(26px, 5vw, 44px)' }}
              >
                SEND US A MESSAGE
              </h3>
              <p className="text-[12px] md:text-[14px] text-[#111827]">Fill in the form below and our team will contact you within one business day with a free quote.</p>
            </div>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 md:gap-4">
              {[
                { label: 'First Name', name: 'firstName', type: 'text', placeholder: 'e.g. Michael', full: false },
                { label: 'Last Name', name: 'lastName', type: 'text', placeholder: 'e.g. Tan', full: false },
                { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '+65 9XXX XXXX', full: false },
                { label: 'Email Address', name: 'email', type: 'email', placeholder: 'you@example.com', full: false },
              ].map((field) => (
                <div key={field.name} className={`flex flex-col gap-1.5 md:gap-2 ${field.full ? 'sm:col-span-2' : ''}`}>
                  <label className="text-[9px] md:text-[10px] tracking-[2px] uppercase text-[#C9A84C]">{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    className="bg-[#F3F4F6] border border-[rgba(201,168,76,0.2)] text-[#111827] px-4 py-3 md:px-[18px] md:py-3.5 text-[13px] md:text-[14px] outline-none transition-colors focus:border-[#C9A84C] placeholder-[#9CA3AF] w-full"
                    style={{ fontFamily: 'var(--font-inter, sans-serif)' }}
                  />
                </div>
              ))}

              {[
                { label: 'Property Type', name: 'propertyType', options: propertyTypes },
                { label: 'Service Required', name: 'serviceType', options: serviceTypes },
              ].map((select) => (
                <div key={select.name} className="flex flex-col gap-1.5 md:gap-2 sm:col-span-2">
                  <label className="text-[9px] md:text-[10px] tracking-[2px] uppercase text-[#C9A84C]">{select.label}</label>
                  <select
                    name={select.name}
                    value={formData[select.name as keyof typeof formData]}
                    onChange={handleChange}
                    className={`select-custom bg-[#F3F4F6] border border-[rgba(201,168,76,0.2)] px-4 py-3 md:px-[18px] md:py-3.5 text-[13px] md:text-[14px] outline-none transition-colors focus:border-[#C9A84C] w-full cursor-pointer ${formData[select.name as keyof typeof formData] === '' ? 'text-[#9CA3AF]' : 'text-[#111827]'
                      }`}
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

              <div className="flex flex-col gap-1.5 md:gap-2 sm:col-span-2">
                <label className="text-[9px] md:text-[10px] tracking-[2px] uppercase text-[#C9A84C]">Message</label>
                <textarea
                  name="message"
                  placeholder="Describe your roofing issue or query. The more detail you provide, the better we can help."
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-[#F3F4F6] border border-[rgba(201,168,76,0.2)] text-[#111827] px-4 py-3 md:px-[18px] md:py-3.5 text-[13px] md:text-[14px] outline-none transition-colors focus:border-[#C9A84C] placeholder-[#9CA3AF] w-full resize-vertical"
                  style={{ fontFamily: 'var(--font-inter, sans-serif)' }}
                />
              </div>

              <div className="sm:col-span-2 mt-2">
                <button
                  type="submit"
                  className="w-full bg-[#C9A84C] text-[#111827] border-2 border-[#C9A84C] py-3.5 md:py-[18px] font-bold text-[11px] md:text-[13px] tracking-[2px] uppercase transition-all duration-200 hover:bg-transparent hover:text-[#C9A84C] cursor-pointer"
                  style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
                >
                  Send Message &amp; Request Inspection
                </button>
                <p className="text-[10px] md:text-[11px] text-[#111827] mt-3 leading-[1.6]">
                  By submitting this form, you agree to be contacted by Asia Tech Roofing regarding your enquiry. We do not share your information with third parties.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </section>

      {/* MAP + HOURS */}
      <section className="bg-[#F9FAFB] py-12 md:py-[100px] px-4 md:px-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[60px] items-center">
          <Reveal>
            <div className="h-[240px] sm:h-[300px] md:h-[360px] bg-[#F3F4F6] border border-[rgba(201,168,76,0.2)] flex flex-col items-center justify-center gap-4">
              <div className="text-[32px] md:text-[40px]">📍</div>
              <div className="text-[12px] md:text-[13px] text-[#111827]">Singapore — Island-wide Service Coverage</div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-[#111827] border-2 border-[rgba(240,237,230,0.3)] px-4 py-2 md:px-5 md:py-2.5 font-bold text-[10px] md:text-[11px] tracking-[2px] uppercase transition-all duration-200 hover:border-[#C9A84C] hover:text-[#C9A84C] no-underline inline-block"
                style={{ fontFamily: 'var(--font-montserrat, sans-serif)' }}
              >
                Open in Maps
              </a>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <span className="text-[9px] md:text-[10px] tracking-[3px] md:tracking-[4px] uppercase text-[#C9A84C] mb-3 md:mb-4 block font-semibold">Operating Hours</span>
            <h3
              className="text-[#111827] mb-3 md:mb-4 leading-none"
              style={{ fontFamily: 'var(--font-bebas, sans-serif)', fontSize: 'clamp(28px, 5vw, 48px)' }}
            >
              We Cover<br />All of Singapore
            </h3>
            <p className="text-[12px] md:text-[14px] text-[#111827] leading-[1.7] md:leading-[1.8] mb-5 md:mb-7">
              From Jurong to Changi, we provide island-wide roofing services for residential, commercial, and industrial properties.
            </p>
            <div className="grid grid-cols-2 gap-[1px] bg-[rgba(201,168,76,0.2)]">
              {hours.map((h, i) => (
                <div key={i} className="bg-[#F3F4F6] p-3 px-4 md:p-3.5 md:px-5">
                  <div className="text-[11px] md:text-[12px] font-semibold text-[#111827] mb-0.5">{h.day}</div>
                  <div className={`text-[11px] md:text-[12px] ${h.closed ? 'text-[#111827] opacity-50' : 'text-[#111827]'}`}>{h.time}</div>
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
