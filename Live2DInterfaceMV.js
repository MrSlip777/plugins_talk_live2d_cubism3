//=============================================================================
// Live2DInterfaceMV.js
// ----------------------------------------------------------------------------
// Copyright (c) 2018-2020 Slip
// This software is released under the MIT License.
//-----------------------------------------------------------------------------
//

// Game_Live2d
//
// Slip 2016/12/25
//-----------------------------------------------------------------------------
/*:
* @plugindesc ゲームに使用するLive2Dの制御フラグ、設定ファイルなど
* @author Slip
*
* @param folder1
* @type string
* @desc live2Dモデルのフォルダパス
* @default assets/Koharu/
*
* @param moc3
* @type string
* @desc moc3のファイルパス
* @default Koharu.moc3
* @parent folder1
*
* @param texture
* @type string
* @desc textureのファイルパス
* @default Koharu.png
* @parent moc3
*
* @param motion3
* @type string[]
* @default ["Koharu.motion3.json"]
* @parent moc3
* @desc motion3のファイルパス
*
*/

//Game_Live2dの追加
function Game_Live2d() {
    this.initialize.apply(this, arguments);
}

Game_Live2d.prototype.initialize = function() {

    var parameters = PluginManager.parameters('Live2DInterfaceMV');

    //cubism3.0
    this._resources = null;
    this._loader = null;

    //cubism2.1
    //モデルの数
    this.MAXNUMBER = 16;

    //設定ファイル
    this._folder = String(parameters['folder1']);
    this._moc = String(parameters['moc3']);
    this._texture = String(parameters['texture']);

    var str = parameters['motion3'].replace('[','');
    str = str.replace(']','');
    str = str.replace(/"/g,'');
    this._motion = str.split(',');

    //生成したモデル
    this._model = {};

    this._visible = {};
    this._x = {};
    this._y = {};
    this._scale_x = {};
    this._scale_y = {};
    this._alpha = {};
    this._targetX = {};
    this._targetY = {};
    this._targetScaleX = {};
    this._targetScaleY = {};
    this._targetAlpha = {};    
    this._duration = {};    

    for(var i = 0; i < this.MAXNUMBER; i++){
        this._model[i] = null;
        this._visible[i] = false;
        this._x[i] = 0;
        this._y[i] = 0;
        this._scale_x[i] = 1.0;
        this._scale_y[i] = 1.0;
        this._alpha[i] = 1.0;
        this._targetX[i] = 0;
        this._targetY[i] = 0;
        this._targetScaleX[i] = 0;
        this._targetScaleY[i] = 0;
        this._targetAlpha[i] = 0;    
        this._duration[i] = 0;
    }
};

//表示設定
Game_Live2d.prototype.showModel = function(model_no) {
    this._visible[model_no] = true;
};

//非表示設定
//非表示自体はLive2DSprite.prototype._renderWebGLにて透過度が$SPM_live2d_minOpacityのとき
//に非表示にしているため、以下の関数は使用していない　Slip 2017/04/02
Game_Live2d.prototype.hidePicture = function(model_no) {
    this._visible[model_no] = false;
};

//表情制御
Game_Live2d.prototype.setExpression = function(model_no,expression,motion_no) {
    this._motion[model_no] = motion_no;
};

//live2dモデル表示直後のパラメータ設定
Game_Live2d.prototype.initModelParameter = function(model_no, x, y, scale_x, scale_y,alpha){
    this._x[model_no] = x;
    this._y[model_no] = y;
    this._scale_x[model_no] = scale_x;
    this._scale_y[model_no] = scale_y;
    this._alpha[model_no] = alpha;   
};

//live2dモデル移動後のパラメータ設定
Game_Live2d.prototype.moveModelParameter = function(model_no, x, y, scale_x, scale_y,alpha, duration){
    this._targetX[model_no] = x;
    this._targetY[model_no] = y;
    this._targetScaleX[model_no] = scale_x;
    this._targetScaleY[model_no] = scale_y;
    this._targetAlpha[model_no] = alpha;
    this._duration[model_no] = duration;
};

var $gameLive2d = null;

(function(){
    'use strict'
    const  DataManager_createGameObjects = DataManager.createGameObjects;
    DataManager.createGameObjects =function(){
        DataManager_createGameObjects.call(this);
        $gameLive2d = new Game_Live2d();
    };
    const Scene_Map_updateWaitCount =Scene_Map.prototype.updateWaitCount;
    Scene_Map.prototype.updateWaitCount =function(){
        Scene_Map_updateWaitCount.call(this);
    };

    const Scene_Map_terminate=Scene_Map.prototype.terminate;
    Scene_Map.prototype.terminate =function(){
        Scene_Map_terminate.call(this);
    };

    const Scene_Map_createWindowLayer=Scene_Map.prototype.createWindowLayer;
    Scene_Map.prototype.createWindowLayer=function(){
        this.createlive2d();   
        Scene_Map_createWindowLayer.call(this);
    };
})();

//-----------------------------------------------------------------------------
//Live2DManager
//会話上にLive2Dモデルを表示するクラス 
// Slip 2016/12/25
//-----------------------------------------------------------------------------
function Live2DManager() {
    this.initialize.apply(this, arguments);
}

Live2DManager.prototype.initialize = function() {
    live2dmodel = null;
}

//表示フラグ
Live2DManager.prototype.live2dVisible = function (flag) {
    live2dmodel.visible = flag;
};

//表情設定（.motion3.jsonの手前の文字列）
Live2DManager.prototype.live2dEmotion = function (stEmotion){
    var animation 
    = LIVE2DCUBISMFRAMEWORK.Animation.fromMotion3Json($gameLive2d._resources[stEmotion].data);
    live2dmodel.animator
        .getLayer("base")
        .play(animation);    
}

var live2dmodel = null;

var live2dloadmodel = function (loader, resources){
    //var app = new PIXI.Application(816, 640, { backgroundColor: 0x1099bb });
    var app = new PIXI.Application(816, 640);

    //表情初期値
    var calledName = $gameLive2d._motion[0].replace(".motion3.json","");

    //jsonデータ等を保持する
    $gameLive2d._resources = resources;
    $gameLive2d._loader = loader;

    //Slip 2018/06/18
    var pm = new PlatformManager();
    
    pm.loadBytes($gameLive2d._folder+$gameLive2d._moc, function(afterbuffer) {
            
        resources['moc'].data = afterbuffer;

        var moc = LIVE2DCUBISMCORE.Moc.fromArrayBuffer(resources['moc'].data);

        if(moc){
            //LIVE2DCUBISMPIXIがツクールMVのエディタ上で読めない
            if(live2dmodel == null){
                live2dmodel = new LIVE2DCUBISMPIXI.ModelBuilder()
                    .setMoc(moc)
                    .setTimeScale(1)
                    .addTexture(0, resources['texture'].texture)
                    .addAnimatorLayer("base", LIVE2DCUBISMFRAMEWORK.BuiltinAnimationBlenders.OVERRIDE, 1)
                    .build();
            }

            SceneManager._scene._spriteset.addChild(live2dmodel);
            SceneManager._scene._spriteset.addChild(live2dmodel.masks);
                
            var animation = LIVE2DCUBISMFRAMEWORK.Animation.fromMotion3Json(resources[calledName].data);
            live2dmodel.animator
                .getLayer("base")
                .play(animation);

            app.ticker.add(function (deltaTime) {
                live2dmodel.update(deltaTime);
                live2dmodel.masks.update(app.renderer);
            });

            var onResize = function (event) {
                if (event === void 0) { event = null; }
                //var width = window.innerWidth;
                //var height = (width / 16.0) * 9.0;
                //位置、大きさはブラウザの大きさ問わず固定する Slip 2018/02/26
                var width = 1200;
                var height = 750;
                app.view.style.width = width + "px";
                app.view.style.height = height + "px";
                app.renderer.resize(width, height);
                live2dmodel.position = new PIXI.Point((width * 0.5), (height * 0.5));
                live2dmodel.scale = new PIXI.Point((live2dmodel.position.x * 0.8), (live2dmodel.position.x * 0.8));
                live2dmodel.masks.resize(app.view.width, app.view.height);
            
            };
            live2dmodel.visible = false;
            
            onResize();
            window.onresize = onResize;
           
        }
    });
     
};

Scene_Map.prototype.createlive2d = function(){
    
    if(live2dmodel == null){
        //Cubism3.0
        $gameLive2d._model[0] = PIXI.loader
        //$gameLive2d._model[0] = new PIXI.loaders.Loader()
            .add('moc', $gameLive2d._folder+$gameLive2d._moc, { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.BUFFER }) 
            .add('texture',  $gameLive2d._folder+$gameLive2d._texture);
        
        $gameLive2d._motion.forEach(function(value){
            var calledName = value.replace(".motion3.json","");
            //PIXI.loader
            $gameLive2d._model[0]
            .add(calledName, $gameLive2d._folder+value, { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON })
        });
        
        //PIXI.loader
        $gameLive2d._model[0].load(live2dloadmodel);
        
    }
    else{
        SceneManager._scene._spriteset.addChild(live2dmodel);
        SceneManager._scene._spriteset.addChild(live2dmodel.masks);
    }

};






