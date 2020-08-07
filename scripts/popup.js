$(function(){
    chrome.tabs.query({active:true, currentWindow:true}, genQRbyTab);
});

function genQRbyTab(tabs) {
    var href = tabs[0].url;
    var title = tabs[0].title;
    $('#qrcode-title').html(title);
    $('#qrcode-href').val(href);
    var qrcode_img = $('#qrcode-img');
    qrcode_img.qrcode(href);
}