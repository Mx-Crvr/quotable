

document.addEventListener("DOMContentLoaded", () => {
    // DOM elements
    const mainBtn = document.getElementById("main-btn");
    const randomBtn = document.getElementById("random-btn");
    const inspoBtn = document.getElementById('inspirational-btn');
    const wiseBtn = document.getElementById('wisdom-btn');
    const loveBtn = document.getElementById('love-btn');
    const successBtn = document.getElementById('success-btn');
    const lifeBtn = document.getElementById('life-btn');
    const happiBtn = document.getElementById('happiness-btn');
    const motivBtn = document.getElementById('motivational-btn');
    const famousBtn = document.getElementById('famousquotes-btn');
    const histBtn = document.getElementById('history-btn');
    const friendBtn = document.getElementById('friendship-btn');
    const techBtn = document.getElementById('technology-btn');
    const faithBtn = document.getElementById('faith-btn');
    const quote = document.getElementById("quote");
    const author = document.getElementById("author");
    const wrapper = document.querySelector('.quote-wrapper')

    // async function updateQuote() {
    //     // Fetch a random quote from the Quotable API
    //     const response = await fetch("https://api.quotable.io/random");
    //     const data = await response.json();
    //     if (response.ok) {
    //         // Update DOM elements
    //         quote.textContent = data.content;
    //         author.textContent = data.author;
    //     } else {
    //         quote.textContent = "An error occured";
    //         console.log(data);
    //     }
    //     }

    randomBtn.addEventListener('click', () => {
        randomBtn.disabled = true;
        randomBtn.style.transform = 'scale(0.95)';
        randomBtn.style.backgroundColor = '#448F58';

        inspoBtn.disabled = false;
        inspoBtn.style.transform = 'scale(1)';
        inspoBtn.style.backgroundColor= '#90C26E';
        wiseBtn.disabled = false;
        wiseBtn.style.transform = 'scale(1)';
        wiseBtn.style.backgroundColor= '#90C26E';
        loveBtn.disabled = false;
        loveBtn.style.transform = 'scale(1)';
        loveBtn.style.backgroundColor= '#90C26E';
        successBtn.disabled = false;
        successBtn.style.transform = 'scale(1)';
        successBtn.style.backgroundColor= '#90C26E';
        lifeBtn.disabled = false;
        lifeBtn.style.transform = 'scale(1)';
        lifeBtn.style.backgroundColor= '#90C26E';
        happiBtn.disabled = false;
        happiBtn.style.transform = 'scale(1)';
        happiBtn.style.backgroundColor= '#90C26E';
        motivBtn.disabled = false;
        motivBtn.style.transform = 'scale(1)';
        motivBtn.style.backgroundColor= '#90C26E';
        famousBtn.disabled = false;
        famousBtn.style.transform = 'scale(1)';
        famousBtn.style.backgroundColor= '#90C26E';
        histBtn.disabled = false;
        histBtn.style.transform = 'scale(1)';
        histBtn.style.backgroundColor= '#90C26E';
        friendBtn.disabled = false;
        friendBtn.style.transform = 'scale(1)';
        friendBtn.style.backgroundColor= '#90C26E';
        techBtn.disabled = false;
        techBtn.style.transform = 'scale(1)';
        techBtn.style.backgroundColor= '#90C26E';
        faithBtn.disabled = false;
        faithBtn.style.transform = 'scale(1)';
        faithBtn.style.backgroundColor= '#90C26E';

        async function updateQuote() {
            // Fetch a random quote from the Quotable API
            const response = await fetch("https://api.quotable.io/random");
            const data = await response.json();
            if (response.ok) {
                // Update DOM elements
                quote.textContent = data.content;
                author.textContent = data.author;
            } else {
                quote.textContent = "An error occured";
                console.log(data);
            }
            mainBtn.style.display = 'block';

            }

            updateQuote()

        mainBtn.addEventListener('click', updateQuote)
            
    })

    inspoBtn.addEventListener('click', () => {
        wrapper.style.display = 'flex'

        inspoBtn.disabled = true;
        inspoBtn.style.transform = 'scale(0.95)';
        inspoBtn.style.backgroundColor= '#448F58';
        randomBtn.disabled = false;
        randomBtn.style.transform = 'scale(1)';
        randomBtn.style.backgroundColor = '#90C26E';
        // 
        wiseBtn.disabled = false;
        wiseBtn.style.transform = 'scale(1)';
        wiseBtn.style.backgroundColor= '#90C26E';
        loveBtn.disabled = false;
        loveBtn.style.transform = 'scale(1)';
        loveBtn.style.backgroundColor= '#90C26E';
        successBtn.disabled = false;
        successBtn.style.transform = 'scale(1)';
        successBtn.style.backgroundColor= '#90C26E';
        lifeBtn.disabled = false;
        lifeBtn.style.transform = 'scale(1)';
        lifeBtn.style.backgroundColor= '#90C26E';
        happiBtn.disabled = false;
        happiBtn.style.transform = 'scale(1)';
        happiBtn.style.backgroundColor= '#90C26E';
        motivBtn.disabled = false;
        motivBtn.style.transform = 'scale(1)';
        motivBtn.style.backgroundColor= '#90C26E';
        famousBtn.disabled = false;
        famousBtn.style.transform = 'scale(1)';
        famousBtn.style.backgroundColor= '#90C26E';
        histBtn.disabled = false;
        histBtn.style.transform = 'scale(1)';
        histBtn.style.backgroundColor= '#90C26E';
        friendBtn.disabled = false;
        friendBtn.style.transform = 'scale(1)';
        friendBtn.style.backgroundColor= '#90C26E';
        techBtn.disabled = false;
        techBtn.style.transform = 'scale(1)';
        techBtn.style.backgroundColor= '#90C26E';
        faithBtn.disabled = false;
        faithBtn.style.transform = 'scale(1)';
        faithBtn.style.backgroundColor= '#90C26E';

        async function updateQuote() {
            // Fetch a random quote from the Quotable API
            const response = await fetch("https://api.quotable.io/random/?tags=inspirational");
            const data = await response.json();
            if (response.ok) {
                // Update DOM elements
                quote.textContent = data.content;
                author.textContent = data.author;
            } else {
                quote.textContent = "An error occured";
                console.log(data);
            }

            mainBtn.textContent = 'New Inspirational Quote'
            mainBtn.style.display = 'block';

            }

            updateQuote()

            mainBtn.addEventListener('click', updateQuote)

            
    })

    wiseBtn.addEventListener('click', () => {
        wrapper.style.display = 'flex'

        wiseBtn.disabled = true;
        wiseBtn.style.transform = 'scale(0.95)';
        wiseBtn.style.backgroundColor= '#448F58';
        randomBtn.disabled = false;
        randomBtn.style.transform = 'scale(1)';
        randomBtn.style.backgroundColor = '#90C26E';
        inspoBtn.disabled = false;
        inspoBtn.style.transform = 'scale(1)';
        inspoBtn.style.backgroundColor= '#90C26E';
        // 
        loveBtn.disabled = false;
        loveBtn.style.transform = 'scale(1)';
        loveBtn.style.backgroundColor= '#90C26E';
        successBtn.disabled = false;
        successBtn.style.transform = 'scale(1)';
        successBtn.style.backgroundColor= '#90C26E';
        lifeBtn.disabled = false;
        lifeBtn.style.transform = 'scale(1)';
        lifeBtn.style.backgroundColor= '#90C26E';
        happiBtn.disabled = false;
        happiBtn.style.transform = 'scale(1)';
        happiBtn.style.backgroundColor= '#90C26E';
        motivBtn.disabled = false;
        motivBtn.style.transform = 'scale(1)';
        motivBtn.style.backgroundColor= '#90C26E';
        famousBtn.disabled = false;
        famousBtn.style.transform = 'scale(1)';
        famousBtn.style.backgroundColor= '#90C26E';
        histBtn.disabled = false;
        histBtn.style.transform = 'scale(1)';
        histBtn.style.backgroundColor= '#90C26E';
        friendBtn.disabled = false;
        friendBtn.style.transform = 'scale(1)';
        friendBtn.style.backgroundColor= '#90C26E';
        techBtn.disabled = false;
        techBtn.style.transform = 'scale(1)';
        techBtn.style.backgroundColor= '#90C26E';
        faithBtn.disabled = false;
        faithBtn.style.transform = 'scale(1)';
        faithBtn.style.backgroundColor= '#90C26E';

        async function updateQuote() {
            // Fetch a random quote from the Quotable API
            const response = await fetch("https://api.quotable.io/random/?tags=wisdom");
            const data = await response.json();
            if (response.ok) {
                // Update DOM elements
                quote.textContent = data.content;
                author.textContent = data.author;
            } else {
                quote.textContent = "An error occured";
                console.log(data);
            }

            mainBtn.textContent = 'New Wisdom Quote'
            mainBtn.style.display = 'block';

            }

            updateQuote()

        mainBtn.addEventListener('click', updateQuote)
            
    })

    loveBtn.addEventListener('click', () => {
        wrapper.style.display = 'flex'

        loveBtn.disabled = true;
        loveBtn.style.transform = 'scale(0.95)';
        loveBtn.style.backgroundColor= '#448F58';
        randomBtn.disabled = false;
        randomBtn.style.transform = 'scale(1)';
        randomBtn.style.backgroundColor = '#90C26E';
        inspoBtn.disabled = false;
        inspoBtn.style.transform = 'scale(1)';
        inspoBtn.style.backgroundColor= '#90C26E';
        wiseBtn.disabled = false;
        wiseBtn.style.transform = 'scale(1)';
        wiseBtn.style.backgroundColor= '#90C26E';
        // 
        successBtn.disabled = false;
        successBtn.style.transform = 'scale(1)';
        successBtn.style.backgroundColor= '#90C26E';
        lifeBtn.disabled = false;
        lifeBtn.style.transform = 'scale(1)';
        lifeBtn.style.backgroundColor= '#90C26E';
        happiBtn.disabled = false;
        happiBtn.style.transform = 'scale(1)';
        happiBtn.style.backgroundColor= '#90C26E';
        motivBtn.disabled = false;
        motivBtn.style.transform = 'scale(1)';
        motivBtn.style.backgroundColor= '#90C26E';
        famousBtn.disabled = false;
        famousBtn.style.transform = 'scale(1)';
        famousBtn.style.backgroundColor= '#90C26E';
        histBtn.disabled = false;
        histBtn.style.transform = 'scale(1)';
        histBtn.style.backgroundColor= '#90C26E';
        friendBtn.disabled = false;
        friendBtn.style.transform = 'scale(1)';
        friendBtn.style.backgroundColor= '#90C26E';
        techBtn.disabled = false;
        techBtn.style.transform = 'scale(1)';
        techBtn.style.backgroundColor= '#90C26E';
        faithBtn.disabled = false;
        faithBtn.style.transform = 'scale(1)';
        faithBtn.style.backgroundColor= '#90C26E';

        async function updateQuote() {
            // Fetch a random quote from the Quotable API
            const response = await fetch("https://api.quotable.io/random/?tags=love");
            const data = await response.json();
            if (response.ok) {
                // Update DOM elements
                quote.textContent = data.content;
                author.textContent = data.author;
            } else {
                quote.textContent = "An error occured";
                console.log(data);
            }
            mainBtn.textContent = 'New Love Quote'
            mainBtn.style.display = 'block';

            }

            updateQuote()

        mainBtn.addEventListener('click', updateQuote)
            
    })

    successBtn.addEventListener('click', () => {
        wrapper.style.display = 'flex'

        successBtn.disabled = true;
        successBtn.style.transform = 'scale(0.95)';
        successBtn.style.backgroundColor= '#448F58';
        randomBtn.disabled = false;
        randomBtn.style.transform = 'scale(1)';
        randomBtn.style.backgroundColor = '#90C26E';
        inspoBtn.disabled = false;
        inspoBtn.style.transform = 'scale(1)';
        inspoBtn.style.backgroundColor= '#90C26E';
        wiseBtn.disabled = false;
        wiseBtn.style.transform = 'scale(1)';
        wiseBtn.style.backgroundColor= '#90C26E';
        loveBtn.disabled = false;
        loveBtn.style.transform = 'scale(1)';
        loveBtn.style.backgroundColor= '#90C26E';
        //      
        lifeBtn.disabled = false;
        lifeBtn.style.transform = 'scale(1)';
        lifeBtn.style.backgroundColor= '#90C26E';
        happiBtn.disabled = false;
        happiBtn.style.transform = 'scale(1)';
        happiBtn.style.backgroundColor= '#90C26E';
        motivBtn.disabled = false;
        motivBtn.style.transform = 'scale(1)';
        motivBtn.style.backgroundColor= '#90C26E';
        famousBtn.disabled = false;
        famousBtn.style.transform = 'scale(1)';
        famousBtn.style.backgroundColor= '#90C26E';
        histBtn.disabled = false;
        histBtn.style.transform = 'scale(1)';
        histBtn.style.backgroundColor= '#90C26E';
        friendBtn.disabled = false;
        friendBtn.style.transform = 'scale(1)';
        friendBtn.style.backgroundColor= '#90C26E';
        techBtn.disabled = false;
        techBtn.style.transform = 'scale(1)';
        techBtn.style.backgroundColor= '#90C26E';
        faithBtn.disabled = false;
        faithBtn.style.transform = 'scale(1)';
        faithBtn.style.backgroundColor= '#90C26E';

        async function updateQuote() {
            // Fetch a random quote from the Quotable API
            const response = await fetch("https://api.quotable.io/random/?tags=success");
            const data = await response.json();
            if (response.ok) {
                // Update DOM elements
                quote.textContent = data.content;
                author.textContent = data.author;
            } else {
                quote.textContent = "An error occured";
                console.log(data);
            }
            mainBtn.textContent = 'New Success Quote'
            mainBtn.style.display = 'block';

            }

            updateQuote()

        mainBtn.addEventListener('click', updateQuote)
            
    })

    lifeBtn.addEventListener('click', () => {
        wrapper.style.display = 'flex'

        lifeBtn.disabled = true;
        lifeBtn.style.transform = 'scale(0.95)';
        lifeBtn.style.backgroundColor= '#448F58';
        randomBtn.disabled = false;
        randomBtn.style.transform = 'scale(1)';
        randomBtn.style.backgroundColor = '#90C26E';
        inspoBtn.disabled = false;
        inspoBtn.style.transform = 'scale(1)';
        inspoBtn.style.backgroundColor= '#90C26E';
        wiseBtn.disabled = false;
        wiseBtn.style.transform = 'scale(1)';
        wiseBtn.style.backgroundColor= '#90C26E';
        loveBtn.disabled = false;
        loveBtn.style.transform = 'scale(1)';
        loveBtn.style.backgroundColor= '#90C26E';
        successBtn.disabled = false;
        successBtn.style.transform = 'scale(1)';
        successBtn.style.backgroundColor= '#90C26E';   
        // 
        happiBtn.disabled = false;
        happiBtn.style.transform = 'scale(1)';
        happiBtn.style.backgroundColor= '#90C26E';
        motivBtn.disabled = false;
        motivBtn.style.transform = 'scale(1)';
        motivBtn.style.backgroundColor= '#90C26E';
        famousBtn.disabled = false;
        famousBtn.style.transform = 'scale(1)';
        famousBtn.style.backgroundColor= '#90C26E';
        histBtn.disabled = false;
        histBtn.style.transform = 'scale(1)';
        histBtn.style.backgroundColor= '#90C26E';
        friendBtn.disabled = false;
        friendBtn.style.transform = 'scale(1)';
        friendBtn.style.backgroundColor= '#90C26E';
        techBtn.disabled = false;
        techBtn.style.transform = 'scale(1)';
        techBtn.style.backgroundColor= '#90C26E';
        faithBtn.disabled = false;
        faithBtn.style.transform = 'scale(1)';
        faithBtn.style.backgroundColor= '#90C26E';

        async function updateQuote() {
            // Fetch a random quote from the Quotable API
            const response = await fetch("https://api.quotable.io/random/?tags=life");
            const data = await response.json();
            if (response.ok) {
                // Update DOM elements
                quote.textContent = data.content;
                author.textContent = data.author;
            } else {
                quote.textContent = "An error occured";
                console.log(data);
            }
            mainBtn.textContent = 'New Life Quote'
            mainBtn.style.display = 'block';

            }

            updateQuote()

        mainBtn.addEventListener('click', updateQuote)
            
    })

    happiBtn.addEventListener('click', () => {
        wrapper.style.display = 'flex'

        happiBtn.disabled = true;
        happiBtn.style.transform = 'scale(0.95)';
        happiBtn.style.backgroundColor= '#448F58';
        randomBtn.disabled = false;
        randomBtn.style.transform = 'scale(1)';
        randomBtn.style.backgroundColor = '#90C26E';
        inspoBtn.disabled = false;
        inspoBtn.style.transform = 'scale(1)';
        inspoBtn.style.backgroundColor= '#90C26E';
        wiseBtn.disabled = false;
        wiseBtn.style.transform = 'scale(1)';
        wiseBtn.style.backgroundColor= '#90C26E';
        loveBtn.disabled = false;
        loveBtn.style.transform = 'scale(1)';
        loveBtn.style.backgroundColor= '#90C26E';
        successBtn.disabled = false;
        successBtn.style.transform = 'scale(1)';
        successBtn.style.backgroundColor= '#90C26E'; 
        lifeBtn.disabled = false;
        lifeBtn.style.transform = 'scale(1)';
        lifeBtn.style.backgroundColor= '#90C26E';  
        //
        motivBtn.disabled = false;
        motivBtn.style.transform = 'scale(1)';
        motivBtn.style.backgroundColor= '#90C26E';
        famousBtn.disabled = false;
        famousBtn.style.transform = 'scale(1)';
        famousBtn.style.backgroundColor= '#90C26E';
        histBtn.disabled = false;
        histBtn.style.transform = 'scale(1)';
        histBtn.style.backgroundColor= '#90C26E';
        friendBtn.disabled = false;
        friendBtn.style.transform = 'scale(1)';
        friendBtn.style.backgroundColor= '#90C26E';
        techBtn.disabled = false;
        techBtn.style.transform = 'scale(1)';
        techBtn.style.backgroundColor= '#90C26E';
        faithBtn.disabled = false;
        faithBtn.style.transform = 'scale(1)';
        faithBtn.style.backgroundColor= '#90C26E';

        async function updateQuote() {
            // Fetch a random quote from the Quotable API
            const response = await fetch("https://api.quotable.io/random/?tags=happiness");
            const data = await response.json();
            if (response.ok) {
                // Update DOM elements
                quote.textContent = data.content;
                author.textContent = data.author;
            } else {
                quote.textContent = "An error occured";
                console.log(data);
            }
            mainBtn.textContent = 'New Happiness Quote'
            mainBtn.style.display = 'block';

            }

            updateQuote()
        mainBtn.addEventListener('click', updateQuote)
            
    })
    
    motivBtn.addEventListener('click', () => {
        wrapper.style.display = 'flex'

        motivBtn.disabled = true;
        motivBtn.style.transform = 'scale(0.95)';
        motivBtn.style.backgroundColor = '#448F58';
        randomBtn.disabled = false;
        randomBtn.style.transform = 'scale(1)';
        randomBtn.style.backgroundColor = '#90C26E';
        inspoBtn.disabled = false;
        inspoBtn.style.transform = 'scale(1)';
        inspoBtn.style.backgroundColor= '#90C26E';
        wiseBtn.disabled = false;
        wiseBtn.style.transform = 'scale(1)';
        wiseBtn.style.backgroundColor= '#90C26E';
        loveBtn.disabled = false;
        loveBtn.style.transform = 'scale(1)';
        loveBtn.style.backgroundColor= '#90C26E';
        successBtn.disabled = false;
        successBtn.style.transform = 'scale(1)';
        successBtn.style.backgroundColor= '#90C26E'; 
        lifeBtn.disabled = false;
        lifeBtn.style.transform = 'scale(1)';
        lifeBtn.style.backgroundColor= '#90C26E';  
        happiBtn.disabled = false;
        happiBtn.style.transform = 'scale(1)';
        happiBtn.style.backgroundColor= '#90C26E';
        // 
        famousBtn.disabled = false;
        famousBtn.style.transform = 'scale(1)';
        famousBtn.style.backgroundColor = '#90C26E';
        histBtn.disabled = false;
        histBtn.style.transform = 'scale(1)';
        histBtn.style.backgroundColor = '#90C26E';
        friendBtn.disabled = false;
        friendBtn.style.transform = 'scale(1)';
        friendBtn.style.backgroundColor= '#90C26E';
        techBtn.disabled = false;
        techBtn.style.transform = 'scale(1)';
        techBtn.style.backgroundColor= '#90C26E';
        faithBtn.disabled = false;
        faithBtn.style.transform = 'scale(1)';
        faithBtn.style.backgroundColor= '#90C26E';

        async function updateQuote() {
            // Fetch a random quote from the Quotable API
            const response = await fetch("https://api.quotable.io/random/?tags=motivational");
            const data = await response.json();
            if (response.ok) {
                // Update DOM elements
                quote.textContent = data.content;
                author.textContent = data.author;
            } else {
                quote.textContent = "An error occured";
                console.log(data);
            }
            mainBtn.textContent = 'New Motivational Quote'
            mainBtn.style.display = 'block';

            }

            updateQuote()

        mainBtn.addEventListener('click', updateQuote)
            
    })

    famousBtn.addEventListener('click', () => {
        wrapper.style.display = 'flex'

        famousBtn.disabled = true;
        famousBtn.style.transform = 'scale(0.95)';
        famousBtn.style.backgroundColor= '#448F58';
        randomBtn.disabled = false;
        randomBtn.style.transform = 'scale(1)';
        randomBtn.style.backgroundColor = '#90C26E';
        inspoBtn.disabled = false;
        inspoBtn.style.transform = 'scale(1)';
        inspoBtn.style.backgroundColor= '#90C26E';
        wiseBtn.disabled = false;
        wiseBtn.style.transform = 'scale(1)';
        wiseBtn.style.backgroundColor= '#90C26E';
        loveBtn.disabled = false;
        loveBtn.style.transform = 'scale(1)';
        loveBtn.style.backgroundColor= '#90C26E';
        successBtn.disabled = false;
        successBtn.style.transform = 'scale(1)';
        successBtn.style.backgroundColor= '#90C26E'; 
        lifeBtn.disabled = false;
        lifeBtn.style.transform = 'scale(1)';
        lifeBtn.style.backgroundColor= '#90C26E';  
        happiBtn.disabled = false;
        happiBtn.style.transform = 'scale(1)';
        happiBtn.style.backgroundColor= '#90C26E';
        motivBtn.disabled = false;
        motivBtn.style.transform = 'scale(1)';
        motivBtn.style.backgroundColor= '#90C26E';
        // 
        histBtn.disabled = false;
        histBtn.style.transform = 'scale(1)';
        histBtn.style.backgroundColor= '#90C26E';
        friendBtn.disabled = false;
        friendBtn.style.transform = 'scale(1)';
        friendBtn.style.backgroundColor= '#90C26E';
        techBtn.disabled = false;
        techBtn.style.transform = 'scale(1)';
        techBtn.style.backgroundColor= '#90C26E';
        faithBtn.disabled = false;
        faithBtn.style.transform = 'scale(1)';
        faithBtn.style.backgroundColor= '#90C26E';

        async function updateQuote() {
            // Fetch a random quote from the Quotable API
            const response = await fetch("https://api.quotable.io/random/?tags=famous-quotes");
            const data = await response.json();
            if (response.ok) {
                // Update DOM elements
                quote.textContent = data.content;
                author.textContent = data.author;
            } else {
                quote.textContent = "An error occured";
                console.log(data);
            }
            mainBtn.textContent = 'New Famous Quote'
            mainBtn.style.display = 'block';

            }

            updateQuote()

        mainBtn.addEventListener('click', updateQuote)
            
    })

    histBtn.addEventListener('click', () => {
        wrapper.style.display = 'flex'

        histBtn.disabled = true;
        histBtn.style.transform = 'scale(0.95)';
        histBtn.style.backgroundColor= '#448F58';
        randomBtn.disabled = false;
        randomBtn.style.transform = 'scale(1)';
        randomBtn.style.backgroundColor = '#90C26E';
        inspoBtn.disabled = false;
        inspoBtn.style.transform = 'scale(1)';
        inspoBtn.style.backgroundColor= '#90C26E';
        wiseBtn.disabled = false;
        wiseBtn.style.transform = 'scale(1)';
        wiseBtn.style.backgroundColor= '#90C26E';
        loveBtn.disabled = false;
        loveBtn.style.transform = 'scale(1)';
        loveBtn.style.backgroundColor= '#90C26E';
        successBtn.disabled = false;
        successBtn.style.transform = 'scale(1)';
        successBtn.style.backgroundColor = '#90C26E'; 
        lifeBtn.disabled = false;
        lifeBtn.style.transform = 'scale(1)';
        lifeBtn.style.backgroundColor= '#90C26E';  
        happiBtn.disabled = false;
        happiBtn.style.transform = 'scale(1)';
        happiBtn.style.backgroundColor= '#90C26E';
        motivBtn.disabled = false;
        motivBtn.style.transform = 'scale(1)';
        motivBtn.style.backgroundColor= '#90C26E';
        famousBtn.disabled = false;
        famousBtn.style.transform = 'scale(1)';
        famousBtn.style.backgroundColor= '#90C26E'; 
        // 
        friendBtn.disabled = false;
        friendBtn.style.transform = 'scale(1)';
        friendBtn.style.backgroundColor= '#90C26E';
        techBtn.disabled = false;
        techBtn.style.transform = 'scale(1)';
        techBtn.style.backgroundColor= '#90C26E';
        faithBtn.disabled = false;
        faithBtn.style.transform = 'scale(1)';
        faithBtn.style.backgroundColor= '#90C26E';

        async function updateQuote() {
            // Fetch a random quote from the Quotable API
            const response = await fetch("https://api.quotable.io/random/?tags=history");
            const data = await response.json();
            if (response.ok) {
                // Update DOM elements
                quote.textContent = data.content;
                author.textContent = data.author;
            } else {
                quote.textContent = "An error occured";
                console.log(data);
            }
            mainBtn.textContent = 'New History Quote'
            mainBtn.style.display = 'block';

            }

            updateQuote()

        mainBtn.addEventListener('click', updateQuote)
            
    })

    friendBtn.addEventListener('click', () => {
        wrapper.style.display = 'flex'

        friendBtn.disabled = true;
        friendBtn.style.transform = 'scale(0.95)';
        friendBtn.style.backgroundColor= '#448F58';
        randomBtn.disabled = false;
        randomBtn.style.transform = 'scale(1)';
        randomBtn.style.backgroundColor = '#d90C26E';
        inspoBtn.disabled = false;
        inspoBtn.style.transform = 'scale(1)';
        inspoBtn.style.backgroundColor= '#90C26E';
        wiseBtn.disabled = false;
        wiseBtn.style.transform = 'scale(1)';
        wiseBtn.style.backgroundColor= '#90C26E';
        loveBtn.disabled = false;
        loveBtn.style.transform = 'scale(1)';
        loveBtn.style.backgroundColor= '#90C26E';
        successBtn.disabled = false;
        successBtn.style.transform = 'scale(1)';
        successBtn.style.backgroundColor= '#90C26E'; 
        lifeBtn.disabled = false;
        lifeBtn.style.transform = 'scale(1)';
        lifeBtn.style.backgroundColor= '#90C26E';  
        happiBtn.disabled = false;
        happiBtn.style.transform = 'scale(1)';
        happiBtn.style.backgroundColor= '#90C26E';
        motivBtn.disabled = false;
        motivBtn.style.transform = 'scale(1)';
        motivBtn.style.backgroundColor= '#90C26E';
        famousBtn.disabled = false;
        famousBtn.style.transform = 'scale(1)';
        famousBtn.style.backgroundColor= '#90C26E'; 
        histBtn.disabled = false;
        histBtn.style.transform = 'scale(1)';
        histBtn.style.backgroundColor= '#90C26E';
        // 
        techBtn.disabled = false;
        techBtn.style.transform = 'scale(1)';
        techBtn.style.backgroundColor= '#90C26E';
        faithBtn.disabled = false;
        faithBtn.style.transform = 'scale(1)';
        faithBtn.style.backgroundColor= '#90C26E';

        async function updateQuote() {
            // Fetch a random quote from the Quotable API
            const response = await fetch("https://api.quotable.io/random/?tags=friendship");
            const data = await response.json();
            if (response.ok) {
                // Update DOM elements
                quote.textContent = data.content;
                author.textContent = data.author;
            } else {
                quote.textContent = "An error occured";
                console.log(data);
            }
            mainBtn.textContent = 'New Friendship Quote'
            mainBtn.style.display = 'block';

            }

            updateQuote()

        mainBtn.addEventListener('click', updateQuote)
            
    })

    techBtn.addEventListener('click', () => {
        wrapper.style.display = 'flex'

        techBtn.disabled = true;
        techBtn.style.transform = 'scale(0.95)';
        techBtn.style.backgroundColor= '#448F58';
        randomBtn.disabled = false;
        randomBtn.style.transform = 'scale(1)';
        randomBtn.style.backgroundColor = '#90C26E';
        inspoBtn.disabled = false;
        inspoBtn.style.transform = 'scale(1)';
        inspoBtn.style.backgroundColor= '#90C26E';
        wiseBtn.disabled = false;
        wiseBtn.style.transform = 'scale(1)';
        wiseBtn.style.backgroundColor= '#90C26E';
        loveBtn.disabled = false;
        loveBtn.style.transform = 'scale(1)';
        loveBtn.style.backgroundColor= '#90C26E';
        successBtn.disabled = false;
        successBtn.style.transform = 'scale(1)';
        successBtn.style.backgroundColor= '#90C26E'; 
        lifeBtn.disabled = false;
        lifeBtn.style.transform = 'scale(1)';
        lifeBtn.style.backgroundColor= '#90C26E';  
        happiBtn.disabled = false;
        happiBtn.style.transform = 'scale(1)';
        happiBtn.style.backgroundColor= '#90C26E';
        motivBtn.disabled = false;
        motivBtn.style.transform = 'scale(1)';
        motivBtn.style.backgroundColor= '#90C26E';
        famousBtn.disabled = false;
        famousBtn.style.transform = 'scale(1)';
        famousBtn.style.backgroundColor= '#90C26E'; 
        histBtn.disabled = false;
        histBtn.style.transform = 'scale(1)';
        histBtn.style.backgroundColor= '#90C26E';
        friendBtn.disabled = false;
        friendBtn.style.transform = 'scale(1)';
        friendBtn.style.backgroundColor= '#90C26E';
        // 
        faithBtn.disabled = false;
        faithBtn.style.transform = 'scale(1)';
        faithBtn.style.backgroundColor= '#90C26E';

        async function updateQuote() {
            // Fetch a random quote from the Quotable API
            const response = await fetch("https://api.quotable.io/random/?tags=technology");
            const data = await response.json();
            if (response.ok) {
                // Update DOM elements
                quote.textContent = data.content;
                author.textContent = data.author;
            } else {
                quote.textContent = "An error occured";
                console.log(data);
            }
            mainBtn.textContent = 'New Technology Quote'
            mainBtn.style.display = 'block';

            }

            updateQuote()

        mainBtn.addEventListener('click', updateQuote)
            
    })

    faithBtn.addEventListener('click', () => {
        wrapper.style.display = 'flex'

        faithBtn.disabled = true;
        faithBtn.style.transform = 'scale(0.95)';
        faithBtn.style.backgroundColor= '#448F58';
        randomBtn.disabled = false;
        randomBtn.style.transform = 'scale(1)';
        randomBtn.style.backgroundColor = '#90C26E';
        inspoBtn.disabled = false;
        inspoBtn.style.transform = 'scale(1)';
        inspoBtn.style.backgroundColor= '#90C26E';
        wiseBtn.disabled = false;
        wiseBtn.style.transform = 'scale(1)';
        wiseBtn.style.backgroundColor= '#90C26E';
        loveBtn.disabled = false;
        loveBtn.style.transform = 'scale(1)';
        loveBtn.style.backgroundColor= '#90C26E';
        successBtn.disabled = false;
        successBtn.style.transform = 'scale(1)';
        successBtn.style.backgroundColor= '#90C26E'; 
        lifeBtn.disabled = false;
        lifeBtn.style.transform = 'scale(1)';
        lifeBtn.style.backgroundColor= '#90C26E';  
        happiBtn.disabled = false;
        happiBtn.style.transform = 'scale(1)';
        happiBtn.style.backgroundColor= '#90C26E';
        motivBtn.disabled = false;
        motivBtn.style.transform = 'scale(1)';
        motivBtn.style.backgroundColor= '#90C26E';
        famousBtn.disabled = false;
        famousBtn.style.transform = 'scale(1)';
        famousBtn.style.backgroundColor= '#90C26E'; 
        histBtn.disabled = false;
        histBtn.style.transform = 'scale(1)';
        histBtn.style.backgroundColor= '#90C26E';
        friendBtn.disabled = false;
        friendBtn.style.transform = 'scale(1)';
        friendBtn.style.backgroundColor= '#90C26E';
        techBtn.disabled = false;
        techBtn.style.transform = 'scale(1)';
        techBtn.style.backgroundColor= '#90C26E';
        // 

        async function updateQuote() {
            // Fetch a random quote from the Quotable API
            const response = await fetch("https://api.quotable.io/random/?tags=faith");
            const data = await response.json();
            if (response.ok) {
                // Update DOM elements
                quote.textContent = data.content;
                author.textContent = data.author;
            } else {
                quote.textContent = "An error occured";
                console.log(data);
            }
            mainBtn.textContent = 'New Faith Quote'
            mainBtn.style.display = 'block';

            }

            updateQuote()

        mainBtn.addEventListener('click', updateQuote)
            
    })
});

















