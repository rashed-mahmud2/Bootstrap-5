/*
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "change",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();

const submitBtn = document.querySelector("#formId");

submitBtn.addEventListener("click", (e) => {
  const forms = document.querySelectorAll(".needs-validation");

  forms.forEach((form) => {
    form.value = "";
  });
});



// JavaScript for Bootstrap validation and form reset
(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent actual form submission
      event.stopPropagation();

      if (form.checkValidity()) {
        // ✅ Form is valid – reset all fields
        form.querySelectorAll("input, select, textarea").forEach((field) => {
          if (field.type === "checkbox" || field.type === "radio") {
            field.checked = false;
          } else {
            field.value = "";
          }
        });

        form.classList.remove("was-validated"); // Optional: remove validation styles
        alert("Form submitted and cleared!"); // Optional: for feedback
      } else {
        // ❌ Form is invalid – just show Bootstrap's feedback
        form.classList.add("was-validated");
      }
    });
  });
})();


*/

(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");

  Array.from(forms).forEach((form) => {
    // Real-time validation on change
    form.querySelectorAll("input, select, textarea").forEach((field) => {
      field.addEventListener("change", () => {
        form.classList.add("was-validated"); // Show Bootstrap validation feedback
      });
    });

    // Handle submit event
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      event.stopPropagation();

      if (form.checkValidity()) {
        // ✅ Valid — reset form fields
        form.querySelectorAll("input, select, textarea").forEach((field) => {
          if (field.type === "checkbox" || field.type === "radio") {
            field.checked = false;
          } else {
            field.value = "";
          }
        });

        form.classList.remove("was-validated"); // Optional: reset validation UI
        alert("Form submitted and cleared!");
      } else {
        // ❌ Invalid — show validation messages
        form.classList.add("was-validated");
      }
    });
  });
})();
