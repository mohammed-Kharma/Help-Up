$(function(){
    $("#butStudent").click(function(){
        $(".student-tutor").hide();
        $(".student-form").show();
        $(this).addClass("activeBut");
        $("#butTutor").removeClass("activeBut");
    });
    $("#butTutor").click(function(){
        $(".student-tutor").show();
        $(".student-form").hide();
        $(this).addClass("activeBut");
        $("#butStudent").removeClass("activeBut");
    });
    // -------------
    $("#But_Course_Student").click(function(){
        $(this).addClass("activeBut");
        $("#But-Course-Note").removeClass("activeBut");
        $("#But-Course-materials").removeClass("activeBut");
        $(".card-couese-students").show();
        $(".card-coures-note").hide();
        $(".card-Course-materials").hide();
    });
    // --------------
    $("#But-Course-Note").click(function(){
        $(this).addClass("activeBut");
        $("#But_Course_Student").removeClass("activeBut");
        $("#But-Course-materials").removeClass("activeBut");
        $(".card-couese-students").hide();
        $(".card-coures-note").show();
        $(".card-Course-materials").hide();
    });
    // -----------
    $("#But-Course-materials").click(function(){
        $(this).addClass("activeBut");
        $("#But_Course_Student").removeClass("activeBut");
        $("#But-Course-Note").removeClass("activeBut");
        $(".card-couese-students").hide();
        $(".card-coures-note").hide();
        $(".card-Course-materials").show();
    });
    // ------------
    $(".tab-rating").click(function(){
        $(this).addClass("ActiveTabs");
        $(".Other-courses").removeClass("ActiveTabs");
        $(".list-gropp-rating").show();
        $(".list-detalis").hide();
    });
    // ***************
    $(".Other-courses").click(function(){
        $(this).addClass("ActiveTabs");
        $(".tab-rating").removeClass("ActiveTabs");
        $(".list-gropp-rating").hide();
        $(".list-detalis").show();
    });
    // --------
    $("#But_Course_notes").click(function(){
        $(this).addClass("activeBut");
        $("#But_Course_materials").removeClass("activeBut");
        $(".card-note").show();
        $(".coures-all-books").hide();
    });
    // ------
    $("#But_Course_materials").click(function(){
        $(this).addClass("activeBut");
        $("#But_Course_notes").removeClass("activeBut");
        $(".card-note").hide();
        $(".coures-all-books").show();
    });
});