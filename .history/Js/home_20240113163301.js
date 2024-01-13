document.addEventListener('alpine:init', () => {
 
    Alpine.store('home',{
        imageSrc(src){
            return 'https://github.com/ABD-HAKEEM/CB013168-WDOS-ABDULHAKEEM' + src;
        }
    });
});