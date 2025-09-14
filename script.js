const faqboxes = document.querySelectorAll('.faqbox');

faqboxes.forEach(faqbox => {
    faqbox.addEventListener('click', () => {
        const currentlyActive = faqbox.classList.contains('active');

        // Remove 'active' class from all boxes
        faqboxes.forEach(fb => {
            fb.classList.remove('active');
            fb.querySelector('.icon').classList.remove('active');
            fb.querySelector('.answer').classList.remove('active');
        });

        // If the clicked box wasn't already open, open it
        if (!currentlyActive) {
            faqbox.classList.add('active');
            faqbox.querySelector('.icon').classList.add('active');
            faqbox.querySelector('.answer').classList.add('active');
        }
    });
});