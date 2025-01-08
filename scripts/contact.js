document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    contactForm?.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Form verilerini al
        const formData = new FormData(contactForm);
        const formProps = Object.fromEntries(formData);
        
        try {
            // Burada form verilerini işleyebilir veya bir API'ye gönderebilirsiniz
            console.log('Form verileri:', formProps);
            
            // Başarılı gönderim sonrası
            alert('Mesajınız başarıyla gönderildi!');
            contactForm.reset();
            
        } catch (error) {
            console.error('Form gönderimi sırasında hata:', error);
            alert('Mesajınız gönderilemedi. Lütfen tekrar deneyin.');
        }
    });
}); 