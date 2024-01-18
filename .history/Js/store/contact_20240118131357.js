document.addEventListener('alpine:init', () => {
    Alpine.store('contact', {

        contact_section_one:
        {
        
            title: "Contact US"
        },
        contact_section_two: {
            title: "The Department of Wildlife Conservation in Sri Lanka",
            body: "The Department of Wildlife Conservation in Sri Lanka plays a pivotal role in the country's efforts to preserve its rich biodiversity and protect the diverse array of flora and fauna. Established to manage and regulate the nation's wildlife resources, the department operates under the purview of the Ministry of Environment. One of its primary responsibilities is the administration and maintenance of the extensive network of national parks, wildlife sanctuaries, and reserves that serve as critical habitats for various species.",
            image: '/Images/the lion.png',

        },
        contact_section_three: {
            title: "Email Us",
            body: "Feel free to reach out to us via email with any inquiries, feedback, or collaboration proposals related to wildlife conservation and exploration. Whether you have questions about our initiatives, want to share a wildlife sighting, or are interested in partnering with us, our dedicated team is here to assist. Send your emails to dg@dwc.gov.lk, and we'll get back to you as soon as possible. Thank you for your interest in preserving and celebrating the beauty of our natural world!",
            title1:'',
            body:

        },
        contact_section_four:{
            image:'/Images/Buffalo_intimage1.jpg',
            title:"Here is where National Park's is located",
            image2:'/Images/Best-wildlife-map-sri-lanka.webp',
        },

    });
});