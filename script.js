
  
    function generateOutput() {
      var input = document.getElementById("input").value;
      var output = "";

      if (input === "CBR21") {
        output = "Welcome to CBR";
      } 
      else if(input === "SUK23") {
        output = "Code Unlocked";
      }
    
      else if(input === "DBC04"){
        output = "Code Unlocked";
      }
     
      else if(input === "HAK05"){
        output = "Code Unlocked";
      }
      else{
        output = "Try again! surprise awaits you";
      }

      document.getElementById("output").textContent = output;
    }
  