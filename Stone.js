class Stone{ 
    constructor(x,y,radius){ 
        var options = { 
            restitution:0, 
            isStatic: false, 
            friction:1, 
            density:1.2, 
        } 
        this.r=radius; 
        this.body = Bodies.circle(x,y,radius); 
        this.image=loadImage("images/stone.png"); 
        World.add(world, this.body); 

    }
   display(){ 
       var pos=this.body.position; 
       var angles=this.body.angle; 
       push ();
       translate (pos.x,pos.y); 
       rotate (angles); 
       imageMode(CENTER); 
       image (this.image,0, 0,this.r,this.r); 
       pop ();    
       
   }
} 