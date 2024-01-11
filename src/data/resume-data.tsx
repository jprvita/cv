import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "João Paulo Rechi Vita",
  initials: "JPRV",
  location: "Seattle, WA, USA",
  locationLink: "https://www.google.com/maps/place/Seattle",
  about:
    "Senior Software Engineer",
  summary:
    "Over 15 years of professional experience in low-level programming, operating systems and collaborating with open-source projects upstream.",
  avatarUrl: "https://media.licdn.com/dms/image/D4E03AQFbr0wObwGJuw/profile-displayphoto-shrink_800_800/0/1702507070210?e=1709769600&v=beta&t=uRwMQeiIuYiPxecA1E8WXM1LsuEK4gwU8Tq20HZsykI",
  personalWebsiteUrl: "https://about.me/jprvita",
  contact: {
    email: "jprvita@gmail.com",
    tel: "+1 (415) 851-5778",
    social: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/jprvita",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/jprvita",
        icon: GitHubIcon,
      },
    ],
  },
  skills: [
    "C",
    "Python",
    "Linux Kernel",
    "Bluetooth",
    "Open-source Collaboration",
  ],
  work: [
    {
      company: "Endless",
      link: "https://www.endlessos.org",
      badges: ["Full-time", "Remote"],
      title: "Lead Software Engineer",
      start: "Apr 2021",
      end: "Oct 2023",
      description:
        "• Scoped and prioritized upcoming features, helping define the feature set for new product releases.\n\
	 • Reviewed the custom versions we offered our partners, reducing our product variations from 12 to 5 without any complaints from partners.\n\
	 • Worked as a dedicated Partner Success Engineer to repair the relationship with a major deployment partner, guaranteeing their needs were met, resulting in them adding a new deployment location.\n\
         • Onboarded and mentored and a new Partner/Customer Success Engineer, delegating some of my previous responsibilities.\n\
         • Was a direct point-of-contact in Engineering for the Commercial, Deployment and User Support teams, including the Chief Commercial Officer.\n\
         • Owned and maintained the security technology behind our pay-as-you-go device loan program, increasing user retention with timely alternatives while production issues were under investigation.\n\
	",
    },
    {
      company: "Endless",
      link: "https://www.endlessos.org",
      badges: ["Full-time", "Remote"],
      title: "Senior Software Engineer",
      start: "Oct 2019",
      end: "Mar 2021",
      description:
        "• Led a team of four engineers working in the Linux kernel and system-level projects, planning and overseeing team sprints.\n\
	 • Represented the team in product meetings and other company-wide discussions.\n\
	 • Performed engineering activities in parallel with leadership responsibilities.\n\
	",
    },
    {
      company: "Endless",
      link: "https://www.endlessos.org",
      badges: ["Full-time", "Remote"],
      title: "Software Engineer",
      start: "Jun 2015",
      end: "Sep 2019",
      description:
        "• Fixed hardware compatibility bugs on different parts of the Linux kernel (platform drivers, ACPI, RFKill, Bluetooth and others) on several laptop and mini-pc platforms, guaranteeing products shipped free of hardware-related issues.\n\
	 • Developed fixes and improvements to Linux bootloaders (GRUB, shim) and system-level services (systemd, PulseAudio, BlueZ, X.org, OSTree, GDM among others).\n\
	 • Wrote the asus-wireless x86 platform driver in the Linux kernel.\n\
	 • Helped establish processes and integrate tools for hardware compatibility evaluation and verification.\n\
	",
    },
    {
      company: "INdT",
      link: "https://www.indt.org.br",
      badges: ["Full-time", "In-office"],
      title: "Software Engineer",
      start: "Dec 2011",
      end: "May 2014",
      description:
        "• Added support for Bluetooth Low-Energy input devices (HoG profile) on Linux, designing and conducting a feasibility study to validate the software architecture and latency requirements.\n\
	 • Improved connection management of Bluetooth Low-Energy devices on Linux.\n\
	 • Rewrote the support for Bluetooth hands-free devices in the Linux telephony stack (oFono).\n\
	",
    },
    {
      company: "ProFUSION",
      link: "https://profusion.mobi",
      badges: ["Full-time", "In-office"],
      title: "Software Engineer",
      start: "Aug 2009",
      end: "Jun 2011",
      description:
        "• Wrote applications and libraries for Linux-based embedded systems, focusing on connectivity.\n\
	 • Contributed to the Linux Bluetooth stack (BlueZ) and telephony stack (oFono).\n\
	",
    },
    {
      company: "GNOME Foundation",
      link: "https://gnome.org",
      badges: ["Freelance", "Remote"],
      title: "Software Engineer",
      start: "May 2011",
      end: "Aug 2011",
      description:
        "• Implemented the OTR cryptographic protocol in the Telepathy / Empathy messaging framework.",
    },
    {
      company: "BlueZ",
      link: "https://bluez.org",
      badges: ["Freelance", "Remote"],
      title: "Software Engineer",
      start: "May 2010",
      end: "Aug 2010",
      description:
        "• Added metadata and player status information to the Bluetooth media control (AVRCP) profile on Linux.",
    },
    {
      company: "BlueZ",
      link: "https://bluez.org",
      badges: ["Freelance", "Remote"],
      title: "Software Engineer",
      start: "May 2009",
      end: "Aug 2009",
      description:
        "• Extended Bluetooth audio on Linux to support working as speakers (A2DP Sink role).",
    },
    {
      company: "BlueZ",
      link: "https://bluez.org",
      badges: ["Freelance", "Remote"],
      title: "Software Engineer",
      start: "May 2008",
      end: "Aug 2008",
      description:
        "• Implemented Bluetooth audio support (A2DP profile) in the Linux audio stack (PulseAudio), which became default on all Linux devices for the next 15 years.",
    },
  ],
  education: [
    {
      school: "University of Campinas",
      degree: "MSc, Computer Engineering (unfinished)",
      start: "2008",
      end: "2009",
    },
    {
      school: "University of Campinas",
      degree: "BE, Computer Engineering",
      start: "2002",
      end: "2007",
    },
  ],
  awards: [
    {
      award: "Santander Bank",
      description: "Scholarship for a 6-month exchange at Universidad Politécnica de Madrid in Spain.",
      date: "2008",
    },
    {
      award: "FISL 10",
      description: "Winner of the Programming Arena at the \"X International Forum of Free Software\" (FISL10) with the best implementation of the DNSCurve protocol over a 3-day challenge.",
      date: "2009",
    },
  ],
  languages: [
    {
      lang: "Brazilian Portuguese",
      proficiency: "Native",
    },
    {
      lang: "English",
      proficiency: "Full Proficiency",
    },
    {
      lang: "Spanish",
      proficiency: "Full Proficiency",
    },
    {
      lang: "Italian",
      proficiency: "Working Proficiency",
    },
  ],
} as const;
