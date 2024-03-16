document.addEventListener('alpine:init', () => {
    Alpine.store('log',{
        
        user:null,
        users:[
            {
                username:'admin',
                password:'admin',
                roal:'admin',
                email:'admin@apiit.com',
            },

        
            {
                username:'user',
                password:'user',
                roal:'sys_user',
                email:'user@apiit.com',
            }

            
        ],
        Authenticate(username,password,email) {
            let user = this.users.find(function(user) {
                return user.username === username && user.password === password && user.email === email;
               
            });

        }
    });
});


