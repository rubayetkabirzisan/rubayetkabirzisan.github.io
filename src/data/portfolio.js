export const profile = {
  name: "Zishan",
  fullName: "Md. Rubaet Kabir Zishan",
  institution: "Military Institute of Science and Technology (MIST)",
  degree: "B.Sc. in Computer Science & Engineering",
  graduationYear: "2026",
  graduationDate: "May 2026",
  email: "rubayetkabirz@gmail.com",
  github: "https://github.com/rubayetkabirzisan",
  linkedin: "https://linkedin.com/in/rubaet-kabir-zishan",
  google_scholar: "https://scholar.google.com/citations?user=JlmQxnAAAAAJ&hl=en",
  researchStatement: `Computer Science graduate from MIST (2026) and Full Stack Software Engineer at Earthmatic Synthlab. My research interests are natural language processing, explainable and multi-agent AI, and probabilistic modeling under uncertainty. My work includes two peer-reviewed IEEE conference publications, a defended thesis on Chakma↔Bangla translation, and submitted research on intelligent pet adoption, water contamination screening, and explainability-aware customer retention.`,
  cv: "/Academic_CV_Md_Rubaet_Kabir_Zishan.pdf",
}

export const interests = [
  "Natural Language Processing",
  "Explainable & Multi-Agent AI",
  "Probabilistic Modeling under Uncertainty",
]

export const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Military Institute of Science and Technology (MIST)",
    location: "Dhaka, Bangladesh",
    period: "May 2022 — May 2026",
    gpa: "3.27/4.00",
    highlights: [
      "Thesis: Identification and Translation of Transliterated Chakma Text into Bangla Using Machine Learning and Deep Learning Approaches — defended in 2026. Conference submission to ICCIT 2026 under review; extended journal manuscript in preparation.",
      "Relevant Coursework: Artificial Intelligence, Machine Learning, Algorithms & Complexity, Software Engineering, Computer Networks, Database Systems, Probability & Statistics.",
    ],
  },
]

export const researchExperience = [
  {
    role: "Undergraduate Thesis Researcher",
    supervisor: "Lt Col Muhammad Nazrul Islam, PhD",
    supervisorTitle: "Associate Professor, CSE — MIST",
    supervisorEmail: "nazrul@cse.mist.ac.bd",
    institution: "Dept. of Computer Science & Engineering, MIST",
    period: "Jan 2025 — May 2026",
    description: "Investigated bidirectional translation between Chakma and Bangla, with very limited resources on the Chakma side, under the supervision of Lt Col Muhammad Nazrul Islam, PhD.",
    highlights: [
      "Fine-tuned a Bengali T5 model using PyTorch and Hugging Face Transformers; built a prototype web interface for testing the system.",
      "Compared the fine-tuned model against mBART and mT5 baselines using BLEU, chrF++, and human preference evaluation.",
    ],
  },
]

export const publications = [
  {
    category: "Peer-Reviewed Publications",
    title: "AI Integrated Automated Door Lock System Through Face Recognition",
    authors: "Arqam Bin Almas, Md. Nahul Rahman, Maisha Nanjeeba, Md. Rubaet Kabir Zishan, Md Abdus Sattar, and M. Akhtaruzzaman",
    conference: "International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN), Rangpur, Bangladesh",
    year: "2025",
    status: "Published",
    doi: "10.1109/QPAIN66474.2025.11172231",
    link: "https://doi.org/10.1109/QPAIN66474.2025.11172231",
  },
  {
    category: "Peer-Reviewed Publications",
    title: "Chashi-IoT: Developing a Sustainable Integrated Agricultural IoT System Using Cisco Packet Tracer",
    authors: "Arqam Bin Almas, Md. Nahul Rahman, Maisha Nanjeeba, Md. Rubaet Kabir Zishan, and Fernaz Narin Nur",
    conference: "IEEE International Women in Engineering (WIE) Conference on Electrical and Computer Engineering (WIECON-ECE), Dhaka, Bangladesh",
    year: "2025",
    status: "Published",
    doi: "10.1109/WIECON-ECE69386.2025.11526264",
    link: "https://doi.org/10.1109/WIECON-ECE69386.2025.11526264",
  },
  {
    category: "Submitted / Under Review",
    title: "Explore Bidirectional Matching Strategies for Intelligent Pet Adoption Platforms",
    authors: "Md. Rubaet Kabir Zishan, Fernaz Narin Nur, and Muhammad Nazrul Islam",
    conference: "International Conference on Computer and Information Technology (ICCIT)",
    year: "2026",
    status: "Under review",
    link: null,
  },
  {
    category: "Submitted / Under Review",
    title: "Calibrated DempsterShafer Evidence Fusion for Water Contamination Risk Screening Under Missing Sensor Evidence",
    authors: "Md. Rubaet Kabir Zishan, Fariza Sharin Prova, and Fatin Ilham Chowdhury",
    conference: "International Conference on Electrical Engineering and Information & Communication Technology (ICEEICT)",
    year: "2026",
    status: "Under review",
    link: null,
  },
  {
    category: "Submitted / Under Review",
    title: "SHARP-Retain: A SHAP-Consistency-Driven Multi-Agent Pipeline for Explainability-Aware Autonomous Customer Retention",
    authors: "Md. Rubaet Kabir Zishan, Faiz Al Faisal, and Muhammad Nazrul Islam",
    conference: "International Conference on Electrical Engineering and Information & Communication Technology (ICEEICT)",
    year: "2026",
    status: "Under review",
    link: null,
  },
  {
    category: "Thesis",
    title: "Identification and Translation of Transliterated Chakma Text into Bangla Using Machine Learning and Deep Learning Approaches",
    authors: "Arqam Bin Almas, Maisha Nanjeeba, and Md. Rubaet Kabir Zishan",
    journal: "B.Sc. Thesis, Dept. of CSE, MIST, Dhaka",
    year: "2026",
    status: "Defended",
    link: null,
    description: "Supervisor: Lt Col Muhammad Nazrul Islam, PhD. Conference version submitted to ICCIT 2026 (under review); extended journal manuscript in preparation.",
  },
]

export const projects = [
  {
    title: "Churn Sentinel — Explainable AI Customer Retention System",
    year: "2026",
    github: "https://github.com/rubayetkabirzisan/Churn-Sentinel",
    tags: ["Python", "XGBoost", "SHAP", "LangChain", "Multi-Agent AI"],
    description: "An explainable customer retention system that turns churn predictions and SHAP risk scores into retention actions.",
    highlights: [
      "Trained an XGBoost classifier on class-imbalanced telecom churn data using stratified cross-validation and Optuna hyperparameter search.",
      "Added SHAP global (beeswarm, summary bar) and local (force, waterfall) explanations so each prediction can be inspected.",
      "Built a LangChain multi-agent pipeline: Behavior Detector → Discount Evaluator → Outreach Generator.",
    ],
  },
  {
    title: "RetailOS — Retail Shelf Audit Platform",
    year: "2026",
    github: "https://github.com/rubayetkabirzisan/Retailos-Sprint",
    tags: ["Next.js", "FastAPI", "Claude 3.5", "Gemini API", "Supabase"],
    description: "A platform that audits shelf compliance against planograms from field photos using Claude 3.5 and the Gemini API for product detection.",
    highlights: [
      "Built the Next.js/FastAPI stack with offline-first sync and a RetailGPT chatbot for querying the database.",
      "Implemented a 4-tier fraud-prevention check: MD5 deduplication, image sharpness validation, Haversine geofencing, and timestamp auditing.",
      "Used these checks to flag GPS spoofing, duplicate photos, and falsified reports.",
    ],
  },
  {
    title: "Bayesian Water Quality Analysis — Bangladesh",
    year: "2025",
    github: "https://github.com/rubayetkabirzisan/Bayesian-Water-Quality-BD",
    tags: ["Python", "PyMC", "Bayesian Hierarchical Modeling", "Environmental Data Science"],
    description: "Hierarchical Bayesian modeling of water quality measurements from sampling sites across Bangladesh.",
    highlights: [
      "Fit hierarchical Bayesian models in PyMC to measurements collected across sampling sites.",
      "Estimated the probability of exceeding safety thresholds for arsenic, dissolved solids, and microbial levels from posterior predictive distributions.",
      "Extended into a submitted paper on Dempster–Shafer evidence fusion for contamination screening.",
    ],
  },
]

export const industryExperience = [
  {
    role: "Full Stack Software Engineer",
    company: "Earthmatic Synthlab",
    location: "Dhaka",
    period: "Aug 2026 — Present",
    highlights: [
      "Built a restaurant management system in TypeScript and PostgreSQL, handling the full-stack integration from interface to database.",
      "Wrote the database layer in PLpgSQL, including schema design, database logic, and reporting flows.",
      "Developed a Next.js/TypeScript e-commerce application with automated unit and end-to-end tests using Vitest and Playwright.",
    ],
  },
  {
    role: "Software Engineer (Contractual)",
    company: "Annex GS",
    location: "Dhaka",
    period: "Feb 2026 — Jul 2026",
    highlights: [
      "Built workflow automations that replaced manual business processes.",
      "Maintained and updated the company's website for a glass and aluminium glazing business.",
      "Managed content across the services, product catalog, project portfolio, and blog pages, plus the quotation request and contact pages.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Aurify",
    location: "Remote · Chicago, USA",
    period: "Aug 2025 — Jan 2026",
    highlights: [
      "Debugged and fixed issues in a deployed AI coaching web app (React, TypeScript, Tailwind CSS) by tracing data flow between the front end and backend services.",
      "Wrote bug reports with reproduction steps for the development team.",
      "Contributed fixes through a fork-and-pull-request workflow with maintainer code review.",
    ],
  },
]

export const competitiveProgramming = {
  totalSolved: "300+",
  note: "Solved problems across LeetCode, Codeforces, and CodeChef, covering data structures, graph algorithms, dynamic programming, and combinatorics.",
  profiles: [
    { platform: "LeetCode", handle: "rubayetkabirzisan", url: "https://leetcode.com/u/rubayetkabirzisan/" },
    { platform: "Codeforces", handle: "mission27", url: "https://codeforces.com/profile/mission27" },
    { platform: "CodeChef", handle: "rubaet_kabir", url: "https://www.codechef.com/users/rubaet_kabir" },
  ],
}

export const skills = {
  "Languages": ["Python", "C++", "JavaScript", "SQL", "LaTeX"],
  "ML & Deep Learning": ["Scikit-Learn", "XGBoost", "PyTorch", "Hugging Face Transformers", "T5 / BERT / mT5 Fine-tuning", "Stable-Baselines3", "LangChain"],
  "Explainability": ["SHAP", "LIME", "Feature Attribution", "Model Cards"],
  "Probabilistic Methods": ["Bayesian Inference", "PyMC", "Hierarchical Modeling", "Posterior Predictive Checks"],
  "Reinforcement Learning": ["PPO", "DQN", "OpenAI Gym", "SUMO Simulator"],
  "Research Tools": ["Jupyter", "MATLAB", "Git / GitHub", "LaTeX", "Overleaf", "Weights & Biases"],
  "Software Engineering": ["FastAPI", "React", "Node.js", "Playwright", "PostgreSQL", "REST APIs"],
}
