document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // mailto: link oluştur
    const mailtoLink = `mailto:mbugrakaraturk@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Mail client'ı aç
    window.location.href = mailtoLink;

    // Formu temizle
    document.getElementById('contactForm').reset();
}); 