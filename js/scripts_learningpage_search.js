(function () {
    // Data structure containing all technologies data displayed on the webpage
    const TECHNOLOGIES = {
        technology_1: {
            id: "technology_1",
            name: "Artificial Intelligence",
            description: "In the simplest terms, AI which stands for artificial intelligence refers to systems or machines that mimic human intelligence to perform tasks and can iteratively improve themselves based on the information they collect."
        }, technology_2: {
            id: "technology_2",
            name: "Machine Learning",
            description: "Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at predicting outcomes without being explicitly programmed to do so."
        }
        , technology_3: {
            id: "technology_3",
            name: "Data Science & Analytics",
            description: "Data analytics focuses more on viewing the historical data in context while data science focuses more on machine learning and predictive modeling."
        }, technology_4: {
            id: "technology_4",
            name: "Data Visualization",
            description: "Data visualization is the graphical representation of information and data."
        }, technology_5: {
            id: "technology_5",
            name: "Network and Information Security",
            description: "Information security ensures to protect transit and stationary data both. Network security ensures to protect the transit data only"
        }, technology_6: {
            id: "technology_6",
            name: "ABC",
            description: "STU"
        }, technology_7: {
            id: "technology_7",
            name: "ABC",
            description: "STU"
        }, technology_8: {
            id: "technology_8",
            name: "ABC",
            description: "STU"
        }, technology_9: {
            id: "technology_9",
            name: "ABC",
            description: "STU"
        }, technology_10: {
            id: "technology_10",
            name: "ABC",
            description: "STU"
        }, technology_11: {
            id: "technology_11",
            name: "ABC",
            description: "STU"
        }, technology_12: {
            id: "technology_12",
            name: "ABC",
            description: "STU"
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
                .text("Learn More")
               .on('click', addCart)
                .data('technology-id', technology.id);
            $('#technologies').append(technologyHTML);
        }
    }
   const CART = [];


    function addCart(event) {
    
        CART.push($(this).data('product-id'));

    } 

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
