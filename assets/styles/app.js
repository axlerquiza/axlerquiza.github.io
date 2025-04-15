// function certificationLinks() {
//     window.open('https://aws.amazon.com/certification/certified-cloud-practitioner/', '_blank');
//     window.open('https://aws.amazon.com/certification/certified-data-engineer-associate/', '_blank');
// }

// function otherLinks() {
//     window.open('https://h.43z.one/', '_blank');
//     window.open('https://jacobleech.com/', '_blank');
//     window.open('https://humanebydesign.com/', '_blank');
//     window.open('https://thebestmotherfucking.website/', '_blank');
// }

document.getElementById('contact-link').addEventListener('click', function() {
    window.location.href = 'mailto:' + 'ajberquiza' + '@' + 'gmail.com';
});

document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function() {
        this.blur();
    });
});