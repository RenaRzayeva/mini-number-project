// let div = document.querySelectorAll('.big');
// let a = Number(prompt('ededi daxil edin:'));

// for (let i = 1; i<a ; i++) {
//     let p = document.createElement('p');
//     p.textContent = i; 

//      if (i % 2 === 0) {
        
//             p.classList.add('small');
       
//     } else {
        
//             p.classList.add('small1');
        
//     }
//     document.body.appendChild(p);

// }
// p.addEventListener('animationend', (i) => {
//       if (i < a) {
//         i=i+1;
//       }
//     });
// let body = document.querySelector('body');
// body.style.backgroundColor = "green";


let a = Number(prompt('Enter a number:'));
let i = 1;

function createNumber() {
   

    if (i <= a) {
        let p = document.createElement('p');
        p.textContent = i; 

        if (i % 2 === 0) {
            p.classList.add('small');
        } else {
            p.classList.add('small1');
        }

        document.body.appendChild(p);
        i++;

        if (i <= a) {
          if (i <= a) {
            setTimeout(createNumber, 1000); 
        }
        }
    }
}

createNumber();