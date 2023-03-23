const Skills = {
  async render() {
    return `
    <div>
    <div class="title-wrapper py-4 mx-0">
    <h1 class="text-center fw-bold display-4 my-3">Children Articles</h1>

    <div class="container text-center mb-3">
    <button type="button" class="btn btn-dark">Language</button>
    <button type="button" class="btn btn-dark">Light</button>
    </div>
    </div>
        `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Skills;
