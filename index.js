let btn_prev = document.querySelector('#prev');
let btn_next = document.querySelector('#next');

let images = document.querySelectorAll('#character_gallery .character_left .character_images .character_img');
let stats = document.querySelectorAll('#character_gallery .character_left .character_stats .stats_img');
let texts = document.querySelectorAll('#character_gallery .character_description .character_texts .character_text');
let boxes = document.querySelectorAll('#character_gallery .character_description .character_boxes .character_box');

let i = 0;
let s = 0;
let t = 0;
let b = 0;

btn_next.onclick = function() {
    images[i].style.display = 'none';
    stats[s].style.display = 'none';  
    texts[t].style.display = 'none'; 
    boxes[b].style.display = 'none'; 
    i++;
    s++;
    t++;
    b++;

    if(i >= images.length){
        i = 0; 
    }
    images[i].style.display = 'block'

    if(s >= stats.length){
        s = 0; 
    }
    stats[s].style.display = 'block'

    if(t >= texts.length){
        t = 0; 
    }
    texts[t].style.display = 'block'

    if(b >= boxes.length){
        b = 0; 
    }
    boxes[b].style.display = 'block'
}

btn_prev.onclick = function() {
    images[i].style.display = 'none';
    stats[s].style.display = 'none';
    texts[t].style.display = 'none';
    boxes[b].style.display = 'none';

    i = i - 1;
    s = s - 1;
    t = t - 1;
    b = b - 1;

    if(i < 0) {
        i = images.length - 1;
    }
    images[i].style.display = 'block';

    if(s < 0) {
        s = stats.length - 1;
    }
    stats[s].style.display = 'block';

    if(t < 0) {
        t = texts.length - 1;
    }
    texts[t].style.display = 'block';

    if(b < 0) {
        b = boxes.length - 1;
    }
    boxes[b].style.display = 'block';
}


// prev - next animations_container
let next = document.querySelector('.next_arrow');
let prev = document.querySelector('.prev_arrow');
let animTwo = document.querySelector('.animations_div_two');
let animOne = document.querySelector('.animations_div_one');

next.onclick = function() {
    animOne.style.display = 'none';
    animTwo.style.display = 'block';
    prev.style.display = 'block';
    next.style.display = 'none';
}

prev.onclick = function() {
    animOne.style.display = 'block';
    animTwo.style.display = 'none';
    prev.style.display = 'none';
    next.style.display = 'block';
}


// MODAL
let modal = document.getElementById("myModal");
let imgs = document.querySelectorAll(".arts_img");
let modalImg = document.getElementById("img01");

for(let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', function() {
        fullImage(this)
    });
}

 function fullImage(imgElment) {
  modal.style.display = "block";
  modalImg.src = imgElment.src;
}

let span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}