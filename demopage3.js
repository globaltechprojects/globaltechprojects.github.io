document.addEventListener('DOMContentLoaded', (event) => {
    const candidates = [
        'nsrwa', 'niger', 'ogun', 'ondo', 'osun', 
        'oyo', 'plteu', 'rivrs', 'sokto', 'tarba', 
        'yobe', 'zmfra'
    ];

    candidates.forEach(candidate => {
        const countElement = document.getElementById(`${candidate}-count`);
        const count = localStorage.getItem(candidate) || 0;
        if (countElement) {
            countElement.value = count;
        }
    });
});

function vote(candidate) {
    let count = parseInt(localStorage.getItem(candidate) || 0);
    count += 1;
    localStorage.setItem(candidate, count);
    
    const countElement = document.getElementById(`${candidate}-count`);
    if (countElement) {
        countElement.value = count;
    }

    // Redirect to another page
    window.location.href = 'thankyou.html';
}