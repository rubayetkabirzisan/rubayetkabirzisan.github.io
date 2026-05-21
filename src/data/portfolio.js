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
  researchStatement: `Final-year Computer Science researcher at MIST with peer-reviewed IEEE publications and hands-on research spanning applied machine learning, Bayesian probabilistic modeling, environmental data science, and transformer-based NLP. Seeking fully funded graduate research positions (MS/PhD) in AI, ML, and interdisciplinary computational science where rigorous methodology, explainability, and real-world impact converge.`,
}

export const interests = [
  "Applied Machine Learning",
  "Explainable AI (XAI)",
  "Generative AI (GenAI)",
  "Natural Language Processing",
  "Agentic AI & Multi-Agent Systems",
  "Reinforcement Learning",
  "AI Security & Cybersecurity",
]

export const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Military Institute of Science and Technology (MIST)",
    location: "Dhaka, Bangladesh",
    period: "May 2022 — May 2026",
    gpa: null,
    highlights: [
      "Thesis: Bengali Natural Language Processing via Fine-Tuned T5 Transformer Models — investigating low-resource NLP adaptation using sequence-to-sequence pre-training and domain-specific fine-tuning strategies.",
      "Relevant Coursework: Artificial Intelligence, Machine Learning, Software Engineering, Computer Networks,Computer Security, Data Structures & Algorithms, Database Systems, Probability & Statistics",
      "Two peer-reviewed IEEE publications accepted prior to graduation." ,
      "Active research under supervision of a globally recognized Top 2 % Scientist(Stanford–Elsevier, 2022–2025).",
    ],
  },
]

export const researchExperience = [
  {
    role: "Undergraduate Thesis Researcher",
    supervisor: "Lt Col Muhammad Nazrul Islam, PhD",
    supervisorTitle: "Associate Professor — Top 2% Scientist globally (Stanford–Elsevier 2022–2025)",
    supervisorEmail: "nazrul@cse.mist.ac.bd",
    institution: "Dept. of Computer Science & Engineering, MIST",
    period: "2025 — Present",
    description: "Conducting thesis research on Bangla↔Chakma Neural Machine Translation via Fine-Tuned T5 Models under direct supervision of Dr. Islam, whose lab has produced 69+ refereed journal articles (Q1/Q2), 173+ international conference papers, and research grants exceeding USD 250,000.",
    highlights: [
      "Co-authored two IEEE-indexed conference papers accepted prior to undergraduate graduation — Automated Door Lock System Using Face Recognition (IEEE QPAIN, 2025, Published) and Development of a Sustainable Integrated Agricultural IoT System (IEEE WIECON, 2025, Accepted).",
      "Collaborating within an active research group on applied ML, NLP, bioinformatics, and human-computer interaction.",
      "Investigating task-adaptive fine-tuning protocols for Bengali summarization and classification tasks using the T5 (Text-to-Text Transfer Transformer) architecture.",
    ],
  },
]

export const publications = [
  {
    title: "Automated Door Lock System Using Face Recognition",
    conference: "IEEE QPAIN",
    year: "2025",
    status: "Published",
    link: "https://ieeexplore.ieee.org/abstract/document/11172231/",
    description: "Proposes a real-time biometric access-control system utilizing CNN-based face recognition pipelines. Evaluates recognition accuracy under varied lighting conditions and occlusion scenarios, addressing practical deployment challenges in embedded security contexts.",
  },
  {
    title: "Development of a Sustainable Integrated Agricultural IoT System",
    conference: "IEEE WIECON",
    year: "2025",
    status: "Accepted",
    link: null,
    description: "Presents a sensor-fused IoT architecture for real-time agricultural monitoring integrating environmental sensing, edge processing, and cloud-based data pipelines to support precision farming in agrarian economies.",
  },
  {
    title: "Bangla to Chakma Neural Machine Translation via Fine-Tuned T5",
    journal: "Undergraduate Thesis — Target Journal Submission",
    year: "2026",
    status: "In Progress",
    link: null,
    description: "Fine-tuning a T5-based seq2seq model for bidirectional Chakma↔Bengali translation targeting two linguistically distinct low-resource languages. Includes task-specific fine-tuning protocols, BLEU/chrF evaluation against transformer baselines, and web-application deployment for real-world accessibility.",
  },
]

export const projects = [
  {
    title: "Bangla to Chakma Neural Machine Translation — Undergraduate Thesis",
    year: "2025–2026",
    github: null,
    tags: ["T5 Transformer", "PyTorch", "Hugging Face", "NLP", "Low-Resource NLP", "Seq2Seq"],
    status: "Undergraduate Thesis — In Progress",
    description: "Fine-tuning a T5-based sequence-to-sequence model for bidirectional Chakma↔Bengali translation — targeting two linguistically distinct low-resource languages with extremely limited parallel corpora. Contributes to the agenda of equitable multilingual NLP for indigenous and minority languages.",
    highlights: [
      "Fine-tuning a Bengali T5 model for bidirectional Chakma↔Bengali translation, addressing two linguistically distinct low-resource languages with limited parallel corpora — a significant challenge in low-resource neural machine translation.",
      "Designing task-specific fine-tuning protocols and evaluating translation quality against baseline transformer architectures using BLEU, chrF, and human evaluation metrics.",
      "Deploying the translation model as an accessible web application to enable real-world usability for Chakma speakers and validate end-to-end system performance.",
    ],
  },
  
  {
    title: "Churn Sentinel — Explainable AI-Powered Customer Retention System",
    year: "2026",
    github: "https://github.com/rubayetkabirzisan/Churn-Sentinel",
    tags: ["XGBoost", "SHAP / XAI", "LangChain", "Multi-Agent AI", "Python"],
    description: "An end-to-end intelligent retention system coupling gradient-boosted machine learning with post-hoc explainability and autonomous agentic reasoning workflows. Addresses the critical gap between black-box churn prediction and actionable business intervention.",
    highlights: [
      "Engineered XGBoost classifier with hyperparameter optimization and stratified cross-validation for robust churn prediction on imbalanced data.",
      "Integrated SHAP for global feature attribution (beeswarm, bar plots) and local instance-level explanations (force plots, waterfall diagrams), enabling interpretable model auditing.",
      "Designed a LangChain-powered multi-agent orchestration layer that translates SHAP-derived risk signals into autonomous, contextual retention actions.",
      "System architecture aligns with research on human-in-the-loop AI and responsible ML deployment in production environments.",
    ],
  },
  {
    title: "SUMO-PPO Adaptive Traffic Signal Control via Reinforcement Learning",
    year: "2026",
    github: "https://github.com/rubayetkabirzisan/Sumo-PPO-Traffic-Control",
    tags: ["Reinforcement Learning", "PPO", "SUMO Simulator", "Python", "Stable-Baselines3", "OpenAI Gym"],
    description: "A reinforcement learning system for adaptive traffic signal control using Proximal Policy Optimization (PPO) trained inside the SUMO traffic simulation environment. Addresses the combinatorial complexity of real-time intersection management through learned agent policies.",
    highlights: [
      "Designed a custom Gym-compatible SUMO environment with normalized state representations (per-lane halting vehicles, phase index) and a composite reward function balancing queue minimization with vehicle throughput.",
      "Implemented a 4-action policy space (keep / advance / extend / reduce phase) with yellow-phase protection constraints — architecturally enforcing safe agent behavior during signal transitions.",
      "Trained PPO agent over 200,000 environment steps with EvalCallback-based best-model checkpointing, per-episode CSV logging, and TensorBoard integration for reward curve analysis.",
      "Demonstrated measurable improvements over the fixed-cycle baseline across queue length reduction and vehicle departure rate metrics.",
    ],
  },
  {
    title: "Genomic Variant Classifier — Pathogenicity Prediction via ML",
    year: "2026",
    github: "https://github.com/rubayetkabirzisan/Genomic-Variant-Classifier",
    tags: ["Bioinformatics", "Scikit-Learn", "Random Forest", "Python", "Feature Engineering"],
    description: "A machine learning pipeline for classifying genomic single nucleotide variants (SNVs) as benign, pathogenic, or variant of uncertain significance — addressing a core challenge in computational genomics and precision medicine.",
    highlights: [
      "Constructed a multi-class classification framework trained on annotated genomic variant datasets using ensemble methods with in-silico predictor features.",
      "Implemented preprocessing pipelines for high-dimensional genomic feature spaces, including missing value imputation strategies relevant to clinical bioinformatics.",
      "Evaluated classifier performance using precision, recall, F1, and ROC-AUC across variant pathogenicity tiers — methodologically grounded in ACMG classification standards.",
    ],
  },
  {
    title: "Bayesian Water Quality Analysis — Bangladesh Environmental Study",
    year: "2026",
    github: "https://github.com/rubayetkabirzisan/Bayesian-Water-Quality-BD",
    tags: ["Bayesian Inference", "PyMC", "Environmental Data Science", "Python", "Geospatial Analysis"],
    description: "A probabilistic modeling study examining water quality contamination patterns across Bangladesh using Bayesian statistical frameworks — directly relevant to public health policy and environmental risk assessment.",
    highlights: [
      "Applied Bayesian hierarchical models to quantify uncertainty in water quality measurements across geospatially distributed sampling sites.",
      "Developed posterior predictive distributions for contamination thresholds (arsenic, dissolved solids, microbial indicators), enabling probabilistic risk inference.",
      "Research addresses UN SDG-6 (Clean Water & Sanitation) using principled probabilistic methods — relevant to AI for Social Good research agendas.",
    ],
  },
]

export const competitiveProgramming = {
  totalSolved: "300+",
  note: "Consistent cross-platform problem solving spanning data structures, graph algorithms, dynamic programming, and greedy methods. Developed rigorous edge-case analysis and failure-scenario thinking — a mindset that directly strengthens test case design and defect identification.",
  profiles: [
    { platform: "LeetCode", handle: "rubayetkabirzisan", url: "https://leetcode.com/u/rubayetkabirzisan/" },
    { platform: "Codeforces", handle: "mission27", url: "https://codeforces.com/profile/mission27" },
    { platform: "CodeChef", handle: "rubaet_kabir", url: "https://www.codechef.com/users/rubaet_kabir" },
  ],
}

export const skills = {
  "Programming Languages": ["Python", "C++", "JavaScript", "SQL", "LaTeX"],
  "ML / Deep Learning": ["Scikit-Learn", "XGBoost", "PyTorch", "Hugging Face Transformers", "T5 / BERT Fine-tuning", "LangChain"],
  "Explainability & Analysis": ["SHAP", "LIME", "Bayesian Inference (PyMC)", "Pandas", "NumPy", "Matplotlib / Seaborn"],
  "Research & Scientific Tools": ["Jupyter Notebook", "MATLAB", "Git / GitHub", "LaTeX / Overleaf"],
  "Software & Engineering": ["React", "Node.js", "Playwright (Test Automation)", "PostgreSQL", "REST APIs"],
  "Research Domains": ["NLP & Text Mining", "Environmental Data Science", "IoT Systems", "Computer Vision", "Software QA / SDET"],
}
