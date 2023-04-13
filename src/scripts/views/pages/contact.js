import AOS from "aos";

const Skills = {
  async render() {
    return `
    <section id="contact" data-aos="zoom-in-down">
    <div class="container">
      <div class="offset-1 me-3">
        <h1 class="mb-3 mt-5">Contact</h1>
        <p>
          Please don’t hesitate to get in touch with me by following my
          social media below:
        </p>
        <ul>
          <li>
            <div>
              Github -
              <a href="https://github.com/Fajrull"> Fajrull</a>
            </div>
          </li>
          <li>
          <div>
            Telegram -
            <a href="https://t.me/muhammadfajrulkhaq">Muhammad Fajrul Khaq</a>
          </div>
        </li>
          <li>
            <div>
              Instagram -
              <a href="mailto:fajrulm05@gmail.com"> Muhammadfajrull_</a>
            </div>
          </li>
          <li>
            <div>
              Facebook -
              <a href="https://www.facebook.com/muhammad.fajrul.146/">
                Muhammad Fajrul Khaq</a
              >
            </div>
          </li>
          <li>
            <div>
              LinkedIn -
              <a
                href="https://www.linkedin.com/in/muhammad-fajrul-khaq-60795b221/"
              >
                Muhammad Fajrul Khaq</a
              >
            </div>
          </li>
        </ul>
        <div class="row mt-3">
        <div class="col">
          <h1>Message</h1>
        </div>
      </div>
        <div class="col-xl-12">
        <div class="alert alert-success alert-dismissible fade show col-lg-10 d-none" role="alert">
         <strong>Terimakasih!</strong> Pesan anda sudah kami terima.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
          <form name="portofolio-contact-form" class="row">
            <div class="mt-3 col-6 col-lg-5">
              <label for="name" class="form-label">Full Name *</label>
              <input type="text" class="form-control bg-body-tertiary" id="name" placeholder="Your name" aria-describedby="name" name="nama" />
            </div>
            <div class="mt-3 col-6 col-lg-5">
              <label for="email" class="form-label">Email *</label>
              <input type="email" class="form-control bg-body-tertiary" id="email" placeholder="Your Email" aria-describedby="email" name="email" />
            </div>
            <div class="mt-3 col-12 col-lg-10">
              <label for="pesan" class="form-label">Message *</label>
              <textarea class="form-control bg-body-tertiary" id="pesan" placeholder="Your message" rows="3" name="pesan"></textarea>
            </div>
            <div>
            <button type="submit" class="btn btn-kirim skill mt-3 bi bi-send mb-3">&ensp;Send</button>

            <button class="btn btn-loading skill d-none mt-3 mb-3" type="button">
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            Loading...
            </button>
            </div>
          </form>
        </div>
      </div>
  </div>
  </section>

          `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbzRDCgcRDBZ9xZrvR6Jk-OPGU2BnobkOf1R8s2PM_EkjA0SC9YMHzfdALi-qaG0Xe2U/exec";
    const form = document.forms["portofolio-contact-form"];
    const btnKirim = document.querySelector(".btn-kirim");
    const btnLoading = document.querySelector(".btn-loading");
    const myAlert = document.querySelector(".alert");

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // Ketika tombol submit diklik
      // tampilkan tombol loading, hilangkan tombol kirim
      btnLoading.classList.toggle("d-none");
      btnKirim.classList.toggle("d-none");
      fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
          // tampilkan tombol Kirim, hilangkan tombol Loading
          btnLoading.classList.toggle("d-none");
          btnKirim.classList.toggle("d-none");
          // tampilkan alert
          myAlert.classList.toggle("d-none");
          // reset formnya
          form.reset();
          console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
    });

    AOS.init();
  },
};

export default Skills;
