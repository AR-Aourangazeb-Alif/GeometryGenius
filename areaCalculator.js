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
        
    }else if(shape === "parallelogram"){
        area = x * y;
        formula = `${x} (b) X ${y} (h)`;
        ShapeMsg = `Parallelogram`;
        
    }else if(shape === "rhombus"){
        area = x * y;
        formula = `${x} (d<sub>1</sub>) X ${y} (l<sub>2</sub>)`;
        ShapeMsg = `Rhombus`;
        
    }else if(shape === "pentagon"){
        area = x * y;
        formula = `0.5 X ${x} (p) X ${y} (b)`;
        ShapeMsg = `Pentagon`;
        
    }else if(shape === "ellipse"){
        area = x * y;
        formula = `&#960; X ${x} (a) X ${y} (b)`;
        ShapeMsg = `Ellipse`;
        
    }


    document.getElementById("result").innerHTML = `
        <span class='text-3xl font-bold text-gray-800 mb-3'>${ShapeMsg} Area:</span>
        <span class = 'text-gray-600 mb-2'>${formula}</span>
        <span class = 'text-red-500 text-2xl font-semibold'>${area}</span>
        `
}






function flash(shape){
    const shapes = ["triangle" , "rectangle", "parallelogram", "rhombus", "pentagon", "ellipse"]
    shapes.splice(shapes.indexOf(shape),1)

    for(const i of shapes){
        document.getElementById(i+"-x").value = '';
        document.getElementById(i+"-y").value = '';
    }
    document.getElementById("result").innerHTML = '';
}