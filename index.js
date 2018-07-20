let modal =
`
<div id="unsupported_modal"class="unsupported-modal"><div class="unsupported-modal__background" onclick="document.body.removeChild(document.getElementById('unsupported_modal'))" ></div><div class="unsupported-modal__container"><div class="unsupported-modal__header"><a onclick="document.body.removeChild(document.getElementById('unsupported_modal'))" class="unsupported-modal__close-button" href="#">×</a></div><div class="unsupported-modal__content"><h1>Your browser is getting old…</h1><img class="unsupported-modal__mascot" src="https://go.tradegecko.com/images/old-moko.png" alt="Old Moko" width="150" height="150"><p>Microsoft stopped supporting your internet browser (Internet Explorer) in January 2016, and have strongly recommended that all users upgrade to their new browser Edge (which is a free download). <a href="https://www.microsoft.com/en-us/windowsforbusiness/end-of-ie-support">You can find out more here</a>.</p><p>As we’re also now phasing out support for Internet Explorer, please be aware that some elements of TradeGecko may not work as expected. We apologise for any inconvenience caused.</p><a class="unsupported-modal__update-button" href="http://browsehappy.com/"target="_blank">Click here for a list of modern browsers</a></div></div></div>
  <style>.unsupported-modal{display:none;position:fixed;top:0;left:0;z-index:2147483647;width:100%;height:100%;font-family:"Open Sans",Helvetica,sans-serif;color:#2d3033}.unsupported-modal,.unsupported-modal *{box-sizing:border-box}.unsupported-modal__background{position:absolute;width:100%;height:100%;background:#242629;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";filter:alpha(opacity=80);opacity:.8;cursor:pointer;cursor:hand}.unsupported-modal__container{position:relative;margin:40px auto;width:600px;border-radius:5px;box-shadow:0 0 100px 5px rgba(0,0,0,.5)}.unsupported-modal__header{background:#f4f4f5;border-radius:3px 3px 0 0}.unsupported-modal__content{background:#fff;padding:40px;border-radius:0 0 3px 3px}.unsupported-modal__mascot{float:left;margin:20px 40px 20px 0}.unsupported-modal h1{margin:0 0 40px;font-size:24px}.unsupported-modal p{margin-bottom:20px;font-size:13px}.unsupported-modal a{text-decoration:none;color:#70cf32}.unsupported-modal a:hover{text-decoration:underline}a.unsupported-modal__close-button,a.unsupported-modal__close-button:hover,a.unsupported-modal__update-button,a.unsupported-modal__update-button:hover{text-decoration:none}a.unsupported-modal__close-button{width:50px;line-height:50px;display:block;margin-left:auto;font-size:16px;text-align:center;color:#a4aeb3;border:0;background:0 0}a.unsupported-modal__update-button{color:#fff;background-color:#70cf32;padding:0 15px;line-height:40px;display:block;text-align:center;margin-top:40px;border-radius:3px;text-transform:uppercase;font-size:12px;font-weight:600}</style>
  <script>
    if (navigator.appVersion.indexOf("MSIE 10") !== -1){
      window.unsupported = true;
    }
  </script>
  <!--[if lte IE 9]>
  <script>
      window.unsupported = true;
  </script>
  <![endif]-->
  <script>
    if(window.unsupported){
      document.getElementById('unsupported_modal').style.display ='block';
    }
  </script>
`

  module.exports = {
    name: 'ember-unsupported-browser',
    contentFor: function(type, config){
      if (type === 'body'){
        return modal;
      }
    }
  }
