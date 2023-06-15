document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const quoteList = document.getElementById("quoteList");
    const errorMessage = document.getElementById("errorMessage");
  
    // Fetch quote data from API
    fetch("https://dummyjson.com/quotes")
      .then(response => response.json())
      .then(data => {
        // Display all quotes initially
        displayQuotes(data);
  
        // Filter quotes on search input change
        searchInput.addEventListener("input", function() {
          const searchStr = searchInput.value.toLowerCase();
          const filteredQuotes = data.filter(quote => quote.text.toLowerCase().includes(searchStr));
          displayQuotes(filteredQuotes);
        });
      })
      .catch(error => {
        // Display error message if API call fails
        errorMessage.textContent = "Failed to fetch quotes. Please try again later.";
      });
  
    function displayQuotes(quotes) {
      // Clear previous quotes
      quoteList.innerHTML = "";
  
      if (quotes.length === 0) {
        const noResultsItem = document.createElement("li");
        noResultsItem.textContent = "No matching quotes found.";
        quoteList.appendChild(noResultsItem);
      } else {
        quotes.forEach(quote => {
          const quoteItem = document.createElement("li");
          quoteItem.textContent = quote.text;
          quoteList.appendChild(quoteItem);
        });
      }
    }
  });
  