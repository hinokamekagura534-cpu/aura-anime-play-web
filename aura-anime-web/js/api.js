// لینکی سێرڤەری Railwayـەکەت لێرە بنووسە (دڵنیا ببەوە لە کۆتاییەکەیدا /api/anime هەیە)
const API_URL = 'https://YOUR-RAILWAY-APP.up.railway.app/api/anime';

async function fetchAnimeFromAPI() {
    try {
        const response = await fetch(API_URL);
        if (response.ok) {
            return await response.json();
        }
        return [];
    } catch (error) {
        console.error('کێشە لە هێنانی داتاکان:', error);
        return [];
    }
}

async function saveAnimeToAPI(animeData) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(animeData)
        });
        return response.ok;
    } catch (error) {
        console.error('کێشە لە ناردنی داتا:', error);
        return false;
    }
}
