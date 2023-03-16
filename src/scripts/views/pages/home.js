const Home = {
  async render() {
    return `
    <!-- Hero Section -->
    <section id="hero">
      <div class="container">
        <div class="row">
          <div class="col-md-5 offset-1 my-5 align-self-end text-wrap content">
            <h1>Muhammad Fajrul Khaq</h1>
            <h3 class="mt-3">Junior Front-End Developer</h3>
            <p class="mt-3">Hi everyone <span class="wave">👋🏼</span>, welcome to my portfolio <br>website</p>
          </div>
          <div class="col-md-3 d-flex justify-content-center">
            <img src="./fajrul_illustration.png" class="logo img-fluid">
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

export default Home;
