Exercise
========

```
enchant();  
  
window.onload = function(){  
	var core = new Core(320, 320);  
	core.preload("img/chara1.png");  
	core.fps = 30;  
	core.onload = function(){  
        var Bear = Class.create(Sprite,{  
			initialize: function(x,y){  
				Sprite.call(this,32,32);  
				this.x = x;  
				this.y = y;  
				this.image = core.assets["img/chara1.png"];  
				this.on("enterframe",function(){  
					if(core.input.right){  
						this.x+=5;  
					}else if(core.input.left){  
                        this.x-=5;  
					}  
                    for(i=0;i<=9;i++){  
                        for(j=i+1;j<=10;j++){  
                            if(bear[i].intersect(bear[j])){  
                                bear[i].frame = 3;  
                                bear[j].frame = 3;  
                            }  
                        }  
                    }  
				});  
				core.rootScene.addChild(this);  
			}  
		});  
        var bear = [];  
        for(i=0;i<=10;i++){  
            bear[i] = new Bear(Math.floor(Math.random()*100),Math.floor(Math.random()*100));  
        }  
	};  
	core.start();  
}  
```
