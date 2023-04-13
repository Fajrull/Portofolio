import AOS from "aos";

const Skills = {
  async render() {
    return `
    <section id="skills" data-aos="fade-up">
    <div class="container mt-5">
      <div class="row col-11">
        <div class="offset-1">
        <h1 class="m-3">Project</h1>

        <div class="row gap-5 mt-5 mb-5">
        <div class="col-lg-5" data-aos="fade-up">
      <div class="card box">
        <img src="./project/growth.png" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title mb-3">Growth Familie</h5>
          <h6 class="card-subtitle mb-3 text-muted">Dicoding</h6>
          <p class="card-text mb-5">Growth Familie merupakan aplikasi berbasis web yang mengusung tema <i>Solusi Keluarga dan Parenting</i>, project ini merupakan tugas Capstone atau tugas akhir dari kegiatan SIB Dicoding. Project ini dibangun dalam bentuk tim yang beranggotakan 4 orang. Mendukung PWA dan menggunakan API mandiri untuk mengelola kontennya.</p>
          <a href="https://github.com/Growth-Familie/GrowthFamilie-final" class="btn position-absolute top-100 start-50 translate-middle skill">Repository</a>
          </div>
      </div>
      </div>

      <div class="col-lg-5" data-aos="fade-up">
      <div class="card box">
        <img src="./project/restaurant.png" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title mb-3">Esszimmer</h5>
          <h6 class="card-subtitle mb-3 text-muted">Dicoding</h6>
          <p class="card-text mb-5">Esszimmer merupakan web app katalog restoran dengan experience dan fungsionalitas yang baik ketika diakses pada perangkat mobile. Aplikasi web ini dibangun sebagai syarat kelulusan kelas Menjadi Front-End Web Developer Expert.</p>
          <a href="https://github.com/Fajrull/Restaurant" class="btn position-absolute top-100 start-50 translate-middle skill">Repository</a>
          </div>
      </div>
      </div>

      <div class="col-lg-5" data-aos="fade-up">
      <div class="card box">
        <img src="./project/bookshelf.png" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title mb-3">Bookshelf Apps</h5>
          <h6 class="card-subtitle mb-3 text-muted">Dicoding</h6>
          <p class="card-text mb-3">Bookshelf merupakan website yang menerapkan teknik manipulasi DOM dan web storage. Aplikasi web ini dibangun sebagai syarat kelulusan kelas Belajar Membuat Front-End Web untuk Pemula. <br> <br> <br></p>
          <a href="https://github.com/Fajrull/Book-shelf" class="btn position-absolute top-100 start-50 translate-middle skill">Repository</a>
          </div>
      </div>
      </div>

      <div class="col-lg-5" data-aos="fade-up">
      <div class="card box">
        <img src="./project/meal.png" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title mb-3">The Meal</h5>
          <h6 class="card-subtitle mb-3 text-muted">Dicoding</h6>
          <p class="card-text mb-5">The Meal merupakan aplikasi web dengan memanfaatkan materi, seperti JavaScript ES6, Web Component, Webpack sebagai module bundler, dan menampilkan data dari REST API. Aplikasi web ini dibangun sebagai syarat kelulusan kelas Belajar Fundamental Front-End Web Development</p>
          <a href="https://github.com/Fajrull" class="btn position-absolute top-100 start-50 translate-middle skill">Repository</a>
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
