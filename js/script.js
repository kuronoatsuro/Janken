$('#btn1').on('click',function(){
    $('#btn1').css({
        'background-color':'red',
        'box-shadow':'0 4px 0 rgb(103, 0, 0)'
    })
    $('#btn2').css({
        'background-color':'gray',
        'box-shadow':'0 4px 0 rgb(52, 52, 52)'
    })
    $('#btn3').css({
        'background-color':'gray',
        'box-shadow':'0 4px 0 rgb(52, 52, 52)'
    })
    const randomNum = Math.ceil(Math.random() * 10);
    if(randomNum <= 3){
        $('#goku').html('<img src="img/グー.jpg" alt="">');
        $('#result').html('あいこだ！もう一回！')
    }else if(randomNum >= 4 && randomNum <=6){
        $('#goku').html('<img src="img/チョキ.jpg" alt="">');
        $('#result').html('お前の勝ちだ！')
    }else if(randomNum >= 7 && randomNum <=9){
        $('#goku').html('<img src="img/パー.jpg" alt="">');
        $('#result').html('お前の負けだ！')
    }else if(randomNum === 10){
        $('#goku').html('<img src="img/かめはめ波.jpg" alt="">');
        $('#result').html('波あああああああ！！')
    }
})

$('#btn2').on('click',function(){
    $('#btn2').css({
        'background-color':'red',
        'box-shadow':'0 4px 0 rgb(103, 0, 0)'
    })
    $('#btn1').css({
        'background-color':'gray',
        'box-shadow':'0 4px 0 rgb(52, 52, 52)'
    })
    $('#btn3').css({
        'background-color':'gray',
        'box-shadow':'0 4px 0 rgb(52, 52, 52)'
    })
    const randomNum = Math.ceil(Math.random() * 10);
    if(randomNum <= 3){
        $('#goku').html('<img src="img/グー.jpg" alt="">');
        $('#result').html('お前の負けだ！')
    }else if(randomNum >= 4 && randomNum <=6){
        $('#goku').html('<img src="img/チョキ.jpg" alt="">');
        $('#result').html('あいこだ！もう一回！')
    }else if(randomNum >= 7 && randomNum <=9){
        $('#goku').html('<img src="img/パー.jpg" alt="">');
        $('#result').html('お前の勝ちだ！')
    }else if(randomNum === 10){
        $('#goku').html('<img src="img/かめはめ波.jpg" alt="">');
        $('#result').html('波あああああああ！！')
    }
})

$('#btn3').on('click',function(){
    $('#btn3').css({
        'background-color':'red',
        'box-shadow':'0 4px 0 rgb(103, 0, 0)'
    })
    $('#btn1').css({
        'background-color':'gray',
        'box-shadow':'0 4px 0 rgb(52, 52, 52)'
    })
    $('#btn2').css({
        'background-color':'gray',
        'box-shadow':'0 4px 0 rgb(52, 52, 52)'
    })
    const randomNum = Math.ceil(Math.random() * 10);
    if(randomNum <= 3){
        $('#goku').html('<img src="img/グー.jpg" alt="">');
        $('#result').html('お前の勝ちだ！')
    }else if(randomNum >= 4 && randomNum <=6){
        $('#goku').html('<img src="img/チョキ.jpg" alt="">');
        $('#result').html('お前の負けだ！')
    }else if(randomNum >= 7 && randomNum <=9){
        $('#goku').html('<img src="img/パー.jpg" alt="">');
        $('#result').html('あいこだ！もう一回！')
    }else if(randomNum === 10){
        $('#goku').html('<img src="img/かめはめ波.jpg" alt="">');
        $('#result').html('波あああああああ！！')
    }
})

$('#btn4').on('click',function(){
    $('#btn1').css({
        'background-color':'',
        'box-shadow':''});
    $('#btn2').css({
        'background-color':'',
        'box-shadow':''});
    $('#btn3').css({
        'background-color':'',
        'box-shadow':''});
    $('#goku').html('<img src="img/ジャン拳.jpg" alt="">');
    $('#result').html('')
})