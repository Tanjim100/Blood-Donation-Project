document.addEventListener("DOMContentLoaded", () => {
    const contactButton = document.getElementById("contactButton");

    // Handle contact request button click
    contactButton.addEventListener("click", () => {
        alert("Contact request sent to the donor!");
    });

    // Example of toggling availability (extendable to dynamic data)
    const availability = document.getElementById("availability");
    if (availability.textContent === "Available") {
        availability.classList.add("text-green-600");
    } else {
        availability.classList.add("text-red-600");
        availability.textContent = "Unavailable";
    }

    // Changing profile picture
    const fileInput = document.getElementById("fileInput");
    const changePhotoButton = document.getElementById("changePhotoButton");
    const profileImage = document.getElementById("profileImage");

    // Attach click event to the Change Photo button
    changePhotoButton.addEventListener("click", () => {
        fileInput.click(); // Trigger the hidden file input
    });

    // Listen for file input change
    fileInput.addEventListener("change", (event) => {
        const file = event.target.files[0]; // Get the selected file
        if (file) {
            const reader = new FileReader();

            // Read the file as a Data URL (Base64)
            reader.onload = function (e) {
                profileImage.src = e.target.result; // Set the uploaded image as the profile picture
            };

            reader.readAsDataURL(file); // Initiate reading of the file
        }
    });

    // JavaScript for Circular Progress Bar
    const progressBar = document.querySelector(".progress-bar");
    const percentageText = document.getElementById("percentage");
    const responseRatioText = document.getElementById("responseRatioText");
    const responseRatio = 80; // Example response ratio (adjust as needed)

    // Calculate circle properties
    const radius = progressBar.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    // Set the strokeDasharray and initial offset
    progressBar.style.strokeDasharray = `${circumference}`;
    const offset = circumference - (responseRatio / 100) * circumference;
    progressBar.style.strokeDashoffset = offset;

    // Update the percentage text
    percentageText.textContent = `${responseRatio}%`;
    responseRatioText.textContent = `${responseRatio}%`;
});
