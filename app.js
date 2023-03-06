const buttons = document.querySelectorAll('.category');
const author = document.getElementById('author');
const quote = document.getElementById('quote');
const nextBtn = document.getElementById('next-btn');
const quoteWrapper = document.getElementById('quote-wrapper')

  for (const button of buttons) {
    
    button.addEventListener('click', function () {
      buttons.forEach(button => {
        button.classList.remove('active');
        button.classList.add('category');
        button.disabled = false;
        quoteWrapper.style.display = 'flex';
      });
      console.log(button.id)
      button.classList.add('active');
      button.classList.remove('category')
      button.setAttribute('disabled', '')
      nextBtn.textContent = `New ${button.id} quote`;
      nextBtn.style.display = 'block';
      nextBtn.addEventListener('click', updateQuote);
      updateQuote()

      async function updateQuote() {
        let tag = `?tags=${button.id}`;
        const response = await fetch(`https://api.quotable.io/random${tag}`);
        console.log(response)
        const data = await response.json();
        if (response.ok) {
          quote.textContent = data.content;
          author.textContent = data.author;
        } else {
          quote.textContent = "An error occured";
          console.log(data);
        }
        
        
      }

    }) 
  
  };




