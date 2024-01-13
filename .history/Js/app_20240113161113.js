document.addEventListener('alpine:init', () => {
  Alpine.store('common', {
        imageSrc(src){    
            return 'https://github.com/ABD-HAKEEM/CB013168-WDOS-ABDULHAKEEM' + src;
        }
    });

    Alpine.store('common',{
        imagesrc()
    })
});