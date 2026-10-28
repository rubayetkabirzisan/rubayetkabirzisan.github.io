# Md. Rubaet Kabir Zishan

**B.Sc. in Computer Science & Engineering**
Military Institute of Science and Technology (MIST), Dhaka, Bangladesh — Graduated May 2026

[Portfolio](https://rubayetkabirzisan.github.io/) | [Email](mailto:rubayetkabirz@gmail.com) | [GitHub](https://github.com/rubayetkabirzisan) | [LinkedIn](https://linkedin.com/in/rubaet-kabir-zishan) | [Academic CV](public/Academic_CV_Md_Rubaet_Kabir_Zishan.pdf)

Computer Science graduate from MIST (2026) and Full Stack Software Engineer at Earthmatic Synthlab. My research interests are natural language processing, explainable and multi-agent AI, and probabilistic modeling under uncertainty. My work includes two peer-reviewed IEEE conference publications, a defended thesis on Chakma↔Bangla translation, and submitted research on intelligent pet adoption, water contamination screening, and explainability-aware customer retention.

## Research Interests

- Natural Language Processing
- Explainable & Multi-Agent AI
- Probabilistic Modeling under Uncertainty

## Education

**B.Sc. in Computer Science & Engineering** — Military Institute of Science and Technology (MIST) *(May 2022 — May 2026)*

- Cumulative GPA: 3.27/4.00
- Thesis: Identification and Translation of Transliterated Chakma Text into Bangla Using Machine Learning and Deep Learning Approaches — defended in 2026. Conference submission to ICCIT 2026 under review; extended journal manuscript in preparation.
- Relevant Coursework: Artificial Intelligence, Machine Learning, Algorithms & Complexity, Software Engineering, Computer Networks, Database Systems, Probability & Statistics.

## Research Experience

**Undergraduate Thesis Researcher** *(Jan 2025 — May 2026)*
Dept. of Computer Science & Engineering, MIST

Supervisor: **Lt Col Muhammad Nazrul Islam, PhD** — Associate Professor, CSE — MIST

Investigated bidirectional translation between Chakma and Bangla, with very limited resources on the Chakma side, under the supervision of Lt Col Muhammad Nazrul Islam, PhD.

- Fine-tuned a Bengali T5 model using PyTorch and Hugging Face Transformers; built a prototype web interface for testing the system.
- Compared the fine-tuned model against mBART and mT5 baselines using BLEU, chrF++, and human preference evaluation.

## Publications

### Peer-Reviewed Publications

**[AI Integrated Automated Door Lock System Through Face Recognition](https://doi.org/10.1109/QPAIN66474.2025.11172231)**

Arqam Bin Almas, Md. Nahul Rahman, Maisha Nanjeeba, Md. Rubaet Kabir Zishan, Md Abdus Sattar, and M. Akhtaruzzaman.

International Conference on Quantum Photonics, Artificial Intelligence, and Networking (QPAIN), Rangpur, Bangladesh, 2025. **Published.**

DOI: [10.1109/QPAIN66474.2025.11172231](https://doi.org/10.1109/QPAIN66474.2025.11172231)

**[Chashi-IoT: Developing a Sustainable Integrated Agricultural IoT System Using Cisco Packet Tracer](https://doi.org/10.1109/WIECON-ECE69386.2025.11526264)**

Arqam Bin Almas, Md. Nahul Rahman, Maisha Nanjeeba, Md. Rubaet Kabir Zishan, and Fernaz Narin Nur.

IEEE International Women in Engineering (WIE) Conference on Electrical and Computer Engineering (WIECON-ECE), Dhaka, Bangladesh, 2025. **Published.**

DOI: [10.1109/WIECON-ECE69386.2025.11526264](https://doi.org/10.1109/WIECON-ECE69386.2025.11526264)

### Submitted / Under Review

**Explore Bidirectional Matching Strategies for Intelligent Pet Adoption Platforms**

Md. Rubaet Kabir Zishan, Fernaz Narin Nur, and Muhammad Nazrul Islam.

International Conference on Computer and Information Technology (ICCIT), 2026. **Under review.**

**Calibrated DempsterShafer Evidence Fusion for Water Contamination Risk Screening Under Missing Sensor Evidence**

Md. Rubaet Kabir Zishan, Fariza Sharin Prova, and Fatin Ilham Chowdhury.

International Conference on Electrical Engineering and Information & Communication Technology (ICEEICT), 2026. **Under review.**

**SHARP-Retain: A SHAP-Consistency-Driven Multi-Agent Pipeline for Explainability-Aware Autonomous Customer Retention**

Md. Rubaet Kabir Zishan, Faiz Al Faisal, and Muhammad Nazrul Islam.

International Conference on Electrical Engineering and Information & Communication Technology (ICEEICT), 2026. **Under review.**

### Thesis

**Identification and Translation of Transliterated Chakma Text into Bangla Using Machine Learning and Deep Learning Approaches**

Arqam Bin Almas, Maisha Nanjeeba, and Md. Rubaet Kabir Zishan.

B.Sc. Thesis, Dept. of CSE, MIST, Dhaka, 2026. **Defended.**

Supervisor: Lt Col Muhammad Nazrul Islam, PhD. Conference version submitted to ICCIT 2026 (under review); extended journal manuscript in preparation.

## Research & Technical Projects

### Churn Sentinel — Explainable AI Customer Retention System

*2026* | [GitHub](https://github.com/rubayetkabirzisan/Churn-Sentinel)

Python · XGBoost · SHAP · LangChain · Multi-Agent AI

An explainable customer retention system that turns churn predictions and SHAP risk scores into retention actions.

- Trained an XGBoost classifier on class-imbalanced telecom churn data using stratified cross-validation and Optuna hyperparameter search.
- Added SHAP global (beeswarm, summary bar) and local (force, waterfall) explanations so each prediction can be inspected.
- Built a LangChain multi-agent pipeline: Behavior Detector → Discount Evaluator → Outreach Generator.

### RetailOS — Retail Shelf Audit Platform

*2026* | [GitHub](https://github.com/rubayetkabirzisan/Retailos-Sprint)

Next.js · FastAPI · Claude 3.5 · Gemini API · Supabase

A platform that audits shelf compliance against planograms from field photos using Claude 3.5 and the Gemini API for product detection.

- Built the Next.js/FastAPI stack with offline-first sync and a RetailGPT chatbot for querying the database.
- Implemented a 4-tier fraud-prevention check: MD5 deduplication, image sharpness validation, Haversine geofencing, and timestamp auditing.
- Used these checks to flag GPS spoofing, duplicate photos, and falsified reports.

### Bayesian Water Quality Analysis — Bangladesh

*2025* | [GitHub](https://github.com/rubayetkabirzisan/Bayesian-Water-Quality-BD)

Python · PyMC · Bayesian Hierarchical Modeling · Environmental Data Science

Hierarchical Bayesian modeling of water quality measurements from sampling sites across Bangladesh.

- Fit hierarchical Bayesian models in PyMC to measurements collected across sampling sites.
- Estimated the probability of exceeding safety thresholds for arsenic, dissolved solids, and microbial levels from posterior predictive distributions.
- Extended into a submitted paper on Dempster–Shafer evidence fusion for contamination screening.

## Industry Experience

### Full Stack Software Engineer — Earthmatic Synthlab

Dhaka | Aug 2026 — Present

- Built a restaurant management system in TypeScript and PostgreSQL, handling the full-stack integration from interface to database.
- Wrote the database layer in PLpgSQL, including schema design, database logic, and reporting flows.
- Developed a Next.js/TypeScript e-commerce application with automated unit and end-to-end tests using Vitest and Playwright.

### Software Engineer (Contractual) — Annex GS

Dhaka | Feb 2026 — Jul 2026

- Built workflow automations that replaced manual business processes.
- Maintained and updated the company's website for a glass and aluminium glazing business.
- Managed content across the services, product catalog, project portfolio, and blog pages, plus the quotation request and contact pages.

### Software Engineering Intern — Aurify

Remote · Chicago, USA | Aug 2025 — Jan 2026

- Debugged and fixed issues in a deployed AI coaching web app (React, TypeScript, Tailwind CSS) by tracing data flow between the front end and backend services.
- Wrote bug reports with reproduction steps for the development team.
- Contributed fixes through a fork-and-pull-request workflow with maintainer code review.

## Technical Skills

- **Languages:** Python, C++, JavaScript, SQL, LaTeX
- **ML & Deep Learning:** Scikit-Learn, XGBoost, PyTorch, Hugging Face Transformers, T5 / BERT / mT5 Fine-tuning, Stable-Baselines3, LangChain
- **Explainability:** SHAP, LIME, Feature Attribution, Model Cards
- **Probabilistic Methods:** Bayesian Inference, PyMC, Hierarchical Modeling, Posterior Predictive Checks
- **Reinforcement Learning:** PPO, DQN, OpenAI Gym, SUMO Simulator
- **Research Tools:** Jupyter, MATLAB, Git / GitHub, LaTeX, Overleaf, Weights & Biases
- **Software Engineering:** FastAPI, React, Node.js, Playwright, PostgreSQL, REST APIs

## Competitive Programming

**300+ problems solved.** Solved problems across LeetCode, Codeforces, and CodeChef, covering data structures, graph algorithms, dynamic programming, and combinatorics.

- [LeetCode: rubayetkabirzisan](https://leetcode.com/u/rubayetkabirzisan/)
- [Codeforces: mission27](https://codeforces.com/profile/mission27)
- [CodeChef: rubaet_kabir](https://www.codechef.com/users/rubaet_kabir)
