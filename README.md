# 🎨 Clube do Foco - Galeria Interativa de Trabalhos com IA

> Repositório de colaboração entre IAs - Genspark & GitHub Copilot

Uma galeria interativa e moderna para exibir trabalhos realizados com Inteligência Artificial, incluindo sistema de busca avançado, filtros por categoria e documentação completa.

## ✨ Funcionalidades

- **🔍 Busca em Tempo Real**: Sistema de busca inteligente que procura em títulos, descrições, tags, autores e ferramentas
- **🎯 Filtros Avançados**: Filtre trabalhos por categoria (Imagem, Texto, Áudio, Vídeo, Código)
- **📊 Ordenação**: Organize por data (mais recentes/antigos) ou nome (A-Z)
- **📱 Design Responsivo**: Interface adaptável para desktop, tablet e mobile
- **📚 Documentação Completa**: Guia detalhado sobre uso e contribuição
- **⌨️ Atalhos de Teclado**: Ctrl/Cmd + K para buscar, ESC para limpar

## 🚀 Como Usar

1. Abra o arquivo `index.html` em seu navegador
2. Navegue pela galeria de trabalhos
3. Use a barra de busca para encontrar trabalhos específicos
4. Aplique filtros de categoria para refinar os resultados
5. Clique em "Documentação" para ver informações detalhadas

## 📂 Estrutura do Projeto

```
clubedofoco_v2-genspark/
├── index.html          # Página principal
├── styles.css          # Estilos da aplicação
├── script.js           # Lógica e interatividade
├── data.js             # Base de dados dos trabalhos
└── README.md           # Documentação
```

## 🎨 Categorias de Trabalhos

- **🖼️ Geração de Imagem**: DALL-E, Midjourney, Stable Diffusion
- **📝 Processamento de Texto**: GPT-4, Claude, análise de texto
- **🎵 Geração de Áudio**: Música, vozes, efeitos sonoros
- **🎬 Geração de Vídeo**: Runway, Pika Labs
- **💻 Geração de Código**: GitHub Copilot, assistentes de programação

## 🤝 Como Contribuir

Para adicionar novos trabalhos à galeria:

1. Edite o arquivo `data.js`
2. Adicione uma nova entrada no array `galleryData`:

```javascript
{
    id: 16,
    title: "Título do Trabalho",
    description: "Descrição detalhada do trabalho",
    category: "imagem", // imagem, texto, audio, video, codigo
    date: "2024-02-09",
    tags: ["tag1", "tag2", "tag3"],
    author: "Seu Nome",
    tool: "Ferramenta Utilizada"
}
```

3. Salve o arquivo e recarregue a página

## 💻 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilos modernos com gradientes e animações
- **JavaScript (Vanilla)**: Lógica de busca, filtros e interatividade
- **Design Responsivo**: Mobile-first approach
- **Genspark & GitHub Copilot**: Desenvolvimento assistido por IA

## 🎯 Recursos Implementados

- [x] Galeria responsiva com grid adaptável
- [x] Sistema de busca em tempo real
- [x] Filtros por categoria
- [x] Ordenação múltipla (data e nome)
- [x] Cards informativos com animações
- [x] Navegação entre seções
- [x] Documentação completa
- [x] Atalhos de teclado
- [x] Estados vazios com mensagens amigáveis
- [x] Design moderno com gradientes

## 📱 Responsividade

A aplicação é totalmente responsiva e se adapta a diferentes tamanhos de tela:

- **Desktop**: Grid com 3-4 colunas
- **Tablet**: Grid com 2 colunas
- **Mobile**: Grid com 1 coluna

## 🌟 Destaques

- Interface moderna com gradientes vibrantes
- Animações suaves nas transições
- Sistema de busca que pesquisa em múltiplos campos
- Categorização visual com cores distintas
- Documentação integrada na própria aplicação

## 📄 Licença

Este projeto é de código aberto e está disponível para uso educacional e comercial.

## 🙏 Agradecimentos

Desenvolvido com ❤️ usando:
- **Genspark**: IA generativa para desenvolvimento
- **GitHub Copilot**: Assistente de código com IA

---

**Clube do Foco** © 2024 - Explorando o futuro da criatividade com Inteligência Artificial
