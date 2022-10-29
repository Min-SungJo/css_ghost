# 
# Helloween_ghost

**사용 언어**

CSS, HTML, JS, REACT

---

마우스 커서의 위치를 입력받아 따라오게 보이는 유령 만들기.



![198839971-f4cd798a-0887-4edd-aeee-7e66ac4d103c](https://user-images.githubusercontent.com/91239439/198840402-7f9eb5ea-17a9-48ca-bbc1-6a2c61d58aec.gif)

HTML

```html

<body>
    <div class="ghost">
        <div class="body">
            <div class="face">
                <div class="eye"></div>
                <div class="eye"></div>
                <div class="mouse"></div>
            </div>
        </div>
        <div class="bottom">
            <div class="leg"></div>
            <div class="leg"></div>
            <div class="leg"></div>
            <div class="leg"></div>
            <div class="leg"></div>
        </div>
    </div>
    <script>
        document.body.addEventListener("mousemove", function (e) {
            console.log(e.pageX);
            document.querySelector('.ghost').style.left = e.pageX + 'px';
            document.querySelector('.ghost').style.top = e.pageY + 'px';
        })
    </script>
</body>
```



**CSS**

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000;
}

.ghost {
    animation: moveUpDown 3s infinite;
    position: absolute;
}

@keyframes moveUpDown {
    0% {
        margin-top: 0px;
    }

    50% {
        margin-top: -50px;
    }

    100% {
        margin-top: 0px;
    }
}

.ghost .body {
    width: 120px;
    height: 160px;
    background-color: #fff;
    border-top-left-radius: 45%;
    border-top-right-radius: 45%;
    position: relative;
}

.ghost .body .face {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 70px;
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
}

.ghost .body .face .eye {
    width: 19px;
    height: 19px;
    border-radius: 50%;
    background-color: #333;
}

.ghost .body .face .mouse {
    width: 33px;
    height: 15px;
    background-color: #333;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-left: 18px;
    margin-top: 13px;
}

.ghost .bottom {
    display: flex;

}

.ghost .bottom .leg {
    background-color: #fff;
    width: 24px;
    height: 15px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
}

.ghost .bottom .leg:nth-child(2n) {
    position: relative;
    top: -6px;
    background-color: #000;
    border-radius: 50%;
}
```

**Js**

```js
  document.body.addEventListener("mousemove", function (e) {
            console.log(e.pageX);
            document.querySelector('.ghost').style.left = e.pageX + 'px';
            document.querySelector('.ghost').style.top = e.pageY + 'px';
        })
```

**REACT**

```js
import React, { useState } from 'react'
const Ghost = () => {

  const [xy,setXY]=useState({x:0,y:0})
  const handlerMouseMove=(e)=>{
    setXY({x:e.clientX,y:e.clientY});
  }
  return (
    <div onMouseMove={(e)=>handlerMouseMove(e)}>
    <div className='ghost' style={{left:xy.x-50,top:xy.y-50}}>
      <div className='body'>
        <div className='face'>
          <div className='eye'></div>
          <div className='eye'></div>
          <div className='mouse'></div>
        </div>
      </div>
      <div className='bottom'>
        <div className='leg'></div>
        <div className='leg'></div>
        <div className='leg'></div>
        <div className='leg'></div>
        <div className='leg'></div>
      </div>
    </div>
    </div>
  )
}

export default Ghost
```


