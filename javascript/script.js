// let d = new Date();
//       alert("Today's date is " + d);
//       alert("This is my internal file alert message!");




// Fade and slide
const items = document.querySelectorAll('.anim:not(:first-child)');


const options = {
  threshold: 0.5
}


function addSlideIn(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('slide-in');
    } else { // this else part is not compulsory
      entry.target.classList.remove('slide-in');
    }
  });
}


const observer = new IntersectionObserver(addSlideIn, options)


items.forEach(anim => {
  observer.observe(anim);
})




//request quote modal

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

// close modal function
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// open modal function
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// open modal event
openModalBtn.addEventListener("click", openModal);




function sendEmail(){
  Email.send({
      Host : "smtp.elasticemail.com",
      Username : "k.hardeep@gmail.com",
      Password : "2EDA86E72C55BD8F68D1BAD88AAE35D6BB6C",
      To : 'k.hardeep@gmail.com',
      From : document.getElementById("email").value,
      Subject : "New Contact Form Enquiry",
      Body : "Name:" + document.getElementById("name").value
      + "<br> Email:" + document.getElementById("email").value
      + "<br> Phone no:" + document.getElementById("phone").value
      + "<br> Message: " + document.getElementById("message").value
  }).then(
    message => alert("Message sent successfully!"));
}


