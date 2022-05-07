(function () {
    // Data structure containing all technologies data displayed on the webpage
    const TECHNOLOGIES = {
        technology_1: {
            id: "technology_1",
            name: "Artificial Intelligence",
            description: "In the simplest terms, AI which stands for artificial intelligence refers to systems or machines that mimic human intelligence to perform tasks and can iteratively improve themselves based on the information they collect.",
            canonical_url : "https://ai.google/"
}, technology_2: {
            id: "technology_2",
            name: "Machine Learning",
            description: "Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so.",
canonical_url : "https://www.coursera.org/learn/machine-learning?irclickid=Q3M2adRyqxyIRfqR68RfhUy5UkGSeySVQ1TZ340&irgwc=1&utm_medium=partners&utm_source=impact&utm_campaign=197389&utm_content=b2c"
        }
        , technology_3: {
            id: "technology_3",
            name: "Data Science & Analytics",
            description: "Data analytics focuses more on viewing the historical data in context while data science focuses more on machine learning and predictive modeling.",
canonical_url : "https://training.mammothinteractive.com/p/data-science-theory-crash-course?affcode=1096_wdprmlne"
        }, technology_4: {
            id: "technology_4",
            name: "Data Visualization",
            description: "Data visualization is the graphical representation of information and data.",
canonical_url : "https://www.codecademy.com/learn/paths/visualize-data-with-python?utm_source=pepperjam&utm_medium=affiliate&utm_term=229159&clickId=3958326231&pj_creativeid=2-438169&pj_publisherid=229159"
        }, technology_5: {
            id: "technology_5",
            name: "Network and Information Security",
            description: "Information security ensures to protect transit and stationary data both. Network security ensures to protect the transit data only",
canonical_url : "https://www.edx.org/professional-certificate/uwashingtonx-essentials-cybersecurity?source=aw&awc=6798_1651932229_a8b6dd7242ee230c26b15a9bd1f32755&utm_source=aw&utm_medium=affiliate_partner&utm_content=text-link&utm_term=414309_Learn+to+Code+With+Me+LLC"
        }, technology_6: {
            id: "technology_6",
            name: "Internet of Things (IoT)",
            description: "In the broadest sense, the term IoT encompasses everything connected to the internet, but it is increasingly being used to define objects that talk to each other. ",
canonical_url : "https://www.edx.org/micromasters/curtinx-internet-of-things-iot?source=aw&awc=6798_1651932559_232722fe5322a06693d00a5dfbd7c7db&utm_source=aw&utm_medium=affiliate_partner&utm_content=text-link&utm_term=414309_Learn+to+Code+With+Me+LLC"
        }, technology_7: {
            id: "technology_7",
            name: "Cloud Computing/AWS",
            description: "Cloud computing jobs are on the rise because more and more companies are switching from the classical server infrastructure to cloud solutions.",
canonical_url : "https://www.coursera.org/specializations/cloud-computing?irclickid=Q3M2adRyqxyIRfqR68RfhUy5UkGSeRUxQ1TZ340&irgwc=1&utm_medium=partners&utm_source=impact&utm_campaign=197389&utm_content=b2c"
        }, technology_8: {
            id: "technology_8",
            name: "Extended Reality (Virtual Reality and Augmented Reality)",
            description: "The mixed reality market is full of opportunities but finding developers with these skills is a challenge since the industry is still embryonic. If you want to successfully enter the industry, this is the right time to join the AR and VR movement.",
canonical_url : "https://www.udemy.com/course/extended-reality-xr-building-ar-vr-mr-projects/?ranMID=39197&ranEAID=3PhbAxfdARQ&ranSiteID=3PhbAxfdARQ-AhCquzKXYHmil8IT_SQ4yg&LSNPUBID=3PhbAxfdARQ&utm_source=aff-campaign&utm_medium=udemyads"
        }, technology_9: {
            id: "technology_9",
            name: "UI/UX Design ",
            description: "UI (user interface) specialists design interfaces for websites and apps to be visually appealing, flow well, and be easy for users to navigate. UX (user experience) specialists do a lot of research and testing to consider every element of how the user will interact with the company and website, coordinating with developers and UI designers.",
canonical_url : "https://www.udemy.com/course/user-experience-design-fundamentals/?LSNPUBID=3PhbAxfdARQ&ranEAID=3PhbAxfdARQ&ranMID=39197&ranSiteID=3PhbAxfdARQ-0ucK3NXu.GGIMalnMlV04A&utm_medium=udemyads&utm_source=aff-campaign"
        }, technology_10: {
            id: "technology_10",
            name: "Mobile Development",
            description: "Having mobile development technology skills also comes with the perk that if you can build apps for others, you can build and sell your own as well so its an ideal career path for aspiring entrepreneurs.",
canonical_url : "https://www.udacity.com/course/ios-developer-nanodegree--nd003?irclickid=16dxjxQF5xyIRor2owVigz%3A%3AUkGSeTwBQ1TZ340&irgwc=1&utm_source=affiliate&utm_medium=&aff=197389&utm_term=&utm_campaign=__&utm_content=&adid=786224"
        }, technology_11: {
            id: "technology_11",
            name: "Blockchain",
            description: "Originally devised for the digital currency Bitcoin, blockchain has evolved. The tech community is now finding other potential uses for the technology, such as peer-to-peer payments, crowdfunding, file storage, identity management, digital voting, etc.",
canonical_url : "https://www.coursera.org/specializations/blockchain?irclickid=Q3M2adRyqxyIRfqR68RfhUy5UkGSeT2dQ1TZ340&irgwc=1&utm_medium=partners&utm_source=impact&utm_campaign=197389&utm_content=b2c"
        }, technology_12: {
            id: "technology_12",
            name: "Quantum Computing",
            description: "Quantum computing is a mix of physics, engineering, math and computer science.",
canonical_url : "https://www.edx.org/course/quantum-computing?source=aw&awc=6798_1651932818_af02867872d4330fd640c74b6fe63908&utm_source=aw&utm_medium=affiliate_partner&utm_content=text-link&utm_term=414309_Learn+to+Code+With+Me+LLC"
        }

    };

    /**
         
       @param    {number} technologyId An identifier in the technologies object to display
   
       @returns  {string} A string with the HTML of the technology.
   */
    function getTechnologyHTML(technologyId) {
        // Obtain technology data from the technologies object
        const technology = TECHNOLOGIES[technologyId];

        // CLONE an HTML element to use as a template
        const technologyHTML = $("#technology-template").clone();

        // Delete id to avoid duplicates
        technologyHTML.prop('id', '');

        // FIND and UPDATE the technology's name
        /* Since we are updating the same object several times,
        we can use jQuery's chaining feature. */
        technologyHTML
            .find(".technology-name")
            .text(technology.name);

        // FIND and UPDATE the technology's description
        technologyHTML
            .find(".technology-description")
            .text(technology.description);

         // Remove .d-none to make the technology visible
         technologyHTML.removeClass("d-none");

        return technologyHTML;
    }

    /**
        Show all technologies in the application's homepage
   
        @param    {array} technologies An array of objects containing all the technologies to be displayed
        @returns  No value.
    */
    function showTechnologies(technologies) {

    // Traverse the technologies array
        for (let technology of technologies) {
            const technologyHTML = getTechnologyHTML(technology.id);
            // Customize the technology's "Learn More" button
        technologyHTML
        .find(".technology-action")
        .attr("href", technology.canonical_url)
        .attr("target","_blank");
            technologyHTML
                .find(".technology-action")
                .text("Learn More")
              // .on('click', addCart)
                .data('technology-id', technology.id);
            $('#technologies').append(technologyHTML);
        }
    }
   //const CART = [];

/* 
    function addCart(event) {
   
        CART.push($(this).data('product-id'));

    } */

    function search(){
        $("#technologies").empty();
       
        const query = $("#searchQuery").val()
        .toLowerCase()
        .trim();
        console.log("Searching...", query);
        const technologies = Object.values(TECHNOLOGIES);
        const results = technologies.filter(function (technology){
            const name = technology.name.toLowerCase().trim();
            console.log(name, query, name.includes(query));
            return name.includes(query)
        }
        );
        console.log(results);
        showTechnologies(results);
           

    }

    $(document).ready(function () {
        showTechnologies(Object.values(TECHNOLOGIES));
         $("#searchQuery").on('keyup',search);
    });
})();
