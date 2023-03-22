let string="";
let buttons=document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML == 'Ac'){
            string='';
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML == 'C'){
            document.querySelector('input').value=string;
            string=string.slice(0,string.length-1);
            console.log(string);
        }
        else if(e.target.innerHTML == ':)'){
            document.querySelector('input').value=string;
            string="Be Happy";
            console.log(string);
        }

        else{
        console.log(e.target);
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string;}
    })
})