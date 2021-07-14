class Form {
    constructor() {
      
    }
  
    display(){
     
      var title = createElement('h2')
      title.html("Multipalyer Car Racing Game");
      title.position(350, 100);
      
     var input = createInput("Enter your Name:");
     var button = createButton("Play");
      
      input.position(450, 200);
      button.position(480, 230);

      
      button.mousePressed(function(){
        input.hide();
        button.hide();
  
        var example = input.value();
        

        var greeting = createElement('h3');
        greeting.html("Hello " + example )
        greeting.position(450, 160)
      });
  
    }
  }



 // playerCount =playerCount +1 ;
 // player.update(name)
 //  player.updateCount(playerCount);

    // playerCount =playerCount +1 ;
       // player.update(name)
        //player.updateCount(playerCount);