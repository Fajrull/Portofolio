import Typed from "typed.js";
import AOS from "aos";

const About = {
  async render() {
    return `
    <!-- About -->
    <section id="about" data-aos="zoom-in-down">
      <div class="container">
        <div class="row me-5">
          <div class="col-lg-6 offset-1 profil my-5">
          <h1>About Me</h1>
          <h4 class="mt-3 mb-3" style="font-size:32px;"><span id="element"></span></h4>
            <p>Hi everyone , my name is Muhammad Fajrul Khaq. I’am a Junior Front-End Developer, Informatics Engineering.</p>
            <p>I live in Yogyakarta, Indonesia. I was born in Bantul, 05 Juni 2002. I’m 20 years old. I’am Informatics Engineering Student from STMIK Yogyakarta.</p>
            <p>Coding has been my passion and hobby since I was 19 years old, and I love computer since I was a kid. Besides coding, I love listening to music. My favorite genres are Pop Punk. I like playing games too. My favorite game is Mobile Legend.</p>
            <p>Sometimes I watch anime, the anime I like the most is One Piece and Kimetsu No Yaiba.</p>
          </div>
          <div class="col-lg-4 d-flex justify-content-center">
            <img src="./fajrul.png" class="rounded-circle justify-content-center img-fluid" style="height:300px;">
          </div>
          </div>
          <div class="offset-1 mb-5">
            <h1>Resume</h1>
            <div>you can read my resume <a href="./cv/cv.pdf">here.</a>
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
      strings: ["Muhammad Fajrul Khaq"],
      typeSpeed: 80,
    });
  },
};

export default About;
