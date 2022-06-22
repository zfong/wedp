import React from 'react';
const styleArgument = {fontSize: '150px' , color: 'red'};
let new_button = document.getElementById('root');
new_button.addEventListener('click', function(e) {
    if ( e.target.tagName === 'BUTTON' ) {
        e.target.textContent = e.target.textContent+"被點了";
    }
}, false);
const MultiButton=(num)=>{
    var output=[];
    for (let i=1;i<=num ; ++i){
        output.push( <button key={i}> 第{i}個按鍵 </button> )
    }
    return output;
}
export default MultiButton;