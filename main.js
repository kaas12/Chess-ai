
function setup(){
    createCanvas(800, 800);
    }
function draw(){
    draw_piece(1 , 1,1)
            //setting up the board
    for (i2 = 0; i2 < 8; i2++){
            valy = i2+ 1;    
        for (i = 0; i < 8; i++){
            valx = i + 1;

                if (Number.isInteger((valx+valy)/2)){
                    sq_color = 255;
                    }
                
                else{
                    sq_color = 0;
                }
            create_square(sq_color, valx,valy)
        }
    }
} 
function create_square (col, x, y){
    xpos = x * 100;
    ypos = y * 100;
    fill(col)
    rect(xpos,ypos, 100, 100,)
}
function draw_piece(sort, place){
    if (sort == 1){
        console.log("king", place)
    } 
}