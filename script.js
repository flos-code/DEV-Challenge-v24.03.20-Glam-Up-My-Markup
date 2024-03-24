document.addEventListener('DOMContentLoaded', function () {
    const activitySelect = document.getElementById('activity-select');
    const header = document.querySelector('h1');

    const backgroundImages = {
        hiking: 'url("https://github.com/flos-code/glem-markup/assets/148456982/fd496d12-1704-4ea1-a436-a03d9135550f")',
        canoeing: 'url("https://github.com/flos-code/glem-markup/assets/148456982/ccb4a350-57ad-4d25-9810-0fd9af901605")',
        fishing: 'url("https://github.com/flos-code/glem-markup/assets/148456982/8706af35-9d2f-46d9-8dff-2296ce9f9342")',
        crafts: 'url("https://github.com/flos-code/glem-markup/assets/148456982/35c4e775-8281-4ea4-bebb-6d27081c9d53")',
        archery: 'url("https://github.com/flos-code/glem-markup/assets/148456982/adc7cdaf-22d1-4579-986f-b44e529557da")'
    };

    activitySelect.addEventListener('change', function () {
        const selectedActivity = this.value;
        const imageUrl = backgroundImages[selectedActivity];
        if (imageUrl) {
            header.style.backgroundImage = imageUrl;
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Your information has been successfully submitted. See you in the camp 🏕️');
    });
});