document.addEventListener('alpine:init', () => {
  Alpine.data('submit', () => ({
      email: '',
      new_email: '',
      submitForm() {
          if (this.email) {
              localStorage.setItem('new_email', JSON.stringify(this.email));
              this.new_email = this.email;
              alert('Subscribed successfully!');
              return true;
          } else {
              alert('Please enter a valid email!');
              return false;
          }
      },
      init() {
          let new_email = localStorage.getItem('new_email');
          if (new_email) {
              this.new_email = JSON.parse(new_email);
          }
      },
  }));
});
