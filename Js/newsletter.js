document.addEventListener('alpine:init', () => {
    Alpine.data('submit', () => ({
        new_email: '',
        emails: [],

        submitForm() {
            if (this.new_email) {
                this.emails.push(this.new_email); 
                localStorage.setItem('emails', JSON.stringify(this.emails)); 
                alert('Subscribed successfully!');
                this.new_email = ''; 
            } else {
                alert('Please enter a valid email!');
            }
        },

        init() {
            let storedEmails = localStorage.getItem('emails');
            if (storedEmails) {
                this.emails = JSON.parse(storedEmails);
            }
        },
    }));
});