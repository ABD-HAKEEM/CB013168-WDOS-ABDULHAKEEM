document.addEventListener('alpine:init', () => {
    Alpine.store('log', {
      user: null,
      users: [{
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
      authenticate(username, password, email) {
        let user = this.users.find(function (user) {
          return user.username === username && user.password === password && user.email === email;
        });
        return user;
      }
    });
  });