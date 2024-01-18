document.addEventListener('alpine:init', () => {
    Alpine.store('gallery', {

        gallery_section_one:
        {
            title: "Discovering the Rich Fauna of Sri Lanka"
        },
  
        gallery_section_two: {
            image_1:'/Images/Buffalo_intimage1.jpg',
            image_2:'/Images/Buffalo_intimage1 (1).jpg',
            image_3:'',
            image_4:'',
            image_5:'/Images/Buffalo_intimage1.jpg',
            image_6:'/Images/Buffalo_intimage1.jpg',
            image_7:'/Images/Buffalo_intimage1.jpg',
        },
        gallery_section_four:{
            image:'/Images/Buffalo_intimage1.jpg',
            title:"Here is where National Park's is located",
            image2:'/Images/Best-wildlife-map-sri-lanka.webp',
        },

    });
});