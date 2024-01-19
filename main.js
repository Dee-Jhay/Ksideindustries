//Get elements from the DOM
const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");
const counters = document.querySelectorAll(".counter");

//Toggle open/close menu
menuBtn.addEventListener("click", () => {
    menu.classList.toggle("menu-open");
});

//select all counters
counters.forEach(counter =>{
    //set counter values to zero
    counter.innerText = 0;
    /*Set count variable to track the count*/
    let count = 0;


    //update count function
    function updateCount() {
        //Get counter target number to count to
        const target = parseInt(counter.dataset.count);
        //As long as the count is below the target number
        if(count < target) {
            //Increment the count by 10
            count += 10;
            //set the counter text to the count
            counter.innerText = count + "+";
            //Repeat this every 10 miliseconds
            setTimeout(updateCount, 10); /*count speed*/
            //And when the target is reached
        } else {
            //set the counter text to the target number
            counter.innerText = target + "+";
        }
        
    }
    //run the function initially
    updateCount();
});

function toggleCard(card, event) {
    var cards = document.querySelectorAll('.card');
  
    cards.forEach(function (otherCard) {
      if (otherCard !== card && otherCard.classList.contains('expanded')) {
        otherCard.classList.remove('expanded');
      }
    });
  
    card.classList.toggle('expanded');
    event.preventDefault();
  }
  