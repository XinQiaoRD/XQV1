Room.Loader = {};
Room.Loader.ppt = ()=>{
    let Start = "Index";
    cc.ppt(["Loader", Start] , (after)=>{
        cc.m["Loader"].velocity({ opacity: 0 }, { duration: 1000, display:"none"} );
        cc.m[Start].show().velocity({ opacity: [1,0] }, 1000);
    })
};

// Index
Room.Index = {};
Room.Index.dom = ()=>{

    Dom.Video = new Media("#Video video");

    $$("#Index").click(function(){
        Room.Index.ppt();
    });

    $$("#Video").click(function(){
        Room.Index.back();
    });


};

Room.Index.ppt = ()=>{
    Dom.Video.play(0);
    Dom._unable.show();
    cc.ppt([cc.id, "Video"] , (after)=>{
        cc.m[cc.old].velocity({ opacity: 0 }, { duration: 200, display:"none"});
        cc.m["Video"].show().velocity({ opacity: [1,0] }, 200, ()=>{
            Dom._unable.hide();
            //after.come();
        });
    });
};

Room.Index.back = ()=>{

    Dom._unable.show();
    cc.ppt([cc.id, "Index"] , (after)=>{
        cc.m[cc.old].velocity({ opacity: 0 }, { duration: 200, display:"none"});
        cc.m["Index"].show().velocity({ opacity: [1,0] }, 200, ()=>{
            Dom.Video.stop(0);
            Dom._unable.hide();
            //after.come();
        });
    });
};