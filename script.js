const experiences = [
  {
    title: 'Chief Medical Officer',
    location: 'Mahakali Provincial Hospital, Nepal',
    duration: 'Feb 2020 - Sep 2022',
    highlights: [
      'Managed emergency, ICU, and outpatient care',
      'Handled forensic medical cases and COVID-19 management',
      'Taught junior staff and coordinated referrals'
    ]
  },
  {
    title: 'Medical Officer',
    location: 'Tikapur Hospital, Nepal',
    duration: 'Oct 2023 - May 2024',
    highlights: [
      'Worked in Emergency and High Dependency Unit (HDU)',
      'Handled autopsies, age estimations, and forensic evidence',
      'Completed FB-IMNCI and ETAT training'
    ]
  },
  {
    title: 'Medical Officer',
    location: 'WBC Muay Thai Nepal',
    duration: 'Aug 2023 - Present',
    highlights: [
      'Performed fighter exams during Muay Thai Fight Festival',
      'First aid for cuts, fractures, and injuries'
    ]
  },
  {
    title: 'Medical Officer',
    location: 'Blue Diamond Society',
    duration: 'Jun 2024 – Present',
    highlights: [
      'Implemented “Gender Affirmative Healthcare” policy',
      'Promoted mental health & wellbeing for LGBTQI+ patients'
    ]
  },
  {
    title: 'Medical Officer',
    location: 'Ministry of Social Development, Nepal',
    duration: 'Jan 2021 – Oct 2022',
    highlights: [
      'Led rural family planning and women’s health camps',
      'Screened for hypertension, diabetes, and cancer'
    ]
  },
  {
    title: 'Volunteer Educator',
    location: 'Trinetra Foundation',
    duration: 'Oct 2023 – Present',
    highlights: [
      'Taught first aid and safety to visually impaired children',
      'Organized food and clothing distribution drives'
    ]
  },
  {
    title: 'Anti-Doping Educator',
    location: 'Florida & Nava Pratibha Taekwondo',
    duration: 'Mar 2024 – Present',
    highlights: [
      'Taught athletes about doping rules and injury management'
    ]
  },
  {
    title: 'Director / Campaign Associate',
    location: 'Lions Club International',
    duration: 'Jan 2023 – Present',
    highlights: [
      'Organized health camps and blood donation programs'
    ]
  },
  {
    title: 'Trainee – MDR-TB Program',
    location: 'Health Training Center',
    duration: 'Feb 2021 – Mar 2021',
    highlights: [
      'Presented national TB protocol for MDR cases'
    ]
  },
  {
    title: 'Member',
    location: 'Nepal Health Corps',
    duration: 'Aug 2019 – Present',
    highlights: [
      'Led over 50+ maternal and community health events',
      'Co-led Project Butterfly – menstruation awareness program'
    ]
  }
];

const publications = [
  {
    title: 'Clarithromycin-induced acute liver injury with H. pylori',
    journal: 'Annals of Medicine and Surgery',
    date: 'Sept 2023',
    url: 'http://dx.doi.org/10.1097/MS9.0000000000001135'
  },
  {
    title: 'SOFA score in sepsis patients',
    journal: 'Int. J. of Innovative Science & Research Tech.',
    date: 'Aug 2024',
    url: 'https://www.igisrt.com'
  }
];

const cardsContainer = document.querySelector('.cards');
experiences.forEach(exp => {
  const div = document.createElement('div');
  div.className = 'card';
  div.innerHTML = `
    <h3>${exp.title}</h3>
    <p class="location">${exp.location}</p>
    <p class="duration">${exp.duration}</p>
    <ul>${exp.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
  `;
  cardsContainer.appendChild(div);
});

const pubList = document.querySelector('.links');
publications.forEach(pub => {
  const li = document.createElement('li');
  li.innerHTML = `<a href="${pub.url}" target="_blank">${pub.title} – ${pub.journal}, ${pub.date}</a>`;
  pubList.appendChild(li);
});
