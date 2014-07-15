Web講座 第10回 ソースコード
========

```

enchant();

window.onload = function(){
	var core = new Core(320, 320);
	core.fps = 30;
	core.keybind(13,"enter"); //return key
	core.onload = function(){

		var StartScene = function(){
			var scene = new Scene();
			var label = new Label("ここはスタート画面");
			scene.addChild(label);

			scene.on('enterframe',function(){
				if(core.input.enter){
					core.replaceScene(GameScene());
				}
			});

			return scene;
		};

		var GameScene = function(){
			var scene = new Scene();
			var label = new Label("ここはゲーム画面");
			scene.addChild(label);

			scene.on('enterframe',function(){
				if(core.input.enter){
					core.replaceScene(StartScene());
				}
			});

			return scene;
		};

		core.replaceScene(StartScene());
	};

	core.start();
};


```
