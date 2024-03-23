document.addEventListener('alpine:init', () => {
    Alpine.store('log', {
      user:  null,
  
      users: [
        {
          username: 'admin',
          password: 'admin',
          role: 'admin',
          email: 'admin@apiit.com',
        },
        {
          username: 'abdul',
          password: 'Abdul',
          role: 'admin',
          email: 'abdul@apiit.com',
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
  