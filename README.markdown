# MakeMeVideoBt.js #
MakeMeVideoBt.js create a video iconic link with a background image on a top of an image or a div

<<<<<<< HEAD
 [see demo](http://makemevideobt.apps.5emeg.com/)


```html
<a href='http://makemevideobt.apps.5emeg.com/'>http://makemevideobt.apps.5emeg.com/
=======
```html
>>>>>>> 3d1a2186da14f418094c7745b2bfaf6130576346
<body>
  <div id="container">
      <img src="img/img.jpg" alt="img" class='bt-video' style='padding-left:50px;margin-top:50px'>
  </div> <!--! end of #container -->


  <script src="js/libs/jquery-1.6.2.min.js"></script>
  <script src="js/makeMeVideoBt.min.js"></script>

  

  <script >
    $(function (){
      $('.bt-video').makeMeVideoBt({img:'img/play.png'});
    })
  </script>
</body>
```
