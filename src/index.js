const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let string="";
    let array2 =[];
      for(let i=0;i<=expr.length;i++){
          if(expr[i]==="0"){
              string =string + "0";           
          }
          if(expr[i]+expr[i+1]==="10"){
            string= string+".";
            i=i+1;
          }
          if(expr[i]+expr[i+1]==="11"){
              string =string+"-";
              i=i+1;
          }
          if(expr[i]==="*"){
              string=string + "*";
              i=i+5;
          }        
      } 
      let new_string="";
      for(let i=0;i<=string.length;i++){        
        if(string[i]!=="0"){        
            for(let e=i;e<=string.length;e++){
              new_string = new_string + string[e];
              if(string[e]==="0"|| string[e]==="*"|| e==string.length-1){
                i=e;
                array2.push(new_string);
                new_string="";
                break;
              }   
              // if(new_string>=5){
              //   let compare="";
              //     for(let i=0;i<5;i++){                    
                    
              //        compare += new_string[i];
              //             for(let i=0;i<=MORSE_TABLE.length;i++){
              //               if( MORSE_TABLE(compare) ){
              //                   array2.push(MORSE_TABLE(compare));
              //                   compare ="";
              //               }
              //             }
              //           }       
              //     }
                
              }         
  
            }         
        }      
      
      for(let i=0;i<array2.length;i++){
            if(array2[i].length >1){
               let new_elem = array2[i].toString();
                new_elem =new_elem.replace("0","");
                new_elem=new_elem.replace("*","");
                array2[i] = new_elem;
            }
            if(array2[i].length<2){
                let new_elem = array2[i].toString();
                new_elem = new_elem.replace("*"," ");
                array2[i] = new_elem;
            }
      } 
            let finish_string ="";
          for(let i=0;i<array2.length;i++){
            if(array2[i]===" "){
              finish_string+=" ";
              i++;
            }
            finish_string+=MORSE_TABLE[array2[i]];            
            
 
  }
  return finish_string;
}
module.exports = {
    decode
 }

