'use strict';
$(function(){
    $(window).on('action:ajaxify.end', function (data) {
        if(data.tpl_url === 'register' && $('#uid-input').val().trim() == ""){
            app.alertError('您还没有输入您的游戏UID');
         	return;
        }
    });
});