function Area(shape){
    const x = Number(document.getElementById(shape+"-x").value);
    const y = Number(document.getElementById(shape+"-y").value);
    let area;
    let formula;
    let ShapeMsg;

    if(shape === "triangle"){
        area = 0.5 * y * x;
        formula = `0.5 X ${x} (b) X ${y} (h)`
        ShapeMsg = `Triangle`;
    
    }else if(shape === "rectangle"){
        area = x * y;
        formula = `${x} (w) X ${y} (l)`;
        ShapeMsg = `Rectangle`;
    
        
    }
    document.getElementById("result").innerHTML = `
        <span class='text-3xl font-bold text-gray-800 mb-3'>${ShapeMsg} Area:</span>
        <span class = 'text-gray-600 mb-2'>${formula}</span>
        <span class = 'text-red-500 text-2xl font-semibold'>${area}</span>
        `
}






function flash(){
    document.getElementById("result").innerHTML = '';
}