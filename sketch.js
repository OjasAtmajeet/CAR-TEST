var car, wall, weight, deformation;
var speed;

function setup() {
    createCanvas(1600, 400);
    speed = random(55, 90);
    weight = random(400, 1500);

    car = createSprite(100, 200, 50, 50);
    car.velocityX = speed;
    car.shapeColor = "white";
    wall = createSprite(1400, 200, 100, 200);
    
}

function draw() {
    background(0,0,0);
    drawSprites();
    if (car.isTouching(wall)) {
        car.velocityX = 0;
        deformation = (0.5 * weight * speed * speed) / 22500;
        text("deformation:" + Math.round(deformation), 1300, 50);
        if (deformation < 80) {
            car.shapeColor = "green";
        }
        else if (deformation > 180) {
            car.shapeColor = "red";
        }
        else {
            car.shapeColor = "yellow";
        }
    }
}