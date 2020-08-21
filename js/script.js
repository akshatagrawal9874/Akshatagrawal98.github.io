// BURGER MENU
const navSlide=()=>{
  const burger=document.querySelector(".burger");
  const nav=document.querySelector(".burger-menu");
  //TOGGLE NAV
  burger.addEventListener('click',function(){
    nav.classList.toggle('nav-active');
  });
}
navSlide();


// SKILL ANIMATION
let skillSection=document.querySelector(".section-content .skills");
let dist=skillSection.getBoundingClientRect().top;
function skillHandler(){
	if(dist<=300){
		let skillItems=document.querySelectorAll(".section-content .skills .skill-item .skill-length");
		let i=0;
		let intervalId=window.setInterval(function(){
			if(i>=skillItems.length){
				window.clearInterval(intervalId);
				return;
			}
			let width=skillItems[i].getAttribute('data-value');
			skillItems[i].style.width=width;
			i++;
		},50);
		document.removeEventListener('scroll',skillHandler);
		return;
	}
	dist=skillSection.getBoundingClientRect().top;
}
document.addEventListener('scroll',skillHandler);


//CONTACT SECTION BACKGROUND ANIMATION
  var background = {}
  
  background.initializr = function ()
  {
    // var x=document.querySelector("#head");
    var $this = this;
     

   
    //option
    $this.id = "background_css3";
    $this.style = {bubbles_color:"#fff",stroke_width:0, stroke_color :"black"};
    $this.bubbles_number = 30;
    $this.speed = [1500,8000]; //milliseconds
    $this.max_bubbles_height = $this.height;
    $this.shape = false // 1 : circle | 2 : triangle | 3 : rect | false :random
    
    if($("#"+$this.id).length > 0){
      $("#"+$this.id).remove();
    }
    $this.object = $("<div style='z-inde:-1;margin:0;padding:0; overflow:hidden;position:absolute;bottom:0' id='"+$this.id+"'> </div>'").appendTo("#contact");
    
    $this.ww = $("#contact").width();
    $this.wh = $("#contact").height();
     // $this.wh="440vh";
    console.log($this.ww);
    console.log($this.wh);
    $this.width = $this.object.width($this.ww);
    $this.height = $this.object.height($this.wh);
    
    
    $("#contact").prepend("<style>.shape_background {transform-origin:center; width:80px; height:80px; background: "+$this.style.bubbles_color+"; position: absolute}</style>");
    
    
    for (i = 0; i < $this.bubbles_number; i++) {
        $this.generate_bubbles()
    }
    
  }

  var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
  
  

   background.generate_bubbles = function() {
     var $this = this;
     var base = $("<div class='shape_background'></div>");
     var shape_type = $this.shape ? $this.shape : Math.floor($this.rn(1,3));
     if(shape_type == 1) {
       var bolla = base.css({borderRadius: "50%"})
     }else if (shape_type == 2){
       var bolla = base.css({width:0, height:0, "border-style":"solid","border-width":"0 40px 69.3px 40px","border-color":"transparent transparent "+$this.style.bubbles_color+" transparent", background:"transparent"}); 
     }else{
       var bolla = base; 
     }    
     var rn_size = $this.rn(.8,1.2);
     bolla.css({"transform":"scale("+rn_size+") rotate("+$this.rn(-360,360)+"deg)", top:$this.wh+100, left:$this.rn(-60, $this.ww+60)});        
     bolla.appendTo($this.object);
     bolla.transit({top: $this.rn($this.wh/2,$this.wh/2-60), "transform":"scale("+rn_size+") rotate("+$this.rn(-360,360)+"deg)", opacity: 0},$this.rn($this.speed[0],$this.speed[1]), function(){
       $(this).remove();
       $this.generate_bubbles();
     })
       
    }


background.rn = function(from, to, arr) {
  if(arr){
          return Math.random() * (to - from + 1) + from;
  }else{
    return Math.floor(Math.random() * (to - from + 1) + from);
  }
    }
background.initializr()