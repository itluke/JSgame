
var k=1;

	var oDiv = document.getElementById('gamediv1');
	var disX;
	var disY;
	
var oDivl ,oDivt,oDivw = oDiv.offsetWidth;
var itime;
var j = 1;


	
	
	oDiv.onmousedown = function(ev)
	 {

		var oEvent = ev || event;
		disX = oEvent.clientX - oDiv.offsetLeft;
		disY = oEvent.clientY - oDiv.offsetTop;
		
	
			
		document.onmousemove = function(ev)
		 {
		 
		 one();
			var oEvent = ev || event;
			var l = oEvent.clientX - disX;
			var t = oEvent.clientY - disY;
			var w = document.documentElement.clientWidth;
			var h = document.documentElement.clientHeight;
			if (l < 0)
			 {
				l = 0;
			}
			 else if (l > w - oDiv.offsetWidth)
			 {
				l = w - oDiv.offsetWidth;
			}
			if (t < 0)
			 {
				t = 0;
			}
			 else if (t > h - oDiv.offsetHeight)
			 {
				t = h - oDiv.offsetHeight;
			}
			oDiv.style.left = l + 'px';
			oDiv.style.top = t + 'px';
			oDivl = 	oDiv.offsetLeft;
			oDivt = 	oDiv.offsetTop;;
			
		};
		document.onmouseup = function()
		 {
			document.onmousemove = null;
			document.onmouseup = null;

		};
		return false;
	};
	function start(obj)
 {
	var vx = 10,
	vy = 10,
	opa = obj.style.opacity+0.4,
	rs = obj.style.width,
	color;
	$(obj).animate({
			opacity: opa});
			
	timer1 = setInterval(function()
	 {
		vx = Math.floor((Math.random() + 1) * 60 - 90);
		vy = Math.floor((Math.random() + 1) * 60 - 90);
		rs = Math.floor((Math.random() + 1) * 30 + 40);
		opa = (Math.random() * 0.6) + 0.4;
		color = toSix(Math.floor(Math.random() * 1000000));
		$(obj).animate({
			opacity: opa,
			width: rs,
			height: rs ,
			left: (obj.offsetLeft + obj.offsetWidth / 2 - rs / 2),
			top: (obj.offsetTop + obj.offsetHeight / 2 - rs / 2) 
		},
		30);
		$(obj).css('background', "#" + color);
	},
	1000);
	
	timer2 = setInterval(function() {
	     var left =  obj.offsetLeft + vx ;
		 var top = obj.offsetTop + vy ;
	
		if (  left >= (document.documentElement.clientWidth - obj.offsetWidth ))
		 {
			vx *= -1;
			left = (document.documentElement.clientWidth - obj.offsetWidth );
		}
		 else if (  left <= 0)
		 {
			
			vx *= -1;
			left = 0;
		}
		if (top >= (document.documentElement.clientHeight - obj.offsetHeight ))
		 {
			vy *= -1;
			top = (document.documentElement.clientHeight - obj.offsetHeight );
		}
		 else if (top  <= 0)
		 {
			vy *= -1;
			top = 0;
		}
		obj.style.left = left+ 'px';
		obj.style.top = top + 'px';
		
		 
			if (    Math.abs(obj.offsetLeft+rs/2-(oDivl+oDivw/2))<=((rs+oDivw)/2)&&
			  Math.abs(obj.offsetTop+rs/2-(oDivt+oDivw/2))<=((rs+oDivw)/2)&&k   
			)    
			 {
			
					k=0;
					alert( "Ç×£¬ÄãµÄ³É¼¨ÊÇ"+(new Date().getTime() - itime)+"ºÁÃë£¡"  );
					
				 document.location.reload();
				
			}
		

},30);

};

function toSix(n)
{
	if(n<=9)
	{
		return "00000"+n;
	}
	else if(n<=99)
	{
		return "0000"+n;
	}
	else if (n<=999)
	{
		return "000"+n;
	}
	else if (n<=9999)
	{
		return "00"+n;
	}
	else if (n<=99999)
	{
		return "0"+n; 
	}
	else if (n<=999999)
	{
		return n;
	}
};
function one()
 {
 	
	if (j) {
		itime = new Date().getTime();
		var oDiv = document.getElementById('gamediv1');
		var oDiv2 = document.getElementById('gamediv2');
		var oDiv3 = document.getElementById('gamediv3');
		var oDiv4 = document.getElementById('gamediv4');
		var oDiv5 = document.getElementById('gamediv5');
		var oDiv6 = document.getElementById('gamediv6');
		var oDiv7 = document.getElementById('gamediv7');
		var oDiv8 = document.getElementById('gamediv8');
		var oDiv9 = document.getElementById('gamediv9');
		start(oDiv2);
		start(oDiv3);
		start(oDiv4);
		start(oDiv5);
		start(oDiv7);
		start(oDiv6);
		start(oDiv8);
		start(oDiv9);
	}
	j = 0;
};
