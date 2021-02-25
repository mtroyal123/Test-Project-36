var database = firebase.database();
var dog;
var sadDog, happyDog;
var feedButton, addFoodButton;
var foodObj;
var foodS = 10;


function preload(){
  sadDog= loadImage("Dog.png");
  happyDog=loadImage("happy dog.png");
}

function setup() {
  createCanvas(1000,400);

  dog = createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale= 0.15;
  //dog.visibility = true;
 

  foodObj = new Food();
  
  
  feedButton = createButton("Feed the Dog");
  feedButton.position(700,95);
  feedButton.mousePressed(feedDog);

  addFoodButton = createButton("Add Food");
  addFoodButton.position(800,95);
  addFoodButton.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  foodObj.display();
  drawSprites();
}

//function to read food Stock


//function to update food stock and last fed time


//function to add food in stock
function addFoods(){
  foodS++;
  database.ref('/').update({
    Food: foodS
  })
}

function feedDog(){
   dog.addImage(happyDog);

   if (foodObj.getFoodStock()<= 0){
     foodObj.updateFoodStock(foodObj.getFoodStock()*0);
   } else{
     foodObj.updateFoodStock(foodObj.getFoodStock()-1);
   }
}