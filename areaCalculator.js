function triangleArea(){
    const triangleHeight = Number(document.getElementById("triangle-height").value);
    const triangleBase = Number(document.getElementById("triangle-base").value);

    const area = 0.5 * triangleBase * triangleHeight;
    
    document.getElementById("result").innerHTML = `
    <span class='text-3xl font-bold text-gray-800 mb-3'>Triangle Area:</span>
    <span class = 'text-gray-600 mb-2'>0.5 X ${triangleBase} (b) X ${triangleHeight} (h)</span>
    <span class = 'text-red-500 text-2xl font-semibold'>${area}</span>
    `
}






function flash(){
    document.getElementById("result").innerHTML = '';
}