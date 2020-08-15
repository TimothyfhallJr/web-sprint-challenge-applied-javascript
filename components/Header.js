// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container


function Header() {

  // creating 


  const headerDiv = document.querySelector('div');
  
  const headerSpan1 = document.querySelector('span');
  const headerTitle = document.querySelector('h1');
  const headerSpan2 = document.querySelector('span');

  // pieces appending

  headerDiv.appendChild(headerSpan1);
  headerDiv.appendChild(headerTitle);
  headerDiv.appendChild(headerSpan2);

  // classLists 

  headerDiv.classList.add('header');
  headerSpan1.classList.add('date');
  headerTitle.classList.add('h1');
  headerSpan2.classList.add('temp');

  // Content Update 

  headerSpan1.textContent('March 28, 2020');
  headerTitle.textContent('Lambda Times');
  headerSpan2.textContent('98°');

  return headerDiv;



};

let headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(Header());