let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
let newarry=[];
for (let i = 0; i < mix.length; i++){
    const item = mix[i];
    newarry.push(typeof item);
} console.log(newarry);