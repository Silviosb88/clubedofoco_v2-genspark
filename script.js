// Gallery functionality
let currentData = [...galleryData];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    renderGallery(currentData);
    initSearch();
    initFilters();
});

// Navigation between sections
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
        });
    });
}

// Render gallery cards
function renderGallery(data) {
    const gallery = document.getElementById('gallery');
    const resultsCount = document.getElementById('resultsCount');
    
    // Update results count
    resultsCount.textContent = `${data.length} trabalho${data.length !== 1 ? 's' : ''} encontrado${data.length !== 1 ? 's' : ''}`;
    
    // Clear gallery
    gallery.innerHTML = '';
    
    // Check if data is empty
    if (data.length === 0) {
        gallery.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🔍</div>
                <h3 class="empty-state-title">Nenhum trabalho encontrado</h3>
                <p>Tente ajustar os filtros ou buscar por outros termos.</p>
            </div>
        `;
        return;
    }
    
    // Render cards
    data.forEach(item => {
        const card = createCard(item);
        gallery.appendChild(card);
    });
}

// Create a gallery card
function createCard(item) {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    
    const categoryIcons = {
        'imagem': '🖼️',
        'texto': '📝',
        'audio': '🎵',
        'video': '🎬',
        'codigo': '💻'
    };
    
    const categoryNames = {
        'imagem': 'Imagem',
        'texto': 'Texto',
        'audio': 'Áudio',
        'video': 'Vídeo',
        'codigo': 'Código'
    };
    
    card.innerHTML = `
        <div class="card-header">
            <span class="card-category category-${item.category}">
                ${categoryIcons[item.category]} ${categoryNames[item.category]}
            </span>
            <span class="card-date">${formatDate(item.date)}</span>
        </div>
        <h3 class="card-title">${item.title}</h3>
        <p class="card-description">${item.description}</p>
        <div class="card-tags">
            ${item.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
        </div>
        <div class="card-footer">
            <span class="card-author">👤 ${item.author}</span>
            <span class="card-tool">🔧 ${item.tool}</span>
        </div>
    `;
    
    return card;
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
}

// Initialize search functionality
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    
    searchInput.addEventListener('input', function() {
        applyFilters();
    });
}

// Initialize filter functionality
function initFilters() {
    const categoryFilter = document.getElementById('categoryFilter');
    const sortFilter = document.getElementById('sortFilter');
    
    categoryFilter.addEventListener('change', function() {
        applyFilters();
    });
    
    sortFilter.addEventListener('change', function() {
        applyFilters();
    });
}

// Apply all filters
function applyFilters() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    const sortBy = document.getElementById('sortFilter').value;
    
    // Start with all data
    let filteredData = [...galleryData];
    
    // Apply search filter
    if (searchTerm) {
        filteredData = filteredData.filter(item => {
            return (
                item.title.toLowerCase().includes(searchTerm) ||
                item.description.toLowerCase().includes(searchTerm) ||
                item.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
                item.author.toLowerCase().includes(searchTerm) ||
                item.tool.toLowerCase().includes(searchTerm)
            );
        });
    }
    
    // Apply category filter
    if (category !== 'all') {
        filteredData = filteredData.filter(item => item.category === category);
    }
    
    // Apply sorting
    switch(sortBy) {
        case 'recent':
            filteredData.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'oldest':
            filteredData.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'name':
            filteredData.sort((a, b) => a.title.localeCompare(b.title));
            break;
    }
    
    currentData = filteredData;
    renderGallery(currentData);
}

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#galeria' && href !== '#documentacao') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('searchInput').focus();
    }
    
    // Escape to clear search
    if (e.key === 'Escape') {
        const searchInput = document.getElementById('searchInput');
        if (searchInput === document.activeElement) {
            searchInput.value = '';
            applyFilters();
            searchInput.blur();
        }
    }
});
