
  
    function generateOutput() {
      var input = document.getElementById("input").value;
      var output = "";

      if (input === "CBR21") {
        output = "www.hackerrank.com/end-game-03-1";
      } 
      else if(input === "SUK23") {
        output = "www.hackerrank.com/end-game-04";
      }
    
      else if(input === "DBC04"){
        output = "www.hackerrank.com/end-game-03";
      }
     
      else if(input === "HAK05"){
        output = "www.hackerrank.com/end-game-01-1687249300";
      }
      else if(input === "HAK06"){
        output = "www.hackerrank.com/end-game-02-1687249799";
      }
      else{
        output = "Try again! surprise awaits you";
      }

      document.getElementById("output").textContent = output;
    }
  
