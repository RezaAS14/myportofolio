var typeData = new Typed(".role", {
    strings: [
      "Blogger",
      "Front-End Dev",
      "Back-End Dev",
      "Junior Pentester",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });
  
  function nav_expand() {
    document.querySelector(".nav_link").classList.toggle("expand");
  };
  function nav_close() {
    document.querySelector(".nav_link").classList.close("expand");
  };
  
  function contact() {
    window.location.href = "https://wa.me/6282273197018";
  };
  
  
  const form = document.querySelector(".main-contact-form");
  const fullName = document.getElementById("input-name");
  const email = document.getElementById("input-email");
  const phone = document.getElementById("input-phone");
  const subject = document.getElementById("input-subject");
  const mess = document.getElementById("input-message");
  
  function sendEmail() {
    const bodyMessage = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f9f9f9;">
      <div style="background-color: #ffffff; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
        <div style="background-color: #007bff; color: #ffffff; border-radius: 10px 10px 0 0; padding: 20px;">
          <h2 style="margin: 0;">Contact Form Submission</h2>
        </div>
        <div style="padding: 20px;">
          <p style="margin-bottom: 10px;"><strong>Name:</strong> ${fullName.value}</p>
          <p style="margin-bottom: 10px;"><strong>Email:</strong> ${email.value}</p>
          <p style="margin-bottom: 10px;"><strong>Nomor Hp:</strong> ${phone.value}</p>
          <p style="margin-bottom: 10px;"><strong>Pesan:</strong> ${mess.value}</p>
        </div>
        <div style="background-color: #007bff; color: #ffffff; border-radius: 0 0 10px 10px; padding: 10px;">
        <span style="margin: 0;">&copy;Ahmad Reza Aulia Siregar</span>
      </div>
      </div>
    </div>
  `;
  
    Email.send({
      SecureToken : "f30bd810-90ca-4533-abfd-eefc6afbacaf",
      Host: "smtp.elasticemail.com",
      Username: "ahmadrezaauliasiregar@gmail.com",
      Password: "D4008A897D300253CD55C0CC6571E1EAF883",
      To: 'ahmadrezaauliasiregar@gmail.com',
      From: "ahmadrezaauliasiregar@gmail.com",
      Subject: subject.value,
      Body: bodyMessage
    }).then(
      message => {
        if (message == "OK") {
          Swal.fire({
            title: "Success!",
            text: "Message sent successfully!",
            icon: "success"
          });
          form.reset();
        }
        else{
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="https://wa.me/6282273197018">Why do I have this issue?</a>'
          });
        }
      }
    );
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    sendEmail();
  });
  
  
  document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
      document.title = "Reza | Portofolio";
    } else {
      document.title = "Please Come Back! 😔";
    }
  });
  
  document.addEventListener('DOMContentLoaded', function () {
  /* ===== SCROLL REVEAL ANIMATION ===== */
  const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 1000,
    reset: true,
  });
  
  /* SCROLL HOME */
  sr.reveal(".main-content .main-content-text-text h1", { delay: 500 });
  sr.reveal(".main-content button", { delay: 800 });
  sr.reveal(".main-content .main-content-text-social", { delay: 700 });
  sr.reveal(".main-content-image ", { delay: 400 });
  sr.reveal(".main-content-text-social", { interval: 800 });
  
  /* SCROLL ABOUT */
  sr.reveal(".main-about-inner", { delay: 300 });
  sr.reveal(".about .content h3", { delay: 300 });
  sr.reveal(".about .content .tag", { delay: 400 });
  sr.reveal(".about .content p", { delay: 300 });
  sr.reveal(".about .content .box-container", { delay: 300 });
  sr.reveal(".about .content .resumebtn", { delay: 300 });
  
  /* SCROLL SKILLS */
  sr.reveal(".main-skill-inner", { delay: 300 });
  /* SCROLL EXPERIENCE */
  sr.reveal(".main-project", { delay: 400 });
  sr.reveal(".main-project-div", { delay: 600 });
  /* SCROLL CONTACT */
  sr.reveal(".main-contact h2", { delay: 400 });
  sr.reveal(".contact form", { delay: 400 });
  sr.reveal(".contact form input, .input-div i", { delay: 500 });
  sr.reveal(".contact form textarea", { delay: 500 });
  
  
  });
  
  VanillaTilt.init(document.querySelector(".main-content-image"), {
    max: 10,
    speed: 200,
    glare: false,
    "max-glare": 0.5,
  });
  
          document.addEventListener("contextmenu", function(event) {
              event.preventDefault();
          });
  
          document.addEventListener("selectstart", function(event) {
              event.preventDefault();
          });
  
          document.addEventListener("dragstart", function(event) {
              if (event.target.tagName.toLowerCase() === "img") {
                  event.preventDefault();
              }
          });
  
          document.addEventListener("keydown", function(event) {
              if (event.ctrlKey || event.metaKey) {
                  event.preventDefault();
              }
          });
  
          if (top !== self) {
              top.location.replace(self.location.href);
          }