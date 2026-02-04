// Principales ciudades del mundo con sus zonas horarias
const worldCities = [
    { name: 'Bogotá', timezone: 'America/Bogota', country: 'Colombia' },
    { name: 'Medellín', timezone: 'America/Bogota', country: 'Colombia' },
    { name: 'Cali', timezone: 'America/Bogota', country: 'Colombia' },
    { name: 'Barranquilla', timezone: 'America/Bogota', country: 'Colombia' },
    { name: 'Cartagena', timezone: 'America/Bogota', country: 'Colombia' },
    { name: 'Neiva', timezone: 'America/Bogota', country: 'Colombia' },
    { name: 'Buenos Aires', timezone: 'America/Argentina/Buenos_Aires', country: 'Argentina' },
    { name: 'São Paulo', timezone: 'America/Sao_Paulo', country: 'Brasil' },
    { name: 'Rio de Janeiro', timezone: 'America/Sao_Paulo', country: 'Brasil' },
    { name: 'Lima', timezone: 'America/Lima', country: 'Perú' },
    { name: 'Santiago', timezone: 'America/Santiago', country: 'Chile' },
    { name: 'Ciudad de México', timezone: 'America/Mexico_City', country: 'México' },
    { name: 'Monterrey', timezone: 'America/Monterrey', country: 'México' },
    { name: 'Guadalajara', timezone: 'America/Mexico_City', country: 'México' },
    { name: 'Caracas', timezone: 'America/Caracas', country: 'Venezuela' },
    { name: 'Quito', timezone: 'America/Guayaquil', country: 'Ecuador' },
    { name: 'La Paz', timezone: 'America/La_Paz', country: 'Bolivia' },
    { name: 'Asunción', timezone: 'America/Asuncion', country: 'Paraguay' },
    { name: 'Montevideo', timezone: 'America/Montevideo', country: 'Uruguay' },
    { name: 'Nueva York', timezone: 'America/New_York', country: 'Estados Unidos' },
    { name: 'Los Ángeles', timezone: 'America/Los_Angeles', country: 'Estados Unidos' },
    { name: 'Chicago', timezone: 'America/Chicago', country: 'Estados Unidos' },
    { name: 'Miami', timezone: 'America/New_York', country: 'Estados Unidos' },
    { name: 'San Francisco', timezone: 'America/Los_Angeles', country: 'Estados Unidos' },
    { name: 'Washington, D.C', timezone: 'America/New_York', country: 'Estados Unidos' },
    { name: 'Toronto', timezone: 'America/Toronto', country: 'Canadá' },
    { name: 'Vancouver', timezone: 'America/Vancouver', country: 'Canadá' },
    { name: 'Londres', timezone: 'Europe/London', country: 'Reino Unido' },
    { name: 'París', timezone: 'Europe/Paris', country: 'Francia' },
    { name: 'Madrid', timezone: 'Europe/Madrid', country: 'España' },
    { name: 'Barcelona', timezone: 'Europe/Madrid', country: 'España' },
    { name: 'Budapest', timezone: 'Europe/Budapest', country: 'Hungría'},
    { name: 'Dunaújváros', timezone: 'Europe/Budapest', country: 'Hungría'},
    { name: 'Roma', timezone: 'Europe/Rome', country: 'Italia' },
    { name: 'Berlín', timezone: 'Europe/Berlin', country: 'Alemania' },
    { name: 'Ámsterdam', timezone: 'Europe/Amsterdam', country: 'Países Bajos' },
    { name: 'Bruselas', timezone: 'Europe/Brussels', country: 'Bélgica' },
    { name: 'Viena', timezone: 'Europe/Vienna', country: 'Austria' },
    { name: 'Zúrich', timezone: 'Europe/Zurich', country: 'Suiza' },
    { name: 'Estocolmo', timezone: 'Europe/Stockholm', country: 'Suecia' },
    { name: 'Oslo', timezone: 'Europe/Oslo', country: 'Noruega' },
    { name: 'Copenhague', timezone: 'Europe/Copenhagen', country: 'Dinamarca' },
    { name: 'Dublín', timezone: 'Europe/Dublin', country: 'Irlanda' },
    { name: 'Lisboa', timezone: 'Europe/Lisbon', country: 'Portugal' },
    { name: 'Praga', timezone: 'Europe/Prague', country: 'República Checa' },
    { name: 'Varsovia', timezone: 'Europe/Warsaw', country: 'Polonia' },
    { name: 'Atenas', timezone: 'Europe/Athens', country: 'Grecia' },
    { name: 'Moscú', timezone: 'Europe/Moscow', country: 'Rusia' },
    { name: 'Estambul', timezone: 'Europe/Istanbul', country: 'Turquía' },
    { name: 'Dubai', timezone: 'Asia/Dubai', country: 'Emiratos Árabes Unidos' },
    { name: 'Abu Dabi', timezone: 'Asia/Dubai', country: 'Emiratos Árabes Unidos' },
    { name: 'Tel Aviv', timezone: 'Asia/Jerusalem', country: 'Israel' },
    { name: 'El Cairo', timezone: 'Africa/Cairo', country: 'Egipto' },
    { name: 'Ciudad del Cabo', timezone: 'Africa/Johannesburg', country: 'Sudáfrica' },
    { name: 'Johannesburgo', timezone: 'Africa/Johannesburg', country: 'Sudáfrica' },
    { name: 'Nairobi', timezone: 'Africa/Nairobi', country: 'Kenia' },
    { name: 'Lagos', timezone: 'Africa/Lagos', country: 'Nigeria' },
    { name: 'Tokyo', timezone: 'Asia/Tokyo', country: 'Japón' },
    { name: 'Tokio', timezone: 'Asia/Tokyo', country: 'Japón' },
    { name: 'Osaka', timezone: 'Asia/Tokyo', country: 'Japón' },
    { name: 'Seúl', timezone: 'Asia/Seoul', country: 'Corea del Sur' },
    { name: 'Pekín', timezone: 'Asia/Shanghai', country: 'China' },
    { name: 'Shanghái', timezone: 'Asia/Shanghai', country: 'China' },
    { name: 'Hong Kong', timezone: 'Asia/Hong_Kong', country: 'Hong Kong' },
    { name: 'Singapur', timezone: 'Asia/Singapore', country: 'Singapur' },
    { name: 'Bangkok', timezone: 'Asia/Bangkok', country: 'Tailandia' },
    { name: 'Kuala Lumpur', timezone: 'Asia/Kuala_Lumpur', country: 'Malasia' },
    { name: 'Manila', timezone: 'Asia/Manila', country: 'Filipinas' },
    { name: 'Jakarta', timezone: 'Asia/Jakarta', country: 'Indonesia' },
    { name: 'Ho Chi Minh', timezone: 'Asia/Ho_Chi_Minh', country: 'Vietnam' },
    { name: 'Mumbai', timezone: 'Asia/Kolkata', country: 'India' },
    { name: 'Nueva Delhi', timezone: 'Asia/Kolkata', country: 'India' },
    { name: 'Bangalore', timezone: 'Asia/Kolkata', country: 'India' },
    { name: 'Sídney', timezone: 'Australia/Sydney', country: 'Australia' },
    { name: 'Melbourne', timezone: 'Australia/Melbourne', country: 'Australia' },
    { name: 'Brisbane', timezone: 'Australia/Brisbane', country: 'Australia' },
    { name: 'Perth', timezone: 'Australia/Perth', country: 'Australia' },
    { name: 'Auckland', timezone: 'Pacific/Auckland', country: 'Nueva Zelanda' },
];

// Ciudades destacadas para mostrar al final de la página
const featuredCities = [
    { name: 'Los Ángeles', timezone: 'America/Los_Angeles' },
    { name: 'Nueva York', timezone: 'America/New_York' },
    { name: 'Londres', timezone: 'Europe/London' },
    { name: 'París', timezone: 'Europe/Paris' },
    { name: 'Pekín', timezone: 'Asia/Shanghai' },
    { name: 'Tokio', timezone: 'Asia/Tokyo' }
];

let currentTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
let currentCity = 'tu ubicación';

const clockElement = document.getElementById('clock');
const dateElement = document.getElementById('date');
const currentLocationText = document.getElementById('currentLocationText');
const cityInput = document.getElementById('cityInput');
const suggestionsElement = document.getElementById('suggestions');
const timezoneElement = document.getElementById('timezone');
const worldTimesElement = document.getElementById('worldTimes');
const sunInfoElement = document.getElementById('sunInfo');

function updateClock() {
    const now = new Date();
    
    // Crear el formato de hora con la zona horaria actual
    const timeFormatter = new Intl.DateTimeFormat('es-ES', {
        timeZone: currentTimezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    
    const timeString = timeFormatter.format(now);
    clockElement.textContent = timeString;


    const dateFormatter = new Intl.DateTimeFormat('es-ES', {
        timeZone: currentTimezone,
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    const dateString = dateFormatter.format(now);
    const formattedDate = dateString.charAt(0).toUpperCase() + dateString.slice(1);
    
    // Obtener el número de semana
    const weekNumber = getWeekNumber(now);
    dateElement.textContent = `${formattedDate}, Semana ${weekNumber}`;
}

// Función para obtener el número de semana
function getWeekNumber(date) {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    return Math.ceil((((d - yearStart) / 86400000) + 1)/7);
}


function updateWorldClocks() {
    worldTimesElement.innerHTML = featuredCities.map(city => {
        const now = new Date();
        const timeFormatter = new Intl.DateTimeFormat('es-ES', {
            timeZone: city.timezone,
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
        });
        const timeString = timeFormatter.format(now);
        
        return `
            <div class="world-time-item">
                <div class="world-time-city">${city.name}</div>
                <div class="world-time-clock">${timeString}</div>
            </div>
        `;
    }).join('');
}


function showSuggestions(searchTerm) {
    if (searchTerm.length < 2) {
        suggestionsElement.classList.remove('show');
        return;
    }

    const filtered = worldCities.filter(city => 
        city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        city.country.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filtered.length === 0) {
        suggestionsElement.classList.remove('show');
        return;
    }

    suggestionsElement.innerHTML = filtered.slice(0, 10).map(city => 
        `<div class="suggestion-item" data-timezone="${city.timezone}" data-city="${city.name}">
            ${city.name}, ${city.country}
        </div>`
    ).join('');

    suggestionsElement.classList.add('show');
}

// Función para cambiar la zona horaria
function changeTimezone(timezone, cityName) {
    currentTimezone = timezone;
    currentCity = cityName;
    currentLocationText.textContent = cityName;
    timezoneElement.textContent = `Zona horaria: ${timezone}`;
    
    // Actualizar inmediatamente el reloj
    updateClock();
    updateWorldClocks();
    
    
    setTimeout(() => {
        updateClock();
    }, 100);
}


cityInput.addEventListener('input', (e) => {
    showSuggestions(e.target.value);
});

suggestionsElement.addEventListener('click', (e) => {
    if (e.target.classList.contains('suggestion-item')) {
        const timezone = e.target.dataset.timezone;
        const city = e.target.dataset.city;
        changeTimezone(timezone, city);
        cityInput.value = '';
        suggestionsElement.classList.remove('show');
    }
});


document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
        suggestionsElement.classList.remove('show');
    }
});


cityInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const firstSuggestion = suggestionsElement.querySelector('.suggestion-item');
        if (firstSuggestion) {
            const timezone = firstSuggestion.dataset.timezone;
            const city = firstSuggestion.dataset.city;
            changeTimezone(timezone, city);
            cityInput.value = '';
            suggestionsElement.classList.remove('show');
        }
    }
});


timezoneElement.textContent = `Zona horaria: ${currentTimezone}`;
sunInfoElement.textContent = 'Sol: ☀ 06:14 ↓ 18:16 (12h 2m)';


updateClock();
updateWorldClocks();
setInterval(() => {
    updateClock();
    updateWorldClocks();

}, 1000);
