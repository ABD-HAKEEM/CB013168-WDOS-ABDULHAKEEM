document.addEventListener('alpine:init', () => {
    Alpine.store('animals', {

        animal_section_one:
        {
            image: '/Images/annie-spratt-ncyQWQcz0iQ-unsplash.jpg',
            title: "Animals In Sri Lanka"
        },
        animal_section_two: {
            title: "Sri Lanka's Wild Life Animals",
            body: "The latest information on Sri Lankan biodiversity comes from the 6th National Report of the Convention on Biological Diversity, offering an inventory of species up to the close of 2018. However, subsequent to this report, in 2019, 54 newly identified species emerged. This includes a diverse range, such as 26 spiders (comprising 14 cellar spiders, 7 jumping spiders, 4 crab spiders, and 1 tarantula), 1 scorpion species, 5 mites and ticks, 14 reptiles (13 day geckos and 1 snake), 1 shrub frog, 1 orchid, and 6 lichens. Furthermore, in 2021, Professors Devaka Weerakoon and Amila Sumanapala presented an updated taxonomy list, encompassing findings up to the conclusion of 2020.",
            image: '/Images/logo 2.jpg',

        },
        animal_section_three: {
            image: '/Images/video (540p).mp4',
            title: 'Step into the Wild',
            body: "In the heart of Sri Lanka's wilderness, a harmonious greeting resonates from the denizens of the Earth, showcasing a spectacular tapestry of life that has flourished for centuries. From the elusive sloth bear to the majestic herds of Asian elephants that gracefully traverse the landscapes, these creatures represent the guardians of Sri Lanka's natural heritage. The vibrant peafowl, with its iridescent plumage, dances in the ancient forests, while langurs swing from tree to tree, embodying the spirit of the wild. Sri Lanka's wildlife, a testament to the coexistence of diverse species, reflects the delicate balance between the ancient traditions of the island and the ecosystems that have shaped its identity. This greeting from the denizens of the Earth is an invitation to witness the intricate web of life, where each species contributes to the symphony of nature, creating a mesmerizing spectacle that unfolds against the backdrop of emerald-green landscapes and crystal-clear waters. Step into this realm, where the whispers of the jungle invite you to connect with the untamed beauty of Sri Lanka's wildlife.",
        },


    });
});