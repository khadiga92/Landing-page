//Select and store all sections
const sections = document.querySelectorAll("section");
//Select and store unordered list
const UL = document.querySelector("ul");
// Create document fragment
const fragment = document.createDocumentFragment();

/*
*TODO:Create new <li> element with each iteration using createListItems function
*when the created link get clicked on, the page scroll to that section
*change the style of the section viewed
*/
for (let section of sections) {
  const dataAttribute = section.getAttribute("data-nav");
  const idAttribute = section.getAttribute("id");
  const { newLink, textNode, newLi } = createListItems(idAttribute, dataAttribute);
  newLink.addEventListener('click', function(d){
    d.preventDefault();
    section.scrollIntoView({behavior: "smooth"})
  });
  newLink.appendChild(textNode);
  newLi.appendChild(newLink);
  fragment.appendChild(newLi);
  window.addEventListener('scroll', () => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= -100 && rect.top <= 200) {
      section.classList.add('active');
    }
    else {
      section.classList.remove("active");; 
    }
  });
}

UL.appendChild(fragment);

/*@description 
*create <Li> and <a> elements with the value of href equal to the value of each section id attribute
*and the text inside each anchor equal to the value of each section’s data-nav attribute. 
* @param {string} Id attribute of sections
* @param {string} data_nav attribute
* @returns created elements <Li>,<a> and text node (the text inside the anchor tag)
*/ 
function createListItems(idAttribute, dataAttribute) {
  const newLi = document.createElement('li');
  const newLink = document.createElement('a');
  newLink.setAttribute("href", `#${idAttribute}`);
  const textNode = document.createTextNode(dataAttribute);
  return { newLink, textNode, newLi };
}