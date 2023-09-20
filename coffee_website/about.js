function show(){
    let para=document.getElementById('para');
    let toggle=document.getElementById('toggle');

    if(toggle.style.display=='none'){
        para.style.display='none';
        toggle.style.display='block';
    }
    else{
        toggle.style.display='none';
        para.style.display='block';
    }
}