import AOS from "aos";

const Skills = {
  async render() {
    return `
    <section id="skills" data-aos="fade-up">
    <div class="container mt-5">
      <div class="row col-11">
        <div class="offset-1">
        <h1 class="m-3">Skills</h1>
        <a href="#/skills" class="btn skill m-2">Language</a>
        <a href="#/certifications" class="btn skill m-2">Certifications</a>

        <div class="row gap-5 mt-5 mb-5">
        <div class="col-lg-5" data-aos="fade-up">
      <div class="card box">
        <img src="./serti/best-capstone.jpg" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title mb-3">Best Capstone Project</h5>
          <h6 class="card-subtitle mb-3 text-muted">Dicoding</h6>
          <p class="card-text mb-2">Terpilih sebagai Capstone Project Terbaik dengan judul proyek "Growth Familie" pada Program SIB Dicoding X Kampus Merdeka Angkatan 3</p>
          </div>
      </div>
      </div>

      <div class="col-lg-5" data-aos="fade-up">
      <div class="card box">
        <img src="./serti/kelulusan.jpg" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title mb-3">Sertifikat Kelulusan SIB Batch 3</h5>
          <h6 class="card-subtitle mb-3 text-muted">Dicoding</h6>
          <p class="card-text mb-2">Telah berhasil menyelesaikan Pelatihan Front-End Web dan Back-End pada Program SIB Dicoding X Kampus Merdeka Angkatan 3</p>
          </div>
      </div>
      </div>

      <div class="col-lg-5" data-aos="fade-up">
      <div class="card box">
        <img src="./serti/fe-dasar.jpg" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title mb-3">Belajar Dasar Pemograman Web</h5>
          <h6 class="card-subtitle mb-3 text-muted">Dicoding</h6>
          <p class="card-text mb-5">Telah berhasil membuat halaman website menggunakan teknik semantic HTML dan layouting</p>
          <a href="https://www.dicoding.com/certificates/JMZVGL7NRZN9" class="btn position-absolute top-100 start-50 translate-middle skill">Lihat Detail Sertifikasi</a>
          </div>
      </div>
      </div>

      <div class="col-lg-5" data-aos="fade-up">
      <div class="card box">
        <img src="./serti/fe-pemula.jpg" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title mb-3">Belajar Membuat Front-End Web untuk Pemula</h5>
          <h6 class="card-subtitle mb-3 text-muted">Dicoding</h6>
          <p class="card-text mb-5">Telah berhasil membuat sebuah website yang menerapkan teknik manipulasi DOM dan web storage</p>
          <a href="https://www.dicoding.com/certificates/1OP86KYW2XQK" class="btn position-absolute top-100 start-50 translate-middle skill">Lihat Detail Sertifikasi</a>
          </div>
      </div>
      </div>

      <div class="col-lg-5" data-aos="fade-up">
      <div class="card box">
        <img src="./serti/fe-fundamental.jpg" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title mb-3">Belajar Fundamental Front-End Web Developer</h5>
          <h6 class="card-subtitle mb-3 text-muted">Dicoding</h6>
          <p class="card-text mb-5">Telah berhasil Membangun aplikasi web dengan JavaScript ES6, Web Component, Webpack sebagai module bundler, dan menampilkan data dari REST API.</p>
          <a href="https://www.dicoding.com/certificates/6RPNDLYLRZ2M" class="btn position-absolute top-100 start-50 translate-middle skill">Lihat Detail Sertifikasi</a>
          </div>
      </div>
      </div>

      <div class="col-lg-5" data-aos="fade-up">
      <div class="card box">
        <img src="./serti/fe-expert.jpg" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title mb-3">Menjadi Front-End Web Developer Expert</h5>
          <h6 class="card-subtitle mb-3 text-muted">Dicoding</h6>
          <p class="card-text mb-5">Telah berhasil menyelesaikan Proyek akhir berupa web app katalog restoran dengan experience dan fungsionalitas yang baik ketika diakses pada perangkat mobile</p>
          <a href="https://www.dicoding.com/certificates/07Z6GG1RRXQR" class="btn position-absolute top-100 start-50 translate-middle skill">Lihat Detail Sertifikasi</a>
          </div>
      </div>
      </div>

      <div class="col-lg-5" data-aos="fade-up">
      <div class="card box">
        <img src="./serti/dasar-js.jpg" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title mb-3">Belajar Dasar Pemograman Javascript</h5>
          <h6 class="card-subtitle mb-3 text-muted">Dicoding</h6>
          <p class="card-text mb-5">Telah berhasil lulus di ujian akhir dengan materi dasar JavaScript, dari fundamental, sintaks dan fitur ES6, hingga konsep automation test.Untuk pengembangan aplikasi web menggunakan Node.Js</p>
          <a href="https://www.dicoding.com/certificates/EYX497WV6PDL" class="btn position-absolute top-100 start-50 translate-middle skill">Lihat Detail Sertifikasi</a>
          </div>
      </div>
      </div>

      <div class="col-lg-5" data-aos="fade-up">
      <div class="card box">
        <img src="./serti/backend.jpg" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title mb-3">Membuat Aplikasi Back-End Untuk Pemula</h5>
          <h6 class="card-subtitle mb-3 text-muted">Dicoding</h6>
          <p class="card-text mb-5">Telah berhasil menyelesaikan Proyek akhir berupa praktik siswa berbentuk Bookshelf API berupa membuat Back-End dari aplikasi catatan yang memiliki fungsi Create, Read, Update, dan Delete. </p>
          <a href="https://www.dicoding.com/certificates/81P283NNJPOY" class="btn position-absolute top-100 start-50 translate-middle skill">Lihat Detail Sertifikasi</a>
          </div>
      </div>
      </div>

      <div class="col-lg-5" data-aos="fade-up">
      <div class="card box">
        <img src="./serti/github.jpg" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title mb-3">Belajar Dasar Git dengan Github</h5>
          <h6 class="card-subtitle mb-3 text-muted">Dicoding</h6>
          <p class="card-text mb-5">Telah berhasil lulus di ujian akhir dengan materi cara mengelola data atau kode menggunakan Git dengan GitHub, mulai dari dasar-dasar Git hingga berkolaborasi dengan tim.</p>
          <a href="https://www.dicoding.com/certificates/1OP86MJELXQK" class="btn position-absolute top-100 start-50 translate-middle skill">Lihat Detail Sertifikasi</a>
          </div>
      </div>
      </div>

      <div class="col-lg-5" data-aos="fade-up">
      <div class="card box">
        <img src="./serti/logika.jpg" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title mb-3">Pengenalan ke Logika Pemrograman</h5>
          <h6 class="card-subtitle mb-3 text-muted">Dicoding</h6>
          <p class="card-text mb-5">Telah berhasil lulus di ujian akhir dengan materi logika-logika dasar dalam pemrograman dimulai dari jenis-jenis logika pemrograman, gerbang logika, hingga computational thinking.</p>
          <a href="https://www.dicoding.com/certificates/NVP7K3GD4ZR0" class="btn position-absolute top-100 start-50 translate-middle skill">Lihat Detail Sertifikasi</a>
          </div>
      </div>
      </div>

      <div class="col-lg-5" data-aos="fade-up">
      <div class="card box">
        <img src="./serti/dasar-software.jpg" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title mb-3">Memulai Dasar Pemrograman untuk Menjadi Pengembang Software</h5>
          <h6 class="card-subtitle mb-3 text-muted">Dicoding</h6>
          <p class="card-text mb-5">Mempelajari materi langkah menjadi pengembang software dari tahapan analisis dan perencanaan sampai modifikasi perangkat lunak beserta dokumentasi.</p>
          <a href="https://www.dicoding.com/certificates/ERZRMDWKNPYV" class="btn position-absolute top-100 start-50 translate-middle skill">Lihat Detail Sertifikasi</a>
          </div>
      </div>
      </div>

      <div class="col-lg-5" data-aos="fade-up">
      <div class="card box">
        <img src="./serti/software-dev.jpg" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title mb-3">Meniti Karier sebagai Software Developer</h5>
          <h6 class="card-subtitle mb-3 text-muted">Dicoding</h6>
          <p class="card-text mb-5">Mempelajari materi berbagai jalur yang tersedia sebagai Software Developer dari sudut pandang developer ahli yang sudah meniti karier di bidangnya dengan mengacu pada standar kompetensi industri. </p>
          <a href="https://www.dicoding.com/certificates/JMZVNGGNQPN9" class="btn position-absolute top-100 start-50 translate-middle skill">Lihat Detail Sertifikasi</a>
          </div>
      </div>
      </div>


      </div>
      </div>
      </div>
    </section>

   
          `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()

    AOS.init();
  },
};

export default Skills;
