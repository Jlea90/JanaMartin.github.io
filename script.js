document.addEventListener('DOMContentLoaded', function() {
    const labels = document.querySelectorAll('.skills-label');
    const aboutMeSection = document.getElementById('about-me');
    const sections = document.querySelectorAll('.project-detail');
    let currentVisibleSection = null;

    labels.forEach(label => {
        label.addEventListener('click', function() {
            // Toggle the visibility of the related skills list
            const skillsList = document.getElementById(label.htmlFor);
            skillsList.classList.toggle('visible');

            // If the list is visible and it's not the currently shown section
            if (skillsList.classList.contains('visible') && currentVisibleSection !== skillsList) {
                // Hide the "About Me" section and show the corresponding project detail section
                aboutMeSection.style.display = 'none';
                sections.forEach(section => section.classList.remove('visible'));
                currentVisibleSection = skillsList;
                const projectSection = document.getElementById(label.htmlFor + "-project");
                projectSection.classList.add('visible');
            } else {
                // If clicked again, hide the list and show the "About Me" section
                aboutMeSection.style.display = 'block';
                skillsList.classList.remove('visible');
                sections.forEach(section => section.classList.remove('visible'));
                currentVisibleSection = null;
            }
        });
    });
});
