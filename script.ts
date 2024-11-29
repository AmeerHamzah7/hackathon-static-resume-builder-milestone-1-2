const hideButton = document.querySelector('.hbtn') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;


    hideButton.addEventListener('click', () => {
        if (skillsSection.style.display === 'none') {
            // Skills section ko dikhana
            skillsSection.style.display = 'block';
            hideButton.textContent = 'Hide Skills';
        } else {
            // Skills section ko hide karna
            skillsSection.style.display = 'none';
            hideButton.textContent = 'Show Skills';
        }
    });