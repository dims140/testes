const openBtn = document.getElementById('openMessage');
const modal1 = document.getElementById('modalMessage');
const modal2 = document.getElementById('modalReply');
const typingText = document.getElementById('typingText');
const replyBtn = document.getElementById('replyBtn');
const sendBtn = document.getElementById('sendBtn');
const replyText = document.getElementById('replyText');
const music = document.getElementById('bgMusic');

const message = `* NOTE: Ucapan Ini hanya Contoh, Silakan Ganti Dengan Ucapanmu Sendiri Ya!*
.
.
.
.
.
Selamat ulang tahun untukmu, sosok yang kehadirannya selalu memberikan arti lebih bagi setiap orang di sekitarmu. Di hari yang istimewa ini, aku ingin memulai dengan rasa syukur yang paling dalam karena semesta telah mengizinkanmu lahir dan tumbuh menjadi pribadi yang luar biasa seperti sekarang. Hari ini bukan sekadar perayaan bertambahnya angka, melainkan perayaan atas segala kebaikan, cinta, dan ketulusan yang telah kamu bagikan selama setahun belakangan ini.

Melihat kembali perjalanan yang telah kamu lalui, aku merasa sangat bangga menyaksikan betapa kuatnya kamu menghadapi setiap tantangan yang datang. Kamu telah melewati berbagai musim kehidupan—mulai dari tawa yang paling renyah hingga air mata yang tersembunyi—namun kamu tetap berdiri tegak dengan hati yang tetap hangat. Ketangguhanmu adalah inspirasi bagiku, dan aku berharap kamu tidak pernah lupa betapa berharganya setiap perjuangan yang telah kamu menangkan sejauh ini.

Memasuki usia yang baru ini, doa pertamaku adalah agar kamu selalu diberikan kesehatan yang sempurna, baik fisik maupun jiwa. Semoga setiap sel dalam tubuhmu diberkati dengan kekuatan, sehingga kamu bisa terus melangkah mengejar mimpi-mimpi besarmu tanpa rasa lelah yang berarti. Aku juga berharap pikiranmu selalu dilingkupi dengan ketenangan, agar dalam situasi tersulit sekalipun, kamu tetap bisa menemukan jalan keluar dengan penuh kebijaksanaan.

Lebih dari itu, aku berdoa agar pintu-pintu rezeki dan peluang terbuka lebar di hadapanmu sepanjang tahun ini. Semoga apa yang kamu kerjakan membuahkan hasil yang manis, dan setiap keringat yang jatuh dibalas dengan keberhasilan yang melampaui ekspektasimu. Jangan pernah ragu untuk mengambil kesempatan baru, karena aku sangat percaya bahwa kemampuan yang kamu miliki jauh lebih besar daripada rasa takut yang mungkin sesekali muncul di benakmu.

Di sisi lain, aku berharap hatimu selalu dipenuhi oleh kedamaian yang tak tergoyahkan oleh hiruk-pikuk dunia. Semoga kamu dikelilingi oleh orang-orang yang tulus mencintaimu, yang selalu ada untuk memelukmu saat kamu jatuh dan menjadi orang pertama yang bertepuk tangan saat kamu berhasil. Semoga lingkunganmu menjadi tempat yang aman bagimu untuk terus bertumbuh menjadi versi terbaik dari dirimu sendiri tanpa harus merasa terhakimi.

Jangan pernah lupa untuk menyisihkan waktu bagi dirimu sendiri di tengah kesibukanmu mengejar ambisi. Nikmatilah hal-hal kecil yang membuatmu tersenyum, baik itu secangkir kopi di pagi hari, hobi yang sempat tertunda, atau sekadar waktu tenang untuk bernapas lega. Kamu berhak mendapatkan semua kebahagiaan di dunia ini, dan aku berharap tahun ini memberikanmu lebih banyak alasan untuk tertawa bahagia setiap harinya.

Sebagai penutup, ketahuilah bahwa aku akan selalu menjadi salah satu pendukung setiamu yang tidak akan pernah pergi. Di tahun-tahun mendatang, aku berharap bisa terus menyaksikan pertumbuhanmu, merayakan setiap pencapaianmu, dan menemani hari-harimu baik dalam suka maupun duka. Selamat ulang tahun, panjang umur, dan semoga semua doa yang kamu langitkan hari ini segera dikabulkan dengan cara yang paling indah. 🤍
`;

openBtn.onclick = () => {
  modal1.classList.remove('hidden');
  music.play();
  typeWriter(message);
};

function typeWriter(text) {
  let i = 0;
  typingText.innerHTML = '';
  replyBtn.classList.add('hidden');

  const interval = setInterval(() => {
    typingText.innerHTML += text.charAt(i);
    typingText.scrollTop = typingText.scrollHeight;
    i++;

    if (i >= text.length) {
      clearInterval(interval);
      replyBtn.classList.remove('hidden');
    }
  }, 40);
}

replyBtn.onclick = () => {
  modal1.classList.add('hidden');
  modal2.classList.remove('hidden');
};

sendBtn.onclick = () => {
  const msg = replyText.value.trim();
  if (!msg) {
    alert('Silakan isi pesan terlebih dahulu');
    return;
  }

  const phone = '6283867510865';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
};
