'use strict';
//const controllers = require('./lib/controllers');
const axios = require('axios');
const plugin = {};

plugin.init = async (params) => {

};

plugin.verifyUid = function(params, callback){
	params.templateData.regFormEntry.push({
		label: '游戏UID',
		html: '<input class="form-control" type="number" placeholder="请填写官服/B服游戏UID" name="uidinput" id="uidinput" />',
	});
	callback(null, params);
};
plugin.VerityBind = function(params, callback){
	const uid = params.uidinput;
	if(!Number.isInteger(uid)){
		throw new Error('错误的UID');
	}else{
		const url = "";
		const resp = await axios.get(url, {
			params:{
				'token': '',
				'uid': uid
			}
		})
		console.log(resp)
		const json = JSON.parse(resp.data);
	}
	callback(null, params);
}
module.exports = plugin;
