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





//NewContactFormWithValidation
// Write your code here
// Get all the necessary DOM elements
const form = document.getElementById('exampleForm')
const submitButton = document.querySelector('.submit')
const successMessage = document.getElementById('form-submitted-msg')


// Store all form elements in an array by spreading the elements property of the form
const formElements = [ ...form.elements ]


// Create function to check if all form elements are valid
const allInputsValid = () => {
  const valid = formElements.every((element) => {
    if (element.nodeName === 'SELECT') {
      return element.value !== 'Please select an option'
    } else {
      return element.checkValidity()
    }
  })
  
  return valid
}


// Define a function to handle changes to any form element
const handleChange = () => {
  // Use the forEach() function to execute the provided function once for each element in the formElements array
  formElements.forEach((element) => {
    // If the element is invalid and is not a button, a select dropdown, a checkbox, or a radio button, style it with a red border and red text
    if (!element.checkValidity()
          && element.nodeName !== 'BUTTON'
          && element.nodeName !== 'SELECT'  
          // && element.type !== 'checkbox'
          // && element.type !== 'radio'
    ) {
      element.style.borderColor = 'red'
      element.nextElementSibling.style.color = 'red'
      element.nextElementSibling.style.display = 'block'
      element.previousElementSibling.style.color = 'red'
    }

    // If the element is valid, reset its style to the original colors
    // The conditions are the same as above for excluding certain elements
    if (element.checkValidity()
          && element.nodeName !== 'BUTTON'
          && element.nodeName !== 'SELECT'
          // && element.type !== 'checkbox'
          // && element.type !== 'radio'
    ) {
      element.style.borderColor = '#CED4DA'
      element.nextElementSibling.style.color = '#CED4DA'
      element.nextElementSibling.style.display = 'none'
      element.previousElementSibling.style.color = '#212529'
    }

    // If the element is a checkbox or a radio button and is invalid, style it with a red border and red text
    // if (!element.checkValidity()
    //       && (element.type === 'checkbox'
    //           || element.type === 'radio')
    // ) {
    //   element.style.borderColor = 'red'
    //   element.nextElementSibling.style.color = 'red'
    // }

    // If the checkbox or radio button is valid, reset its style to the original colors
    // if (element.checkValidity()
    //       && (element.type === 'checkbox'
    //           || element.type === 'radio')
    // ) {
    //   element.style.borderColor = '#CED4DA'
    //   element.nextElementSibling.style.color = '#212529'
    // }

    // If the element is a select dropdown and the default option is selected, style it with a red border and red text
    if (element.nodeName === 'SELECT'
          && element.value === 'Please select an option'
    ) {
      element.style.borderColor = 'red'
      element.nextElementSibling.style.color = 'red'
      element.nextElementSibling.style.display = 'block'
      element.previousElementSibling.style.color = 'red'
    }

    
    // If an option other than the default is selected in the dropdown, reset its style to the original colors
    if (element.nodeName === 'SELECT'
          && element.value !== 'Please select an option'
    ) {
      element.style.borderColor = '#CED4DA'
      element.nextElementSibling.style.color = '#CED4DA'
      element.nextElementSibling.style.display = 'none'
      element.previousElementSibling.style.color = '#212529'
    }
  })

  
  
  // If all form elements are valid, enable the submit button; otherwise, disable it
  if (allInputsValid()) {
    submitButton.removeAttribute('disabled', '')
  } else {
    submitButton.setAttribute('disabled', '')
  }
}



// Define a function to handle form submission
const handleSubmit = (e) => {
  // Prevent the default form submission behavior
  e.preventDefault()

  
  // If all form elements are valid after the form submission, display a success message, reset the form, and disable the submit button
  if (allInputsValid()) {
    successMessage.style.display = 'block'
    form.reset()
    submitButton.setAttribute('disabled', '')

    
    // Hide the success message after 3 seconds
    setTimeout(() => {
      successMessage.style.display = 'none'
    }, 3000)
  }
}


// Add event listener to each form element
formElements.forEach((element) => {
  element.addEventListener('change', handleChange)
})

// Add submit listener to the form
form.addEventListener('submit', (e) => handleSubmit(e))




//googleMap

function initMap() {
            
  const coordinates = { lat: 51.125690, lng: -114.248817 };
 
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: coordinates,
  });
 
const marker = new google.maps.Marker({
     position: coordinates,
     map: map,
 });

 const circle = new google.maps.Circle({
          strokeColor: "blue",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FFF",
          fillOpacity: 0.5,
          map,
          center: coordinates,
          radius: 600,
  });

  window.initMap = initMap;


  let geocoder;
 
  function initMap() {
      geocoder = new google.maps.Geocoder();
      const coordinates = { lat: 51.125690, lng: -114.248817 };

      map = new google.maps.Map(document.getElementById("map"), {
          zoom: 13,
          center: coordinates,
      });
      
  }




  function getCoordinates() {
    let address = document.getElementById('address').value;
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == 'OK') {
            map.setCenter(results[0].geometry.location);
            let marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
  }

}







// function sendEmail(){
//   Email.send({
//       Host : "smtp.elasticemail.com",
//       Username : "k.hardeep@gmail.com",
//       Password : "2EDA86E72C55BD8F68D1BAD88AAE35D6BB6C",
//       To : 'k.hardeep@gmail.com',
//       From : document.getElementById("email").value,
//       Subject : "New Contact Form Enquiry",
//       Body : "Name:" + document.getElementById("name").value
//       + "<br> Email:" + document.getElementById("email").value
//       + "<br> Phone no:" + document.getElementById("phone").value
//       + "<br> Message: " + document.getElementById("message").value
//   }).then(
//     message => alert("Message sent successfully!"));
// }


// function myFunction() {
//   document.getElementById("formSubmit").disabled = true;
// }
