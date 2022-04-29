let container = document.querySelector(".grid-container");

let clearDrawing = document.querySelector("#clearDrawing");


let isPainting = false;

//row 1 square 1
for (let i = 0; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven1");
  
  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.backgroundColor = "white";
  })
  container.appendChild(newDiv);
}

//row 1 square 2
for (let i = 1; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven2");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 1 square 3
for (let i = 2; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven3");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 1 square 4
for (let i = 3; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven4");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 1 square 5
for (let i = 4; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven5");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 1 square 6
for (let i = 5; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven6");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 1 square 7
for (let i = 6; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven7");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 1 square 8
for (let i = 7; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven8");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 1 square 9
for (let i = 8; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven9");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 1 square 10
for (let i = 9; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven10");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 2 square 1
for (let i = 1; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven11");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 2 square 2
for (let i = 2; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven12");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 2 square 3
for (let i = 3; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven13");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 2 square 4
for (let i = 4; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven14");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 2 square 5
for (let i = 5; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven15");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 2 square 6
for (let i = 6; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven16");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 2 square 7
for (let i = 7; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven17");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 2 square 8
for (let i = 8; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("one1");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(43, 116, 20)";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "rgb(43, 116, 20)";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 2 square 9
for (let i = 9; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven18");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 2 square 10
for (let i = 10; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven19");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 3 square 1
for (let i = 1; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven20");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 3 square 2
for (let i = 2; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven21");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 3 square 3
for (let i = 3; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven22");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 3 square 4
for (let i = 4; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven23");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 3 square 5
for (let i = 5; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("three1");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(252, 56, 95)";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "rgb(252, 56, 95)";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 3 square 6
for (let i = 6; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("three2");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(252, 56, 95)";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "rgb(252, 56, 95)";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 3 square 7
for (let i = 7; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("one2");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(43, 116, 20)";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "rgb(43, 116, 20)";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 3 square 8
for (let i = 8; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("two1");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(147, 233, 107)";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "rgb(147, 233, 107)";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 3 square 9
for (let i = 9; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("two2");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(147, 233, 107)";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "rgb(147, 233, 107)";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 3 square 10
for (let i = 10; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven24");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 4 square 1
for (let i = 1; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven25");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 4 square 2
for (let i = 2; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven26");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 4 square 3
for (let i = 3; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven27");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 4 square 4
for (let i = 4; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("three3");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(252, 56, 95)";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "rgb(252, 56, 95)";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 4 square 5
for (let i = 5; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("four1");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "pink";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "pink";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 4 square 6
for (let i = 6; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("six1");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "gold";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "gold";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 4 square 7
for (let i = 6; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("five1");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(255, 227, 232)";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "rgb(255, 227, 232)";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

// row 4 square 8
for (let i = 8; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("one3");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(43, 116, 20)";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "rgb(43, 116, 20)";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 4 square 9
for (let i = 9; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("three4");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(252, 56, 95)";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "rgb(252, 56, 95)";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 4 square 10
for (let i = 10; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven28");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 5 square 1
for (let i = 1; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven29");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 5 square 2
for (let i = 2; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven30");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 5 square 3
for (let i = 3; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("three5");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(252, 56, 95)";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "rgb(252, 56, 95)";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 5 square 4
for (let i = 4; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("six2");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "gold";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "gold";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 5 square 5
for (let i = 5; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("five2");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(255, 227, 232)";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "rgb(255, 227, 232)";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 5 square 6
for (let i = 6; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("four2");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "pink";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "pink";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 5 square 7
for (let i = 7; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("four3");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "pink";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "pink";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 5 square 8
for (let i = 8; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("six3");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "gold";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "gold";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 5 square 9
for (let i = 9; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("three6");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(252, 56, 95)";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "rgb(252, 56, 95)";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 5 square 10
for (let i = 10; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven32");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 6 square 1
for (let i = 1; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven33");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 6 square 2
for (let i = 2; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven34");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 6 square 3
for (let i = 3; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("three7");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(252, 56, 95)";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "rgb(252, 56, 95)";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 6 square 4
for (let i = 4; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("four4");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "pink";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "pink";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 6 square 5
for (let i = 5; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("six4");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "gold";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "gold";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 5 square 6
for (let i = 6; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("five3");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(255, 227, 232)";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "rgb(255, 227, 232)";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 6 square 7
for (let i = 7; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("four5");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "pink";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "pink";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 6 square 8
for (let i = 8; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("five4");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(255, 227, 232)";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "rgb(255, 227, 232)";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 6 square 9
for (let i = 9; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("three8");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(252, 56, 95)";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "rgb(252, 56, 95)";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 6 square 10
for (let i = 10; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven35");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 7 square 1
for (let i = 1; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven36");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 7 square 2
for (let i = 2; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven37");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 7 square 3
for (let i = 3; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("three9");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(252, 56, 95)";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "rgb(252, 56, 95)";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 6 square 4
for (let i = 4; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("five5");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(255, 227, 232)";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "rgb(255, 227, 232)";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 6 square 5
for (let i = 5; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("five6");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(255, 227, 232)";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "rgb(255, 227, 232)";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 7 square 6
for (let i = 6; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("four6");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "pink";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "pink";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 6 square 7
for (let i = 7; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("six5");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "gold";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "gold";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 7 square 8
for (let i = 8; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("three10");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(252, 56, 95)";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "rgb(252, 56, 95)";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 7 square 9
for (let i = 9; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven38");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 7 square 10
for (let i = 10; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven39");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 8 square 1
for (let i = 1; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven40");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 8 square 2
for (let i = 2; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven41");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 8 square 8
for (let i = 8; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven42");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 7 square 3
for (let i = 3; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("three11");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(252, 56, 95)";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "rgb(252, 56, 95)";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 7 square 4
for (let i = 4; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("three12");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(252, 56, 95)";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "rgb(252, 56, 95)";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 7 square 5
for (let i = 5; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("three13");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(252, 56, 95)";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "rgb(252, 56, 95)";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 7 square 6
for (let i = 6; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("three14");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(252, 56, 95)";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "rgb(252, 56, 95)";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 7 square 7
for (let i = 7; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("three15");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "rgb(252, 56, 95)";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "rgb(252, 56, 95)";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 8 square 9
for (let i = 9; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven43");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 8 square 10
for (let i = 10; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven44");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 9 square 1
for (let i = 1; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven45");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 9 square 2
for (let i = 2; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven46");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 9 square 3
for (let i = 3; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven47");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 9 square 4
for (let i = 4; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven48");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 9 square 5
for (let i = 5; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven49");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 9 square 6
for (let i = 6; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven50");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 9 square 7
for (let i = 7; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven51");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 9 square 8
for (let i = 8; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven52");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 9 square 9
for (let i = 9; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven53");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 9 square 10
for (let i = 10; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven54");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 10 square 1
for (let i = 1; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven55");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 10 square 2
for (let i = 2; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven56");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 10 square 3
for (let i = 3; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven57");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 10 square 4
for (let i = 4; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven58");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 10 square 5
for (let i = 5; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven59");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 10 square 6
for (let i = 6; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven60");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 10 square 7
for (let i = 7; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven61");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 10 square 8
for (let i = 8; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven62");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 10 square 9
for (let i = 9; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven63");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}

//row 10 square 10
for (let i = 10; i < 10 * 10; i++){
  let newDiv = document.createElement("div");
  newDiv.classList.add("seven64");

  newDiv.addEventListener("mousedown", function(){
    isPainting = true;
    newDiv.style.backgroundColor = "skyblue";
  });

  newDiv.addEventListener("mouseenter", function(){
    if (isPainting){
      newDiv.style.backgroundColor = "skyblue";
    }
    
  });
  
  newDiv.addEventListener("mouseup", function(){
    isPainting = false;
  });

  clearDrawing.addEventListener("click", function(){
    newDiv.style.background = "white";
  })
  container.appendChild(newDiv);
}