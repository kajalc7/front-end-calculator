let string=" ";
let buttons =document.querySelectorAll('.button');//saare button pr event listener lgana h
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='=')
        {
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else  if(e.target.innerHTML=='C')
        {
            string=" ";
            document.querySelector('input').value=string;
        }
        else if (e.target.innerHTML == 'X') {
            // Remove the last character from the string
            string = string.slice(0, -1);
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target)
            string =string + e.target.innerHTML;
            document.querySelector('input').value=string;//the value which we will click will get entered on string text box
        }
        })
       
})