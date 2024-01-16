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
            image: '/Images/Asian elephant.jpg',
            title: 'Asian Elephant',
            body: "The Asian elephant is the largest land mammal on the Asian continent. They inhabit dry to wet forest and grassland habitats in 13 range countries spanning South and Southeast Asia. While they have preferred forage plants, Asian elephants have adapted to surviving on resources that vary based on the area.",
        
        },


    });
});