var imgUser = document.getElementById("imgUser")
var resolutionY = window.innerHeight
var resolutionX = window.innerWidth
var final = "x:"+ resolutionX + " Y:"+ resolutionY

console.log(final)

if(resolutionX === 1920){
         imgUser.src = "https://dummyimage.com/46x46/000/fff.png&text=+"
}else{
    imgUser.src = "https://dummyimage.com/36x36/000/fff.png&text=+"

}
