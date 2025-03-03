//your code here
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("newton-modal");
    const openModal = document.getElementById("open-modal");
    const closeModal = document.getElementById("close-modal");
    const closeSpan = document.querySelector(".close");

    // Open Modal
    openModal.addEventListener("click", function() {
        modal.style.display = "flex";
    });

    // Close Modal on button click
    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close Modal on clicking 'X'
    closeSpan.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Close Modal if clicked outside content area
    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
