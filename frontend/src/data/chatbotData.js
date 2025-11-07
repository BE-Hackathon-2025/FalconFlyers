// Demo resource database
const resources = [
  {
    tags: ["therapy", "mental health", "counseling"],
    message: `Find mental health support here:<br><ul>
      <li><a href='https://www.mentalhealth.gov/get-help' target='_blank'>National Mental Health Services</a></li>
      <li>Contact local clinics or search for 'therapist near me' on <a href='https://www.psychologytoday.com/us/therapists' target='_blank'>Psychology Today</a></li>
    </ul>`,
  },
  {
    tags: ["food", "groceries", "pantry", "eat", "meals"],
    message: `Looking for food support? Try:<br><ul>
      <li><a href='https://www.feedingamerica.org/find-your-local-foodbank' target='_blank'>Find Your Local Food Bank</a></li>
      <li>Call 211 for local food distribution sites.</li>
    </ul>`,
  },
  {
    tags: ["shelter", "housing", "homeless", "emergency shelter"],
    message: `Housing and shelter resources:<br><ul>
      <li><a href='https://www.hud.gov/findshelter' target='_blank'>Find Shelter (HUD)</a></li>
      <li>Local agencies can help with rental and emergency assistance – try 211.</li>
    </ul>`,
  },
  {
    tags: ["job", "jobs", "work", "employment"],
    message: `Job and skill-building resources:<br><ul>
      <li><a href='https://www.careeronestop.org/' target='_blank'>CareerOneStop</a></li>
      <li><a href='https://www.indeed.com/' target='_blank'>Search for Jobs</a></li>
    </ul>`,
  },
  {
    tags: ["education", "training", "skills", "workshops"],
    message: `Education and training:<br><ul>
      <li><a href='https://www.coursera.org/' target='_blank'>Free Online Courses (Coursera)</a></li>
      <li>Check local library calendars for in-person workshops.</li>
    </ul>`,
  },
  {
    tags: ["testing", "covid", "health center"],
    message: `Testing and health services:<br><ul>
      <li><a href='https://www.hhs.gov/coronavirus/community-based-testing-sites/index.html' target='_blank'>COVID-19 Testing Sites</a></li>
      <li>Search 'community health center near me'.</li>
    </ul>`,
  },
];

export function findResourceReply(text) {
  const lower = text.toLowerCase();
  for (const item of resources) {
    if (item.tags.some((tag) => lower.includes(tag))) {
      return item.message;
    }
  }
  return "I'm here to help! Please let me know if you need support with wellness, essentials, jobs, education, or community resources.";
}
