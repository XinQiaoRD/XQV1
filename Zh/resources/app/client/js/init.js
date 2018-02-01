var init = {};

init.loader = ()=>{
    Dom._unable = $("#_unable");

    ws = new ws_client("ws://localhost:3001", {id:"Video1"});
    ws.connect( function(){
        setTimeout(function(){
            zh.ini();
            zh.do();
            setTimeout(Room.Loader.ppt , 500);
        },300);
    });


};