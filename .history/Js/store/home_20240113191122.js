document.addEventListener('alpine:init', () => {
    Alpine.store('home', {
        home_section_one: 
            {
                video: '/Images/home_video.mp4',
                title: 'Wildlife',
                body: 'Sri Lanka, a gem in the Indian Ocean, captivates visitors with its rich culture, stunning beaches, and diverse wildlife. Land attractions include elephants, monkeys, leopards, and sloth bears, while offshore, whales and dolphins offer a mesmerizing spectacle. The country stands out even among the pearl-studded treasures of the Indian Ocean.'
            },
        home_section_two_image:
        {   image1:'/Images/services-left-dec.png',
            image2:'/Images/geranimo-AX9sJ-mPoL4-unsplash.jpg',

        },
        home_section_two_card1:
            title:'Welcome to Sri Lankas Wildlife'
    });
});