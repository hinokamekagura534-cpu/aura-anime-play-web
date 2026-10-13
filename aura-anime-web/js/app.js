let animeList = [];

async function loadAnime() {
    animeList = await fetchAnimeFromAPI();
    renderList();
}

function renderList() {
    const listDiv = document.getElementById('anime-list');
    listDiv.innerHTML = '';

    if (animeList.length === 0) {
        listDiv.innerHTML = '<p style="text-align:center; color:#888;">هیچ ئەنیمییەک نەدۆزرایەوە.</p>';
        return;
    }

    animeList.forEach((anime, index) => {
        const item = document.createElement('div');
        item.className = 'anime-item';
        item.innerHTML = `
            <div>
                <strong>${anime.title}</strong> - ${anime.season || ''} - ${anime.episode || ''}
            </div>
            <button style="width: auto; padding: 8px 15px;" onclick="playVideo(animeList[${index}])">سەیرکردن ▶</button>
        `;
        listDiv.appendChild(item);
    });
}

document.getElementById('save-btn').addEventListener('click', async () => {
    const title = document.getElementById('title').value;
    const season = document.getElementById('season').value;
    const episode = document.getElementById('episode').value;
    const link = document.getElementById('videoLink').value;

    if (!title || !link) {
        alert('تکایە ناوی ئەنیمی و لینکی ڤیدیۆ پڕبکەرەوە!');
        return;
    }

    const success = await saveAnimeToAPI({ title, season, episode, link });
    if (success) {
        alert('ئەنیمییەکە پاشەکەوتکرا!');
        document.getElementById('title').value = '';
        document.getElementById('season').value = '';
        document.getElementById('episode').value = '';
        document.getElementById('videoLink').value = '';
        loadAnime();
    } else {
        alert('کێشەیەک ڕوویدا لە پاشەکەوتکردندا.');
    }
});

// دەستپێکردنی هێنانی داتاکان
loadAnime();
