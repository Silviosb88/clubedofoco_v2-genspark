// Sample data for the gallery
const galleryData = [
    {
        id: 1,
        title: "Paisagem Futurista",
        description: "Uma paisagem urbana futurista criada com IA, explorando conceitos de arquitetura cyberpunk e neon.",
        category: "imagem",
        date: "2024-02-01",
        tags: ["paisagem", "futurista", "cyberpunk", "arquitetura"],
        author: "Silvio",
        tool: "Midjourney"
    },
    {
        id: 2,
        title: "Resumo Automático de Artigos",
        description: "Sistema de IA que gera resumos concisos de artigos científicos e técnicos, mantendo os pontos principais.",
        category: "texto",
        date: "2024-01-28",
        tags: ["nlp", "resumo", "processamento", "análise"],
        author: "Equipe Clube do Foco",
        tool: "GPT-4"
    },
    {
        id: 3,
        title: "Composição Musical Ambient",
        description: "Trilha sonora ambiente gerada por IA, perfeita para meditação e relaxamento.",
        category: "audio",
        date: "2024-01-25",
        tags: ["música", "ambient", "relaxamento", "meditação"],
        author: "AI Music Lab",
        tool: "Mubert"
    },
    {
        id: 4,
        title: "Retrato Estilo Renascentista",
        description: "Retrato artístico no estilo dos mestres da renascença, gerado completamente por IA.",
        category: "imagem",
        date: "2024-01-22",
        tags: ["retrato", "arte", "renascença", "clássico"],
        author: "Art Creator",
        tool: "DALL-E 3"
    },
    {
        id: 5,
        title: "Sistema de Recomendação",
        description: "Código Python para um sistema de recomendação baseado em machine learning com filtragem colaborativa.",
        category: "codigo",
        date: "2024-01-20",
        tags: ["python", "ml", "recomendação", "algoritmo"],
        author: "Dev Team",
        tool: "GitHub Copilot"
    },
    {
        id: 6,
        title: "Animação 3D Abstrata",
        description: "Vídeo de animação 3D abstrata explorando formas geométricas e movimentos fluidos.",
        category: "video",
        date: "2024-01-18",
        tags: ["3d", "abstrato", "animação", "geometria"],
        author: "Visual Arts",
        tool: "Runway Gen-2"
    },
    {
        id: 7,
        title: "Tradutor Multilingue",
        description: "Aplicação de tradução automática que suporta 50+ idiomas com alta precisão contextual.",
        category: "texto",
        date: "2024-01-15",
        tags: ["tradução", "idiomas", "nlp", "contextual"],
        author: "Language AI",
        tool: "Claude"
    },
    {
        id: 8,
        title: "Logo Design Minimalista",
        description: "Conjunto de logos minimalistas para startups de tecnologia, criados com IA.",
        category: "imagem",
        date: "2024-01-12",
        tags: ["logo", "design", "minimalista", "branding"],
        author: "Brand AI",
        tool: "Stable Diffusion"
    },
    {
        id: 9,
        title: "Narração de Audiobook",
        description: "Voz sintética natural para narração de livros, com entonação e emoção realistas.",
        category: "audio",
        date: "2024-01-10",
        tags: ["voz", "narração", "audiobook", "síntese"],
        author: "Voice AI",
        tool: "ElevenLabs"
    },
    {
        id: 10,
        title: "Detector de Anomalias",
        description: "Algoritmo de machine learning para detecção de anomalias em séries temporais de dados financeiros.",
        category: "codigo",
        date: "2024-01-08",
        tags: ["ml", "anomalia", "finanças", "análise"],
        author: "Data Science Team",
        tool: "Copilot + ChatGPT"
    },
    {
        id: 11,
        title: "Time-lapse Urbano",
        description: "Vídeo time-lapse de uma cidade vibrante, totalmente gerado por IA com realismo fotográfico.",
        category: "video",
        date: "2024-01-05",
        tags: ["timelapse", "cidade", "urbano", "fotorealismo"],
        author: "City Vision",
        tool: "Pika Labs"
    },
    {
        id: 12,
        title: "Gerador de Histórias",
        description: "IA que cria histórias curtas criativas baseadas em temas e personagens fornecidos pelo usuário.",
        category: "texto",
        date: "2024-01-03",
        tags: ["criativo", "histórias", "narrativa", "ficção"],
        author: "Story AI",
        tool: "GPT-4 Turbo"
    },
    {
        id: 13,
        title: "Padrões Geométricos",
        description: "Coleção de padrões geométricos únicos para design de superfície e têxtil.",
        category: "imagem",
        date: "2024-01-01",
        tags: ["padrão", "geometria", "design", "têxtil"],
        author: "Pattern Creator",
        tool: "Midjourney"
    },
    {
        id: 14,
        title: "Efeitos Sonoros Sci-Fi",
        description: "Biblioteca de efeitos sonoros futurísticos para projetos de ficção científica.",
        category: "audio",
        date: "2023-12-28",
        tags: ["sfx", "scifi", "efeitos", "futurista"],
        author: "Sound Design AI",
        tool: "AudioCraft"
    },
    {
        id: 15,
        title: "Dashboard Interativo",
        description: "Código React para dashboard de análise de dados com gráficos interativos e visualizações dinâmicas.",
        category: "codigo",
        date: "2023-12-25",
        tags: ["react", "dashboard", "visualização", "ui"],
        author: "Frontend Team",
        tool: "GitHub Copilot"
    }
];
