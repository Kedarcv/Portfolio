// ... existing code

document.addEventListener('DOMContentLoaded', () => {
    const resumeButton = document.getElementById('resume-button');
    if (resumeButton) {
        resumeButton.addEventListener('click', () => {
            const cvUrl = 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID';
            window.open(cvUrl, '_blank');
        });
    }
});

// ... existing code