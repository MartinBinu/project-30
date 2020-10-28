class GreenBox{

    constructor(x,y){
    
       var options = {

        'friction': 12,
        'density': 1

       }


       this.body = Bodies.rectangle(x,y,55,55,options);
       this.width = 55;
       this.height = 55;
       this.Visiblity = 255;

       World.add(world,this.body);

    }
    
    
    display(){

      console.log(this.body.speed);  
      if(this.body.speed < 4){
        push();
        fill(0, 255, 39);
        stroke(31, 25, 212);
        strokeWeight(3);
        rect(this.body.position.x,this.body.position.y,52,52);
        pop();
        }
        else{
      World.remove(world, this.body);   
       push();
       this.Visiblity = this.Visiblity - 5;
      // rect(this.body.position.x,this.body.position.y,52,52);
        //tint(255,this.Visiblity);
       pop();

      }
    }
    
    }