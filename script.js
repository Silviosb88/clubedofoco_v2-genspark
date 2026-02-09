// Main application logic
let currentFilter = 'all';
let currentSearch = '';

// Initialize gallery on page load
document.addEventListener('DOMContentLoaded', () => {
    renderGallery(worksData);
    setupEventListeners();
});

// Setup all event listeners
function setupEventListeners() {
    // Search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        filterAndRender();
    });

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Update active state
            filterButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            // Update current filter
            currentFilter = e.target.dataset.filter;
            filterAndRender();
        });
    });
}

// Filter and render gallery
function filterAndRender() {
    let filteredWorks = worksData;

    // Apply category filter
    if (currentFilter !== 'all') {
        filteredWorks = filteredWorks.filter(work => work.category === currentFilter);
    }

    // Apply search filter
    if (currentSearch) {
        filteredWorks = filteredWorks.filter(work => {
            const searchableText = `${work.title} ${work.description} ${work.tags.join(' ')} ${work.aiTool}`.toLowerCase();
            return searchableText.includes(currentSearch);
        });
    }

    renderGallery(filteredWorks);
}

// Render gallery items
function renderGallery(works) {
    const gallery = document.getElementById('gallery');
    const noResults = document.getElementById('noResults');
    const resultsCount = document.getElementById('resultsCount');

    // Update results count
    resultsCount.textContent = works.length;

    // Clear current gallery
    gallery.innerHTML = '';

    // Show/hide no results message
    if (works.length === 0) {
        noResults.style.display = 'block';
        gallery.style.display = 'none';
    } else {
        noResults.style.display = 'none';
        gallery.style.display = 'grid';

        // Create gallery cards
        works.forEach((work, index) => {
            const card = createGalleryCard(work, index);
            gallery.appendChild(card);
        });
    }
}

// Create individual gallery card
function createGalleryCard(work, index) {
    const card = document.createElement('div');
    card.className = 'gallery-card';
    card.style.animationDelay = `${index * 0.05}s`;

    // Create gradient backgrounds with different colors
    const gradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    ];
    const gradientIndex = index % gradients.length;

    card.innerHTML = `
        <div class="card-image" style="background: ${gradients[gradientIndex]}">
            <span>${work.icon}</span>
        </div>
        <div class="card-content">
            <h3 class="card-title">${work.title}</h3>
            <p class="card-description">${work.description}</p>
            <div class="card-meta">
                <div class="card-tags">
                    ${work.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="card-meta" style="margin-top: 1rem;">
                <span class="card-ai">🤖 ${work.aiTool}</span>
                <span class="card-date">${formatDate(work.date)}</span>
            </div>
        </div>
    `;

    return card;
}

// Format date to Brazilian Portuguese
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

// Reset all filters
function resetFilters() {
    currentFilter = 'all';
    currentSearch = '';
    
    // Reset UI
    document.getElementById('searchInput').value = '';
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === 'all') {
            btn.classList.add('active');
        }
    });
    
    // Re-render
    renderGallery(worksData);
}

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
