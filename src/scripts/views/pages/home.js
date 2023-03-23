/* eslint-disable no-unused-vars */
import Typed from "typed.js";

const Home = {
  async render() {
    return `
    <!-- Hero Section -->
    <section id="hero">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-5 offset-lg-1 my-5 align-self-end text-wrap content">
            <h1>Muhammad Fajrul Khaq</h1>
            <h3 class="mt-3"><span id="element"></span></h3>
            <p class="mt-3">Hi everyone <span class="wave">👋🏼</span>, welcome to my portfolio website</p>
          </div>
          <div class="col-md-6 col-lg-5 d-flex justify-content-center">
            <img src="./fajrul_illustration.png" class="logo img-fluid">
          </div>
        </div>
      </div>
    </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const typed = new Typed("#element", {
      strings: [
        "Junior Front-End Developer",
        "Informatics Engineering Student",
        "Gamers",
      ],
      typeSpeed: 80,
      backSpeed: 80,
      loop: true,
    });
  },
};

export default Home;
