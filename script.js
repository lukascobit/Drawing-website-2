
window.addEventListener("load", () => {
    Load();
});

let fs = false;
let f = false;
let rect = false;
let cansize = false;
let firstX;
let firstY;

let drawed = true;



function Load(f,thickness,color){

    const canvas = document.querySelector("canvas");
    const c = canvas.getContext("2d");
    
    
    if(f == true){
        c.lineWidth = thickness;
        c.strokeStyle = color;
        if(rect == true){
            window.addEventListener("mousedown", () => {
                Drawrect();
            });
            window.addEventListener("mousemove", () => {
                Sizerect();
            });
            window.addEventListener("mouseup", () => {
                Stoprect();
            });

            function Drawrect(){
                
                c.strokeRect(mouse.x,mouse.y,10,10);
                firstX = mouse.x;
                firstY = mouse.y;
                cansize = true;
                
               
            };
            function Sizerect(){
                
                if(cansize == true){
                    
                    document.querySelector("canvas").style.cursor = "nw-resize";
                    let w = mouse.x - firstX;
                    let h = mouse.y - firstY;
                    c.clearRect(firstX,firstY,w,h)
                    c.clearRect(firstX,firstY,1,-h)
                    c.clearRect(firstX,firstY,-w,1)
                    
                    c.strokeRect(firstX ,firstY, w, h);
                    console.log(firstX);
                    console.log(firstY);
                }
                
            };
            function Stoprect(){
                
                cansize = false;
                document.querySelector("canvas").style.cursor = "cell";
                
            };
            
        }
    }else if(fs == false){

        let painting = false;

        

        canvas.height = window.innerHeight -50; //1143
        canvas.width = window.innerWidth -40;//2370
    
        

        function start(e){
            painting = true;
            Draw(e);
        }

        function stop(){
            painting = false;
            c.beginPath()
        }

        function Draw(e){
            if (painting == false) return;
            if(fs == true) return;
            c.strokeStyle = color;
            
            c.lineCap = "round";
            c.lineTo(e.clientX,e.clientY);
            c.stroke();
            moveTo(e.clientX,e.clientY); 
        }

        canvas.addEventListener("mousedown",start);
        canvas.addEventListener("mouseup",stop);
        canvas.addEventListener("mousemove",Draw);
    }

    

};

function Changer(){
    let f = true;
    let thickness = document.getElementById("range").value;
    
    

    let color = document.getElementById("color").value;


    Load(f,thickness,color);
};



let c = false;

function PickMode(){
    switch (c){
        case false:
            fs = true;
            c = true;
            document.querySelector("canvas").style.cursor = "crosshair";
            document.getElementById("cords").style.visibility = "visible";


            break;
        case true:
            fs = false;
            c = false;
            document.querySelector("canvas").style.cursor = "pointer";
            document.getElementById("cords").style.visibility = "hidden";


            break;

    }
};

window.addEventListener("mousemove", () => {
    Mousemove(event);
});

let mouse = {
    x: undefined,
    x: undefined
}


function Mousemove(event){
    mouse.x = event.x;
    mouse.y = event.y;
    document.getElementById("cords").innerHTML = mouse.x;
    document.getElementById("cords").innerHTML += "," + mouse.y; 
};




function Addsquare(){
    switch (c){
        case false:
            fs = true;
            c = true;
            rect = true;
            document.querySelector("canvas").style.cursor = "cell";

            break;
        case true:
            fs = false;
            c = false;
            rect = false;
            document.querySelector("canvas").style.cursor = "pointer";
            break;

    }
}