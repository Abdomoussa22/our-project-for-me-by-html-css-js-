//check if ther is local storareg color option
let mainColors = localStorage.getItem("color-option");
if (mainColors !== null) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color-option")
  );
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");
    // add active class on element with data coler === local storeg items
    if (element.dataset.color === mainColors) {
      //add active class
      element.classList.add("active");
    }
  });
}
//select landing page
let landingPage = document.querySelector(".landing-page");
// get arry of imags
let arrImages = ["bg1.webp", "bg2.webp", "bg3.jpg", "bg4.webp"];
//random backgraund imags
let backgraundOption = true;

//variable for control interval
let backgraundIntirval;

// check if there's local storage random backgraund items
let BackgraundLocalItem =localStorage.getItem('backgraund-option' )

 // check if random backgraund local storage is not empty
if(BackgraundLocalItem !== null){
   if(BackgraundLocalItem === 'true'){
    backgraundOption = true ;
   }else{
    backgraundOption = false ;
   }
   //remove active class from all spans 
   document.querySelectorAll('.Random-Backgraunds span').forEach(element=>{
    element.classList.remove('active');
   })
   if(BackgraundLocalItem === 'true'){
    document.querySelector('.yes').classList.add('active')

   }else{
    document.querySelector('.no').classList.add('active')

   }
  }

//funcation to randomaiz backgraund
function randomaizBackgraund() {
  if (backgraundOption === true) {
    backgraundIntirval = setInterval(() => {
      //get randomNampuer from this arry
      let randomNampuer = Math.floor(Math.random() * arrImages.length);
      landingPage.style.backgroundImage =
        'url("imags/' + arrImages[randomNampuer] + '")';
    }, 1000);
  }
}
randomaizBackgraund();
//start of settings-box
let icon = (document.querySelector(".icon-toggel ").onclick = function () {
  document.querySelector(".settings-box").classList.toggle("open");
  this.classList.toggle("fa-spin");
});

//switch color
let coloerLi = document.querySelectorAll(".colors-list li");
//loop on all li
coloerLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    //set color on root
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );
    //set items on localStoareg
    localStorage.setItem("color-option", e.target.dataset.color);
    //remove active class from colers list items
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
      e.target.classList.add("active");
    });
  });
});
//switch random backgraund option
let randomBackgraundElement = document.querySelectorAll(
  ".Random-Backgraunds span"
);
//loop on all span
randomBackgraundElement.forEach((span) => {
  span.addEventListener("click", (e) => {
    //remove active class from span
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
      if (e.target.dataset.backgraund === "yes") {
        backgraundOption = true;
        randomaizBackgraund();
        localStorage.setItem('backgraund-option' , true);
      } else {
        
        backgraundOption = false;
        clearInterval(backgraundIntirval);
        localStorage.setItem('backgraund-option' , false ); 
      }
    });

    e.target.classList.add("active");
  });
});
 
//select skills selector 
let ourSkills = document.querySelector(".skills");


window.onscroll = function(){

  //skills offset top 

  let skillsOffsetTop = ourSkills.offsetTop; 


  // skills outer height
  
  let skillsOuterHeight = ourSkills.offsetHeight;


  //window height 
  let windowHeight = this.innerHeight;


  //window scrol top 
  let windowscroltop = this.pageYOffset;
  
  if (windowscroltop > (skillsOffsetTop + skillsOuterHeight - windowHeight)){
    
    let allskills = document.querySelectorAll(".skills  .skill-progress span")
    allskills.forEach(skill =>{
      skill.style.width = skill.dataset.progress;
    })

  }

}
//create popup whit the image
 let ouegallery = document.querySelectorAll(" .images-box img");
  ouegallery.forEach((img)=>{
    img.addEventListener('click', (e)=>{
      
      //cerate overlay element
     let overlay =  document.createElement('div');

     //add class to overlay
     overlay.className= "popup-overlay"

     //add overlay to body

     document.body.appendChild(overlay);

     //cerate the popup box
     let popupbox = document.createElement('div');

     popupbox.className= 'popup-box'
     if(img.alt !== null){

      //cerate heading
      let imageheading = document.createElement('h3');
       
      //cerate text for heading
      let taxtheadig = document.createTextNode(img.alt);

      //appind the text to heading

      imageheading.appendChild(taxtheadig);
       //appind imageheading to popupbox

       popupbox.appendChild(imageheading);

    }

     //create the image
     let popupimg = document.createElement("img");

     //set image source

     popupimg.src = img.src;
     //add popupimg to popupbox 

     popupbox.appendChild(popupimg);

      //add popupbox to body
     document.body.appendChild(popupbox);

    //cerate the close span 
    let closebutton = document.createElement("span");

    //add class to span 
    closebutton.className = 'close-button'

    //cerate the close button text
     let closebuttontext = document.createTextNode("x");

     //add a closebuttontext to closebutton
     closebutton.appendChild(closebuttontext);

     //add close button to popupbox
     popupbox.appendChild(closebutton);
    })
  })
  //close popup 
  document.addEventListener('click' , (e)=>{

    if(e.target.className == 'close-button'){

      document.querySelector('.popup-box').remove();

      document.querySelector('.popup-overlay').remove();

    }
  })