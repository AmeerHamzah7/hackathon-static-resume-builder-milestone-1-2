var hideButton = document.querySelector('.hbtn');
var skillsSection = document.getElementById('skills');
// Button pe click event listener lagana
hideButton.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        // Skills section ko dikhana
        skillsSection.style.display = 'block';
        hideButton.textContent = 'Hide Skills';
    }
    else {
        // Skills section ko hide karna
        skillsSection.style.display = 'none';
        hideButton.textContent = 'Show Skills';
    }
});
