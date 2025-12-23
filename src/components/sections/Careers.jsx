
import PeopleCulture from './PeopleCulture';
import JobOpenings from './JobOpenings';

import { useState, useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const teamMembers = [
  { name: 'Sreehari C', role: 'Chairman & CEO', photo: '/teams_images/sreehari.webp' },
  { name: 'Rahul C', role: 'Managing Director', photo: '/teams_images/rahul.webp' },
  { name: 'Anagha G M', role: 'Director', photo: '/teams_images/anagha.webp' },
  { name: 'Anjana', role: 'Director', photo: '/teams_images/anjana.webp' },
  { name: 'Shamsida', role: 'HR Manager', photo: '/teams_images/shamsida.webp' },
  { name: 'Anandu', role: 'Office Admin', photo: '/teams_images/anandu.webp' },
  { name: 'Ayisha Shifa', role: 'Finance coordinator', photo: '/teams_images/ayisha.webp' }
];

const perks = [
  { icon: 'fa-chart-line', text: 'Professional Growth' },
  { icon: 'fa-users', text: 'Collaborative Culture' },
  { icon: 'fa-arrow-up-right-dots', text: 'Clear Career Progression' },
  { icon: 'fa-hand-holding-heart', text: 'Work That Matters' },
  { icon: 'fa-globe', text: 'Diverse Client Exposure' },
  { icon: 'fa-balance-scale', text: 'Work-Life Balance' }
];

const jobListings = [
  {
    title: 'Marketing Field Executive',
    location: 'Kozhikode',
    type: 'Full-time',
    experience: '0 - 2+',
    description: 'We are looking for a proactive and client-focused Marketing Field Executive to promote our accounting and financial services. This role is open to both freshers and experienced candidates who are passionate about marketing, business development, and building strong client relationships.',
    responsibilities: [
      'Reach out to potential clients through field visits, referrals, and networking activities',
      'Promote the firm\'s services including accounting, taxation, and consulting solutions',
      'Build and maintain long-term relationships with new and existing clients',
      'Support marketing campaigns and gather insights from field activities',
      'Conduct basic market research to identify business opportunities',
      'Participate in seminars, exhibitions, and client meetings to represent the firm',
      'Work toward lead generation and business development goals'
    ],
    requirements: [
      "Bachelor's degree in Marketing, Business Administration, or a related field",
      'Strong verbal and written communication skills',
      'Excellent interpersonal and relationship-building abilities',
      'Ability to work independently and meet targets',
      'Good presentation and persuasion skills',
      'Willingness to travel locally as needed'
    ]
  },
  {
    title: 'Audit Assistant',
    location: 'Kozhikode',
    type: 'Full-time',
    experience: '0 - 2+',
    description: 'We are seeking a detail-oriented Audit Assistant to support our audit team in conducting financial and compliance audits for various clients. This role offers hands-on experience in auditing procedures, financial analysis, and client interaction within a professional work environment.',
    responsibilities: [
      'Assist in conducting statutory, internal, and tax audits for clients',
      'Examine financial records, reports, and compliance documents',
      'Support the audit team in planning and executing audit assignments',
      'Prepare audit working papers and documentation',
      'Identify discrepancies and report audit findings to senior auditors',
      'Coordinate with clients to gather necessary audit information'
    ],
    requirements: [
      "Bachelor's degree in Commerce, Accounting, or related field",
      '0–2 years of experience in audit or accounting (freshers may apply)',
      'Basic knowledge of auditing standards and accounting principles',
      'Proficiency in MS Excel and accounting software (e.g., Tally)',
      'Strong attention to detail and analytical skills',
      'Good communication and time-management skills'
    ]
  },
  {
    title: 'Finance Intern',
    location: 'Kozhikode',
    type: 'career',
    experience: 'Fresher',
    description: 'We are offering a valuable career opportunity for students or recent graduates looking to build a career in finance and accounting. As a Finance Intern, you will gain hands-on experience in financial reporting, bookkeeping, and supporting client projects under the guidance of experienced professionals.',
    responsibilities: [
      'Assist in maintaining financial records and preparing basic reports',
      'Support day-to-day bookkeeping and accounting tasks',
      'Help with invoice processing, data entry, and reconciliations',
      'Conduct basic research and analysis on financial topics',
      'Assist the team with client documentation and audit preparations',
      'Participate in training sessions to learn financial tools and regulations'
    ],
    requirements: [
      "Pursuing or recently completed a Bachelor's degree in Commerce, Finance, or related field",
      'Basic understanding of accounting and finance principles',
      'Proficiency in MS Excel; familiarity with Tally or other software is a plus',
      'Eagerness to learn and take initiative',
      'Strong attention to detail and organization skills',
      'Good communication and teamwork abilities'
    ]
  }
];

const Careers = () => {
  return (
    <>
      <PeopleCulture />
      <JobOpenings />
    </>
  );
};

export default Careers;
