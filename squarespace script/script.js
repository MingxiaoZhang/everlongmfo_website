var showChinese = function (page) {
    $('.header-nav-item').css("display", "none");
    $('.header-nav-item:nth-child(n+6)').css("display", "block");
    $('.header-nav-item:nth-child(n+11)').css("display", "none");
    $('.header-nav-item:nth-child(16)').css("display", "block");

    $('.header-menu-nav-item').css("display", "none");
    $('a[href="/cn/home"]').parent().css("display", "block");
    $('a[href="/cn/about-us"]').parent().css("display", "block");
    $('a[href="/cn/masterclass"]').parent().css("display", "block");
    $('a[href="/folders"]').parent().css("display", "block");
    $('a[href="/cn/blog"]').parent().css("display", "block");
    $('a[data-folder-id="/foldersen"]').parent().css("display", "block");

    $('*[data-folder="/folders"] > .header-menu-nav-folder-content').children().css("display", "block");
    $('*[data-folder="/foldersen"] > .header-menu-nav-folder-content').children().css("display", "block");
    $('span:contains(EN)').html("CN");
    $(".header-menu-nav-item--external a:contains('中文')").attr("href", "/en/" + page);
    $(".header-menu-nav-item--external a:contains('中文')").html("EN");

    $('.header-nav-item a').filter('[href="/foldersen"]').html("CN");
    $(".header-nav-folder-item a:contains('中文')").attr("href", "/en/" + page);
    $(".header-nav-folder-item a:contains('中文')").html("EN");

    $(".header-menu-nav-item--external a:contains('ITA')").attr("href", "/it/" + page);
    $(".header-nav-folder-item a:contains('ITA')").attr("href", "/it/" + page);
}

var showItalian = function (page) {
    $('.header-nav-item').css("display", "none");
    $('.header-nav-item:nth-child(n+11)').css("display", "block");

    $('.header-menu-nav-item').css("display", "none");
    $('a[href="/it/home"]').parent().css("display", "block");
    $('a[href="/it/about-us"]').parent().css("display", "block");
    $('a[href="/it/masterclass"]').parent().css("display", "block");
    $('a[href="/it/service"]').parent().css("display", "block");
    $('a[href="/it/blog"]').parent().css("display", "block");
    $('a[data-folder-id="/foldersen"]').parent().css("display", "block");

    $('*[data-folder="/it/service"] > .header-menu-nav-folder-content').children().css("display", "block");
    $('*[data-folder="/foldersen"] > .header-menu-nav-folder-content').children().css("display", "block");
    $('span:contains(EN)').html("ITA");
    $('span:contains(CN)').html("ITA");
    $(".header-menu-nav-item--external a:contains('ITA')").attr("href", "/en/" + page);
    $(".header-menu-nav-item--external a:contains('ITA')").html("EN");

    $('.header-nav-item a').filter('[href="/foldersen"]').html("ITA");
    $(".header-nav-folder-item a:contains('ITA')").attr("href", "/en/" + page);
    $(".header-nav-folder-item a:contains('ITA')").html("EN");

    $(".header-menu-nav-item--external a:contains('中文')").attr("href", "/cn/" + page);
    $(".header-nav-folder-item a:contains('中文')").attr("href", "/cn/" + page);
}

var showEnglish = function (page) {
    $('.header-nav-item').css("display", "none");
    $('.header-nav-item:nth-child(-n+5)').css("display", "block");
    $('.header-nav-item:nth-child(n+6)').css("display", "none");
    $('.header-nav-item:nth-child(16)').css("display", "block");

    $('.header-menu-nav-item:nth-child(-n+5)').css("display", "block");
    $('.header-menu-nav-item:nth-child(n+6)').css("display", "none");
    $('a[href="/en/blog"]').parent().css("display", "block");
    $('a[data-folder-id="/foldersen"]').parent().css("display", "block");

    $('span:contains(ITA)').html("EN");
    $('span:contains(CN)').html("EN");
    $(".header-menu-nav-item--external a:contains('中文')").attr("href", "/cn/" + page);
    $(".header-menu-nav-item--external a:contains('ITA')").attr("href", "/it/" + page);
    $(".header-nav-folder-item a:contains('中文')").attr("href", "/cn/" + page);
    $(".header-nav-folder-item a:contains('ITA')").attr("href", "/it/" + page);

}

// Toggle Language
var chooseLang = function () {
    var path = window.location.href;
    if (path.length < 35) {
        showEnglish('home');
    } else if (1) {
        var lang = path.substr(29, 2);
        var page = path.substr(32);
        if (lang === "cn") {
            showChinese(page);
        } else if (lang === "en") {
            showEnglish(page);
        } else if (lang === "it") {
            showItalian(page);
        }
    } else {
        var lang = path.substr(48, 2);
        var page = path.substr(51);
        if (lang === "cn") {
            showChinese(page);
        } else if (lang === "en") {
            showEnglish(page);
        } else if (lang === "it") {
            showItalian(page);
        }
    }
}

function readFile(file, onLoadCallback
) {
    var reader = new FileReader();
    reader.onloadend = onLoadCallback;
    reader.readAsDataURL(file);
    reader.onerror = function (error) {
        console.log('Error when converting PDF file to base64: ', error);
    };
    return "";
}

$(document).ready(function () {
    $(window).scroll(function () {
        var ScrollTop = parseInt($(window).scrollTop());
        if (ScrollTop < 100) {
            $('.header-nav-folder-content').attr('style', 'background-color: transparent !important');
        } else {
            $('.header-nav-folder-content').attr('style', 'background-color: #dbe6e0 !important');
        }
    });
    chooseLang();

//Job Form Submit
    $("form").submit(function (event) {
        event.preventDefault();
        var url = "https://72bcc19503f44a518f5d6eac31f99c8e-cn-shanghai.alicloudapi.com/v1/uploadUserInfo?name=" + $("#name").val() + "&email=" + $("#email").val() + "&job=" + $("#job").val();
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Authorization", "APPCODE 5270d28db829429b9882411fbc3896bf");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=utf-8");
        xhr.setRequestHeader("Content-Length", "0");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                console.log(xhr.status);
                console.log(xhr.responseText);
            }
        };
        xhr.send();
        url = "https://72bcc19503f44a518f5d6eac31f99c8e-cn-shanghai.alicloudapi.com/v1/uploadCV";
        xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Authorization", "APPCODE 5270d28db829429b9882411fbc3896bf");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                console.log(xhr.status);
                console.log(xhr.responseText);
            }
        };
        var fileUrl = "";
        //formData2.append("fileName",$('#file')[0].files[0].name);
        readFile($("#file")[0].files[0], function (e) {
            fileUrl = e.target.result.split(",")[1];
        });

        var data = "file=" + fileUrl + "&fileName=" + encodeURI($('#file')[0].files[0].name);
        xhr.send(data);
        var path = window.location.href;
        var lang = path.substr(29, 2);
        xhr.onload = function () {
            if (xhr.status !== 200) { // analyze HTTP status of the response
                if (lang === "cn") {
                    $("form").html(
                        '<div class="alert alert-danger">对不起！您提交失败，请再尝试一次</div>'
                    );
                } else if (lang === "en") {
                    $("form").html(
                        '<div class="alert alert-danger">Sorry! Your submission failed, please try again.</div>'
                    );
                } else if (lang === "it") {
                    $("form").html(
                        '<div class="alert alert-danger">Qualcosa è andato storto: prova di nuovo!</div>'
                    );
                } // response is the server response
            } else { // show the result
                if (lang === "cn") {
                    $("form").html(
                        '<div class="alert alert-success"> 您已提交成功! </div>'
                    );
                } else if (lang === "en") {
                    $("form").html(
                        '<div class="alert alert-success"> Your submission was successful! </div>'
                    );
                } else if (lang === "it") {
                    $("form").html(
                        '<div class="alert alert-success"> Profilo caricato con successo! </div>'
                    );
                } // response is the server response
            }
        };

        $(".form-group").removeClass("has-error");
        $(".help-block").remove();


        /*
                var formData = {
                    name: $("#name").val(),
                    email: $("#email").val(),
                    job: $("#job").val(),
                };

                var formData2 = {};
                var missingFile = false;
                if ($('#file')[0].files.length === 0) {
                    missingFile = true;
                    $("#file-group").addClass("has-error");
                    $("#file-group").append(
                        '<div class="help-block"> CV is required </div>'
                    );
                } else {
                    var data = "";
                    //formData2.append("fileName",$('#file')[0].files[0].name);
                    readFile($("#file")[0].files[0], function(e) {
                        data = e.target.result.split(",")[1];
                    });
                    //formData2.append("data", data);
                    formData2 = {
                        "fileName": $('#file')[0].files[0].name,
                        "data": "data:@file/html;base64," + data,
                    }
                }

                $.ajax({
                    type: "POST",
                    url: "http://btapi.fmpsys.com/v1/uploadCV",
                    data: formData2,
                    dataType: "json",
                    encode: true,
                    success: function(data) {
                        $("form").html(
                            '<div class="alert alert-success"> Success! </div>'
                        );
                    }
                }).done(function (data) {
                    console.log(data);
                }).fail(function (data) {
                   if (!missingFile) {
                        $("form").html(
                            '<div class="alert alert-danger">Could not reach server, please try again later.</div>'
                        );
                    }
                });

                $.ajax({
                    type: "POST",
                    url: "http://btapi.fmpsys.com/v1/uploadUserInfo",
                    data: formData,
                    dataType: "json",
                    encode: true,
                }).done(function (data) {
                    console.log(data);
                })
                .fail(function (data) {
                    $("form").html(
                        '<div class="alert alert-danger">Could not reach server, please try again later.</div>'
                    );
                });
                event.preventDefault();

        */
    });
})
;

// Move to top
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function FileSelected(e) {
    $('#fileName').html($('#file')[0].files[0].name);
}

$(function () {
    $('#video-1').click(function () {
        $('iframe').attr('src', $('iframe').attr('src'));
    });
})
;

