// ============================================================
// GlassHub — newtab.js (v2.2 — AMO Compliant & Optimized)
// ============================================================

const FA_SVG = {
    'fa-folder': '<path d="M20 6h-8l-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z" fill="currentColor"/>',
    'fa-server': '<rect x="2" y="2" width="20" height="6" rx="1" fill="currentColor"/><rect x="2" y="9" width="20" height="6" rx="1" fill="currentColor"/><rect x="2" y="16" width="20" height="6" rx="1" fill="currentColor"/><circle cx="18" cy="5" r="1" fill="#050814"/><circle cx="18" cy="12" r="1" fill="#050814"/><circle cx="18" cy="19" r="1" fill="#050814"/>',
    'fa-code':   '<polyline points="16 18 22 12 16 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><polyline points="8 6 2 12 8 18" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
    'fa-star':   '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" fill="currentColor"/>',
    'fa-bookmark':'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" fill="currentColor"/>',
    'fa-globe':  '<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" stroke-width="2"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" fill="none" stroke="currentColor" stroke-width="2"/>',
    'fa-house':  '<path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" fill="currentColor"/><path d="M9 21V12h6v9" fill="none" stroke="#050814" stroke-width="1.5"/>',
    'fa-gear':   '<circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" fill="none" stroke="currentColor" stroke-width="2"/>',
    'fa-cloud':  '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" fill="currentColor"/>',
    'fa-database':'<ellipse cx="12" cy="5" rx="9" ry="3" fill="currentColor"/><path d="M21 12c0 1.66-4.03 3-9 3S3 13.66 3 12" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" fill="none" stroke="currentColor" stroke-width="2"/>',
    'fa-network-wired': '<rect x="9" y="2" width="6" height="4" rx="1" fill="currentColor"/><rect x="2" y="14" width="6" height="4" rx="1" fill="currentColor"/><rect x="16" y="14" width="6" height="4" rx="1" fill="currentColor"/><line x1="12" y1="6" x2="12" y2="11" stroke="currentColor" stroke-width="2"/><line x1="5" y1="11" x2="19" y2="11" stroke="currentColor" stroke-width="2"/><line x1="5" y1="11" x2="5" y2="14" stroke="currentColor" stroke-width="2"/><line x1="19" y1="11" x2="19" y2="14" stroke="currentColor" stroke-width="2"/>',
    'fa-terminal':'<polyline points="4 17 10 11 4 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/><line x1="12" y1="19" x2="20" y2="19" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>',
    'fa-link':   '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    'fa-shield': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="currentColor"/>',
    'fa-lock':   '<rect x="3" y="11" width="18" height="11" rx="2" fill="currentColor"/><path d="M7 11V7a5 5 0 0 1 10 0v4" fill="none" stroke="currentColor" stroke-width="2"/>',
    'fa-docker': '<path d="M13 5h2v2h-2zM10 5h2v2h-2zM7 5h2v2H7zM13 8h2v2h-2zM10 8h2v2h-2zM7 8h2v2H7zM4 8h2v2H4z" fill="currentColor"/><path d="M22.5 9.5s-.9-.6-2.5-.3c-.2-1.6-1.5-2.2-1.5-2.2s-.9 2-.3 3.5c-.6.3-2.2.5-2.7.5H2.3c-.1.8 0 4.4 2.5 5.8 1.9 1.1 4.5 1.2 6.2.2 2.8-.1 5.2-1.5 6.3-3.5 1.3.1 3.3-.4 4.2-2 0 0-1-.5-1-2.5l2-2z" fill="currentColor"/>',
    'fa-robot':  '<rect x="3" y="11" width="18" height="10" rx="2" fill="currentColor"/><circle cx="9" cy="16" r="1.5" fill="#050814"/><circle cx="15" cy="16" r="1.5" fill="#050814"/><path d="M8 21v1M16 21v1" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><rect x="9" y="4" width="6" height="5" rx="1" fill="currentColor"/><line x1="12" y1="4" x2="12" y2="2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>',
    'fa-box':    '<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" fill="currentColor"/><polyline points="3.27 6.96 12 12.01 20.73 6.96" fill="none" stroke="#050814" stroke-width="1.5"/><line x1="12" y1="22.08" x2="12" y2="12" stroke="#050814" stroke-width="1.5"/>',
    'fa-chart-bar':'<line x1="18" y1="20" x2="18" y2="10" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><line x1="12" y1="20" x2="12" y2="4"  stroke="currentColor" stroke-width="3" stroke-linecap="round"/><line x1="6"  y1="20" x2="6"  y2="14" stroke="currentColor" stroke-width="3" stroke-linecap="round"/><line x1="2"  y1="20" x2="22" y2="20" stroke="currentColor" stroke-width="1.5"/>',
    'fa-music':  '<path d="M9 18V5l12-2v13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="6" cy="18" r="3" fill="currentColor"/><circle cx="18" cy="16" r="3" fill="currentColor"/>',
    'fa-video':  '<polygon points="23 7 16 12 23 17 23 7" fill="currentColor"/><rect x="1" y="5" width="15" height="14" rx="2" fill="currentColor"/>',
    'fa-book':   '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" fill="none" stroke="currentColor" stroke-width="2"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" fill="currentColor"/>',
    'fa-envelope':'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="currentColor"/><polyline points="22 6 12 13 2 6" fill="none" stroke="#050814" stroke-width="1.5"/>',
    'fa-wrench': '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" fill="currentColor"/>',
    'fa-fire':   '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" fill="currentColor"/>',
    'fa-wifi':   '<path d="M5 12.55a11 11 0 0 1 14.08 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M1.42 9a16 16 0 0 1 21.16 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="12" cy="20" r="1" fill="currentColor"/>',
};

// Caching global DOM elements for performance
const DOM = {
    timeDisplay: document.getElementById('timeDisplay'),
    dateDisplay: document.getElementById('dateDisplay'),
    greetingDisplay: document.getElementById('greetingDisplay'),
    bgVideo: document.getElementById('bgVideo'),
    weatherDisplay: document.getElementById('weatherDisplay'),
    categoriesContainer: document.getElementById('categoriesContainer'),
    suggestionsBox: document.getElementById('suggestionsBox')
};

function renderIcon(iconVal) {
    if (!iconVal) iconVal = 'fa-solid fa-folder';

    if (iconVal.includes('fa-')) {
        const parts   = iconVal.trim().split(/\s+/);
        const iconKey = parts.find(p => p.startsWith('fa-') && p !== 'fa-solid' && p !== 'fa-regular' && p !== 'fa-brands') || parts[parts.length - 1];

        const svgPath = FA_SVG[iconKey];
        if (svgPath) {
            const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.setAttribute('viewBox', '0 0 24 24');
            svg.setAttribute('width',  '16');
            svg.setAttribute('height', '16');
            svg.setAttribute('fill',   'none');
            svg.style.cssText = 'display:inline-block;vertical-align:middle;flex-shrink:0;';

            const parser = new DOMParser();
            const doc = parser.parseFromString(`<svg xmlns="http://www.w3.org/2000/svg">${svgPath}</svg>`, 'image/svg+xml');

            while (doc.documentElement.firstChild) {
                svg.appendChild(doc.documentElement.firstChild);
            }

            return svg;
        }

        const i = document.createElement('i');
        i.className = iconVal;
        return i;
    }
    return document.createTextNode(iconVal);
}

const DEFAULT_CATEGORIES = [
    {
        id: 'lab', emoji: 'fa-server', name: 'Home Lab',
        links: [
            { name: 'Portainer', url: 'https://portainer.local', icon: '' },
            { name: 'Grafana',   url: 'https://grafana.local',   icon: '' }
        ]
    },
    {
        id: 'dev', emoji: 'fa-code', name: 'DevOps & Services',
        links: [
            { name: 'GitHub',  url: 'https://github.com',      icon: '' },
            { name: 'NextDNS', url: 'https://my.nextdns.io',   icon: '' }
        ]
    }
];

let tempBgBase64 = null;

function lsGet(key) { try { return localStorage.getItem(key); } catch (_) { return null; } }
function lsSet(key, value) { try { localStorage.setItem(key, value); } catch (_) {} }
function lsRemove(key) { try { localStorage.removeItem(key); } catch (_) {} }

function el(tag, opts = {}) {
    const e = document.createElement(tag);
    if (opts.className) e.className = opts.className;
    if (opts.text)      e.textContent = opts.text;
    if (opts.style)     e.style.cssText = opts.style;
    if (opts.attrs)     Object.entries(opts.attrs).forEach(([k, v]) => e.setAttribute(k, v));
    return e;
}

function isVideo(url) {
    return /\.(mp4|webm|ogg)$/i.test(url);
}

function applyBackground() {
    const bg    = lsGet('customBackground');
    const body  = document.body;

    if (!bg) {
        body.style.backgroundImage = `url('static/default_background.jpg')`;
        DOM.bgVideo.style.opacity = '0';
        DOM.bgVideo.src = '';
        return;
    }

    if (isVideo(bg)) {
        if (DOM.bgVideo.src !== bg) DOM.bgVideo.src = bg;
        DOM.bgVideo.style.opacity = '1';
        body.style.backgroundImage = '';
    } else {
        DOM.bgVideo.style.opacity = '0';
        body.style.backgroundImage = `url('${CSS.escape ? bg : bg}')`;
    }
}

function updateClock() {
    const now    = new Date();
    const use12h = lsGet('clockFormat12h') === 'true';
    let hours    = now.getHours();
    const mins   = String(now.getMinutes()).padStart(2, '0');
    let ampm     = '';

    if (use12h) {
        ampm  = hours >= 12 ? ' PM' : ' AM';
        hours = hours % 12 || 12;
    }

    const hStr = (!use12h && hours < 10) ? '0' + hours : String(hours);

    DOM.timeDisplay.textContent = `${hStr}:${mins}${ampm}`;
    DOM.dateDisplay.textContent  = now.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
}

setInterval(updateClock, 1000);
updateClock();

const WEATHER_ICON_MAP = {
    0:  '☀️', 1:  '🌤️', 2: '⛅', 3: '☁️', 45: '🌫️', 48: '🌫️',
};

function getWeatherEmoji(code) {
    if (WEATHER_ICON_MAP[code]) return WEATHER_ICON_MAP[code];
    if ([51,53,55,61,63,65,80,81,82].includes(code)) return '🌧️';
    if ([56,57,66,67].includes(code))                return '🌧️❄️';
    if ([71,73,75,77,85,86].includes(code))          return '❄️';
    if ([95,96,99].includes(code))                   return '⛈️';
    return '🌡️';
}

async function initWeather() {
    if (lsGet('weatherEnabled') !== 'true' || !lsGet('weatherCity')) {
        DOM.weatherDisplay.style.display = 'none';
        return;
    }

    const city      = lsGet('weatherCity');
    const cached    = lsGet('weatherCache');
    const cacheTime = parseInt(lsGet('weatherCacheTime')) || 0;
    const CACHE_TTL = 3_600_000;

    const renderWeather = (emoji, temp, cityName) => {
        DOM.weatherDisplay.textContent = '';
        DOM.weatherDisplay.appendChild(document.createTextNode(`${emoji} ${temp}°C `));
        const span = el('span', {
            style: 'opacity:.75;margin-left:5px;font-weight:400;font-size:0.85em;',
            text: cityName
        });
        DOM.weatherDisplay.appendChild(span);
        DOM.weatherDisplay.style.display = 'flex';
    };

    if (cached && Date.now() - cacheTime < CACHE_TTL) {
        try {
            const p = JSON.parse(cached);
            if (p.emoji && p.temp !== undefined) {
                renderWeather(p.emoji, p.temp, p.realCityName);
                return;
            }
        } catch (_) {}
    }

    try {
        const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`);
        const geo = await geoRes.json();

        if (!geo.results?.length) {
            DOM.weatherDisplay.textContent = 'City not found';
            DOM.weatherDisplay.style.display = 'flex';
            return;
        }

        const { latitude, longitude, name } = geo.results[0];
        const wRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
        const w      = await wRes.json();
        const emoji  = getWeatherEmoji(w.current_weather.weathercode);
        const temp   = Math.round(w.current_weather.temperature);
        const cached = { emoji, temp, realCityName: name };

        lsSet('weatherCache', JSON.stringify(cached));
        lsSet('weatherCacheTime', String(Date.now()));
        renderWeather(emoji, temp, name);
    } catch (_) {
        DOM.weatherDisplay.style.display = 'none';
    }
}

const searchForm    = document.getElementById('searchForm');
const searchInput   = document.getElementById('searchInput');
const searchWrapper = document.getElementById('searchWrapper');

let debounceTimer     = null;
let currentSuggestions = [];
let selectedIndex     = -1;

function getSearchEngine() { return lsGet('searchEngine') || 'ddg'; }

function updateSearchBadge() {
    const engine = getSearchEngine();
    document.getElementById('badge-ddg').style.display    = engine === 'ddg'    ? 'flex' : 'none';
    document.getElementById('badge-google').style.display = engine === 'google' ? 'flex' : 'none';
}

const URL_PATTERN = /^([a-z0-9\-]+\.)+[a-z]{2,}(\/.*)?$/i;

function executeSearch(query) {
    if (!query) return;
    const isUrl = /^https?:\/\//i.test(query) || URL_PATTERN.test(query);
    if (isUrl) {
        window.location.href = /^https?:\/\//i.test(query) ? query : 'https://' + query;
        return;
    }
    const engine = getSearchEngine();
    const target = engine === 'google'
        ? `https://www.google.com/search?q=${encodeURIComponent(query)}`
        : `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
    window.location.href = target;
}

async function fetchSuggestions(q) {
    if (getSearchEngine() === 'google') {
        try {
            const d = await (await fetch(`https://suggestqueries.google.com/complete/search?client=firefox&q=${encodeURIComponent(q)}`)).json();
            return d[1]?.slice(0, 6) ?? [];
        } catch (_) {}
    }
    try {
        const d = await (await fetch(`https://duckduckgo.com/ac/?q=${encodeURIComponent(q)}&type=list`)).json();
        return Array.isArray(d) && Array.isArray(d[1]) ? d[1].slice(0, 6) : [];
    } catch (_) { return []; }
}

function closeSuggestions() {
    searchWrapper.classList.remove('active');
    DOM.suggestionsBox.textContent = '';
    currentSuggestions = [];
    selectedIndex = -1;
}

function renderSuggestions(hist, apiSugg) {
    DOM.suggestionsBox.textContent = '';
    currentSuggestions = [];
    selectedIndex = -1;

    // Performance optimization: Using DocumentFragment to avoid multiple reflows
    const fragment = document.createDocumentFragment();

    const addItem = (iconTxt, mainTxt, urlTxt, onClick, type) => {
        const div  = el('div', { className: 'suggestion-item' });
        const icon = el('span', { className: 'suggestion-icon', text: iconTxt });
        const text = el('span', { className: 'suggestion-text', text: mainTxt });
        div.append(icon, text);

        if (urlTxt) div.appendChild(el('span', { className: 'suggestion-url', text: urlTxt }));

        div.addEventListener('click', () => {
            onClick();
            closeSuggestions();
            searchInput.value = '';
        });

        fragment.appendChild(div);
        currentSuggestions.push({ type, text: mainTxt, element: div, onClick });
    };

    hist.forEach(item => addItem('🕒', item.title || item.url, item.url, () => (window.location.href = item.url), 'url'));

    if (hist.length && apiSugg.length) {
        fragment.appendChild(el('div', { className: 'suggestions-separator' }));
    }

    apiSugg.forEach(p => addItem('🔍', p, '', () => executeSearch(p), 'search'));

    DOM.suggestionsBox.appendChild(fragment);

    if (currentSuggestions.length) {
        searchWrapper.classList.add('active');
    } else {
        closeSuggestions();
    }
}

function updateSuggestionSelection() {
    currentSuggestions.forEach((item, i) => {
        const selected = i === selectedIndex;
        item.element.classList.toggle('selected', selected);
        if (selected && item.type === 'search') searchInput.value = item.text;
    });
}

searchInput.addEventListener('input', e => {
    const q = e.target.value.trim();
    clearTimeout(debounceTimer);

    if (!q) { closeSuggestions(); return; }

    debounceTimer = setTimeout(async () => {
        let hist = [];
        if (typeof chrome !== 'undefined' && chrome.history) {
            hist = await new Promise(r => chrome.history.search({ text: q, maxResults: 4 }, res => r(res || [])));
        }
        const apiData = await fetchSuggestions(q);
        renderSuggestions(hist, apiData);
    }, 150);
});

searchForm.addEventListener('submit', e => {
    e.preventDefault();
    if (selectedIndex >= 0 && selectedIndex < currentSuggestions.length) {
        currentSuggestions[selectedIndex].onClick();
    } else {
        executeSearch(searchInput.value.trim());
    }
    closeSuggestions();
    searchInput.value = '';
});

searchInput.addEventListener('keydown', e => {
    if (!searchWrapper.classList.contains('active') || !currentSuggestions.length) return;
    const len = currentSuggestions.length;

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = (selectedIndex + 1) % len;
        updateSuggestionSelection();
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = (selectedIndex - 1 + len) % len;
        updateSuggestionSelection();
    } else if (e.key === 'Escape') {
        closeSuggestions();
    }
});

document.addEventListener('click', e => {
    if (!searchWrapper.contains(e.target)) closeSuggestions();
});

function loadCategories() {
    try {
        const raw = lsGet('customCategories');
        if (raw) {
            const parsed = JSON.parse(raw);
            return parsed.map(c => ({
                ...c,
                name:  (c.name  && c.name.length  > 200) ? 'Corrupted Name' : c.name,
                emoji: (c.emoji && c.emoji.length  > 200) ? 'fa-folder' : c.emoji
            }));
        }
    } catch (_) {}
    return DEFAULT_CATEGORIES;
}

function getFaviconUrl(rawUrl) {
    try {
        const hostname = new URL(rawUrl.startsWith('http') ? rawUrl : 'https://' + rawUrl).hostname;
        return `https://www.google.com/s2/favicons?domain=${hostname}&sz=64`;
    } catch (_) { return null; }
}

function renderCategories() {
    const cats = loadCategories();
    DOM.categoriesContainer.textContent = '';

    // Performance optimization: DocumentFragment
    const fragment = document.createDocumentFragment();

    cats.forEach(cat => {
        if (!cat.links?.length) return;

        const block  = el('div', { className: 'category-block' });
        const header = el('div', { className: 'category-header' });

        const iconWrap = el('span', { className: 'category-emoji' });
        iconWrap.appendChild(renderIcon(cat.emoji || 'fa-folder'));

        const label = el('span', { className: 'category-label', text: cat.name });
        header.append(iconWrap, label);
        block.appendChild(header);

        const linksDiv = el('div', { className: 'category-links' });

        cat.links.forEach(link => {
            const a = document.createElement('a');
            a.href      = link.url;
            a.className = 'shortcut-btn';

            const spanIcon = el('span', { className: 'shortcut-icon' });

            if (link.icon?.startsWith('data:image')) {
                spanIcon.appendChild(el('img', { attrs: { src: link.icon, alt: '' } }));
            } else {
                const fav = getFaviconUrl(link.url);
                if (fav) {
                    spanIcon.appendChild(el('img', { attrs: { src: fav, alt: '' } }));
                } else {
                    spanIcon.textContent = '🌐';
                }
            }

            a.appendChild(spanIcon);
            a.appendChild(document.createTextNode(link.name));
            linksDiv.appendChild(a);
        });

        block.appendChild(linksDiv);
        fragment.appendChild(block);
    });

    DOM.categoriesContainer.appendChild(fragment);
}

function loadGreetings() {
    let arr = JSON.parse(lsGet('customGreetings') || 'null');
    if (!Array.isArray(arr)) arr = ["Ready for a new adventure?", "What's on your mind today?", "Let's get things done!"];
    return arr.filter(msg => typeof msg === 'string' && msg.length < 250);
}

function initGreeting() {
    const g = loadGreetings();
    DOM.greetingDisplay.textContent = g.length ? g[Math.floor(Math.random() * g.length)] : 'Welcome!';
}

async function initFooter() {
    const footer = document.getElementById('glasshub-footer');
    if (!footer) return;

    let firefoxVersion = 'Unknown';
    const uaMatch = navigator.userAgent.match(/Firefox\/([\d.]+)/);
    if (uaMatch) firefoxVersion = uaMatch[1];

    if (firefoxVersion === 'Unknown' && typeof browser !== 'undefined' && browser.runtime?.getBrowserInfo) {
        try { firefoxVersion = (await browser.runtime.getBrowserInfo()).version; } catch (_) {}
    }

    const ffSpan = document.getElementById('footer-ff-version');
    if (ffSpan) ffSpan.textContent = `Firefox ${firefoxVersion}`;

    const yearSpan = document.getElementById('footer-year');
    if (yearSpan) yearSpan.textContent = String(new Date().getFullYear());
}

const modal = document.getElementById('settingsModal');

function createCategoryEditorBlock(cat) {
    const wrap = el('div', { className: 'category-editor-block' });
    wrap.dataset.id = cat.id || ('cat_' + Date.now());

    // Header row
    const hdr      = el('div', { className: 'category-editor-header' });
    const iconIn   = el('input', { className: 'cat-icon-input', attrs: { type: 'text', placeholder: 'fa-folder ou 🗂️' } });
    iconIn.value   = cat.emoji || 'fa-folder';
    const nameIn   = el('input', { className: 'cat-name-input', attrs: { type: 'text', placeholder: 'Category name' } });
    nameIn.value   = cat.name || '';
    const delBtn   = el('button', { className: 'delete-cat-btn', text: '🗑️', attrs: { type: 'button' } });
    delBtn.addEventListener('click', () => wrap.remove());
    hdr.append(iconIn, nameIn, delBtn);
    wrap.appendChild(hdr);

    // Links list
    const linksWrap = el('div', { className: 'links-list' });
    (cat.links || []).forEach(link => linksWrap.appendChild(createLinkRow(link)));
    wrap.appendChild(linksWrap);

    // Add link button
    const addLnkBtn = el('button', { className: 'add-btn', text: '+ Add Link', attrs: { type: 'button' } });
    addLnkBtn.style.cssText = 'font-size:0.8rem;padding:5px 12px;margin-top:6px;';
    addLnkBtn.addEventListener('click', () => linksWrap.appendChild(createLinkRow({})));
    wrap.appendChild(addLnkBtn);

    return wrap;
}

function createLinkRow(link) {
    const row    = el('div', { className: 'link-edit-row', attrs: { draggable: 'true' } });
    const handle = el('div', { className: 'drag-handle', text: '☰' });

    // Icon picker
    const iconWrap  = el('div', { className: 'icon-upload-wrap' });
    const iconDataIn = el('input', { className: 'icon-data-input', attrs: { type: 'hidden' } });
    iconDataIn.value = link.icon || '';

    const iconBtn = el('button', { className: 'icon-upload-btn', attrs: { type: 'button' } });
    if (link.icon?.startsWith('data:image')) {
        iconBtn.appendChild(el('img', { attrs: { src: link.icon } }));
    } else {
        iconBtn.textContent = '🖼️';
    }

    const fileIn = el('input', { attrs: { type: 'file', accept: 'image/*' } });
    fileIn.style.display = 'none';

    iconBtn.addEventListener('click', () => fileIn.click());
    fileIn.addEventListener('change', e => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = ev => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const MAX    = 64;
                let { width: w, height: h } = img;
                if (w > MAX || h > MAX) {
                    if (w > h) { h = Math.round(h * MAX / w); w = MAX; }
                    else       { w = Math.round(w * MAX / h); h = MAX; }
                }
                canvas.width  = w;
                canvas.height = h;
                canvas.getContext('2d').drawImage(img, 0, 0, w, h);
                const b64        = canvas.toDataURL('image/png');
                iconDataIn.value = b64;
                iconBtn.textContent = '';
                iconBtn.appendChild(el('img', { attrs: { src: b64 } }));
            };
            img.src = ev.target.result;
        };
        reader.readAsDataURL(file);
    });

    iconWrap.append(iconDataIn, iconBtn, fileIn);

    const nameIn = el('input', { className: 'name-input', attrs: { type: 'text', placeholder: 'Name' } });
    nameIn.value = link.name || '';
    const urlIn  = el('input', { className: 'url-input',  attrs: { type: 'text', placeholder: 'https://...' } });
    urlIn.value  = link.url  || '';

    const dBtn = el('button', { className: 'delete-btn', text: '🗑️', attrs: { type: 'button' } });
    dBtn.addEventListener('click', () => row.remove());

    row.append(handle, iconWrap, nameIn, urlIn, dBtn);
    return row;
}

function createGreetingRow(text) {
    const div    = el('div', { className: 'link-edit-row', attrs: { draggable: 'true' } });
    const handle = el('div', { className: 'drag-handle', text: '☰' });
    const input  = el('input', { className: 'greeting-input', attrs: { type: 'text' } });
    input.value  = text;
    const btn    = el('button', { className: 'delete-btn', text: '🗑️', attrs: { type: 'button' } });
    btn.addEventListener('click', () => div.remove());
    div.append(handle, input, btn);
    return div;
}

// ============================================================
// MODAL — OPEN / CLOSE
// ============================================================

document.getElementById('settingsBtn').addEventListener('click', () => {
    // Populate categories
    const catsEdit = document.getElementById('categoriesEdit');
    catsEdit.textContent = '';
    loadCategories().forEach(c => catsEdit.appendChild(createCategoryEditorBlock(c)));

    // Populate greetings
    const greetEdit = document.getElementById('greetingsEdit');
    greetEdit.textContent = '';
    loadGreetings().forEach(m => greetEdit.appendChild(createGreetingRow(m)));

    // Background
    const currentBg = lsGet('customBackground') || '';
    if (currentBg.startsWith('data:image')) {
        document.getElementById('bgUrlInput').value = '[Local Image Uploaded]';
        tempBgBase64 = currentBg;
    } else {
        document.getElementById('bgUrlInput').value = currentBg;
        tempBgBase64 = null;
    }

    // Other settings
    document.getElementById('clockFormatCheckbox').checked = lsGet('clockFormat12h') === 'true';
    document.getElementById('engineSelect').value          = getSearchEngine();

    const weatherOn = lsGet('weatherEnabled') === 'true';
    document.getElementById('weatherCheckbox').checked    = weatherOn;
    document.getElementById('weatherCityInput').value     = lsGet('weatherCity') || '';
    document.getElementById('weatherSettings').style.display = weatherOn ? 'block' : 'none';

    modal.classList.add('active');
});

document.getElementById('addCategoryBtn').addEventListener('click', () => {
    document.getElementById('categoriesEdit').appendChild(
        createCategoryEditorBlock({ emoji: 'fa-folder', links: [] })
    );
});

document.getElementById('addGreetingBtn').addEventListener('click', () => {
    document.getElementById('greetingsEdit').appendChild(createGreetingRow(''));
});

document.getElementById('weatherCheckbox').addEventListener('change', e => {
    document.getElementById('weatherSettings').style.display = e.target.checked ? 'block' : 'none';
});

document.getElementById('closeSettingsBtn').addEventListener('click', () => modal.classList.remove('active'));
modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('active'); });

// ============================================================
// MODAL — SAVE
// ============================================================

document.getElementById('saveSettingsBtn').addEventListener('click', () => {
    // Categories
    const newCats = [...document.querySelectorAll('.category-editor-block')].map(block => ({
        id:    block.dataset.id,
        emoji: block.querySelector('.cat-icon-input').value.trim() || 'fa-folder',
        name:  block.querySelector('.cat-name-input').value.trim(),
        links: [...block.querySelectorAll('.link-edit-row')].map(row => ({
            icon: row.querySelector('.icon-data-input')?.value.trim() || '',
            name: row.querySelector('.name-input').value.trim(),
            url:  row.querySelector('.url-input').value.trim()
        })).filter(l => l.url)
    })).filter(c => c.name);
    lsSet('customCategories', JSON.stringify(newCats));

    // Greetings
    const newGrts = [...document.querySelectorAll('#greetingsEdit .greeting-input')]
        .map(i => i.value.trim())
        .filter(Boolean);
    if (newGrts.length) lsSet('customGreetings', JSON.stringify(newGrts));

    // Background
    let bgVal = document.getElementById('bgUrlInput').value.trim();
    if (bgVal === '[Local Image Uploaded]' && tempBgBase64) bgVal = tempBgBase64;
    if (bgVal) lsSet('customBackground', bgVal);
    else       lsRemove('customBackground');
    tempBgBase64 = null;

    // Search engine & clock format
    lsSet('searchEngine',   document.getElementById('engineSelect').value);
    lsSet('clockFormat12h', String(document.getElementById('clockFormatCheckbox').checked));

    // Weather
    const wEnabled = document.getElementById('weatherCheckbox').checked;
    const wCity    = document.getElementById('weatherCityInput').value.trim();
    if (wCity !== lsGet('weatherCity')) lsRemove('weatherCache');
    lsSet('weatherEnabled', String(wEnabled));
    lsSet('weatherCity',    wCity);

    applyBackground();
    updateSearchBadge();
    renderCategories();
    initGreeting();
    initWeather();
    modal.classList.remove('active');
});

// ============================================================
// BACKGROUND — UPLOAD & URL INPUT
// ============================================================

document.getElementById('uploadBgBtn').addEventListener('click', () => {
    document.getElementById('bgFileInput').click();
});

document.getElementById('bgFileInput').addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = ev => {
        const img = new Image();
        img.onload = () => {
            const canvas      = document.createElement('canvas');
            const [MW, MH]    = [1920, 1080];
            let { width: w, height: h } = img;

            if (w > MW || h > MH) {
                if (w / h > MW / MH) { h = Math.round(h * MW / w); w = MW; }
                else                  { w = Math.round(w * MH / h); h = MH; }
            }

            canvas.width  = w;
            canvas.height = h;
            canvas.getContext('2d').drawImage(img, 0, 0, w, h);
            tempBgBase64 = canvas.toDataURL('image/jpeg', 0.85);
            document.getElementById('bgUrlInput').value = '[Local Image Uploaded]';
        };
        img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
});

document.getElementById('resetBgBtn').addEventListener('click', () => {
    tempBgBase64 = null;
    document.getElementById('bgUrlInput').value = '';
});

document.getElementById('bgUrlInput').addEventListener('input', () => {
    tempBgBase64 = null; // Clear local image when user types a URL
});

// ============================================================
// EXPORT / IMPORT
// ============================================================

const PERSISTED_KEYS = [
    'customCategories', 'customGreetings', 'customBackground',
    'searchEngine', 'clockFormat12h', 'weatherEnabled', 'weatherCity'
];

function getLocalData() {
    const d = {};
    PERSISTED_KEYS.forEach(k => {
        const v = lsGet(k);
        if (v !== null) d[k] = v;
    });
    return d;
}

document.getElementById('exportBtn').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(getLocalData(), null, 2)], { type: 'application/json' });
    const a    = el('a', { attrs: { href: URL.createObjectURL(blob), download: 'glasshub_config.json' } });
    a.click();
});

document.getElementById('importBtn').addEventListener('click', () => {
    document.getElementById('importFileInput').click();
});

document.getElementById('importFileInput').addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = ev => {
        try {
            const d = JSON.parse(ev.target.result);
            Object.entries(d).forEach(([k, v]) => lsSet(k, v));
            location.reload();
        } catch (_) {
            alert('Invalid config file. Please choose a valid GlassHub export.');
        }
    };
    reader.readAsText(file);
});

// ============================================================
// DRAG & DROP (link rows)
// ============================================================

let dragTarget = null;

document.addEventListener('dragstart', e => {
    if (e.target.classList?.contains('link-edit-row')) {
        dragTarget = e.target;
        setTimeout(() => e.target.classList.add('dragging'), 0);
    }
});

document.addEventListener('dragend', e => {
    if (e.target.classList?.contains('link-edit-row')) {
        e.target.classList.remove('dragging');
        dragTarget = null;
        document.querySelectorAll('.link-edit-row').forEach(r => r.classList.remove('drag-over'));
    }
});

document.addEventListener('dragover', e => {
    const t = e.target.closest?.('.link-edit-row');
    if (t && t !== dragTarget && dragTarget && t.parentNode === dragTarget.parentNode) {
        e.preventDefault();
        t.classList.add('drag-over');
    }
});

document.addEventListener('dragleave', e => {
    e.target.closest?.('.link-edit-row')?.classList.remove('drag-over');
});

document.addEventListener('drop', e => {
    const t = e.target.closest?.('.link-edit-row');
    if (t && t !== dragTarget && dragTarget && t.parentNode === dragTarget.parentNode) {
        e.preventDefault();
        t.classList.remove('drag-over');
        const mid = t.getBoundingClientRect().top + t.getBoundingClientRect().height / 2;
        t.parentNode.insertBefore(dragTarget, e.clientY > mid ? t.nextSibling : t);
    }
});

// ============================================================
// INIT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    applyBackground();
    updateSearchBadge();
    renderCategories();
    initGreeting();
    initWeather();
    initFooter();
});
