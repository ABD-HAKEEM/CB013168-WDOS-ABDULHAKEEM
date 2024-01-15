document.addEventListener('alpine:init', () => {
    Alpine.store('common',{
        imageSrc(src){

            return '' + src;
        }
    });
});


module.exports = {

    plugins: [
      require('tailwindcss-animated')
    ],
  }