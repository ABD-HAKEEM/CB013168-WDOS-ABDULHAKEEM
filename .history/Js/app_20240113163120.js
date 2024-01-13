document.addEventListener('alpine:init', () => {
    Alpine.store('common',{
        imageSrc(src){
            console.log();
            return 'https://github.com/ABD-HAKEEM/CB013168-WDOS-ABDULHAKEEM' + src;
        }
    });
});