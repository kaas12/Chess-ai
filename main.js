
function setup(){
    createCanvas(800, 800);
    }
function draw(){
    
            //setting up the board
            
            
    for (i2 = 0; i2 < 8; i2++){
            valy = i2;    
        for (i = 0; i < 8; i++){
            valx = i;

                if (Number.isInteger((valy + valx)/2)){
                    sq_color = "black";
                    }
                
                else{
                    sq_color = "white";
                }
            create_square(sq_color, valx,valy)
        }
        }
        } 


function create_square (col, x, y){
    xpos = x * 100;
    ypos = y * 100;
    if (col == "black"){
        color_code = 0
    }
    else{
        color_code = 255
    }
    rect(xpos,ypos, 100, 100,)
    fill(color_code)
    
}