// Hide genre section when button clicks
function hideSections() {
    const resultSec = document.getElementById('results-container')
    const genreSec = document.getElementById('genre-container');
    console.log('work');
        // unhides results container by removing hidden element to class
        resultSec.classList.remove('hidden');
        // Hides genre container by adding hidden element to class
        genreSec.classList.add('hidden');
}