class Food{
    constructor(){
        this.foodStock;
    }
    getFoodStock(){
        var foodStockRef = database.ref('foodS');
        foodStockRef.on("value", (data) =>{
            foodStock = database.val();
        })
    }

    updateFoodStock(){
         database.ref('/').update({
             Food: foodS
         })
    }

    deductFoodMethods(){

    }

    display(){
        this.image = loadImage("Milk.png");
       var x = 80, y = 100; 
        imageMode(CENTER);
        image = (this.image,720,220,70,70);

        if (this.foodStock != 0){
            for (var i= 0; i< this.foodStock; i++){
            if (i%10 === 10){
                x = 80;
                y= y+50;
           }
            image(this.image, x,y, 50,50);
            x = x+30;
            }
        }
    }
}