
    let login =document.querySelector('.login')
    let span
    let inTime,outTinme
    let isIn=true
    let isOut

    // 鼠标进入事件
    login.addEventListener('mouseenter',function(e){
      

      isOut = false
      if(isIn){
        inTime=new Date().getTime()
      // 生成span
      span = document.createElement('span')
      login.appendChild(span)
      // span使用in动画
      span.style.animation='in .5s ease-out forwards'
      // 计算top和left值
      let top = e.clientY - e.target.offsetTop
      let left = e.clientX - e.target.offeteLeft

      span.style.top=top + 'px'
      span.style.left=left + 'px'

      isTn=false
      isOut=true
      }


    })

    // 鼠标离开事件
    login.addEventListener('mouseleave',function(e){


      if(isOut){
        outTime=new Date().getTime()
      let passTime = outTime - inTime
      
      if(passTime<500){
        setTimeout(mouseleave,500-passTime)
      }else{
        mouseleave()
      }

      }
  
      function mouseleave (){
        span.style.animation='out .5s ease-out forwards'

        // 计算top和left值
        let top = e.clientY - e.target.offsetTop
        let left = e.clientX - e.target.offeteLeft

        span.style.top=top + 'px'
        span.style.left=left + 'px'

        setTimeout(function(){
          isIn=true
          login.removeChild(span)
        },500)

      }
    })