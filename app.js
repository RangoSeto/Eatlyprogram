const getreitems = document.querySelectorAll('.recipes-item');
const getrecipes = document.querySelectorAll('.recipes');

getrecipes.forEach(function(recipe){
    recipe.style.display = "none";
});
showitemani('breakfast');

function showrecipes(e,item){

    getreitems.forEach(function(recitem){
        recitem.classList.remove('choice');
    });

    getrecipes.forEach(function(recipe){
        recipe.style.display = "none";
    });

    // console.log(e.currentTarget);
    e.currentTarget.classList.add("choice");

    showitemani(item);
};

function showitemani(item){
    var getitem = document.getElementById(item);

    getitem.style.display = "flex";

    for(var i = 0; i < getitem.childElementCount; i++){
        getitem.children[i].style.animation = "myrecani 1s";
        getitem.lastElementChild.style.animationFillMode = "backwards";
        getitem.lastElementChild.style.animationDelay = ".3s";
    }
}

// Start Testimonial Section

const getmessage = document.querySelectorAll('.message');
const getright = document.querySelector('.left-angle');
const getleft = document.querySelector('.right-angle');

getmessage.forEach(function(message){
    message.style.display = "none";
});
showmessage(0);

var idx = 0;

getleft.addEventListener('click',function(){
    idx++;

    if(idx > 4){
        idx = 0;
    }

    showmessage(idx);
});
getright.addEventListener('click',function(){
    idx--;

    if(idx < 0){
        idx = 4;
    }

    showmessage(idx);
});

function showmessage(no){
    getmessage.forEach(function(message){
        message.style.display = "none";
    });
    getmessage[no].style.display = "block";
}

// End Testimonial Section


// Start Footer Section

    var getyear = new Date().getUTCFullYear();
    document.getElementById('year').innerText = getyear;

// End Footer Section
