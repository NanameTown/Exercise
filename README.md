Web講座 第11回 ソースコード
========

```

enchant();

window.onload = function(){
	var core = new Core(320, 320);
	core.fps = 30;
	core.keybind(13,"enter"); //return key
    var dir = ["↑","←","→","↓"];
    var dir_bool = ["up","left","right","down"];
    var key_buf = {};
    var press_count=0;
    var key_num;
    var dir_label;
	core.onload = function(){
        
        var KeyInit = function(){
            for(var key in (core.input)){
                key_buf[key] = 0;
            }
        }
        
        var KeyUpdate = function(){
            for(var key in core.input){
                if(core.input[key]===true){
                    key_buf[key] += 1;   
                }else{
                    key_buf[key] = 0;   
                }
            }
        }
        
        var AnyKeyPressCheck = function(array_key){
            var count=0;

            for(var i=0;i<=array_key.length-1;i++){
                if(key_buf[array_key[i]]===1){
                    count++;
                    break;   
                }
            }

            return count; 
        }

		var StartScene = function(){
			var scene = new Scene();
			var label = new Label("ここはスタート画面");
            count=0;
			scene.addChild(label);

			scene.on("enterframe",function(){
                KeyUpdate();
				if(key_buf["enter"]==1){
					core.replaceScene(GameScene());
				}
			});

			return scene;
		};

		var GameScene = function(){
			var scene = new Scene();
			var label = new Label("ここはゲーム画面");
			scene.addChild(label);
            
            dir_label = new Label(dir[key_num]);
            dir_label.x = 100;
            dir_label.y = 100;
            scene.addChild(dir_label);
            
            DirProcess();

			scene.on("enterframe",function(){
                KeyUpdate();
				if(AnyKeyPressCheck(dir_bool)===1){
                    if(key_buf[dir_bool[key_num]] === 1){
                        DirProcess();
                        press_count++;
                        console.log(press_count);
                    }else if(AnyKeyPressCheck(dir_bool)===1){
                        core.replaceScene(GameOverScene());
                    }
				}
			});

			return scene;
		};
        
        var DirProcess = function(){
            key_num = Math.floor(Math.random()*4);
            dir_label.text = dir[key_num];
        };
        
        var GameOverScene = function(){
            var scene = new Scene();
            var label = new Label("ここはゲームオーバー画面");
            scene.addChild(label);
            var label1 = new Label(press_count*100+"点です");
            label1.x = 100;
            label1.y = 200;
            scene.addChild(label1);
            
            scene.on("enterframe",function(){
                KeyUpdate();
                if(key_buf["enter"]==1){
                    core.replaceScene(StartScene());
                }
            });
            
            return scene;   
        }
        
        KeyInit();

		core.replaceScene(StartScene());
	};

	core.start();
};


```
