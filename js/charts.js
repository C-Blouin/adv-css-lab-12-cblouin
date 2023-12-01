// Selecting the SVG rect and text elements from the DOM
let rect = document.querySelector("svg rect");
let text = document.querySelector("svg text");


// Get the current percentage value from the text content
let percent = text.textContent.replaceAll("%", "");
percent = parseInt(percent, 10);

// Store the new height equal to the percentage text value.
let newHeight = percent; 
// Calculate the new y value by subtracting the new height from 100, this allows the element to be dynamic to whatever the percentage value is set to.
let newY = 100 - newHeight; 

// Reference the external CSS stylesheet, in this case the first style sheet.
const cssRulesList = document.styleSheets[0].cssRules;

// Loop through the CSS rules to capture the "svg:active rect" style rule.
let svgActiveRule;
for (let i = 0; i < cssRulesList.length; i++) {
    // Look for the svg:active rule for rect
    if (cssRulesList[i].selectorText == "svg:active rect") {
        // If the rule is found, store the value in the svgActiveRule variable to allow setting properties below.
        svgActiveRule = cssRulesList[i];
    }
}

// Update the CSS declarations to reflect the new property values for rect, using a string literal to add the percentage sign to allow for the setProperty calculations to correctly execute.
svgActiveRule.style.setProperty("height", `${newHeight}%`);
svgActiveRule.style.setProperty("y", `${newY}%`);