let chkBoxToggle = document.querySelector("#toggle");
let anonText = document.querySelector(".anon-option");
let cdname = document.querySelector("#codename");
let em = document.querySelector("#email");
let crs = document.querySelector("#course");
let msg = document.querySelector("#message");

chkBoxToggle.addEventListener("change", () => {
  if (chkBoxToggle.checked) {
    anonText.style.color = "#d5a106";
    // em.style.display = "none";
    em.disabled = true;
    em.value = "";
  } else {
    anonText.style.color = "white";
    em.style.display = "";
    em.disabled = false;
  }
});

// EMAIL

const sendEmail = () => {
  if (cdname.value != "" && crs.value != "" && msg.value != "") {
    let userInfo = {
      from_name: em.value + " codename: " + cdname.value,
      course_block: crs.value,
      message: msg.value,
    };
    // alert("Please Wait...");
    emailjs
      .send("service_mf97w4n", "template_n003jf8", userInfo)
      .then((res) => {
        alert("message sent", res.status);
        window.location.href = "../../index.html";
      });
  } else {
    alert("Please enter something");
  }
};
