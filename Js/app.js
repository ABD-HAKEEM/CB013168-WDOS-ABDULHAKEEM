document.addEventListener('alpine:init', () => {
    Alpine.store('log', {
      user:  null,
  
      users: [
        {
          username: 'admin',
          password: 'admin',
          role: 'admin',
          email: 'admin@admin.com',
        },
        {
          username: 'user',
          password: 'user',
          role: 'site_user',
          email: 'user@user.com',
        }
      ],
  
      login(username, password, email) {
        let user = this.users.find(function(user) {
          return user.username === username && user.password === password && user.email === email;
        });
  
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
          this.user = user;
          return true;
        }
        return false;
      },
  
      logout() {
        localStorage.removeItem('user'); 
        this.user = null;
      },
      init(){
        let user = localStorage.getItem('user');

        if(user){
            this.user = JSON.parse(user);
        }
    },
    

      ImageSrc(src) {
        return 'http://127.0.0.1:5500' + src;
      }
    });
  });
  