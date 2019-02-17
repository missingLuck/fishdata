var arr = ["1","2","3","4","5","6","7"];

var btn = document.getElementById("btn"),
    stop = document.getElementById("stop"),
    box = document.getElementById("box"),
    index = 0,
    time = null;

btn.onclick = function(){

    time = setInterval(function(){

        box.innerHTML = arr[index];

        index++;
        if(index>arr.length-1){
            index=0;
        }


    },50);

}


stop.onclick = function(){

    clearInterval( time );
}