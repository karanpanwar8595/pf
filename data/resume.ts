import { ResumeData } from "../types";

export const resumeData: ResumeData = {
  basics: {
    name: "Karan Panwar",
    title: "Data Scientist & AI Engineer",
    summary: "Dynamic and result-oriented Data Scientist, AI Engineer, and Researcher with a Distinction in MSc Computer Science from Anglia Ruskin University, Cambridge. Expert in designing, training, and deploying data-driven intelligent systems using Machine Learning, Deep Learning, and NLP. Demonstrated excellence in developing AI-driven products for industry partners such as Klip Global, leading projects from research to deployment. Known for innovative thinking, cross-functional collaboration, and a passion for solving real-world problems with scalable, ethical AI solutions.",
    location: "Cambridge, UK",
    email: "karanpanwar8595@gmail.com",
    phone: "+44 7823 706 438",
    links: [
      { label: "Portfolio", url: "#" },
      { label: "GitHub", url: "https://github.com/karanpanwar8595" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/karan-panwar-1b9b6a26b/" }
    ]
  },
  education: [
    {
      degree: "MSc Computer Science (Distinction)",
      institution: "Anglia Ruskin University",
      location: "Cambridge, UK",
      dates: "Sep 2024 – Oct 2025",
      modules: ["Machine Learning in Finance", "AI for Imaging", "Semantic Web Technologies", "Advanced Web Solutions", "Cybersecurity and AI"]
    },
    {
      degree: "BSc Computer Applications (First Class)",
      institution: "St. Xavier’s College",
      location: "Ahmedabad, India",
      dates: "May 2021 – May 2024",
      modules: ["Data Structures", "Big Data Analytics", "Database Management", "Python Programming", "Statistical Modelling"]
    }
  ],
  skills: [
    { category: "Languages", items: ["Python", "JavaScript (TypeScript)", "SQL", "Java"] },
    { category: "Machine Learning", items: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "OpenCV", "NLP", "LSTM", "CNN", "Transformers", "Generative AI"] },
    { category: "Data Science", items: ["Pandas", "NumPy", "Power BI", "Tableau", "Matplotlib", "Seaborn", "Statistical Modelling", "Feature Engineering"] },
    { category: "Databases", items: ["MySQL", "MongoDB", "SQLite", "Data Warehousing"] },
    { category: "Web & Frameworks", items: ["Django", "Flask", "FastAPI", "Streamlit", "React.js", "Next.js", "RESTful APIs"] },
    { category: "Tools & DevOps", items: ["Git", "Docker", "Jupyter", "VS Code", "CI/CD Pipelines", "Agile Methodologies"] }
  ],
  experience: [
    {
      company: "Klip Global (via ARU)",
      role: "Research Assistant (Generative AI)",
      dates: "Aug 2025 – Present",
      location: "Cambridge, UK",
      bullets: [
        "Leading development of Klip Agent, a personalized digital wellbeing platform integrating LLMs, hybrid recommendation systems, and user behavioral analytics.",
        "Designed a hybrid recommendation engine combining Transformer-based NLP, clustering, and NHS data integration to deliver evidence-based wellbeing guidance.",
        "Built and deployed an LLM-powered conversational agent using LangChain and Hugging Face models, improving engagement and response quality in user testing.",
        "Engineered scalable backend architecture using Django and integrated with modern frontend frameworks (Next.js) for production-ready deployment.",
        "Collaborating with cross-functional teams (product, data, and research) to continuously improve AI model performance and system usability."
      ],
      metrics: ["Personalized wellbeing platform", "Hybrid recommendation engine", "LLM-powered agent"]
    },
    {
      company: "Anglia Ruskin University",
      role: "Research Assistant – Quantum Neural Networks (QNN)",
      dates: "Jan 2025 – Apr 2025",
      location: "Cambridge, UK",
      bullets: [
        "Conducted advanced research on Quantum Neural Networks (QNNs) for pattern recognition and image classification using Qiskit.",
        "Designed and tested quantum circuits replacing classical layers, achieving a 15% accuracy boost over CNN baselines on MNIST-like datasets.",
        "Authored detailed research documentation and contributed to a university publication on Quantum Machine Learning for Imaging Applications."
      ],
      metrics: ["15% accuracy boost", "Quantum circuit design", "University publication"]
    }
  ],
  projects: [
    {
      title: "KpAgent: AI-Powered Career Assistant",
      stack: "Next.js, TypeScript, NLP, Tailwind CSS",
      bullets: [
        "Developed comprehensive full-stack career services platform with AI-driven resume analysis and personalised job recommendations.",
        "Engineered custom interview preparation tool generating role-specific questions based on user profiles and job descriptions.",
        "Built modern responsive UI, delivering polished user experience across all devices."
      ]
    },
    {
      title: "SmartStock: AI-Powered Financial Forecast Dashboard",
      stack: "Python, LSTM",
      bullets: [
        "Built an advanced stock prediction dashboard with dynamic time series analysis, predictive models, and financial sentiment analytics using real-time APIs."
      ]
    },
    {
      title: "EmotionSense: Real-Time Emotion Recognition System",
      stack: "OpenCV, TensorFlow, Flask",
      bullets: [
        "Created an AI tool detecting facial and vocal emotions with CNN and MFCCs, recommending personalized media content via adaptive algorithms."
      ]
    },
    {
      title: "SignAI: Sign Language to Text Translator",
      stack: "Django, OpenCV, Deep Learning",
      bullets: [
        "Engineered an accessibility-driven system converting sign gestures into English text with over 95% accuracy using CNN-based visual models."
      ]
    },
    {
      title: "Cambridge Culture Portal",
      stack: "Django, HTML, CSS, SQLite",
      bullets: [
        "Led a 4-member team developing an interactive cultural platform showcasing Cambridge events and local communities."
      ]
    }
  ],
  certifications: [
    {
      category: "Industry",
      items: ["AWS Certified Cloud Practitioner", "IBM Data Science", "Accenture Data Analytics and Visualization", "BCG Generative AI Fundamentals", "JPMorgan Chase Software Engineering Simulation", "TATA Consultancy Generative AI Program"]
    },
    {
      category: "Academic",
      items: ["AI & ML using Python – IIT Madras (Score: 86%)", "Quantum Computing Fundamentals (IBM Qiskit)", "Advanced Deep Learning (Coursera)"]
    }
  ],
  achievements: [
    { title: "MSc Distinction", context: "Achieved Distinction in MSc Computer Science with top 10% class ranking.", isTopImpact: true },
    { title: "Industrial Lead", context: "Selected by Klip Global to lead an industrial research project integrating AI with wellbeing analytics.", isTopImpact: true },
    { title: "Published Research", context: "Published and presented university research on Quantum AI and Mental Health Technology.", isTopImpact: true },
    { title: "Team Lead", context: "Acted as Team Lead for four cross-functional AI and web development projects at ARU." },
    { title: "Innovation Award", context: "Received recognition for innovation in AI-based health technology from faculty mentors." }
  ],
  strengths: [
    "Deep expertise in applied machine learning, NLP, and quantum computing with strong mathematical background.",
    "Excellent communicator skilled in translating complex data insights into actionable business strategies.",
    "Passionate about ethical AI, inclusivity, and deploying human-centric intelligent systems.",
    "Adaptable to fast-paced environments with strong teamwork, leadership, and research skills."
  ]
};
