const randomImage = document.querySelector(".randomImage"); //calls the img element with the randomImage class
const randomImage2 = document.querySelector(".randomImage2"); //calls the img element with the randomImage2 class
const alertDiv = document.querySelector("#alertDiv");

function randomImg(){
    let randomNumber = Math.floor(Math.random() * 53) + 1; //will generate a random number from 1 to 53

    let imgName = randomNumber + ".png"; //since we're using png files, we should use a ".png" string

    randomImage.src= "images" + "/" + imgName; //this line assigns the value for the src attribute in the randomImage variable. 
    //This allows it to connect with the images folder

    let difference = 0; // instantiate a variable that will store the difference of the randomNumber and according value

    if (randomNumber<=13 && randomNumber >0) { //all CLOVERS are named from 1-13
    	difference = randomNumber; 

    } else if(randomNumber>13 && randomNumber<27){ // all DIAMONDS are named from 14-26

        difference = randomNumber-13; //the randomNumber variable will be deducted to have a value between 1-13. Same goes for
        // the code below

    } else if(randomNumber>26 && randomNumber<40){ // all SPADES are named from 27-39
    	difference = randomNumber-26;
    } else if(randomNumber>39 && randomNumber<54){ // all HEARTS are named from 40-52
    	difference = randomNumber-39;
    } 

    return difference; //will return the value of difference
 }

function randomImg2(){
    let randomNumber2 = Math.floor(Math.random() * 53) + 1;

    let imgName = randomNumber2 + ".png";

    randomImage2.src= "images" + "/" + imgName;//this line assigns the value for the src attribute in the randomImage2 variable. This allows it to connect with the images folder


    let difference = 0; // instantiate a variable that will store the difference of the randomNumber and according value

    if (randomNumber2<=13 && randomNumber2 >0) {
    	difference = randomNumber2;

    } else if(randomNumber2>13 && randomNumber2<27){
    	difference = randomNumber2-13;
    } else if(randomNumber2>26 && randomNumber2<40){
    	difference = randomNumber2-26;
    } else if(randomNumber2>39 && randomNumber2<54){
    	difference = randomNumber2-39;
    } 

    return difference; //will return the value of difference
 }

 function luckyNine(){
 	alertDiv.innerHTML = "";
 	let total = 0; //instantiate a total variable; this will store the values for the functions
 	total = randomImg() + randomImg2(); //since both functions will return an integer, we can just add both to the total

 	if (total ==9){		//if you get NINE, it will return a div with a background of GREEN and font color of white
 		alertDiv.innerHTML += "CONGRATULATIONS! YOU WIN ";
 		alertDiv.setAttribute("class", "bg-success");
 		alertDiv.style.color = "white";


 	} else{				//if you DONT get NINE, it will return a div with a background of RED and font color of white

 		alertDiv.innerHTML+= "You got " + total + " points. You lose!";
 		alertDiv.setAttribute("class", "bg-danger");
 		alertDiv.style.color = "white";

 	}
 }