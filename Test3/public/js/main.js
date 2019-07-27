$(function(){
    let timer
    let Width = 0
    function changeImg(a){
        Width = a*-990
        $('.slider-transform').animate({'left':Width})
        $('.spanBox span').eq(a).addClass('active').siblings().removeClass('active')
    }
    let step = 0
    function autoFly(){
        timer = setInterval(function(){
            step++;
            if(step===4){
                step=0
                $('.slider-transform').css({'left':0})
            }
            changeImg(step)

        },2000)
    }
    autoFly()

    $('.left').on('click',function(){
        clearInterval(timer)
        step--;
        if(step<0){
            step=2
        }
        changeImg(step)
        autoFly()
    })
    $('.right').on('click',function(){
        clearInterval(timer)
        step++;
        if(step===3){
            step=0
            $('.slider-transform').css({'left':0})
        }
        changeImg(step)
        autoFly()
    })
    $('.spanBox span').click(function(){
        clearInterval(timer)
        step = $(this).index()
        changeImg(step)
        autoFly()
    })
    $('.slider-transform li').mouseenter(function(){
        clearInterval(timer)
    }).mouseleave(function(){
        autoFly()
    })
    
})