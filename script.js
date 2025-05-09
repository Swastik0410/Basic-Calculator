let str="";
let disp=document.querySelector("#disp");
let buttons=document.querySelectorAll(".button");
buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=='=')
        {
            str=eval(str);
            disp.value=str;
        }
        else{

            if(e.target.innerHTML=='C')
            {
                str="";
                disp.value=str;
            }
            else{
                str+=e.target.innerHTML;
                disp.value=str;
            }
        }
        
    })
   
})
