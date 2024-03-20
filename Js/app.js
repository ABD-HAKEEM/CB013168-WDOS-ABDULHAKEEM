document.addEventListener('alpine:init', () => {
  Alpine.store('log', {
      user: null,
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
      async authenticate(username, password, email) {
          // Send the user data to the server
          const response = await fetch('/php/login.php', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ username, password, email })
          });

          const user = await response.json();

          if (user) {
              localStorage.setItem('user', JSON.stringify(user));
              this.user = user;
              return user;
          }
          return false;
      },
      ImageSrc(src) {
          return 'http://127.0.0.1:5500' + src;
      }
  });
});
