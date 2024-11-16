let fulname = document.querySelector('#fulname');
let age = document.querySelector('#age');
let phon = document.querySelector('#phon');
let mail = document.querySelector('#mail');
let adres = document.querySelector('#adderss');
let ar_1 = document.querySelector('#ar-1');
let ar_2 = document.querySelector('#ar-2');
let ar_3 = document.querySelector('#ar-3');
let ar_4 = document.querySelector('#ar-4');

let fr = document.querySelector('#fr');
let en = document.querySelector('#en');
let ar = document.querySelector('#ar');

let titl = document.querySelector('#title');

let dicr = document.querySelector('#dicreption');

let dat1 = document.querySelector('#dat1');
let dat2 = document.querySelector('#dat2');
let dat3 = document.querySelector('#dat3');

let ex1 = document.querySelector('#ex1');
let ex2 = document.querySelector('#ex2');
let ex3 = document.querySelector('#ex3');

let card1=document.querySelector('.card1');

let box = document.querySelector('.box');

let database = [];


let btn = document.querySelector('#btn');

btn.addEventListener('click', () =>{
  let obj = {
    
    fulname : fulname.value,
    age : age.value,
    phon : phon.value,
    mail : mail.value,
    adres : adres.value,
    ar_1 : ar_1.value,
    ar_2 : ar_2.value,
    ar_3 : ar_3.value,
    ar_4 : ar_4.value,
    fr : fr.value,
    en : en.value,
    ar : ar.value,
    titl : titl.value,
    dicr : dicr.value,
    dat1 : dat1.value,
    ex1 : ex1.value,
    dat2 : dat2.value,
    ex2 : ex2.value,
    dat3 : dat3.value,
    ex3 : ex3.value,
  }
  database.push(obj);
  localStorage.setItem("prod",JSON.stringify(database));
  //window.location.href="index.html";
  card1.style.display='none';
  
  for(let i=0;i<database.length;i++){
    box.innerHTML = `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    
    <meta prperty="og:image" content="20241114_231421.png">
    
    
    <link rel="icon" href="20241114_231421.png">
    
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=El+Messiri:wght@400..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    
    <title>ibtissam-cv</title>
</head>


<body>
    <div class="card">
        <div class="left">
            <div class="c-img">
                <img src="${database[i].img}" width="100%" alt="">
            </div>
            <div class="contact">
                <h2>Contact</h2>
                <div class="data">
                    <div class="icon">
                        <i class="bx bx-time"></i>
                    </div> 
                    <span>
                    ${database[i].age} ans
                    </span>
                </div>
                <div class="data">
                    <div class="icon">
                        <i class='bx bxs-phone'></i>
                    </div> 
                    <span>
                    ${database[i].phon}
                    </span>
                </div>
                <div class="data">
                    <div class="icon">
                        <i class='bx bxs-envelope' ></i>
                    </div>
                    <span>
                    ${database[i].mail}
                   </span>
                </div>
                <div class="data">
                    <div class="icon">
                        <i class='bx bxl-linkedin' ></i>
                    </div>
                    <span>
                    ${database[i].fulname}</span>
                </div>
                <div class="data">
                    <div class="icon">
                        <i class='bx bxs-map' ></i>
                    </div>
                    <span>
                      ${database[i].adres}
                    </span>
                </div>
                
            </div>
            <div class="comp">
                <h2>Compétences</h2>
                <ul>
                   <li>
                     ${database[i].ar_1}
                   </li>
                  <li>
                    ${database[i].ar_2}
                  </li>
                  <li>
                    ${database[i].ar_3}
                  </li>
                  <li>
                    ${database[i].ar_4}
                  </li>
                </ul>
            </div>
            <div class="lang">
                <h2>Langues</h2>
                <h4>Français : </h4>
                <span>
                  ${database[i].fr}
                </span>
                <h4>Anglais : </h4> 
                <span>
                  ${database[i].en}
                </span>
                <h4>Arab : </h4> 
                <span>
                  ${database[i].ar}
                </span>
            </div>
        </div>
        <div class="right">
            <div class="top">
              <h1>
               ${database[i].titl}
              </h1>
              <h4>technicine specialise d'<span>un</span> résaeux informatiques</h4>
              <p>
                 ${database[i].dicr}
              </p>
            </div>
            <div class="bottom">
              <h2>Expériences professionnelles
              </h2>
              <div class="c-bottom">
                <div class="date">
                  <h5>
                   ${database[i].dat1}
                  </h5>


                </div>
                <div class="exp">
                  <p>
                     ${database[i].ex1}
                  </p>
                </div>
              </div>
              <div class="c-bottom">
                <div class="date">
                  <h5>
                   ${database[i].dat2}
                  </h5>
                  
                  
                </div>
                <div class="exp">
                  <p>
                     ${database[i].ex2}
                  </p>
                </div>
              </div>
              <div class="c-bottom">
                <div class="date">
                  <h5> ${database[i].dat3}</h5>
                  
                </div>
                <div class="exp">
                  <p>
                     ${database[i].ex3}
                  </p>
                </div>
              </div>
              <h2>Éducation</h2>
              <div class="c-bottom">
                <div class="date">
                  <h5>L'INSITUT SPECIALISEE DE TECHNOLOGIE APPLIQUEE (ISMONTIC)</h5>
                  <p>Tanger sept 2020-jul 2022
                  </p>
                </div>
                <div class="exp">
                  <p>
                    Techicien Specialise cún reseaux informatiques.
                  </p>
                </div>
              </div>
              
              <div class="c-bottom">
                <div class="date">
                  <h5>
                    LYCEE QUALIFIANT ABDDELALI BEN CHEKROUN
                  </h5>
                  <p>Larache | sep 2018 juin 2010
                  </p>
                </div>
                <div class="exp">
                  <p>
                    Baccolaureat Sciences de la via et de la terre.
                  </p>
                </div>
              </div>
            </div>
        </div>
    </div>
    
</body>

  
  `;
  }
  
  
  box.style.display='block';
  btn.style.display='none';
  print();
})

