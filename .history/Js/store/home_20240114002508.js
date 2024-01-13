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


        home_section_three: [
            {
                card_one:'/Images/Home card 1.jpg',
                title:'The Bigg Boss On the Wild',
                body:""
            }
        ]
    });
});