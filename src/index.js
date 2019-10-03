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
    
    let str_filter="";
    let arr_symbols=[];
      for(let i=0;i<expr.length;i++){
          str_filter+=expr[i];
          if(str_filter.length===10){
              arr_symbols.push(str_filter);
              str_filter="";
          }
      }
        for(let i=0;i<arr_symbols.length;i++){            
           arr_symbols[i]= arr_symbols[i].replace(/00/g,"")
                            .replace(/10/g,".")
                            .replace(/11/g,"-")
                            .replace(/\*/g," "); 
        
        }
        
        let finish_string ="";
          for(let i=0;i<arr_symbols.length;i++){            
            if(!MORSE_TABLE[arr_symbols[i]]){
              finish_string+=" ";
              i++;
            }
            finish_string+=MORSE_TABLE[arr_symbols[i]]; 
                       
            
 
  }
  return finish_string;  

}
module.exports = {
    decode
 }

