/**
 *
 *  You can modify and use this source freely
 *  only for the development of application related Live2D.
 *
 *  (c) Live2D Inc. All rights reserved.
 */
//更新履歴
//ツクールMVローカル環境用に修正　Slip 2018/02/04
//loadLive2DModelにてmoc3ファイルを読み込むように修正   Slip 2018/06/24
//
//============================================================
//============================================================
//  class PlatformManager     extend IPlatformManager
//============================================================
//============================================================

function PlatformManager()
{

}

//============================================================
//    PlatformManager # loadBytes()
//============================================================

PlatformManager.prototype.loadBytes       = function(path/*String*/, callback)
{
    var request = new XMLHttpRequest();
	request.open("GET", path, true);
	request.responseType = "arraybuffer";
	request.onload = function(){
		switch(request.status){
		//ローカル環境対応　失敗したときも返り値が0になるが・・・
	       	case 0:
			callback(request.response);
			break;
		//ブラウザ環境対応
		case 200:
			callback(request.response);
			break;
		default:
			console.error("Failed to load (" + request.status + ") : " + path);
			break;
		}
    }
    
    request.onerror = function(){
        console.error("Error");
    }

	request.send(null);
	//return request;
}
