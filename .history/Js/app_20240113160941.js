document.addEventListener('alpine:init', () => {
  Alpine.store('common', {
        imageSrc(src){    
            return 'https://vipulasa.github.io/wdos-oct-one' + src;
        }
    });
});