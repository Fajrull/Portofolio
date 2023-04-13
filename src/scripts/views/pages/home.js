/* eslint-disable no-unused-vars */
import Typed from "typed.js";
import AOS from "aos";

const Home = {
  async render() {
    return `
    <!-- Hero Section -->
    <section id="hero" data-aos="zoom-in-down">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-5 offset-lg-1 my-5 align-self-end content">
            <h1>Muhammad Fajrul Khaq</h1>
            <h3><span id="element"></span></h3>
            <p class="mt-3" style="font-size:18px;">Hi everyone <span class="wave">👋🏼</span>, welcome to my portfolio website</p>
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

    AOS.init();

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
