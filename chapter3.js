/* -- Sub menu --*/
$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('nav').toggleClass('active');
    })
    $('ul li').click(function(){
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    })
})

/* -- first pin -- */
document.getElementById('button-1').addEventListener('click', function(){
    document.querySelector('.bg-modal-1').style.display='flex';
    document.querySelector('.postion').style.display='none';
});

document.querySelector('.close-1').addEventListener('click', function(){
    document.querySelector('.bg-modal-1').style.display='none';
    document.querySelector('.postion').style.display= defaultStatus;
});
/* -- second pin -- */
document.getElementById('button-2').addEventListener('click', function(){
    document.querySelector('.bg-modal-2').style.display='flex';
    document.querySelector('.postion').style.display='none';
});

document.querySelector('.close-2').addEventListener('click', function(){
    document.querySelector('.bg-modal-2').style.display='none';
    document.querySelector('.postion').style.display= defaultStatus;
});
/* -- third pin -- */
document.getElementById('button-3').addEventListener('click', function(){
    document.querySelector('.bg-modal-3').style.display='flex';
    document.querySelector('.postion').style.display='none';
});

document.querySelector('.close-3').addEventListener('click', function(){
    document.querySelector('.bg-modal-3').style.display='none';
    document.querySelector('.postion').style.display= defaultStatus;
});
/* -- forth pin -- */
document.getElementById('button-4').addEventListener('click', function(){
    document.querySelector('.bg-modal-4').style.display='flex';
    document.querySelector('.postion').style.display='none';
});

document.querySelector('.close-4').addEventListener('click', function(){
    document.querySelector('.bg-modal-4').style.display='none';
    document.querySelector('.postion').style.display= defaultStatus;
});
/* -- fifth pin -- */
document.getElementById('button-5').addEventListener('click', function(){
    document.querySelector('.bg-modal-5').style.display='flex';
    document.querySelector('.postion').style.display='none';
});

document.querySelector('.close-5').addEventListener('click', function(){
    document.querySelector('.bg-modal-5').style.display='none';
    document.querySelector('.postion').style.display= defaultStatus;
});
