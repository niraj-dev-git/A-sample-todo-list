let tcount=0;
let ccount=0;

function AddTask(){
    tcount++;
    let taskcount=document.getElementById("task");
    taskcount.innerText=tcount;
    let val=document.getElementById("Task").value;
    let compcount=document.getElementById("complete");

    if(val.trim()===""){
        alert("No task mentioned");
        return;
    }

    let li=document.createElement("p");
    li.innerText=val;

    let li2=document.createElement("p");

    let button=document.createElement("button");
    button.innerText="Delete";
    button.onclick=function(){
        li.remove();
        tcount--;
        taskcount.innerText=tcount;
        li2.remove();
    }
    button.classList.add("delete");

    li2.appendChild(button);

    let button2=document.createElement("button");
    button2.innerText="Completed";
    button2.onclick=function(){
        li.style.textDecoration="line-through";
        taskcount.innerText=tcount;
        ccount++;
        compcount.innerText=ccount;
        button2.onclick=null;
    }
    button2.classList.add("complete");

    li2.appendChild(button2);

    document.getElementById("left").appendChild(li);
    document.getElementById("right").appendChild(li2);
    document.getElementById("Task").value="";
}