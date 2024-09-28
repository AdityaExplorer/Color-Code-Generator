const hexBtn=document.querySelector('.btn');
const showColor=document.querySelector('.hex-color-value')
const leftSide=document.querySelector('.left-side');
const rgbBtn=document.querySelector('#rgba-color');
const copyBtn = document.getElementById('copy-clipboard');



hexBtn.addEventListener('click',()=>{
    let charectSet='0123456789ABCDEF';
    let hexColorOutput='';
    for(let i=0, charSetLength=charectSet.length; i<6 ; ++i){
        hexColorOutput += charectSet.charAt(Math.floor(Math.random()*charSetLength)
    )
    }
    showColor.textContent=`#${hexColorOutput}`;
    hexBtn.style.color=`#${hexColorOutput}`;
    leftSide.style.backgroundColor=`#${hexColorOutput}`;

    copyBtn.addEventListener('click',()=>{
        const currentColor = showColor.textContent; 
        navigator.clipboard.writeText(currentColor).then(() => {
            alert('Color copied to clipboard: ' + currentColor); 
        }).catch(err => {
            console.error('Failed to copy color: ', err);
        });
    });
    
})


// For Right Side Container
// For showing Range Value
function redValue(value) {
    document.getElementById('redRangeValue').textContent = value;
    
}
function greenValue(value) {
   document.getElementById('greenRangeValue').textContent = value;
}
function blueValue(value) {
   document.getElementById('blueRangeValue').textContent = value;
}


rgbBtn.addEventListener('click',()=>{
    let red = document.getElementById('red').value;   
    let green = document.getElementById('green').value;  
    let blue = document.getElementById('blue').value; 
    
    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    const rightSide = document.querySelector('.right-side');
    rightSide.style.backgroundColor = rgbColor;
    rgbBtn.style.color=rgbColor; 


})


