var init = {};

init.loader = ()=>{
    Dom._unable = $("#_unable");

    setTimeout(function(){
        zh.ini();
        zh.do();
        setTimeout(Room.Loader.ppt , 500);
    },300);

};