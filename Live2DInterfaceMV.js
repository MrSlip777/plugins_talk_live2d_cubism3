//=============================================================================
// Live2DInterfaceMV.js
// ----------------------------------------------------------------------------
// Copyright (c) 2018-2020 Slip
// This software is released under the MIT License.
//-----------------------------------------------------------------------------

/*:
* @plugindesc ツクールMV上でlive2dを立ち絵表示するプラグイン
* @author Slip
*
* @param setting
* @type note
* @default ※ここの欄はメモとして使用してください
*
* @param vertical
* @type number
* @desc 縦の表示位置
* @default 320
* @min 0
* @max 640
* @parent setting
*
* @param left
* @type number
* @desc 横の表示位置（左）
* @default 100
* @min 0
* @max 816
* @parent setting
*
* @param middle
* @type number
* @desc 横の表示位置（中央）
* @default 408
* @min 0
* @max 816
* @parent setting
*
* @param right
* @type number
* @desc 横の表示位置（右）
* @default 716
* @min 0
* @max 816
* @parent setting
*
* @param scale_V
* @type string
* @desc 縦の表示倍率
* @default 1.0
* @parent setting
*
* @param scale_H
* @type string
* @desc 横の表示倍率
* @default 1.0
* @parent setting
*
* @param folder_1
* @type string
* @desc live2Dモデルのフォルダパス
* @default 
*
* @param name_1
* @type string
* @desc モデルの名前
* @default 
* @parent folder_1
*
* @param moc3_1
* @type string
* @desc moc3のファイルパス
* @default 
* @parent folder_1
*
* @param texture_1
* @type string
* @desc textureのファイルパス
* @default 
* @parent moc3_1
*
* @param motion3_1
* @type string[]
* @default []
* @parent moc3_1
* @desc motion3のファイルパス
*
* @param folder_2
* @type string
* @desc live2Dモデルのフォルダパス
* @default 
*
* @param name_2
* @type string
* @desc モデルの名前
* @default
* @parent folder_2
*
* @param moc3_2
* @type string
* @desc moc3のファイルパス
* @default 
* @parent folder_2
*
* @param texture_2
* @type string
* @desc textureのファイルパス
* @default 
* @parent moc3_2
*
* @param motion3_2
* @type string[]
* @default []
* @parent moc3_2
* @desc motion3のファイルパス
*
* @param folder_3
* @type string
* @desc live2Dモデルのフォルダパス
* @default 
*
* @param name_3
* @type string
* @desc モデルの名前
* @default 
* @parent folder_3
*
* @param moc3_3
* @type string
* @desc moc3のファイルパス
* @default 
* @parent folder_3
*
* @param texture_3
* @type string
* @desc textureのファイルパス
* @default 
* @parent moc3_3
*
* @param motion3_3
* @type string[]
* @default []
* @parent moc3_3
* @desc motion3のファイルパス
*
* @param folder_4
* @type string
* @desc live2Dモデルのフォルダパス
* @default 
*
* @param name_4
* @type string
* @desc モデルの名前
* @default 
* @parent folder_4
*
* @param moc3_4
* @type string
* @desc moc3のファイルパス
* @default 
* @parent folder_4
*
* @param texture_4
* @type string
* @desc textureのファイルパス
* @default 
* @parent moc3_4
*
* @param motion3_4
* @type string[]
* @default []
* @parent moc3_4
* @desc motion3のファイルパス
*
* @param folder_5
* @type string
* @desc live2Dモデルのフォルダパス
* @default 
*
* @param name_5
* @type string
* @desc モデルの名前
* @default 
* @parent folder_5
*
* @param moc3_5
* @type string
* @desc moc3のファイルパス
* @default 
* @parent folder_5
*
* @param texture_5
* @type string
* @desc textureのファイルパス
* @default 
* @parent moc3_5
*
* @param motion3_5
* @type string[]
* @default []
* @parent moc3_5
* @desc motion3のファイルパス
*
* @param folder_6
* @type string
* @desc live2Dモデルのフォルダパス
* @default 
*
* @param name_6
* @type string
* @desc モデルの名前
* @default 
* @parent folder_6
*
* @param moc3_6
* @type string
* @desc moc3のファイルパス
* @default 
* @parent folder_6
*
* @param texture_6
* @type string
* @desc textureのファイルパス
* @default 
* @parent moc3_6
*
* @param motion3_6
* @type string[]
* @default []
* @parent moc3_6
* @desc motion3のファイルパス
*
* @param folder_7
* @type string
* @desc live2Dモデルのフォルダパス
* @default 
*
* @param name_7
* @type string
* @desc モデルの名前
* @default 
* @parent folder_7
*
* @param moc3_7
* @type string
* @desc moc3のファイルパス
* @default 
* @parent folder_7
*
* @param texture_7
* @type string
* @desc textureのファイルパス
* @default 
* @parent moc3_7
*
* @param motion3_7
* @type string[]
* @default []
* @parent moc3_7
* @desc motion3のファイルパス
*
* @param folder_8
* @type string
* @desc live2Dモデルのフォルダパス
* @default 
*
* @param name_8
* @type string
* @desc モデルの名前
* @default 
* @parent folder_8
*
* @param moc3_8
* @type string
* @desc moc3のファイルパス
* @default 
* @parent folder_8
*
* @param texture_8
* @type string
* @desc textureのファイルパス
* @default 
* @parent moc3_8
*
* @param motion3_8
* @type string[]
* @default []
* @parent moc3_8
* @desc motion3のファイルパス
*
* @param folder_9
* @type string
* @desc live2Dモデルのフォルダパス
* @default 
*
* @param name_9
* @type string
* @desc モデルの名前
* @default 
* @parent folder_9
*
* @param moc3_9
* @type string
* @desc moc3のファイルパス
* @default 
* @parent folder_9
*
* @param texture_9
* @type string
* @desc textureのファイルパス
* @default 
* @parent moc3_9
*
* @param motion3_9
* @type string[]
* @default []
* @parent moc3_9
* @desc motion3のファイルパス
*
* @param folder_10
* @type string
* @desc live2Dモデルのフォルダパス
* @default 
*
* @param name_10
* @type string
* @desc モデルの名前
* @default 
* @parent folder_10
*
* @param moc3_10
* @type string
* @desc moc3のファイルパス
* @default 
* @parent folder_10
*
* @param texture_10
* @type string
* @desc textureのファイルパス
* @default 
* @parent moc3_10
*
* @param motion3_10
* @type string[]
* @default []
* @parent moc3_10
* @desc motion3のファイルパス
*
* @param folder_11
* @type string
* @desc live2Dモデルのフォルダパス
* @default 
*
* @param name_11
* @type string
* @desc モデルの名前
* @default 
* @parent folder_11
*
* @param moc3_11
* @type string
* @desc moc3のファイルパス
* @default 
* @parent folder_11
*
* @param texture_11
* @type string
* @desc textureのファイルパス
* @default 
* @parent moc3_11
*
* @param motion3_11
* @type string[]
* @default []
* @parent moc3_11
* @desc motion3のファイルパス
*
* @param folder_12
* @type string
* @desc live2Dモデルのフォルダパス
* @default 
*
* @param name_12
* @type string
* @desc モデルの名前
* @default 
* @parent folder_12
*
* @param moc3_12
* @type string
* @desc moc3のファイルパス
* @default 
* @parent folder_12
*
* @param texture_12
* @type string
* @desc textureのファイルパス
* @default 
* @parent moc3_12
*
* @param motion3_12
* @type string[]
* @default []
* @parent moc3_12
* @desc motion3のファイルパス
*
* @param folder_13
* @type string
* @desc live2Dモデルのフォルダパス
* @default 
*
* @param name_13
* @type string
* @desc モデルの名前
* @default 
* @parent folder_13
*
* @param moc3_13
* @type string
* @desc moc3のファイルパス
* @default 
* @parent folder_13
*
* @param texture_13
* @type string
* @desc textureのファイルパス
* @default 
* @parent moc3_13
*
* @param motion3_13
* @type string[]
* @default []
* @parent moc3_13
* @desc motion3のファイルパス
*
* @param folder_14
* @type string
* @desc live2Dモデルのフォルダパス
* @default 
*
* @param name_14
* @type string
* @desc モデルの名前
* @default 
* @parent folder_14
*
* @param moc3_14
* @type string
* @desc moc3のファイルパス
* @default 
* @parent folder_14
*
* @param texture_14
* @type string
* @desc textureのファイルパス
* @default 
* @parent moc3_14
*
* @param motion3_14
* @type string[]
* @default []
* @parent moc3_14
* @desc motion3のファイルパス
*
* @param folder_15
* @type string
* @desc live2Dモデルのフォルダパス
* @default 
*
* @param name_15
* @type string
* @desc モデルの名前
* @default 
* @parent folder_15
*
* @param moc3_15
* @type string
* @desc moc3のファイルパス
* @default 
* @parent folder_15
*
* @param texture_15
* @type string
* @desc textureのファイルパス
* @default 
* @parent moc3_15
*
* @param motion3_15
* @type string[]
* @default []
* @parent moc3_15
* @desc motion3のファイルパス
* @param folder_16
* @type string
* @desc live2Dモデルのフォルダパス
* @default 
*
* @param name_16
* @type string
* @desc モデルの名前
* @default 
* @parent folder_16
*
* @param moc3_16
* @type string
* @desc moc3のファイルパス
* @default 
* @parent folder_16
*
* @param texture_16
* @type string
* @desc textureのファイルパス
* @default 
* @parent moc3_16
*
* @param motion3_16
* @type string[]
* @default []
* @parent moc3_16
* @desc motion3のファイルパス
*
* @help
* live2d立ち絵表示プラグイン　ver1.0.0
* 
* live2d(cubism3.0)のモデルを会話中に立ち絵表示するプラグインです。
*
* 使い方：
* 以下のプラグインコマンドを設定することで、Live2dモデルを操作できます。
*
* ■ 表示
* 　TalkLive2d モデル名 表示
* 　例）TalkLive2d コハル 表示
*
* ■ 消去
* 　TalkLive2d モデル名 消去
* 　例）TalkLive2d コハル 消去
*
* ■ モーション
* 　TalkLive2d モデル名 モーション モーション名
*　※モーション名・・・〇〇.motion3.jsonの〇〇部分
* 　例）TalkLive2d コハル Koharu
*
* ■ 位置変更
* 　TalkLive2d モデル名 右（または、中央、左）
* 　例）TalkLive2d コハル 左
*
* ■ 倍率変更
* 　TalkLive2d モデル名 倍率変更 数値
* 　例）TalkLive2d コハル 倍率変更 4.0
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

    //設定ファイル
    this._folder = {};
    this._moc = {};
    this._texture = {};
    this._name = {};
    this._motion = {};
    this._pos_left = Number(parameters['left']);
    this._pos_middle = Number(parameters['middle']);
    this._pos_right = Number(parameters['right']);
    this._pos_vertical = Number(parameters['vertical']);

    this._scale_V = parameters['scale_V'];
    this._scale_H = parameters['scale_H'];

    for(var i = 1; i<=this.MAXNUMBER; i++){
        this._folder[i] = String(parameters['folder_'+i]);
        this._moc[i] = String(parameters['moc3_'+i]);
        this._texture[i] = String(parameters['texture_'+i]);
        this._name[i] = String(parameters['name_'+i]);        
        
        var str = parameters['motion3_'+i].replace('[','');
        str = str.replace(']','');
        str = str.replace(/"/g,'');
        this._motion[i] = str.split(',');

    }
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

    // プラグインコマンド
    const Game_Interpreter_pluginCommand = Game_Interpreter.prototype.pluginCommand;
    Game_Interpreter.prototype.pluginCommand = function(command, args) {
        Game_Interpreter_pluginCommand.call(this, command, args);
        if (command === 'TalkLive2d') {
            var gameLive2d_no = 1;
            for(var number in $gameLive2d._name){
                if($gameLive2d._name[number] == args[0]){
                    break;
                }
                gameLive2d_no++;
            }

            var model_no = 0;
            //モデル名を検索
            var path = $gameLive2d._folder[gameLive2d_no]+$gameLive2d._moc[gameLive2d_no];
            for(var number in live2dmodel){
                if(live2dmodel[number]._userData == path){
                    model_no = number;
                    break;
                }
            }

            switch (args[1]) {
            case 'show':
            case '表示':
                Live2DManager.prototype.live2dVisible(model_no,true);
                break;
            case 'hide':
            case '消去':
                Live2DManager.prototype.live2dVisible(model_no,false);
                break;
            case 'motion':
            case 'モーション':
                Live2DManager.prototype.live2dMotion(model_no,args[2]);
                break;
            case 'left':
            case '左':
                Live2DManager.prototype.live2dSetPosition_X(model_no,$gameLive2d._pos_left);
                break;
            case 'middle':
            case '中央':
                Live2DManager.prototype.live2dSetPosition_X(model_no,$gameLive2d._pos_middle);
                break;
            case 'right':
            case '右':
                Live2DManager.prototype.live2dSetPosition_X(model_no,$gameLive2d._pos_right);
                break;
            case 'scale':
            case '倍率変更':
                Live2DManager.prototype.live2dSetScale(model_no,args[2]);
                break;
            default:
                break;
            }
        }
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

var live2dmodel = {};

Live2DManager.prototype.initialize = function() {
    for(var i=1; i<=$gameLive2d.MAXNUMBER; i++){
        live2dmodel[i] = null;
    }
}

//表示フラグ
Live2DManager.prototype.live2dVisible = function (model_no,flag) {
    if(live2dmodel[model_no] != null){
        live2dmodel[model_no].visible = flag;
    }
};

//表情設定（.motion3.jsonの手前の文字列）
Live2DManager.prototype.live2dMotion = function (model_no,stMotion){
    if(live2dmodel[model_no] != null){
        var animation 
        = LIVE2DCUBISMFRAMEWORK.Animation.fromMotion3Json($gameLive2d._resources[model_no][stMotion].data);
        live2dmodel[model_no].animator
            .getLayer("base")
            .play(animation);
    }
}

//表示位置変更
Live2DManager.prototype.live2dSetPosition_X = function (model_no,pos_x) {
    if(live2dmodel[model_no] != null){
        live2dmodel[model_no].position.x = pos_x;
    }
};

//倍率変更
Live2DManager.prototype.live2dSetScale = function (model_no,scale) {
    if(live2dmodel[model_no] != null){   
        live2dmodel[model_no].scale.x = $gameLive2d._pos_middle*scale;
        live2dmodel[model_no].scale.y = $gameLive2d._pos_middle*scale;
    }
};

function ModelBuilder(model_no,moc,texture){
    if(live2dmodel[model_no] == null){
        live2dmodel[model_no] = new LIVE2DCUBISMPIXI.ModelBuilder()
            .setMoc(moc)
            .setTimeScale(1)
            .addTexture(0, texture)
            .addAnimatorLayer("base", LIVE2DCUBISMFRAMEWORK.BuiltinAnimationBlenders.OVERRIDE, 1)
            .build();

    }
};

var app = new PIXI.Application(816, 640);

function StartAnimation(model_no,data){
    var animation
    = LIVE2DCUBISMFRAMEWORK.Animation.fromMotion3Json(data);
    live2dmodel[model_no].animator
        .getLayer("base")
        .play(animation);
};

function SceneCombineModel(model_no){
    SceneManager._scene._spriteset.addChild(live2dmodel[model_no]);
    SceneManager._scene._spriteset.addChild(live2dmodel[model_no].masks);

    app.ticker.add(function (deltaTime) {
        live2dmodel[model_no].update(deltaTime);
        live2dmodel[model_no].masks.update(app.renderer);
    });
};

function ModelDataInitialize(model_no){
    var width = 816;
    var height = 640;
    live2dmodel[model_no].visible = false;
    live2dmodel[model_no].position
    = new PIXI.Point($gameLive2d._pos_middle,$gameLive2d._pos_vertical);
    live2dmodel[model_no].scale 
    = new PIXI.Point(($gameLive2d._pos_middle*$gameLive2d._scale_H), 
    ($gameLive2d._pos_middle*$gameLive2d._scale_V));
    live2dmodel[model_no].masks.resize(app.view.width, app.view.height);
};

function loadlive2dFromResorces(model_no,resources,afterbuffer){
    resources['moc'].data = afterbuffer;
        
    var moc = LIVE2DCUBISMCORE.Moc.fromArrayBuffer(resources['moc'].data);

    if(moc){
        //LIVE2DCUBISMPIXIがツクールMVのエディタ上で読めない
        ModelBuilder(model_no,moc,resources['texture'].texture);
        StartAnimation(model_no,resources['defaultMotion'].data);

        live2dmodel[model_no]._userData = resources.moc.url;
        SceneCombineModel(model_no);
        ModelDataInitialize(model_no);
    }
};

function loadAssets(){
     
    var model_no = 1;

    if($gameLive2d._folder[model_no] !="" && $gameLive2d._moc[model_no] != ""
    && $gameLive2d._texture[model_no] != ""){
        var modelLoader = null;
        modelLoader = new PIXI.loaders.Loader()
            .add('moc', $gameLive2d._folder[model_no]+$gameLive2d._moc[model_no], { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.BUFFER }) 
            .add('texture',  $gameLive2d._folder[model_no]+$gameLive2d._texture[model_no]);

        modelLoader.add('defaultMotion', $gameLive2d._folder[model_no]+$gameLive2d._motion[model_no][0], 
            { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON });
        
        $gameLive2d._motion[model_no].forEach(function(value){
            var calledName = value.replace(".motion3.json","");
            modelLoader
            .add(calledName, $gameLive2d._folder[model_no]+value, { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON })
        });

        modelLoader.load(function(loader, resources){
            var model_no = 1;
            //jsonデータ等を保持する
            $gameLive2d._resources[model_no] = resources;
   
            PlatformManager.prototype.loadBytes(resources.moc.url, function(afterbuffer) {           
                loadlive2dFromResorces(model_no,resources,afterbuffer);

            });
        });
        
    }

    var model_no = 2;

    if($gameLive2d._folder[model_no] !="" && $gameLive2d._moc[model_no] != ""
    && $gameLive2d._texture[model_no] != ""){
        var modelLoader = null;
        modelLoader = new PIXI.loaders.Loader()
            .add('moc', $gameLive2d._folder[model_no]+$gameLive2d._moc[model_no], { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.BUFFER }) 
            .add('texture',  $gameLive2d._folder[model_no]+$gameLive2d._texture[model_no]);

        modelLoader.add('defaultMotion', $gameLive2d._folder[model_no]+$gameLive2d._motion[model_no][0], 
            { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON });
        
        $gameLive2d._motion[model_no].forEach(function(value){
            var calledName = value.replace(".motion3.json","");
            modelLoader
            .add(calledName, $gameLive2d._folder[model_no]+value, { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON })
        });

        modelLoader.load(function(loader, resources){
            var model_no = 2;
            //jsonデータ等を保持する
            $gameLive2d._resources[model_no] = resources;

            PlatformManager.prototype.loadBytes(resources.moc.url, function(afterbuffer) {
                loadlive2dFromResorces(model_no,resources,afterbuffer);

            });
        });
        
    }

    var model_no = 3;

    if($gameLive2d._folder[model_no] !="" && $gameLive2d._moc[model_no] != ""
    && $gameLive2d._texture[model_no] != ""){
        var modelLoader = null;
        modelLoader = new PIXI.loaders.Loader()
            .add('moc', $gameLive2d._folder[model_no]+$gameLive2d._moc[model_no], { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.BUFFER }) 
            .add('texture',  $gameLive2d._folder[model_no]+$gameLive2d._texture[model_no]);

        modelLoader.add('defaultMotion', $gameLive2d._folder[model_no]+$gameLive2d._motion[model_no][0], 
            { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON });
        
        $gameLive2d._motion[model_no].forEach(function(value){
            var calledName = value.replace(".motion3.json","");
            modelLoader
            .add(calledName, $gameLive2d._folder[model_no]+value, { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON })
        });

        modelLoader.load(function(loader, resources){
            var model_no = 3;
            //jsonデータ等を保持する
            $gameLive2d._resources[model_no] = resources;

            PlatformManager.prototype.loadBytes(resources.moc.url, function(afterbuffer) {
                loadlive2dFromResorces(model_no,resources,afterbuffer);

            });
        });
        
    }
    var model_no = 4;

    if($gameLive2d._folder[model_no] !="" && $gameLive2d._moc[model_no] != ""
    && $gameLive2d._texture[model_no] != ""){
        var modelLoader = null;
        modelLoader = new PIXI.loaders.Loader()
            .add('moc', $gameLive2d._folder[model_no]+$gameLive2d._moc[model_no], { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.BUFFER }) 
            .add('texture',  $gameLive2d._folder[model_no]+$gameLive2d._texture[model_no]);

        modelLoader.add('defaultMotion', $gameLive2d._folder[model_no]+$gameLive2d._motion[model_no][0], 
            { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON });
        
        $gameLive2d._motion[model_no].forEach(function(value){
            var calledName = value.replace(".motion3.json","");
            modelLoader
            .add(calledName, $gameLive2d._folder[model_no]+value, { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON })
        });

        modelLoader.load(function(loader, resources){
            var model_no = 4;
            //jsonデータ等を保持する
            $gameLive2d._resources[model_no] = resources;

            PlatformManager.prototype.loadBytes(resources.moc.url, function(afterbuffer) {
                loadlive2dFromResorces(model_no,resources,afterbuffer);

            });
        });
        
    }
    
    var model_no = 5;

    if($gameLive2d._folder[model_no] !="" && $gameLive2d._moc[model_no] != ""
    && $gameLive2d._texture[model_no] != ""){
        var modelLoader = null;
        modelLoader = new PIXI.loaders.Loader()
            .add('moc', $gameLive2d._folder[model_no]+$gameLive2d._moc[model_no], { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.BUFFER }) 
            .add('texture',  $gameLive2d._folder[model_no]+$gameLive2d._texture[model_no]);

        modelLoader.add('defaultMotion', $gameLive2d._folder[model_no]+$gameLive2d._motion[model_no][0], 
            { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON });
        
        $gameLive2d._motion[model_no].forEach(function(value){
            var calledName = value.replace(".motion3.json","");
            modelLoader
            .add(calledName, $gameLive2d._folder[model_no]+value, { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON })
        });

        modelLoader.load(function(loader, resources){
            var model_no = 5;
            //jsonデータ等を保持する
            $gameLive2d._resources[model_no] = resources;

            PlatformManager.prototype.loadBytes(resources.moc.url, function(afterbuffer) {
                loadlive2dFromResorces(model_no,resources,afterbuffer);

            });
        });
        
    }

    var model_no = 6;

    if($gameLive2d._folder[model_no] !="" && $gameLive2d._moc[model_no] != ""
    && $gameLive2d._texture[model_no] != ""){
        var modelLoader = null;
        modelLoader = new PIXI.loaders.Loader()
            .add('moc', $gameLive2d._folder[model_no]+$gameLive2d._moc[model_no], { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.BUFFER }) 
            .add('texture',  $gameLive2d._folder[model_no]+$gameLive2d._texture[model_no]);

        modelLoader.add('defaultMotion', $gameLive2d._folder[model_no]+$gameLive2d._motion[model_no][0], 
            { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON });
        
        $gameLive2d._motion[model_no].forEach(function(value){
            var calledName = value.replace(".motion3.json","");
            modelLoader
            .add(calledName, $gameLive2d._folder[model_no]+value, { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON })
        });

        modelLoader.load(function(loader, resources){
            var model_no = 6;
            //jsonデータ等を保持する
            $gameLive2d._resources[model_no] = resources;

            PlatformManager.prototype.loadBytes(resources.moc.url, function(afterbuffer) {
                loadlive2dFromResorces(model_no,resources,afterbuffer);

            });
        });
        
    }

    var model_no = 7;

    if($gameLive2d._folder[model_no] !="" && $gameLive2d._moc[model_no] != ""
    && $gameLive2d._texture[model_no] != ""){
        var modelLoader = null;
        modelLoader = new PIXI.loaders.Loader()
            .add('moc', $gameLive2d._folder[model_no]+$gameLive2d._moc[model_no], { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.BUFFER }) 
            .add('texture',  $gameLive2d._folder[model_no]+$gameLive2d._texture[model_no]);

        modelLoader.add('defaultMotion', $gameLive2d._folder[model_no]+$gameLive2d._motion[model_no][0], 
            { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON });
        
        $gameLive2d._motion[model_no].forEach(function(value){
            var calledName = value.replace(".motion3.json","");
            modelLoader
            .add(calledName, $gameLive2d._folder[model_no]+value, { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON })
        });

        modelLoader.load(function(loader, resources){
            var model_no = 7;
            //jsonデータ等を保持する
            $gameLive2d._resources[model_no] = resources;

            PlatformManager.prototype.loadBytes(resources.moc.url, function(afterbuffer) {
                loadlive2dFromResorces(model_no,resources,afterbuffer);

            });
        });
        
    }

    var model_no = 8;

    if($gameLive2d._folder[model_no] !="" && $gameLive2d._moc[model_no] != ""
    && $gameLive2d._texture[model_no] != ""){
        var modelLoader = null;
        modelLoader = new PIXI.loaders.Loader()
            .add('moc', $gameLive2d._folder[model_no]+$gameLive2d._moc[model_no], { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.BUFFER }) 
            .add('texture',  $gameLive2d._folder[model_no]+$gameLive2d._texture[model_no]);

        modelLoader.add('defaultMotion', $gameLive2d._folder[model_no]+$gameLive2d._motion[model_no][0], 
            { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON });
        
        $gameLive2d._motion[model_no].forEach(function(value){
            var calledName = value.replace(".motion3.json","");
            modelLoader
            .add(calledName, $gameLive2d._folder[model_no]+value, { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON })
        });

        modelLoader.load(function(loader, resources){
            var model_no = 8;
            //jsonデータ等を保持する
            $gameLive2d._resources[model_no] = resources;

            PlatformManager.prototype.loadBytes(resources.moc.url, function(afterbuffer) {
                loadlive2dFromResorces(model_no,resources,afterbuffer);

            });
        });
        
    }

    var model_no = 9;

    if($gameLive2d._folder[model_no] !="" && $gameLive2d._moc[model_no] != ""
    && $gameLive2d._texture[model_no] != ""){
        var modelLoader = null;
        modelLoader = new PIXI.loaders.Loader()
            .add('moc', $gameLive2d._folder[model_no]+$gameLive2d._moc[model_no], { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.BUFFER }) 
            .add('texture',  $gameLive2d._folder[model_no]+$gameLive2d._texture[model_no]);

        modelLoader.add('defaultMotion', $gameLive2d._folder[model_no]+$gameLive2d._motion[model_no][0], 
            { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON });
        
        $gameLive2d._motion[model_no].forEach(function(value){
            var calledName = value.replace(".motion3.json","");
            modelLoader
            .add(calledName, $gameLive2d._folder[model_no]+value, { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON })
        });

        modelLoader.load(function(loader, resources){
            var model_no = 9;
            //jsonデータ等を保持する
            $gameLive2d._resources[model_no] = resources;

            PlatformManager.prototype.loadBytes(resources.moc.url, function(afterbuffer) {
                loadlive2dFromResorces(model_no,resources,afterbuffer);

            });
        });
        
    }

    var model_no = 10;

    if($gameLive2d._folder[model_no] !="" && $gameLive2d._moc[model_no] != ""
    && $gameLive2d._texture[model_no] != ""){
        var modelLoader = null;
        modelLoader = new PIXI.loaders.Loader()
            .add('moc', $gameLive2d._folder[model_no]+$gameLive2d._moc[model_no], { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.BUFFER }) 
            .add('texture',  $gameLive2d._folder[model_no]+$gameLive2d._texture[model_no]);

        modelLoader.add('defaultMotion', $gameLive2d._folder[model_no]+$gameLive2d._motion[model_no][0], 
            { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON });
        
        $gameLive2d._motion[model_no].forEach(function(value){
            var calledName = value.replace(".motion3.json","");
            modelLoader
            .add(calledName, $gameLive2d._folder[model_no]+value, { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON })
        });

        modelLoader.load(function(loader, resources){
            var model_no = 10;
            //jsonデータ等を保持する
            $gameLive2d._resources[model_no] = resources;

            PlatformManager.prototype.loadBytes(resources.moc.url, function(afterbuffer) {
                loadlive2dFromResorces(model_no,resources,afterbuffer);

            });
        });
        
    }
    
    var model_no = 11;

    if($gameLive2d._folder[model_no] !="" && $gameLive2d._moc[model_no] != ""
    && $gameLive2d._texture[model_no] != ""){
        var modelLoader = null;
        modelLoader = new PIXI.loaders.Loader()
            .add('moc', $gameLive2d._folder[model_no]+$gameLive2d._moc[model_no], { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.BUFFER }) 
            .add('texture',  $gameLive2d._folder[model_no]+$gameLive2d._texture[model_no]);

        modelLoader.add('defaultMotion', $gameLive2d._folder[model_no]+$gameLive2d._motion[model_no][0], 
            { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON });
        
        $gameLive2d._motion[model_no].forEach(function(value){
            var calledName = value.replace(".motion3.json","");
            modelLoader
            .add(calledName, $gameLive2d._folder[model_no]+value, { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON })
        });

        modelLoader.load(function(loader, resources){
            var model_no = 11;
            //jsonデータ等を保持する
            $gameLive2d._resources[model_no] = resources;

            PlatformManager.prototype.loadBytes(resources.moc.url, function(afterbuffer) {
                loadlive2dFromResorces(model_no,resources,afterbuffer);

            });
        });
        
    }
    
    var model_no = 12;

    if($gameLive2d._folder[model_no] !="" && $gameLive2d._moc[model_no] != ""
    && $gameLive2d._texture[model_no] != ""){
        var modelLoader = null;
        modelLoader = new PIXI.loaders.Loader()
            .add('moc', $gameLive2d._folder[model_no]+$gameLive2d._moc[model_no], { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.BUFFER }) 
            .add('texture',  $gameLive2d._folder[model_no]+$gameLive2d._texture[model_no]);

        modelLoader.add('defaultMotion', $gameLive2d._folder[model_no]+$gameLive2d._motion[model_no][0], 
            { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON });
        
        $gameLive2d._motion[model_no].forEach(function(value){
            var calledName = value.replace(".motion3.json","");
            modelLoader
            .add(calledName, $gameLive2d._folder[model_no]+value, { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON })
        });

        modelLoader.load(function(loader, resources){
            var model_no = 12;
            //jsonデータ等を保持する
            $gameLive2d._resources[model_no] = resources;

            PlatformManager.prototype.loadBytes(resources.moc.url, function(afterbuffer) {
                loadlive2dFromResorces(model_no,resources,afterbuffer);

            });
        });
        
    }
    
    var model_no = 13;

    if($gameLive2d._folder[model_no] !="" && $gameLive2d._moc[model_no] != ""
    && $gameLive2d._texture[model_no] != ""){
        var modelLoader = null;
        modelLoader = new PIXI.loaders.Loader()
            .add('moc', $gameLive2d._folder[model_no]+$gameLive2d._moc[model_no], { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.BUFFER }) 
            .add('texture',  $gameLive2d._folder[model_no]+$gameLive2d._texture[model_no]);

        modelLoader.add('defaultMotion', $gameLive2d._folder[model_no]+$gameLive2d._motion[model_no][0], 
            { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON });
        
        $gameLive2d._motion[model_no].forEach(function(value){
            var calledName = value.replace(".motion3.json","");
            modelLoader
            .add(calledName, $gameLive2d._folder[model_no]+value, { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON })
        });

        modelLoader.load(function(loader, resources){
            var model_no = 13;
            //jsonデータ等を保持する
            $gameLive2d._resources[model_no] = resources;

            PlatformManager.prototype.loadBytes(resources.moc.url, function(afterbuffer) {
                loadlive2dFromResorces(model_no,resources,afterbuffer);

            });
        });
        
    }

    var model_no = 14;

    if($gameLive2d._folder[model_no] !="" && $gameLive2d._moc[model_no] != ""
    && $gameLive2d._texture[model_no] != ""){
        var modelLoader = null;
        modelLoader = new PIXI.loaders.Loader()
            .add('moc', $gameLive2d._folder[model_no]+$gameLive2d._moc[model_no], { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.BUFFER }) 
            .add('texture',  $gameLive2d._folder[model_no]+$gameLive2d._texture[model_no]);

        modelLoader.add('defaultMotion', $gameLive2d._folder[model_no]+$gameLive2d._motion[model_no][0], 
            { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON });
        
        $gameLive2d._motion[model_no].forEach(function(value){
            var calledName = value.replace(".motion3.json","");
            modelLoader
            .add(calledName, $gameLive2d._folder[model_no]+value, { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON })
        });

        modelLoader.load(function(loader, resources){
            var model_no = 14;
            //jsonデータ等を保持する
            $gameLive2d._resources[model_no] = resources;

            PlatformManager.prototype.loadBytes(resources.moc.url, function(afterbuffer) {
                loadlive2dFromResorces(model_no,resources,afterbuffer);

            });
        });
        
    }
    
    var model_no = 15;

    if($gameLive2d._folder[model_no] !="" && $gameLive2d._moc[model_no] != ""
    && $gameLive2d._texture[model_no] != ""){
        var modelLoader = null;
        modelLoader = new PIXI.loaders.Loader()
            .add('moc', $gameLive2d._folder[model_no]+$gameLive2d._moc[model_no], { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.BUFFER }) 
            .add('texture',  $gameLive2d._folder[model_no]+$gameLive2d._texture[model_no]);

        modelLoader.add('defaultMotion', $gameLive2d._folder[model_no]+$gameLive2d._motion[model_no][0], 
            { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON });
        
        $gameLive2d._motion[model_no].forEach(function(value){
            var calledName = value.replace(".motion3.json","");
            modelLoader
            .add(calledName, $gameLive2d._folder[model_no]+value, { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON })
        });

        modelLoader.load(function(loader, resources){
            var model_no = 15;
            //jsonデータ等を保持する
            $gameLive2d._resources[model_no] = resources;

            PlatformManager.prototype.loadBytes(resources.moc.url, function(afterbuffer) {
                loadlive2dFromResorces(model_no,resources,afterbuffer);

            });
        });
        
    }
    
    var model_no = 16;

    if($gameLive2d._folder[model_no] !="" && $gameLive2d._moc[model_no] != ""
    && $gameLive2d._texture[model_no] != ""){
        var modelLoader = null;
        modelLoader = new PIXI.loaders.Loader()
            .add('moc', $gameLive2d._folder[model_no]+$gameLive2d._moc[model_no], { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.BUFFER }) 
            .add('texture',  $gameLive2d._folder[model_no]+$gameLive2d._texture[model_no]);

        modelLoader.add('defaultMotion', $gameLive2d._folder[model_no]+$gameLive2d._motion[model_no][0], 
            { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON });
        
        $gameLive2d._motion[model_no].forEach(function(value){
            var calledName = value.replace(".motion3.json","");
            modelLoader
            .add(calledName, $gameLive2d._folder[model_no]+value, { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON })
        });

        modelLoader.load(function(loader, resources){
            var model_no = 16;
            //jsonデータ等を保持する
            $gameLive2d._resources[model_no] = resources;

            PlatformManager.prototype.loadBytes(resources.moc.url, function(afterbuffer) {
                loadlive2dFromResorces(model_no,resources,afterbuffer);

            });
        });
        
    }    
};

Scene_Map.prototype.createlive2d = function(){

    if(live2dmodel[1] == null){
        loadAssets();
    }    

    for(var i=1; i<=$gameLive2d.MAXNUMBER; i++){
        if(live2dmodel[i] != null){
            SceneManager._scene._spriteset.addChild(live2dmodel[i]);
            SceneManager._scene._spriteset.addChild(live2dmodel[i].masks);
        }
    }
};






