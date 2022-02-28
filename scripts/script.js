$(document).ready(function() {
    console.log("document is ready!");

    // let data = JQuery.parseJSON(data);
    // set data array, append to arrayOut div
    let data =["Ozark ||", " Altered Carbon ||", " Blacklist || ", "The Circle "];
    for(i=0; i < data.length; i++)
    {
      $("#arrayOut").append(data[i]);
    }

    $( "#change" ).click(function() {
      changeColor();
  });

  // Function that generates random colors based on 16 num string
  // Sets each class square to a random color for each square

    function changeColor(){

      for (let e of document.getElementsByClassName("square"))
      {
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        e.style.backgroundColor = "#" + randomColor;
      }
    }

// this would be where the carousel code would go, but bootstrap is too powerful

});
