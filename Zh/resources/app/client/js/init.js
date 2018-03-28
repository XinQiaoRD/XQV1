var init = {};

init.loader = ()=>{
    Dom._unable = $("#_unable");

    ws = new ws_client(zh.conf.ws_server, {id:"Video1"});
    ws.connect( function(){
        setTimeout(function(){
            zh.ini();
            zh.do();
            setTimeout(Room.Loader.ppt , 500);
        },300);
    });


};