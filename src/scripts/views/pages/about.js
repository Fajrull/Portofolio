const About = {
  async render() {
    return `
    <!-- About -->
    <section id="about">
      <div class="container">
        <div class="row py-5">
          <h1 class="text-center">About Me</h1>
          <div class="col-lg-5 offset-lg-1 align-self-center d-flex justify-content-center profil my-5">
            <p>Hi everyone, my name is Muhammad Fajrul Khaq . I'm a Front End Web Developer.
            I live in Yogyakarta, Indonesia. I was born in Bantul, 5 Juni 2002. I'm 20 years old. I'm a Informatics Engineering Student</p>
          </div>
          <div class="col-lg-4 d-flex justify-content-center">
            <img src="./fajrul.png" width="500px" class="rounded-circle justify-content-center img-fluid">
          </div>
        </div>
      </div>
    </section>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default About;
