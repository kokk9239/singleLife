/**
 * Created by ko on 2016-07-28.
 */
$(document).ready(function(){
    $("#game").on("click", function () {

        $("#travel_content").html("");
        $("#honbap_content").html("");
        $("#recipe_content").html("");
        $("#youtube_content").html("");



        $("#cvs_content").css("display", "none");
        $("#parcelArea").css("display","none");
        $("#prodInfo_content").css("display", "none");
        common_module.moveGameMenu();
        game_module.gameTitle();
        game_module.showGame();
        $(window).unbind('scroll');
        $("#webtoon_content").css("display", "none");
    });
});
