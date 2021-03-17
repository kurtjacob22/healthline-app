let chkBoxToggle = document.querySelector("#toggle");
let anonText = document.querySelector(".anon-option");
let cdname = document.querySelector("#codename");
let em = document.querySelector("#email");
let crs = document.querySelector("#course");
let msg = document.querySelector("#message");
let codename, email, course, message;

chkBoxToggle.addEventListener("change", () => {
  if (chkBoxToggle.checked) {
    anonText.style.color = "#d5a106";
    em.style.display = "none";
  } else {
    anonText.style.color = "white";
    em.style.display = "";
  }
});

// EMAIL

const sendEmail = () => {
  let userInfo = {
    from_name: em.value + " codename: " + cdname.value,
    course_block: crs.value,
    message: msg.value,
  };

  emailjs.send("service_mf97w4n", "template_n003jf8", userInfo).then((res) => {
    console.log("success", res.status);
  });
};
