const contentData = {
    students: {
        title: "Solution for Students & Researchers",
        description: "Turn textbooks, research papers, and lecture notes into engaging audio content.",
        image: "img/profile (2).jpg"
    },
    business: {
        title: "Solution for Business Professionals",
        description: "Convert reports, emails, and documents into audio to stay informed on the move.",
        image: "img/profile (2).jpg"
    },
    lawyers: {
        title: "Solution for Lawyers & Legal Experts",
        description: "Listen to case files, contracts, and legal documents for efficient review.",
        image: "img/profile (2).jpg"
    },
    medical: {
        title: "Solution for Medical Professionals",
        description: "Transform medical journals, studies, and patient notes into audio for easy access.",
        image: "img/profile (2).jpg"
    }
};

// Get references to elements
const roleContainer = document.getElementById("roleContainer");
const roleButtons = document.querySelectorAll(".role-btn");
const roleTitle = document.getElementById("roleTitle");
const roleDescription = document.getElementById("roleDescription");
const roleImage = document.getElementById("roleImage");

let currentIndex = 0; // Track current role index
const roles = Object.keys(contentData); // Get role keys

// Function to change content
function changeContent(role, btn = null) {
    // Update text and image
    roleTitle.innerText = contentData[role].title;
    roleDescription.innerText = contentData[role].description;
    roleImage.src = contentData[role].image;

    // Update active button
    roleButtons.forEach(button => button.classList.remove("active"));
    if (btn) btn.classList.add("active");

    // Update index
    currentIndex = roles.indexOf(role);

    // Auto-scroll to the selected role
    const button = document.querySelector(`[onclick="changeContent('${role}', this)"]`);
    if (button) {
        button.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
}

// Function to move left
function scrollLeft() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = roles.length - 1; // Loop back to last role
    }
    changeContent(roles[currentIndex], roleButtons[currentIndex]);
}

// Function to move right
function scrollRight() {
    if (currentIndex < roles.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Loop back to first role
    }
    changeContent(roles[currentIndex], roleButtons[currentIndex]);
}
