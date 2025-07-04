

    function modifyDOM() {
      // ✅ Access by ID
    const paragraph = document.getElementById("demo");
    paragraph.innerHTML = "Text changed from JavaScript";
    document.getElementById("demo").style.color = "red";
 // Change the text color
    paragraph.style.fontWeight = "bold";

      // ✅ Access by tag name
    const paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.backgroundColor = "#f0f0f0";
    }

      // ✅ Access images and change the 'src' attribute
    const images = document.getElementsByTagName("img");
    images[0].setAttribute("src", "https://via.placeholder.com/150");
    document.getElementById("Image1").removeAttribute("alt")
      // ✅ Create a new element and add it to the end of the body
    const newParagraph = document.createElement("p");
    newParagraph.innerHTML = "This paragraph was dynamically created.";
    newParagraph.innerHTML = "paragraph was dynamically created.";
    document.body.appendChild(newParagraph);

    document.getElementById("Image1").removeAttribute("alt")
    document.getElementById("button").style.color   =  "yellow";
    
    }


