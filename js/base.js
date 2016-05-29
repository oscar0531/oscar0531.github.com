$(function(){"use strict"
	setTimeout(function(){
		$("#header .creavity").animate({width:430},{duration:1000});
	},1000);
	$("#header .name").animate({opacity:1,top:400});
	$("#header .name h3").mouseover(function(){
		$(this).animate({fontSize:20},{easing:Tween.Quad.easeOut});
	});
	$("#header .name h3").mouseout(function(){
		$(this).animate({fontSize:16},{easing:Tween.Quad.easeOut});
	});
	$("#header .name h3").eq(2).click(function(){
		document.documentElement.scrollTop = document.body.scrollTop = $("#aboutme").get(0).offsetTop;
	});
	$("#header .show-tel").mouseover(function(){
		$("#header .show-tel div").animate({height:100},{easing:Tween.Bounce.easeOut});
		$("#header .show-tel div").addClass("over");
	});
	$("#header .show-tel").mouseout(function(){
		$("#header .show-tel div").animate({height:0},{easing:Tween.Bounce.easeOut,complete:function(){
			$("#header .show-tel div").removeClass("over");
		}});
	});
	var bHobby=true;
	var bContent=true;
	var bClick=false;
	$(document).scroll(function(){
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		var clientH=document.documentElement.clientHeight;
		var scrollH=scrollTop+clientH;
		var oContent=document.getElementById("content");
		var oHobby=document.getElementById("hobby");
		if(scrollH>oContent.offsetTop&&scrollTop<oContent.offsetTop+oContent.scrollHeight){
			if(bContent){
				bContent=false;
				$("#content h2").animate({opacity:1,top:50},{easing:Tween.Quad.easeOut,complete:function(){
					$("#content .skillicon").animate({opacity:1,top:130},{easing:Tween.Quad.easeOut,duration:1000});
					$("#content .skill").animate({opacity:1,top:280},{easing:Tween.Quad.easeOut,duration:1000});
				}});
			}
		}else{
			$("#content h2").animate({opacity:0,top:-100},{easing:Tween.Quad.easeOut,duration:500});
			$("#content .skillicon").animate({opacity:0,top:80},{easing:Tween.Quad.easeOut,duration:500});
			$("#content .skill").animate({opacity:0,top:320},{easing:Tween.Quad.easeOut,duration:500});
			bContent=true;
		}	
		$("#content .skillicon li").mouseenter(function(){
			$(this).addClass("active");
		});
		$("#content .skillicon li").mouseleave(function(){
			$(this).removeClass("active");
		});		
		if(scrollH>oHobby.offsetTop&&scrollTop<oHobby.offsetTop+oHobby.scrollHeight){
			if(bHobby){
				bHobby=false;
				$("#hobby .hobby-box").animate({left:100},{easing:Tween.Bounce.easeOut,duration:1000});
				setTimeout(function(){
					$("#ancient").animate({top:0},{easing:Tween.Quad.easeOut,duration:500});
				},500)
				setTimeout(function(){
					$("#trend").animate({top:100},{easing:Tween.Quad.easeOut,duration:500});
				},700)
				setTimeout(function(){
					$("#trip").animate({top:200},{easing:Tween.Quad.easeOut,duration:500});
				},900)
				setTimeout(function(){
					$("#science").animate({top:300},{easing:Tween.Quad.easeOut,duration:500});
				},1100)
			}
		}else{
			bHobby=true;
			$("#hobby .hobby-box").animate({left:0},{duration:200});
			$("#ancient").animate({top:500},{duration:200});
			$("#trend").animate({top:500},{duration:200});
			$("#trip").animate({top:500},{duration:200});
			$("#science").animate({top:500},{duration:200});
		}
	});
	var aContent=$("#forjob img");
	var aHead=$("#forjob ul li");
	aHead.mouseover(function(){
		aHead.removeClass("active");
		aContent.animate({opacity:0});
		$(this).addClass("active");
		aContent.eq($(this).index()).animate({opacity:1});
	});
	$("#touchme ul li").mouseover(function(){
		$(this).addClass("active");
	});
	$("#touchme ul li").eq(0).mouseover(function(){
		$("#touchme .s-contact").css("background","#55acee");
	});
	$("#touchme ul li").eq(1).mouseover(function(){
		$("#touchme .s-contact").css("background","#3b5998");
	});
	$("#touchme ul li").eq(2).mouseover(function(){
		$("#touchme .s-contact").css("background","#cc2127");
	});
	$("#touchme ul li").eq(3).mouseover(function(){
		$("#touchme .s-contact").css("background","#3f729b");
	});
	$("#touchme ul li").eq(4).mouseover(function(){
		$("#touchme .s-contact").css("background","#dd4b39");
	});
	$("#touchme ul li").mouseout(function(){
		$("#touchme ul li").removeClass("active");
		$("#touchme .s-contact").css("background","#eaeaea");
	});
	$("#touchme ul li").eq(1).click(function(){
		$("#qq").animate({height:370},{easing:Tween.Quad.easeOut,duration:300});
		$("#weixin").css("height","0px");
	});	
	$("#qq").click(function(){
		$("#qq").animate({height:0},{easing:Tween.Quad.easeOut,duration:300});
	});
	$("#touchme ul li").eq(2).click(function(){
		$("#weixin").animate({height:370},{easing:Tween.Quad.easeOut,duration:300});
		$("#qq").css("height","0px");
	});	
	$("#weixin").click(function(){
		$("#weixin").animate({height:0},{easing:Tween.Quad.easeOut,duration:300});
	});
	$("#footer a").click(function(){
		document.documentElement.scrollTop = document.body.scrollTop =0;
	});
});