import AOS from "aos";

const Skills = {
  async render() {
    return `
    <section id="skills" data-aos="zoom-in-right">
        <div class="container">
          <div class="row col-11">
            <div class="offset-1">
            <h1 class="m-3">Skills</h1>
            <a href="#/skills" class="btn skill m-2">Language</a>
            <a href="#/certifications" class="btn skill m-2">Certifications</a>
          </div>
          
          <div class="row offset-1 gap-5 mt-5">
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-5">
          <img
            src="./tech/html-5-svgrepo-com.svg"
            class="rounded float-start tech bg-body-tertiary img-fluid"
            alt="..."
            title="HTML"
          />
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-5">
          <img
            src="./tech/css3-svgrepo-com.svg"
            class="rounded float-start tech bg-body-tertiary img-fluid"
            alt="..."
            title="CSS"
          />
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-5">
          <img
            src="./tech/javascript-svgrepo-com.svg"
            class="rounded float-start tech bg-body-tertiary img-fluid"
            alt="..."
            title="Javascript"
          />
        </div>
        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5 col-xs-5">
        <img
          src="./tech/bootstrap-svgrepo-com.svg"
          class="rounded float-start tech bg-body-tertiary img-fluid"
          alt="..."
          title="Bootstrap"
        />
      </div>
      <div class="col-xl-3 col-lg-3 col-md-4 col-sm-5 col-xs-5">
        <img
          src="./tech/node-js-svgrepo-com.svg"
          class="rounded float-start tech bg-body-tertiary img-fluid"
          alt="..."
          title="Node.Js"
        />
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
