//  FOR CROSS button
let closebtn  = document.getElementById("cross");
closebtn.addEventListener("click", function() {
    console.log('fine')
        // Find the button by its attributes
        var closeButton = document.querySelector(".btn[data-bs-dismiss='modal']");
        console.log(closeButton)

        // Find the form by its id
        var myForm = document.getElementById("myForm");

        // Add a click event listener to the button
        closeButton.addEventListener("click", function() {
            // Hide the form
            myForm.style.display = "none";
        });
    });
