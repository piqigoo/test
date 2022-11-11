var z = 0;
$(document).ready(function() {

    var dice1 = "images/1.jpg";
    var dice2 = "images/2.jpg";
    var dice3 = "images/3.jpg";
    var dice4 = "images/4.jpg";
    var dice5 = "images/5.jpg";
    var dice6 = "images/6.jpg";
    
    $("#throw").click(function() {
        var num = 0;
      
        var interval = setInterval(function() {
            num += 1;
            z = Math.floor((Math.random() * 10) + 1) % 6 + 1;
            switch (z) {
                case 1:
                    $("#dice_img").attr("src", dice1);
                    break;
                case 2:
                    $("#dice_img").attr("src", dice2);
                    break;
                case 3:
                    $("#dice_img").attr("src", dice3);
                    break;
                case 4:
                    $("#dice_img").attr("src", dice4);
                    break;
                case 5:
                    $("#dice_img").attr("src", dice5);
                    break;
                case 6:
                    $("#dice_img").attr("src", dice6);
                    break;
                default:
                    $("#dice_img").attr("src", dice1);
            }
            if (num == 30) {
                clearInterval(interval);
                var texts = "摇骰子，您的结果是：" + z;
                $("span.text").text(texts);
            }
        }, 50);
    });
});      
      
 