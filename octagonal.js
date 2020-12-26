// 名稱：octagonal_學號或姓名.zip(canvas.html + lineTo.js)
function doFirst(){
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    /**========blue=============== */
    context.beginPath();
    context.strokeStyle = 'gold';
    context.fillStyle='blue';
    context.lineWidth = 5;
    //right
    context.moveTo(510, 260);
    context.lineTo(590, 160); //+80 -100
    context.lineTo(570, 290); //+60 +30
    context.lineTo(710, 260); //+200 0
    context.lineTo(590, 360); //+80
    context.lineTo(710, 440); //+220
    context.lineTo(550, 430); //+60
    context.lineTo(590, 560); //+100 
    context.lineTo(490, 460); //0
    
    context.beginPath();
    context.strokeStyle = 'gold';
    context.fillStyle='blue';
    context.lineWidth = 5;
    //right
    context.moveTo(510, 260);
    context.lineTo(590, 160); //+80 -100
    context.lineTo(570, 290); //+60 +30
    context.lineTo(710, 260); //+200 0
    context.lineTo(590, 360); //+80
    context.lineTo(730, 440); //+220
    context.lineTo(570, 430); //+60
    context.lineTo(610, 560); //+100 
    context.lineTo(510, 460); //0
    
    //left
    context.moveTo(510, 250);
    context.lineTo(430, 150); //-80 -100
    context.lineTo(450, 280); //-60 +30
    context.lineTo(310, 250); //-200 0
    context.lineTo(430, 350); //-80
    context.lineTo(290, 430); //-220
    context.lineTo(450, 420); //-60
    context.lineTo(410, 550); //-100
    context.lineTo(510, 450); //0

    context.closePath();
    context.stroke();
    context.fill();

    /**============================== */

    context.closePath();
    context.stroke();
    context.fill();

    /**==============red================ */

    context.beginPath();
    context.strokeStyle = 'gold';
    context.fillStyle='red';
    context.lineWidth = 5;
    //right
    context.moveTo(500, 250);
    context.lineTo(580, 150); //+80 -100
    context.lineTo(560, 280); //+60 +30
    context.lineTo(700, 250); //+200 0
    context.lineTo(580, 350); //+80
    context.lineTo(720, 430); //+220
    context.lineTo(560, 420); //+60
    context.lineTo(600, 550); //+100 
    context.lineTo(500, 450); //0
    
    //left
    context.moveTo(500, 250);
    context.lineTo(420, 150); //-80 -100
    context.lineTo(440, 280); //-60 +30
    context.lineTo(300, 250); //-200 0
    context.lineTo(420, 350); //-80
    context.lineTo(280, 430); //-220
    context.lineTo(440, 420); //-60
    context.lineTo(400, 550); //-100
    context.lineTo(500, 450); //0

    context.closePath();
    context.stroke();
    context.fill();

    /**============================== */

    // context.beginPath();
    // context.strokeStyle = 'gold';
    // context.fillStyle='gold';
    // context.lineWidth = 5;

    //
    // context.moveTo(500, 0);
    // context.lineTo(530, 30);  //(+30,+30)
    // context.lineTo(570, 35);  //(+70,+35)
    // context.lineTo(530, 60);  //(+30,+60)
    // context.lineTo(550, 100); //(+50,+100)
    // context.lineTo(500, 70);  //(0,+70)
    
    //
    // context.moveTo(500, 0);
    // context.lineTo(470, 30);  //(-30,+30)
    // context.lineTo(430, 35);  //(-70,+35)
    // context.lineTo(470, 60);  //(-30,+60)
    // context.lineTo(450, 100); //(-50,+100)
    // context.lineTo(500, 70);  //(0,+70)
    
    // context.closePath();
    // context.stroke();
    // context.fill(); 
}
// function doSecond(){

// }
window.addEventListener('load', doFirst);
//window.addEventListener('load', doSecond);