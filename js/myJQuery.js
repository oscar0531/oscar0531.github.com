var Tween = {
    Linear: function(t,b,c,d){ return c*t/d + b; },
    Quad: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t + b;
        },
        easeOut: function(t,b,c,d){
            return -c *(t/=d)*(t-2) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t + b;
            return -c/2 * ((--t)*(t-2) - 1) + b;
        }
    },
    Cubic: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return c*((t=t/d-1)*t*t + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        }
    },
    Quart: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return -c * ((t=t/d-1)*t*t*t - 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
            return -c/2 * ((t-=2)*t*t*t - 2) + b;
        }
    },
    Quint: {
        easeIn: function(t,b,c,d){
            return c*(t/=d)*t*t*t*t + b;
        },
        easeOut: function(t,b,c,d){
            return c*((t=t/d-1)*t*t*t*t + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
            return c/2*((t-=2)*t*t*t*t + 2) + b;
        }
    },
    Sine: {
        easeIn: function(t,b,c,d){
            return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
        },
        easeOut: function(t,b,c,d){
            return c * Math.sin(t/d * (Math.PI/2)) + b;
        },
        easeInOut: function(t,b,c,d){
            return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
        }
    },
    Expo: {
        easeIn: function(t,b,c,d){
            return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
        },
        easeOut: function(t,b,c,d){
            return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
        },
        easeInOut: function(t,b,c,d){
            if (t==0) return b;
            if (t==d) return b+c;
            if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
            return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
        }
    },
    Circ: {
        easeIn: function(t,b,c,d){
            return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
        },
        easeOut: function(t,b,c,d){
            return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
        },
        easeInOut: function(t,b,c,d){
            if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
            return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
        }
    },
    Elastic: {
        easeIn: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
        },
        easeOut: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            return (a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b);
        },
        easeInOut: function(t,b,c,d,a,p){
            if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
            if (!a || a < Math.abs(c)) { a=c; var s=p/4; }
            else var s = p/(2*Math.PI) * Math.asin (c/a);
            if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
            return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
        }
    },
    Back: {
        easeIn: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            return c*(t/=d)*t*((s+1)*t - s) + b;
        },
        easeOut: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158;
            return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
        },
        easeInOut: function(t,b,c,d,s){
            if (s == undefined) s = 1.70158; 
            if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
            return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
        }
    },
    Bounce: {
        easeIn: function(t,b,c,d){
            return c - Tween.Bounce.easeOut(d-t, 0, c, d) + b;
        },
        easeOut: function(t,b,c,d){
            if ((t/=d) < (1/2.75)) {
                return c*(7.5625*t*t) + b;
            } else if (t < (2/2.75)) {
                return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
            } else if (t < (2.5/2.75)) {
                return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
            } else {
                return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
            }
        },
        easeInOut: function(t,b,c,d){
            if (t < d/2) return Tween.Bounce.easeIn(t*2, 0, c, d) * .5 + b;
            else return Tween.Bounce.easeOut(t*2-d, 0, c, d) * .5 + c*.5 + b;
        }
    }
}
!function(window,undefined){"use strict"
	function $(args){
		return new myJQuery(args);
	}
	function myJQuery(args){
		this.elements=[];
		this.domString = "";
		switch(typeof args){
			case "function":
				domReady(args);
				break;
			case "string":
				if(args.indexOf("<")!=-1){
					this.domString = args;
				} else {
					this.elements = getEle(args);
				}
				break;
			case "object":
				if(args.length){
					for (var i = 0; i < args.length; i++) {
						this.elements.push(args[i]);
					}
				}else{
					this.elements.push(args);
				}
				break;
		}
	}

	function domReady(fn){
		if(document.addEventListener){
			document.addEventListener("DOMContentLoaded",fn,false);	
		}else{
			document.attachEvent("onreadystatechange",function(){
				if(readyState=="complete"){
					fn && fn();
				}
			})
		}
	}
	function getEle(str,aParent){
		var arr=str.replace(/^\s+|\s+$/g,"").split(/\s+/g);
		aParent=aParent||[document];
		var aChild=[];
		for (var i = 0; i < arr.length; i++) {
			aChild=getByStr(aParent,arr[i]);
			aParent=aChild;
		}
		return aChild;
	}
	function getByStr(aParent,str){
		var aChild=[];
		for (var i = 0; i < aParent.length; i++) {
			switch(str.charAt(0)){
				case "#":
					var obj=document.getElementById(str.substring(1));
					obj && aChild.push(obj);
					break;
				case ".":
					var aEle=getByClass(aParent[i],str.substring(1));
					for (var i = 0; i < aEle.length; i++) {
						aChild.push(aEle[i]);
					}
					break;
				default:
					 if(/[0-9a-z]+#[0-9a-z\-_]+/.test(str)){//li#div1
					 	var arrName=str.split("#");
					 	var aEle=aParent[i].getElementsByTagName(arrName[0]);
					 	for (var i = 0; i < aEle.length; i++) {
					 		if (aEle[i].id==arrName[1]) {
					 			aChild.push(aEle[i]);
					 		}
					 	}
					 }else if (/[0-9a-z]+\.[0-9a-z\-_]+/.test(str)) {//li.box
					 	var arrName=str.split(".");
					 	var aEle=aParent[i].getElementsByTagName(arrName[0]);
					 	for (var i = 0; i < aEle.length; i++) {
					 		if (aEle[i].className.indexOf(arrName[1]) != -1) {
					 			aChild.push(aEle[i]);
					 		}
					 	}
					 }else if(/[0-9a-z]+\[\w+=\w+\]/.test(str)){//input[type=button]
					 	var arrName=str.split(/\[|=|\]/g);
					 	var aEle=aParent[i].getElementsByTagName(arrName[0]);
					 	for (var i = 0; i < aEle.length; i++) {
					 		if (aEle[i].getAttribute(arrName[1])==arrName[2]) {
					 			aChild.push(aEle[i]);
					 		}
					 	}
					 }else if(/[0-9a-z]+:\w+/.test(str)){//伪类 li:first   li:eq(index)
					 	var arrName=str.split(/:|\(|\)/);
					 	var aELe=aParent[i].getElementsByTagName(arrName[0]);
					 	switch(arrName[1]){
					 		case "first":
					 			aChild.push(aELe[0]);
					 			break;
					 		case "last":
					 			aChild.push(aELe[aELe.length-1])
					 			break;
					 		case "eq":
					 			aChild.push(aELe[arrName[2]]);
					 			break;
					 		case "lt":
					 			for (var i = 0; i < parseInt(arrName[2]); i++) {
					 				aChild.push(aELe[i]);
					 			}
					 			break;
					 		case "gt":
					 			for (var i = parseInt(arrName[2])+1; i < aELe.length; i++) {
					 				aChild.push(aELe[i]);
					 			}
					 			break;
					 		case "odd":
					 			for (var i = 0; i < aELe.length; i++) {
					 				if(i%2==0){
					 					aChild.push(aELe[i]);
					 				}				 				
					 			}
					 			break;
					 		case "even":
					 			for (var i = 0; i < aELe.length; i++) {
					 				if(i%2==1){
					 					aChild.push(aELe[i]);
					 				}				 				
					 			}
					 			break;
					 	}
					 }else{
					 	var aELe=aParent[i].getElementsByTagName(str);
					 	for (var i = 0; i < aELe.length; i++) {
					 		aChild.push(aELe[i]);
					 	}
					 }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
			}
		}
		return aChild;
	}
	function getByClass(oParent,sClass){
		if(oParent.getElementsByClassName){
			return oParent.getElementsByClassName(sClass);
		}else{
			var re=new RegExp("\\b"+sClass+"\\b");
			var res=[];
			var aELe=oParent.getElementsByTagName("*");
			for (var i = 0; i < aELe.length; i++) {
				if (re.test(aELe[i].className)) {
					res.push(aEle[i]);
				}
			}
			return res;
		}
	}
	function getStyle(obj,name){
		return (obj.currentStyle||getComputedStyle(obj,false))[name];
	}
	function addEvent(obj,sEv,fn){
		if(obj.addEventListener){
			obj.addEventListener(sEv,function(ev){
				if(!(fn.call(this,ev)))
				ev.cancelBubble=true;
				ev.preventDefault();
			},false);
		}else{
			obj.attachEvent("on"+sEv,function(){
				if(!(fn.call(this,event)))
				event.cancelBubble=true;
				return false;
			});
		}
	}
	window.$ = window.zQuery = $;
	"click|mouseover|mouseout|mousedown|mouseup|mousemove|keydown|keyup|contextmenu|change|scroll|resize|load".replace(/\w+/g,function(sEv){
		myJQuery.prototype[sEv]=function(fn){
			for (var i = 0; i < this.elements.length; i++) {
				addEvent(this.elements[i],sEv,fn);
			}
		}
	})
	function appendStr(oParent,str){
		var oTmp = document.createElement("div");
		oTmp.innerHTML = str;
		var aChild = oTmp.childNodes;
		while(aChild.length > 0){
			oParent.appendChild(aChild[0]);
		}
	}
	
	function move(obj,json,options){
		options = options ||{};
		options.duration = options.duration || 700;
		options.easing = options.easing || Tween.Linear;
		var start = {};
		var dis = {};
		for(var name in json){
			start[name] = parseFloat(getStyle(obj,name));
			dis[name] = json[name] - start[name];
		}
		var count = Math.round(options.duration/30);
		var  n = 0;
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			n++;
			for(var name in json){
				var cur = options.easing(n/count*options.duration,start[name],dis[name],options.duration);
				if(name == "opacity"){
					obj.style.opacity = cur;
					obj.style.filter = "alpha(opacity:"+cur*100+")";
				} else {
					obj.style[name] = cur + "px";
				}
			}
			if(n == count){
				clearInterval(obj.timer);
				options.complete && options.complete();
			}		
		},30);
	}
	myJQuery.prototype.css=function(name,value){
		if(arguments.length==2){
			for (var i = 0; i < this.elements.length; i++) {
				this.elements[i].style[name]=value;
			}
		}else{
			if(typeof name=="string"){
				return getStyle(this.elements[0],name);
			}else{
				for (var i = 0; i < this.elements.length; i++) {
					for (var j in name) {
						this.elements[i].style[j]=name[j];
					}				
				}	
			}
		}
	};
	myJQuery.prototype.index=function(){
		var obj=this.elements[0];
		var aELe=obj.parentNode.children;
		for (var i = 0; i < aELe.length; i++) {
			if(obj==aELe[i]){
				return i;
			}
		}
	};
	myJQuery.prototype.show=function(){
		for (var i = 0; i < this.elements.length; i++) {
			this.elements[i].style.display="block";
		}
	};
	myJQuery.prototype.hide=function(){
		for (var i = 0; i < this.elements.length; i++) {
			this.elements[i].style.display="none";
		}
	};
	myJQuery.prototype.attr=function(name,value){
		if(arguments.length==2){
			for (var i = 0; i < this.elements.length; i++) {
				this.elements[i].setAttribute(name,value);
			}
		}else{
			if(typeof name=="string"){
				return this.elements[0].getAttribute(name);
			}else{
				for (var i = 0; i < this.elements.length; i++) {
					for(var j in name){
						this.elements[i].setAttribute(j,name[j]);
					}
				}
			}
		}
	};
	myJQuery.prototype.get=function(n){
		return this.elements[n];
	};
	myJQuery.prototype.eq=function(n){
		return $(this.elements[n]);
	};
	myJQuery.prototype.find = function(str){
		var aChild = getEle(str,this.elements);
		return $(aChild);
	};
	myJQuery.prototype.addClass=function(sClass){
		var re=new RegExp("\\b"+sClass+"\\b");
		for (var i = 0; i < this.elements.length; i++) {
			if(!re.test(this.elements[i].className)){
				if(this.elements[i].className==""){
					this.elements[i].className=sClass;
				}else{
					this.elements[i].className=this.elements[i].className+" "+sClass;
				}
			}
		}
	};
	myJQuery.prototype.removeClass=function(sClass){
		var re=new RegExp("\\b"+sClass+"\\b","g");
		for (var i = 0; i < this.elements.length; i++) {
			if(re.test(this.elements[i].className)){
				this.elements[i].className=this.elements[i].className.replace(re,"").replace(/^\s+|\s+$/g,"").replace(/\s+/g," ");	
				if(this.elements[i].className==""){
					this.elements[i].removeAttribute("class");
				}
			}
		}
	};
	myJQuery.prototype.hasClass=function(sClass){
		var re=new RegExp("\\b"+sClass+"\\b");
		for (var i = 0; i < this.elements.length; i++) {
			if(re.test(this.elements[i].className)){
				return true;
			}	
		}
		return false;
	};
	myJQuery.prototype.toggleClass=function(sClass){
		if(this.hasClass(sClass)){
			this.removeClass(sClass);
		}else{
			this.addClass(sClass);
		}
	}
	myJQuery.prototype.mouseenter = function(fn){
		for(var i = 0; i < this.elements.length; i++){
			addEvent(this.elements[i],"mouseover",function(ev){
				var oFrom = ev.fromElement || ev.relatedTarget;
				if(oFrom && this.contains(oFrom)){
					return;
				}
				fn.call(this,ev);
			});
		}	
	};
	myJQuery.prototype.mouseleave = function(fn){
		for(var i = 0; i < this.elements.length; i++){
			addEvent(this.elements[i],"mouseout",function(ev){
				var oTo = ev.toElement || ev.relatedTarget;
				if(oTo && this.contains(oTo)){
					return;
				}
				fn.call(this,ev);
			});
		}	
	};
	myJQuery.prototype.toggle = function(){
		var _this = this;
		var _args = arguments;
		var len = arguments.length;
		for(var i = 0; i < this.elements.length; i++){
			(function(count){
				addEvent(_this.elements[i],"click",function(ev){
					_args[count%len].call(this,ev);				
					count++;
				});
			})(0);
		}	
	};
	$.fn = myJQuery.prototype;
	$.fn.extend = function(json){
		for(var name in json){
			myJQuery.prototype[name] = json[name];
		}
	};
	myJQuery.prototype.appendTo = function(str){
		var aParent = getEle(str);
		for(var i = 0; i < aParent.length; i++){
			appendStr(aParent[i],this.domString)
		} 
	};
	myJQuery.prototype.bind = function(sEv,fn){
		for(var i = 0; i < this.elements.length; i++){
			addEvent(this.elements[i],sEv,fn);
		}
	};
	myJQuery.prototype.each = function(fn){
		for(var i = 0; i < this.elements.length; i++){
			fn.call(this.elements[i],i,this.elements[i]);
		}
	}; 
	myJQuery.prototype.animate = function(json,options){
		for(var i = 0; i < this.elements.length; i++){
			move(this.elements[i],json,options);
		}
	};
}(window)