const noButton = document.getElementById('no-button');
const questionText = document.getElementById('question-text');
const mainGif = document.getElementById('main-gif');
const responseMessage = document.getElementById('response-message');

// Daftar GIF untuk respon 'Ngga'
const noGifs = [
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTBmbTlsMjkwajRieXU5N2k3djZkYXV2MWh3dThwYjR0dmN1NHFveiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/8L0EaL1l7r1xJ5B4Yh/giphy.gif", // Pleading eyes
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExczJrdGhmb3FzNHloazZ0OTJyMWUxeG9nNnpvaHFsNjZtMnJ4c2d3ciZlcD12MV9pbnRlcm5hbF9naWZfYnlfYnlfaWQmY3Q9cw/26FL39v2K4n2N6Xhm/giphy.gif" // Puppy eyes sad
];

let attempt = 0;
function moveNoButton() {
    attempt++;
    // Pindahkan tombol ke posisi acak di dalam area 200px dari tengah
    const x = Math.random() * 200 - 100; // antara -100px dan 100px
    const y = Math.random() * 200 - 100;

    noButton.style.transform = `translate(${x}px, ${y}px)`;
    
    if (attempt > 5) {
        // Setelah 5 kali percobaan, ubah pesan di tombol
        noButton.innerHTML = 'Pikirkan lagi!';
    }
    if (attempt > 10) {
        // Setelah 10 kali percobaan, paksa tombol 'Iya' terlihat dominan
        noButton.style.opacity = 0;
        noButton.style.cursor = 'default';
        questionText.innerHTML = "Ayo dong, El. Cuma ada satu jawaban yang benar di sini ❤️";
    }
}

function handleNoClick() {
    // Tombol 'Ngga' hanya berfungsi jika diklik secara langsung, bukan karena gerakan
    if (attempt <= 10) {
        // Pilih GIF acak untuk respon 'Ngga'
        const randomIndex = Math.floor(Math.random() * noGifs.length);
        mainGif.src = noGifs[randomIndex];
        
        questionText.innerHTML = "JANGAN DULU JAWAB ITU! Coba klik tombol 'Iya' di sebelah kiri 😭";
        responseMessage.innerHTML = "Aku mohon, El. Coba klik tombol 'Iya' dulu. Jangan buru-buru... 🙏";
        responseMessage.style.opacity = 1;
    } else {
        // Jika sudah coba 10x dan 'Ngga' tersembunyi/tidak bisa diakses
        alert('Tombol "Ngga" sedang mogok. Coba klik "Iya" dulu ya, El 😊');
        noButton.style.opacity = 1;
        noButton.style.transform = 'translate(0, 0)';
        attempt = 0; // Reset percobaan
    }
}

// Catatan: Fungsi handleYesClick dihapus karena tombol 'Iya' sekarang mengalihkan ke yes_response.html