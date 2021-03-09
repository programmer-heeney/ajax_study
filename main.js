'use strict';
let myData,
    urlLogin = 'user.json';

function loginBtnClick() {
    let mydata = {
        uid: $('#userid').val(),
        pwd: $('#password').val()
    }
    $.ajax({
        url: urlLogin,
        method: "POST",
        data: mydata,
        crossDomain: true,
        xhrFields: { withCredentials: true },
        dataType: "json"
    }).done(function (data) {
        let stemp = `<b><u>From server: </u></b><br>${JSON.stringify(data, null, 4)};`
        myData = data;
        $(".result").html(stemp);
    }).fail(function (xhr, status, errorThrown) {
        alert(`Error: ${(xhr.responseJSON && xhr.responseJSON.msg) || errorThrown}`)
    })
}

function myError() {
    alert('에러가 발생했습니다.');
    return "";
}