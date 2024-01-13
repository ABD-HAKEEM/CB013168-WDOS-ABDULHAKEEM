document.addEventListener('alpine:init', () => {
    Alpine.store('home', {
        home_section_one:
        {
            video: '/Images/home_video.mp4',
            title: 'Wildlife',
            body: 'Sri Lanka, a gem in the Indian Ocean, captivates visitors with its rich culture, stunning beaches, and diverse wildlife. Land attractions include elephants, monkeys, leopards, and sloth bears, while offshore, whales and dolphins offer a mesmerizing spectacle. The country stands out even among the pearl-studded treasures of the Indian Ocean.'
        },
        home_section_two_image:
        {
            image1: '/Images/services-left-dec.png',
            image2: '/Images/geranimo-AX9sJ-mPoL4-unsplash.jpg',

        },
        home_section_two_card1:
        {
            title: "Welcome to Sri Lanka's Wildlife",
            body: "Discover the enchanting world of Sri Lanka's wildlife, where lush landscapes house diverse ecosystems. National parks and reserves serve as unique sanctuaries for a variety of fauna, from majestic elephants in verdant plains to elusive leopards in dense jungles. With dawn, a symphony of birds and rustling leaves heralds a new day in this biological haven. Thrilling safaris provide encounters with iconic giants, colorful birds, exotic reptiles, and unique species found nowhere else on Earth. Conservation efforts are key to preserving this ecological treasure for future generations to marvel."
        },
        home_section_two_card2:
        {
            title: "Discover the Priceless Treasure of Nature",
            body: "Nature's priceless treasure unfolds in the delicate dance of sun-kissed leaves, the symphony of birdsong, and the tranquil embrace of untouched landscapes, revealing a wealth of beauty that transcends any material measure. In its boundless wonders, one finds a treasure trove of serenity and inspiration beyond compare."
        },
        slideshow: [
            {
                Image: '/Images/Slide img 1.jpg',
            },
            {
                Image: '/Images/slide img2.jpg',
            },
            {
                Image: '/Images/slide img 3.jpg',
            },
            {
                Image: '/Images/slide img 4.jpg',
            },
            {
                Image: '/Images/slide img 5.jpg',
            },
            {
                Image: '/Images/slide img 6.jpg',
            },
            {
                Image: '/Images/Slide img7.jpg',

            },
            {
                Image: '/Images/Slide img8.jpg',

            },
            {
                Image: '/Images/Slide img 9.jpg',

            },
        ],

      
        home_section_three_card1: 
            {
                image:'/Images/Home card 1.jpg',
                title:'The Bigg Boss On the Wild',
                body:'Elephants are considered one of the most intelligent animals, as they are capable of using tools and showing grief and compassion.60,000 muscles in their trunks.',
            },
        home_section_three_card2: 
            {
                image:'/Images/home card 2.jpg',
                title:'The Flying Cheeta',
                body:'“king of all birds,” eagles are large and powerful birds of prey that appear to soar majestically in the air, searching for their next meal.',
            },
         home_section_three_card3: 
            {
                image:'/Images/Home card 3.jpg',
                title:'Mr Cool on Wild',
                body:'Males and females have horns, unlike many mammals in the antelope family. This particular type of animal covers 17 different species, which include (but are not limited )',
            },

        home_section_three_card1: 
            {
                title:'Our Goal',
                sub_title:'Save the Animals of the Planet',
                body:'Elephants are considered one of the most intelligent animals, as they are capable of using tools and showing grief and compassion.60,000 muscles in their trunks.',
            },
    });
});