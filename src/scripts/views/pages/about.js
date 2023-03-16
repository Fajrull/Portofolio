const About = {
  async render() {
    return `
    <!-- About -->
    <section id="about">
      <div class="container">
        <div class="row py-5">
          <h1 class="text-center">About Us</h1>
          <div class="col-lg-6 py-5 align-self-end d-flex justify-content-center profil">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ab vel nihil? Libero, cumque distinctio. Fugiat animi praesentium recusandae nemo ratione maxime? Reprehenderit quo ipsam consequuntur expedita. Enim, fuga nemo!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ab vel nihil? Libero, cumque distinctio. Fugiat animi praesentium recusandae nemo ratione maxime? Reprehenderit quo ipsam consequuntur expedita. Enim, fuga nemo!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate ab vel nihil? Libero, cumque distinctio. Fugiat animi praesentium recusandae nemo ratione maxime? Reprehenderit quo ipsam consequuntur expedita. Enim, fuga nemo!</p>
          </div>
          <div class="col-lg-6 d-flex justify-content-center">
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
