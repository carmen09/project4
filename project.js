 //键盘事件从字母A开始
 document.onkeydown=function(event){
    var au = document.getElementById("myAudio");
          var e = event || window.event || arguments.callee.caller.arguments[0];
          if(e && e.keyCode==65){ // 按 A 
              //要做的事情
              setcolor();
              setcurrent("A");
              au.pause();  //暂停事件
              au.setAttribute("src","./assert/do,re/do.wav");  //设置需要读取的音频文件
              au.play();  //播放
            }
            if(e && e.keyCode==66){ // 按 B
              setcolor();
              setcurrent("B");
              //严格来讲用FOR循环.
              au.pause();
              au.setAttribute("src","./assert/do,re/re.wav");
              au.play();
    
        }
            if(e && e.keyCode==67){ // 按 C
              setcolor();
              //要做的事情
              setcurrent("C");
              //严格来讲用FOR循环.
              au.pause();
              au.setAttribute("src","./assert/do,re/mi.wav");
              au.play();
            }
            if(e && e.keyCode==68){ // 按 D
                setcolor();
                //要做的事情
                setcurrent("D");
                //严格来讲用FOR循环.
                au.pause();
                au.setAttribute("src","./assert/do,re/fa.wav");
                au.play();
              }

              if(e && e.keyCode==69){ // 按 E
                setcolor();
                //要做的事情
                setcurrent("E");
                //严格来讲用FOR循环.
                au.pause();
                au.setAttribute("src","./assert/do,re/so.wav");
                au.play();
              }


              if(e && e.keyCode==70){ // 按 F
                setcolor();
                //要做的事情
                setcurrent("F");
                //严格来讲用FOR循环.
                au.pause();
                au.setAttribute("src","./assert/do,re/la.wav");
                au.play();
              }
              if(e && e.keyCode==71){ // 按 G
                setcolor();
                //要做的事情
                setcurrent("G");
                //严格来讲用FOR循环.
                au.pause();
                au.setAttribute("src","./assert/do,re/si.wav");
                au.play();
              }
              if(e && e.keyCode==72){ // 按 H
                //要做的事情
                setcolor();
                setcurrent("A");
                au.pause();  //暂停事件
                au.setAttribute("src","./assert/do,re/do.wav");  //设置需要读取的音频文件
                au.play();  //播放
              }

              if(e && e.keyCode==73){ // 按 I
                setcolor();
                setcurrent("B");
                //严格来讲用FOR循环.
                au.pause();
                au.setAttribute("src","./assert/do,re/re.wav");
                au.play();
      
          }
          if(e && e.keyCode==74){ // 按 J
            setcolor();
            //要做的事情
            setcurrent("C");
            //严格来讲用FOR循环.
            au.pause();
            au.setAttribute("src","./assert/do,re/mi.wav");
            au.play();
          }

          if(e && e.keyCode==75){ // 按 K
            setcolor();
            //要做的事情
            setcurrent("D");
            //严格来讲用FOR循环.
            au.pause();
            au.setAttribute("src","./assert/do,re/fa.wav");
            au.play();
          }


          if(e && e.keyCode==76){ // 按 L
            setcolor();
            //要做的事情
            setcurrent("E");
            //严格来讲用FOR循环.
            au.pause();
            au.setAttribute("src","./assert/do,re/so.wav");
            au.play();
          }


          if(e && e.keyCode==77){ // 按 M
            setcolor();
            //要做的事情
            setcurrent("F");
            //严格来讲用FOR循环.
            au.pause();
            au.setAttribute("src","./assert/do,re/la.wav");
            au.play();
          }
          if(e && e.keyCode==78){ // 按 N
            setcolor();
            //要做的事情
            setcurrent("G");
            //严格来讲用FOR循环.
            au.pause();
            au.setAttribute("src","./assert/do,re/si.wav");
            au.play();
          }

          if(e && e.keyCode==79){ // 按 o
            //要做的事情
            setcolor();
            setcurrent("A");
            au.pause();  //暂停事件
            au.setAttribute("src","./assert/do,re/do.wav");  //设置需要读取的音频文件
            au.play();  //播放
          }
          if(e && e.keyCode==80){ // 按 p
            setcolor();
            setcurrent("B");
            //严格来讲用FOR循环.
            au.pause();
            au.setAttribute("src","./assert/do,re/re.wav");
            au.play();
  
      }
      if(e && e.keyCode==81){ // 按 q
        setcolor();
        //要做的事情
        setcurrent("C");
        //严格来讲用FOR循环.
        au.pause();
        au.setAttribute("src","./assert/do,re/mi.wav");
        au.play();
      }
      if(e && e.keyCode==82){ // 按 r
        setcolor();
        //要做的事情
        setcurrent("D");
        //严格来讲用FOR循环.
        au.pause();
        au.setAttribute("src","./assert/do,re/fa.wav");
        au.play();
      }

      if(e && e.keyCode==83){ // 按 s
        setcolor();
        //要做的事情
        setcurrent("E");
        //严格来讲用FOR循环.
        au.pause();
        au.setAttribute("src","./assert/do,re/so.wav");
        au.play();
      }


      if(e && e.keyCode==84){ // 按 t
        setcolor();
        //要做的事情
        setcurrent("F");
        //严格来讲用FOR循环.
        au.pause();
        au.setAttribute("src","./assert/do,re/la.wav");
        au.play();
      }
      if(e && e.keyCode==85){ // 按 u
        setcolor();
        //要做的事情
        setcurrent("G");
        //严格来讲用FOR循环.
        au.pause();
        au.setAttribute("src","./assert/do,re/si.wav");
        au.play();
      }
      if(e && e.keyCode==86){ // 按 v
        //要做的事情
        setcolor();
        setcurrent("A");
        au.pause();  //暂停事件
        au.setAttribute("src","./assert/do,re/do.wav");  //设置需要读取的音频文件
        au.play();  //播放
      }
      if(e && e.keyCode==87){ // 按 w
        setcolor();
        setcurrent("B");
        //严格来讲用FOR循环.
        au.pause();
        au.setAttribute("src","./assert/do,re/re.wav");
        au.play();

  }
      if(e && e.keyCode==88){ // 按 x
        setcolor();
        //要做的事情
        setcurrent("C");
        //严格来讲用FOR循环.
        au.pause();
        au.setAttribute("src","./assert/do,re/mi.wav");
        au.play();
      }
      if(e && e.keyCode==89){ // 按 y
          setcolor();
          //要做的事情
          setcurrent("D");
          //严格来讲用FOR循环.
          au.pause();
          au.setAttribute("src","./assert/do,re/fa.wav");
          au.play();
        }

        if(e && e.keyCode==90){ // 按 z
          setcolor();
          //要做的事情
          setcurrent("E");
          //严格来讲用FOR循环.
          au.pause();
          au.setAttribute("src","./assert/do,re/so.wav");
          au.play();
        }
         //if(e && e.keyCode==113){ // 按 F2 
               //要做的事情
          /// alert("F2");
      //  }            
        //  if(e && e.keyCode==13){ // enter 键
               //要做的事情
          //   alert("ENTER");
          //  au.setAttribute("src","1.mp3");
          // au.pause();
               //au.play();
        //  }
      }; 


      ///清除所有按过的键的背景色
      function setcolor()
      {
          var big = document.getElementById("divbig");
          var arr = big.children;
          for(var i=0;i<arr.length;i++)
          {
           var id= arr[i].id;
           document.getElementById(id).style.backgroundColor="White";
            arr[i].style.color="Black";
          }
      }

      function setcurrent(id)
      {
        var cur = document.getElementById(id);
        cur.style.backgroundColor="Black";
        cur.style.color="White";
      }