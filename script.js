document.getElementById('output').style.visibility = 'hidden';
document.getElementById('gramosInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible';
    let gramos = e.target.value;
    document.getElementById('lbsOutput').innerHTML = gramos*0.0022046;
    
    document.getElementById('kgOutput').innerHTML = gramos/1000;

    document.getElementById('mgOutput').innerHTML = gramos*1000;
});