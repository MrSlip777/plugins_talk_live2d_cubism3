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
* @param folder_1
* @type string
* @desc live2Dモデルのフォルダパス
* @default assets/Koharu/
*
* @param moc3_1
* @type string
* @desc moc3のファイルパス
* @default Koharu.moc3
* @parent folder_1
*
* @param texture_1
* @type string
* @desc textureのファイルパス
* @default Koharu.png
* @parent moc3_1
*
* @param motion3_1
* @type string[]
* @default ["Koharu.motion3.json"]
* @parent moc3_1
* @desc motion3のファイルパス
*
* @param folder_2
* @type string
* @desc live2Dモデルのフォルダパス
* @default assets/Mark_model3/
*
* @param moc3_2
* @type string
* @desc moc3のファイルパス
* @default Mark.moc3
* @parent folder_2
*
* @param texture_2
* @type string
* @desc textureのファイルパス
* @default Mark.2048/texture_00.png
* @parent moc3_2
*
* @param motion3_2
* @type string[]
* @default ["mark_m01.motion3.json","mark_m02.motion3.json","mark_m03.motion3.json","mark_m04.motion3.json","mark_m05.motion3.json"]
* @parent moc3_2
* @desc motion3のファイルパス
*
*/

//Game_Live2dの追加
function Game_Live2d() {
    this.initialize.apply(this, arguments);
}

Game_Live2d.prototype.initialize = function() {

    var parameters = PluginManager.parameters('Live2DInterfaceMV');

    //モデルの内部データ
    this._resources = {};
    this._loader = {};

    //モデルの数
    this.MAXNUMBER = 16;

    //読み込み中のモデル（読み込み時にしか使わない）
    this._loadNum = 1;
    this._initMotion = {};

    //設定ファイル
    this._folder = {};
    this._moc = {};
    this._texture = {};
    this._folder[0] = String(parameters['folder_1']);
    this._moc[0] = String(parameters['moc3_1']);
    this._texture[0] = String(parameters['texture_1']);
    
    this._motion = {};
    var str = parameters['motion3_1'].replace('[','');
    str = str.replace(']','');
    str = str.replace(/"/g,'');
    this._motion[0] = str.split(',');
    this._initMotion[0] = this._motion[0][0].replace(".motion3.json","");

    this._folder[1] = String(parameters['folder_2']);
    this._moc[1] = String(parameters['moc3_2']);
    this._texture[1] = String(parameters['texture_2']);

    str = parameters['motion3_2'].replace('[','');
    str = str.replace(']','');
    str = str.replace(/"/g,'');
    this._motion[1] = str.split(',');
    this._initMotion[1] = this._motion[1][0].replace(".motion3.json","");

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
    live2dmodel[0] = null;
    live2dmodel[1] = null;
}

//表示フラグ
Live2DManager.prototype.live2dVisible = function (model_no,flag) {
    live2dmodel[model_no].visible = flag;
};

//表情設定（.motion3.jsonの手前の文字列）
Live2DManager.prototype.live2dEmotion = function (model_no,stEmotion){
    var animation 
    = LIVE2DCUBISMFRAMEWORK.Animation.fromMotion3Json($gameLive2d._resources[model_no][stEmotion].data);
    live2dmodel[model_no].animator
        .getLayer("base")
        .play(animation);    
}

var live2dmodel = {};

var live2dloadmodels = {};
var app = new PIXI.Application(816, 640);

function live2dloadmodel(loader, resources,model_no){
    //表情初期値
    var calledName = $gameLive2d._motion[model_no][0].replace(".motion3.json","");

    //jsonデータ等を保持する
    $gameLive2d._resources[model_no] = resources;
    $gameLive2d._loader[model_no] = loader;

    //Slip 2018/06/18
    var pm = new PlatformManager();
    
    pm.loadBytes($gameLive2d._folder[model_no]+$gameLive2d._moc[model_no], function(afterbuffer) {
            
        resources['moc'].data = afterbuffer;

        var moc = LIVE2DCUBISMCORE.Moc.fromArrayBuffer(resources['moc'].data);

        if(moc){
            //LIVE2DCUBISMPIXIがツクールMVのエディタ上で読めない
            if(live2dmodel[model_no] == null){
                live2dmodel[model_no] = new LIVE2DCUBISMPIXI.ModelBuilder()
                    .setMoc(moc)
                    .setTimeScale(1)
                    .addTexture(0, resources['texture'].texture)
                    .addAnimatorLayer("base", LIVE2DCUBISMFRAMEWORK.BuiltinAnimationBlenders.OVERRIDE, 1)
                    .build();
            }

            SceneManager._scene._spriteset.addChild(live2dmodel[model_no]);
            SceneManager._scene._spriteset.addChild(live2dmodel[model_no].masks);
                
            var animation
             = LIVE2DCUBISMFRAMEWORK.Animation.fromMotion3Json(resources[calledName].data);
            live2dmodel[model_no].animator
                .getLayer("base")
                .play(animation);
            
            app.ticker.add(function (deltaTime) {
                live2dmodel[model_no].update(deltaTime);
                live2dmodel[model_no].masks.update(app.renderer);
            });
            var width = 1200;
            var height = 750;
            live2dmodel[model_no].visible = false;
            live2dmodel[model_no].position = new PIXI.Point((width * 0.5), (height * 0.5));
            live2dmodel[model_no].scale
             = new PIXI.Point((live2dmodel[model_no].position.x * 0.8), (live2dmodel[model_no].position.x * 0.8));
            live2dmodel[model_no].masks.resize(app.view.width, app.view.height);

        }
    });
    
};

function loadAssets(model_no){
    var modelLoader = null;

    modelLoader = new PIXI.loaders.Loader()
        .add('moc', $gameLive2d._folder[model_no]+$gameLive2d._moc[model_no], { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.BUFFER }) 
        .add('texture',  $gameLive2d._folder[model_no]+$gameLive2d._texture[model_no]);
    
    $gameLive2d._motion[model_no].forEach(function(value){
        var calledName = value.replace(".motion3.json","");
        modelLoader
        .add(calledName, $gameLive2d._folder[model_no]+value, { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON })
    });

    modelLoader.load(
        function (loader, resources){
            live2dloadmodel(loader, resources,$gameLive2d._loadNum);
            $gameLive2d._loadNum--;
        }
    );
};

Scene_Map.prototype.createlive2d = function(){
    
    for(var i=0; i<2; i++){
        if(live2dmodel[i] == null){
            loadAssets(i);
        }
        else{
            SceneManager._scene._spriteset.addChild(live2dmodel[i]);
            SceneManager._scene._spriteset.addChild(live2dmodel[i].masks);
        }
    }
};






