# 📚 Documentação - Galeria Interativa de Trabalhos com IA

## 🎯 Visão Geral

Este projeto é uma **galeria interativa** que apresenta trabalhos realizados com ajuda de ferramentas de Inteligência Artificial. A galeria oferece recursos avançados de busca e filtragem para facilitar a navegação entre os diferentes projetos.

## ✨ Funcionalidades

### 🔍 Sistema de Busca
- **Busca em tempo real**: Digite qualquer termo para filtrar trabalhos instantaneamente
- **Busca abrangente**: A busca procura em títulos, descrições, tags e ferramenenta de IA utilizada
- **Interface responsiva**: Funciona perfeitamente em desktops, tablets e smartphones

### 🏷️ Sistema de Filtros
A galeria oferece filtros por categoria:
- **Todos**: Exibe todos os trabalhos
- **Texto**: Trabalhos relacionados a geração e processamento de texto
- **Imagem**: Criações visuais e arte digital
- **Código**: Projetos de desenvolvimento e automação
- **Design**: Trabalhos de UI/UX e design gráfico
- **Dados**: Análise de dados e visualizações

### 📊 Recursos Adicionais
- **Contador de resultados**: Mostra quantos trabalhos correspondem aos filtros aplicados
- **Animações suaves**: Transições elegantes ao filtrar e buscar
- **Cards informativos**: Cada trabalho exibe:
  - Título e descrição
  - Tags relacionadas
  - Ferramenta de IA utilizada
  - Data de criação
  - Ícone representativo

## 🚀 Como Usar

### Visualização Local
1. Clone o repositório:
```bash
git clone https://github.com/Silviosb88/clubedofoco_v2-genspark.git
cd clubedofoco_v2-genspark
```

2. Abra o arquivo `index.html` no seu navegador preferido
   - Ou utilize um servidor local como Live Server (VS Code)
   - Ou execute: `python -m http.server 8000`

### Navegação
1. **Buscar trabalhos**: Digite palavras-chave na caixa de busca
2. **Filtrar por categoria**: Clique nos botões de categoria para ver tipos específicos
3. **Combinar filtros**: Use busca + categoria para resultados mais precisos
4. **Limpar filtros**: Clique em "Limpar Filtros" se nenhum resultado for encontrado

## 📁 Estrutura do Projeto

```
clubedofoco_v2-genspark/
│
├── index.html          # Página principal da galeria
├── styles.css          # Estilos e design responsivo
├── script.js           # Lógica de busca e filtros
├── data.js             # Base de dados dos trabalhos
├── DOCUMENTATION.md    # Este arquivo de documentação
└── README.md          # Informações gerais do projeto
```

## 🎨 Personalização

### Adicionar Novos Trabalhos
Edite o arquivo `data.js` e adicione um novo objeto ao array `worksData`:

```javascript
{
    id: 16,
    title: "Nome do Projeto",
    description: "Descrição detalhada do que foi feito",
    category: "code", // text, image, code, design, data
    tags: ["Tag1", "Tag2", "Tag3"],
    aiTool: "Nome da IA",
    date: "2024-02-09",
    icon: "🚀" // Emoji representativo
}
```

### Modificar Cores
As cores principais estão definidas no arquivo `styles.css` usando variáveis CSS:

```css
:root {
    --primary-color: #6366f1;     /* Cor primária */
    --secondary-color: #8b5cf6;   /* Cor secundária */
    --background: #0f172a;        /* Fundo da página */
    --surface: #1e293b;           /* Fundo dos cards */
    --text-primary: #f1f5f9;      /* Texto principal */
    --text-secondary: #94a3b8;    /* Texto secundário */
}
```

### Adicionar Novas Categorias
1. Adicione um novo botão de filtro em `index.html`:
```html
<button class="filter-btn" data-filter="nova-categoria">Nova Categoria</button>
```

2. Use a categoria nos dados em `data.js`:
```javascript
category: "nova-categoria"
```

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica da página
- **CSS3**: Design responsivo e animações
  - Flexbox e Grid Layout
  - Custom Properties (variáveis CSS)
  - Animações e transições
- **JavaScript (Vanilla)**: Lógica de interação
  - Manipulação do DOM
  - Event listeners
  - Filtros e busca em tempo real

## 🤖 Ferramentas de IA Mencionadas

Este projeto documenta trabalhos feitos com diversas ferramentas de IA:
- **ChatGPT** (OpenAI)
- **Copilot** (GitHub)
- **Genspark**
- **Claude** (Anthropic)
- **DALL-E 3** (OpenAI)
- **Midjourney**
- **Stable Diffusion**

## 📱 Responsividade

O design é totalmente responsivo e adapta-se a diferentes tamanhos de tela:
- **Desktop**: Grid de 3-4 colunas
- **Tablet**: Grid de 2 colunas
- **Mobile**: Grid de 1 coluna

## 🎯 Boas Práticas Implementadas

- ✅ Código limpo e bem comentado
- ✅ Semântica HTML adequada
- ✅ Acessibilidade (ARIA labels)
- ✅ Performance otimizada
- ✅ Design responsivo mobile-first
- ✅ Animações suaves e não intrusivas
- ✅ Código JavaScript modular

## 🔮 Melhorias Futuras

Possíveis expansões do projeto:
- [ ] Sistema de favoritos com localStorage
- [ ] Modal com detalhes expandidos de cada trabalho
- [ ] Ordenação por data, nome ou popularidade
- [ ] Exportar lista filtrada como PDF
- [ ] Modo claro/escuro alternável
- [ ] Integração com API para dados dinâmicos
- [ ] Sistema de comentários e avaliações
- [ ] Filtros múltiplos simultâneos por tags

## 📝 Licença

Este projeto é open source e está disponível sob a licença MIT.

## 🤝 Contribuições

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📧 Contato

Para dúvidas ou sugestões, abra uma issue no repositório GitHub.

---

**Desenvolvido com ajuda do Genspark e GitHub Copilot** 🤖✨
