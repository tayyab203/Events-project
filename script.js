const btn = document.querySelector('button');

btn.addEventListener('click' , function() {
    alert('CLICKED!!!');
});

btn.addEventListener('mouseover', function() {
    btn.innerText = 'STOP TOUCHING ME!!';
});

btn.addEventListener('mouseout', function() {
    btn.innerText = 'CLICK ME!';
});
