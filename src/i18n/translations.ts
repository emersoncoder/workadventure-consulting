import { qualificacoes } from '../data/qualificacoes';

const pt = {
  metadata: {
    title: 'Emerson Devel | Engenheiro de Software, IA e WorkAdventure',
    description: 'Consultoria em engenharia de software, inteligência artificial, automação, cloud e ambientes WorkAdventure para empresas, eventos e universidades.',
    locale: 'pt_BR',
  },
  nav: {
    home: 'Início',
    portfolio: 'Portfólio',
    services: 'Serviços',
    workAdventure: 'WorkAdventure',
    contact: 'Fale Comigo',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    languageSelection: 'Seleção de idioma',
    homeAria: 'Emerson Devel - início',
    english: 'View website in English',
    portuguese: 'Ver site em português',
  },
  skipLink: 'Pular para o conteúdo',
  hero: {
    eyebrow: 'Engenheiro de Software, IA & WorkAdventure',
    greeting: 'Olá, eu sou o',
    name: 'Emerson',
    intro: 'Desenvolvo sistemas escaláveis, soluções de IA e ambientes WorkAdventure sob medida para transformar operações, eventos e colaboração organizacional.',
    stats: [
      { value: '10+', label: 'anos de experiência' },
      { value: 'ERP / CRM', label: 'sistemas escaláveis' },
      { value: 'IA / Cloud', label: 'soluções ponta a ponta' },
    ],
    contact: 'Contratar Consultoria',
    resume: 'Baixar Currículo',
    imageAlt: 'Emerson Maia Rodrigues',
  },
  about: {
    title: 'Sobre Mim',
    skills: qualificacoes,
    paragraphs: [
      'Sou Engenheiro de Software e Engenheiro de IA com mais de 10 anos de experiência criando soluções robustas para empresas e transformando problemas complexos em sistemas rápidos, seguros e escaláveis. Atuei em ERP, CRM, CMS, e-commerce, plataformas digitais e infraestruturas em nuvem, dominando PHP, JavaScript, Laravel, React, Node.js e bancos como MySQL, PostgreSQL e MongoDB. Minha atuação conecta arquitetura, engenharia de software, DevOps e inteligência artificial em uma única entrega de ponta a ponta.',
      'Sou especialista em WorkAdventure e desenvolvo ambientes virtuais que levam presença, colaboração e interação para empresas, eventos e universidades. Também projeto soluções avançadas com RAG, skills, MCP, agentes autônomos, guardrails e integrações inteligentes, combinando APIs RESTful, automações, Docker, Kubernetes, GitHub Actions e Jenkins. Estruturo pipelines de CI/CD, deploy automatizado e infraestrutura em AWS, GCP e Azure para garantir operação confiável, observabilidade e escalabilidade em produção.',
      'Minha missão é unir engenharia sólida, IA aplicada e excelência técnica para entregar produtos inteligentes — da estratégia e arquitetura ao código, infraestrutura e evolução contínua.',
    ],
    skillsTitle: 'Qualificações Técnicas',
  },
  services: {
    title: 'Meus Serviços',
    subtitle: 'Do planejamento à entrega do seu evento ou escritório virtual.',
    items: [
      { icon: '⚙️', title: 'Setup e Hospedagem', description: 'Configuração completa do servidor Self-hosted, garantindo estabilidade e segurança.' },
      { icon: '🎨', title: 'Customização de Mapas', description: 'Criação de mapas Tiled com a sua identidade visual, spots interativos e integrações.' },
      { icon: '🔗', title: 'Integrações', description: 'Conecte o WorkAdventure com Jitsi, Matterport, websites e APIs externas.' },
    ],
  },
  work: {
    title: 'O que é o',
    description: 'É uma plataforma Open Source que cria um metaverso 2D interativo no seu navegador. Imagine um escritório virtual ou um estande de eventos onde as pessoas caminham com avatares e, ao se aproximarem, a câmera e o microfone se conectam automaticamente.',
    highlights: [
      'Integração nativa com Videochamadas',
      'Redução da fadiga de reuniões no Zoom',
      'Sensação real de networking e imersão',
    ],
    imageAlt: 'Ambiente virtual WorkAdventure em operação',
    badge: 'Ambiente 2D personalizado',
  },
  portfolio: {
    title: 'Portfólio',
    subtitle: 'Experiência aplicada a sistemas empresariais, plataformas digitais e ambientes virtuais.',
    projects: [
      { title: 'ERP para setor moveleiro', description: 'Modernização, integrações REST e otimização de consultas em ambiente operacional.', tech: 'CodeIgniter • Laravel • React • Node.js', tag: 'Sistema empresarial' },
      { title: 'Plataforma de recompensas', description: 'Lojas virtuais, dashboards e campanhas digitais com arquitetura escalável.', tech: 'Laravel • Vue.js • React • AWS / GCP', tag: 'Comércio e incentivos' },
      { title: 'Ambientes WorkAdventure', description: 'Mapas personalizados, integrações, hospedagem e suporte a experiências corporativas.', tech: 'WorkAdventure • Docker • Cloud • Jitsi', tag: 'Metaverso 2D' },
    ],
  },
  process: {
    eyebrow: 'Como trabalhamos',
    title: 'Um processo claro, técnico e orientado a resultado',
    stages: [
      { number: '01', title: 'Diagnóstico', description: 'Entendimento do contexto, objetivos, riscos, público, infraestrutura e critérios de sucesso.' },
      { number: '02', title: 'Arquitetura', description: 'Definição da solução, tecnologias, integrações, segurança, custos e plano de entrega.' },
      { number: '03', title: 'Implementação', description: 'Desenvolvimento iterativo, versionamento, automação de testes e comunicação contínua.' },
      { number: '04', title: 'Entrega e Evolução', description: 'Implantação, validação, documentação, monitoramento e suporte à evolução da solução.' },
    ],
  },
  faq: {
    eyebrow: 'Perguntas frequentes',
    title: 'Antes de iniciarmos',
    questions: [
      { question: 'Vocês atendem projetos sob demanda ou contratos contínuos?', answer: 'Ambos. É possível iniciar pelo diagnóstico de uma necessidade específica, contratar uma entrega fechada ou manter evolução técnica contínua.' },
      { question: 'A consultoria pode integrar sistemas existentes?', answer: 'Sim. O trabalho pode incluir integração de ERP, CRM, APIs REST, serviços em nuvem, bancos de dados e ferramentas legadas.' },
      { question: 'É possível hospedar o WorkAdventure em ambiente próprio?', answer: 'Sim. Posso atuar no planejamento, configuração, customização, domínio, segurança, implantação e operação em infraestrutura própria ou gerenciada.' },
      { question: 'Como começa um projeto de IA?', answer: 'Começamos pelo caso de uso, qualidade dos dados, requisitos de segurança e critérios de avaliação antes de escolher modelos, RAG, agentes ou automações.' },
    ],
  },
  contact: {
    title: 'Vamos trabalhar juntos?',
    subtitle: 'Preencha o formulário ou me chame no WhatsApp.',
    name: 'Seu Nome',
    email: 'Seu E-mail',
    message: 'Mensagem',
    namePlaceholder: 'João Silva',
    emailPlaceholder: 'joao@empresa.com',
    messagePlaceholder: 'Olá Emerson, gostaria de um orçamento...',
    send: 'Enviar Mensagem',
    sending: 'Enviando...',
    success: 'Mensagem enviada com sucesso!',
    error: 'Erro ao enviar. Tente pelo WhatsApp.',
    privacy: 'Os dados enviados pelo formulário são utilizados exclusivamente para contato comercial.',
    removal: 'Solicitar remoção',
    copyright: 'Todos os direitos reservados.',
  },
  whatsapp: {
    label: 'Conversar no WhatsApp',
    message: 'Olá, Emerson! Vi seu site e gostaria de um orçamento para configurar o WorkAdventure.',
  },
};

type DeepWiden<T> =
  T extends string ? string :
    T extends readonly (infer Item)[] ? DeepWiden<Item>[] :
      T extends object ? { [Key in keyof T]: DeepWiden<T[Key]> } :
        T;

export type Dictionary = DeepWiden<typeof pt>;

const en: Dictionary = {
  metadata: {
    title: 'Emerson Devel | Software Engineer, AI & WorkAdventure',
    description: 'Software engineering, artificial intelligence, automation, cloud, and WorkAdventure consulting for businesses, events, and universities.',
    locale: 'en_US',
  },
  nav: {
    home: 'Home',
    portfolio: 'Portfolio',
    services: 'Services',
    workAdventure: 'WorkAdventure',
    contact: 'Get in touch',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageSelection: 'Language selection',
    homeAria: 'Emerson Devel - home',
    english: 'View website in English',
    portuguese: 'View website in Portuguese',
  },
  skipLink: 'Skip to content',
  hero: {
    eyebrow: 'Software Engineer, AI & WorkAdventure',
    greeting: "Hello, I'm",
    name: 'Emerson',
    intro: 'I build scalable systems, AI solutions, and tailored WorkAdventure environments to transform operations, events, and organizational collaboration.',
    stats: [
      { value: '10+', label: 'years of experience' },
      { value: 'ERP / CRM', label: 'scalable systems' },
      { value: 'AI / Cloud', label: 'end-to-end solutions' },
    ],
    contact: 'Hire a consultant',
    resume: 'Download Resume',
    imageAlt: 'Emerson Maia Rodrigues',
  },
  about: {
    title: 'About Me',
    skills: [
      'AWS & Cloud',
      'Full Stack',
      'Architecture',
      'Security',
      'DevOps & CI/CD',
      'Software Engineering',
      'AI Engineering',
      'Docker & Kubernetes',
      'GitHub Actions',
      'Clean Code',
      'RAG',
      'Skills',
      'MCP',
      'AI Agents',
      'Guardrails',
      'Automated Deployment',
      'AI & Machine Learning',
      'Open Source',
      'Linux & BSD',
      'PHP',
      'JavaScript',
      'React',
      'Laravel',
      'MySQL',
      'PostgreSQL',
      'MongoDB',
    ],
    paragraphs: [
      'I am a Software Engineer and AI Engineer with over 10 years of experience building robust business solutions and turning complex problems into fast, secure, and scalable systems. My work spans ERP, CRM, CMS, e-commerce, digital platforms, and cloud infrastructure, using PHP, JavaScript, Laravel, React, Node.js, and databases such as MySQL, PostgreSQL, and MongoDB. I connect architecture, software engineering, DevOps, and artificial intelligence in end-to-end delivery.',
      'As a WorkAdventure specialist, I create virtual environments that bring presence, collaboration, and interaction to businesses, events, and universities. I also design advanced solutions with RAG, skills, MCP, autonomous agents, guardrails, and intelligent integrations, combining REST APIs, automation, Docker, Kubernetes, GitHub Actions, and Jenkins. I build CI/CD pipelines, automated deployments, and AWS, GCP, and Azure infrastructure for reliable, observable, production-ready operations.',
      'My mission is to combine solid engineering, applied AI, and technical excellence to deliver intelligent products—from strategy and architecture to code, infrastructure, and continuous improvement.',
    ],
    skillsTitle: 'Technical Skills',
  },
  services: {
    title: 'Services',
    subtitle: 'From planning to delivery for your event or virtual office.',
    items: [
      { icon: '⚙️', title: 'Setup & Hosting', description: 'Complete self-hosted server setup focused on stability and security.' },
      { icon: '🎨', title: 'Custom Map Design', description: 'Tiled maps tailored to your brand, with interactive areas and integrations.' },
      { icon: '🔗', title: 'Integrations', description: 'Connect WorkAdventure with Jitsi, Matterport, websites, and external APIs.' },
    ],
  },
  work: {
    title: 'What is',
    description: 'WorkAdventure is an open-source platform for creating an interactive 2D virtual world in your browser. Picture a virtual office or event booth where people walk around as avatars and video and audio connect automatically when they meet.',
    highlights: [
      'Built-in video call integration',
      'A more engaging alternative to back-to-back video meetings',
      'A more natural sense of networking and immersion',
    ],
    imageAlt: 'WorkAdventure virtual environment in operation',
    badge: 'Custom 2D environment',
  },
  portfolio: {
    title: 'Selected Experience',
    subtitle: 'Experience applied to business systems, digital platforms, and virtual environments.',
    projects: [
      { title: 'ERP for the furniture industry', description: 'Modernization, REST integrations, and query optimization in a production environment.', tech: 'CodeIgniter • Laravel • React • Node.js', tag: 'Business systems' },
      { title: 'Rewards platform', description: 'Online stores, dashboards, and digital campaigns built on scalable architecture.', tech: 'Laravel • Vue.js • React • AWS / GCP', tag: 'Commerce & incentives' },
      { title: 'WorkAdventure environments', description: 'Custom maps, integrations, hosting, and support for corporate experiences.', tech: 'WorkAdventure • Docker • Cloud • Jitsi', tag: '2D virtual worlds' },
    ],
  },
  process: {
    eyebrow: 'How we work',
    title: 'A clear, technical, outcome-focused process',
    stages: [
      { number: '01', title: 'Discovery', description: 'Understand the context, goals, risks, audience, infrastructure, and success criteria.' },
      { number: '02', title: 'Architecture', description: 'Define the solution, technology, integrations, security, costs, and delivery plan.' },
      { number: '03', title: 'Implementation', description: 'Iterative development, version control, test automation, and regular communication.' },
      { number: '04', title: 'Delivery & Growth', description: 'Deployment, validation, documentation, monitoring, and continued improvement.' },
    ],
  },
  faq: {
    eyebrow: 'Frequently asked questions',
    title: 'Before we get started',
    questions: [
      { question: 'Do you take on one-off projects and ongoing engagements?', answer: 'Both. We can start with a focused technical assessment, agree on a defined deliverable, or support continuous product improvement.' },
      { question: 'Can you integrate with our existing systems?', answer: 'Yes. Work can include ERP and CRM integrations, REST APIs, cloud services, databases, and legacy tools.' },
      { question: 'Can WorkAdventure run on our own infrastructure?', answer: 'Yes. I can help plan, configure, customize, secure, deploy, and operate WorkAdventure on your own or managed infrastructure.' },
      { question: 'How does an AI project get started?', answer: 'We begin with the use case, data quality, security requirements, and evaluation criteria before selecting models, RAG, agents, or automation.' },
    ],
  },
  contact: {
    title: "Let's work together",
    subtitle: 'Send a message or reach out on WhatsApp.',
    name: 'Your name',
    email: 'Your email',
    message: 'Message',
    namePlaceholder: 'Jane Smith',
    emailPlaceholder: 'jane@company.com',
    messagePlaceholder: 'Hi Emerson, I would like to discuss a project...',
    send: 'Send message',
    sending: 'Sending...',
    success: 'Your message was sent successfully!',
    error: 'Unable to send. Please try WhatsApp.',
    privacy: 'Information submitted through this form is used only to respond to business inquiries.',
    removal: 'Request data removal',
    copyright: 'All rights reserved.',
  },
  whatsapp: {
    label: 'Chat on WhatsApp',
    message: 'Hi Emerson! I found your website and would like a quote for a WorkAdventure setup.',
  },
};

export const translations = { pt, en };
