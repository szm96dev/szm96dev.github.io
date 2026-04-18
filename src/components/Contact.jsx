import React, { memo, useMemo } from 'react';
import { Section, SocialLinks, Button, SectionHeader } from './ui';
import { contactInfo, socialLinks } from '../constants/navigation';
import { personalInfo } from '../constants';
import { getContactIcon } from '../utils/iconMapper';
import { shouldOpenInNewTab } from '../utils/helpers';

const Contact = () => {
  const contactCards = useMemo(() => contactInfo.map((item) => ({
    ...item,
    icon: getContactIcon(item.icon)
  })), []);

  const social = useMemo(() => socialLinks.map((link) => ({
    ...link,
    icon: getContactIcon(link.icon)
  })), []);

  return (
    <Section
      id="contact"
      background="gradient"
      padding="lg"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-10 w-72 h-72 bg-primary-500/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-24 -left-10 w-72 h-72 bg-primary-700/20 blur-3xl rounded-full"></div>
      </div>

      <SectionHeader
        pill="Let’s collaborate"
        title="Get in touch with Sikandar"
        description="If you have an internship, junior role, or entry-level frontend opportunity in mind, reach out. I’d be glad to connect and discuss how I can contribute and keep growing."
        className="max-w-4xl mb-2"
      />

      <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-8 items-start">
        {/* Contact methods */}
        <div className="space-y-5">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {contactCards.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target={shouldOpenInNewTab(item.link) ? '_blank' : undefined}
                rel={shouldOpenInNewTab(item.link) ? 'noopener noreferrer' : undefined}
                className="group rounded-2xl bg-white/80 dark:bg-dark-800/80 backdrop-blur p-5 shadow-lg border border-gray-100/70 dark:border-dark-700/70 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl min-h-[148px]"
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center text-primary-600 dark:text-primary-300">
                    {item.icon}
                  </div>
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div className="mt-3 min-w-0">
                  <p className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400 font-semibold">{item.title}</p>
                  <p className="mt-1 text-base sm:text-lg font-semibold text-gray-900 dark:text-white break-words leading-tight">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div className="rounded-2xl bg-white/80 dark:bg-dark-800/80 backdrop-blur p-6 shadow-lg border border-gray-100/70 dark:border-dark-700/70">
            <div className="flex items-center justify-between mb-3 gap-3">
              <h3 className="text-lg sm:text-xl font-heading font-semibold text-gray-900 dark:text-white">
                Follow me
              </h3>
              <span className="text-xs font-semibold text-primary-600 dark:text-primary-300 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30">
                Social
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Connect for project updates, code snippets, and frontend ideas.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <SocialLinks links={social} size="lg" variant="dark" className="gap-4 space-x-0" />
            </div>
          </div>
        </div>

        {/* Availability / CTA */}
        <div className="rounded-2xl bg-gradient-to-br from-primary-600 via-primary-600 to-primary-700 text-white p-6 sm:p-7 shadow-2xl relative overflow-hidden h-fit">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#ffffff40_0,_transparent_45%)] pointer-events-none"></div>
          <div className="relative flex items-center space-x-3 mb-3">
            <span className="w-3 h-3 rounded-full bg-emerald-300 animate-pulse"></span>
            <span className="text-sm font-semibold">Available for opportunities</span>
          </div>
          <h3 className="relative text-2xl sm:text-3xl font-heading font-bold mb-2">
            Let&apos;s connect and grow together
          </h3>
          <p className="relative text-sm sm:text-base text-primary-50/90 mb-5 leading-relaxed">
            I&apos;m actively building my frontend skills and looking for internships, junior roles, and meaningful opportunities to contribute to real projects.
          </p>
          <div className="relative space-y-2.5">
            <Button
              as="a"
              href={personalInfo.emailUrl}
              size="md"
              className="w-full bg-white text-primary-700 hover:bg-gray-100"
            >
              Email Sikandar
            </Button>
            <Button
              as="a"
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              size="md"
              variant="ghost"
              className="w-full border border-white/40 text-white hover:bg-white/10"
            >
              View CV
            </Button>
          </div>
          <div className="relative mt-5 flex items-center space-x-3 text-sm text-primary-50/80">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3v1.5a3 3 0 106 0V11c0-1.657-1.343-3-3-3z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11h-.75a2.25 2.25 0 00-2.25 2.25v1.5A3.75 3.75 0 007.75 18h8.5a3.75 3.75 0 003.75-3.75v-1.5A2.25 2.25 0 0017.75 11H17" />
            </svg>
            <span>Open to learning and feedback</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default memo(Contact);
