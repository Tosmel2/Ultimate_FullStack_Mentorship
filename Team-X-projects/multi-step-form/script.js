const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const containers = document.querySelectorAll('.checkbox-container');

  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', function() {
      if (checkbox.checked) {
        containers[index].classList.add('border-blue-500');
        containers[index].classList.add('bg-blue-50');
      } else {
        containers[index].classList.remove('border-blue-500');
        containers[index].classList.remove('bg-blue-50');
      }
    });
  });


// Get the toggle element and the toggle icon
const toggle = document.querySelector('.toggle-box');
const toggleIcon = document.querySelector('.tog-icon');

// Get the price elements
const prices = document.querySelectorAll('.theprice');
const theYearPara = document.querySelector('.theyearpara');
const theMonthPara = document.querySelector('.themonthpara');

// Get the step list items
const stepItems = document.querySelectorAll('.top-header li');

// Add click event listener to the toggle
toggle.addEventListener('click', function () {
  // Toggle the active class on the toggle element
  toggle.classList.toggle('active');

  // Toggle the toggle-on class on the toggle icon
  toggleIcon.classList.toggle('fa-toggle-on');
  toggleIcon.classList.toggle('fa-toggle-off');

   // Get the current step index
   const currentIndex = Array.from(stepItems).findIndex((item) => item.classList.contains('bg-blue-200'));

   // Get the next step index based on the current index and toggle state
   const nextIndex = toggle.classList.contains('active') ? currentIndex + 1 : currentIndex - 1;
 
   // Remove the bg-blue-200 class from all step items
   stepItems.forEach((item) => {
     item.classList.remove('bg-blue-200');
   });
 
   // Add the bg-blue-200 class to the step 2 item if nextIndex is 1
   if (nextIndex === 1) {
     stepItems[1].classList.add('bg-blue-200');
   }
   
 
   // Replace the page content with the appropriate message if nextIndex is 2
   if (nextIndex === 2) {
     const pageContent = document.querySelector('.card');
     pageContent.innerHTML = '<h2 class="font-bold text-xl md:text-2xl">Add-ons page</h2><p class="text-gray-400 font-semibold">This is the add-ons page content.</p>';
   }

  // Get the current text of the price elements
  const currentText = Array.from(prices).map((price) => price.textContent);

  // Define the new text for the prices
  const newText = currentText.map((text) => {
    if (text.includes('/mo')) {
      // Replace '/mo' with '/yr'
      return text.replace('/mo', '/yr');
    } else if (text.includes('/yr')) {
  // Replace '/yr' with '/mo' and remove the 'text-gray-400' class
      theYearPara.classList.toggle('text-gray-400');
      theMonthPara.classList.toggle('text-gray-400');
      return text.replace('/yr', '/mo');

      
    }
    return text;
  });

  // Update the text of the price elements
  Array.from(prices).forEach((price, index) => {
    price.textContent = newText[index];
  });
});
