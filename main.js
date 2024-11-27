window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.add.toggle
    ('window-scroll',window.scroll>0)
})
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        open.classlist.toggle('open');

        const icon = faq.querySelector('.faq-icon ion-icon');
        if (icon.className == 'chevron-down-outline') {
            icon.className = 'chevron-up-outline';
        }
        else {
            icon.className = 'chevron-down-outline';
        }
        
    })
})