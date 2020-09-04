//EkonombudPhonetScript
odoo.define("website.ekonombud_phonet_code", function (require) {
    "use strict";
  
    //var Dialog = require('web.Dialog');
    var publicWidget = require("web.public.widget");
    /* var telerWdWidgetId="de021028-c353-42eb-b69c-6417e936bd03"
       var telerWdDomain="ekonombud.phonet.com.ua" */
  
    publicWidget.registry.EkonombudPhonetScript = publicWidget.Widget.extend({
      selector: "#wrapwrap",
  
      start: function () {
        window.telerWdWidgetId="de021028-c353-42eb-b69c-6417e936bd03"
        window.telerWdDomain="ekonombud.phonet.com.ua"

        let phonetScript = document.createElement("script");
        phonetScript.setAttribute("src", "//ekonombud.phonet.com.ua/public/widget/call-catcher/lib-v3.js");
        document.body.appendChild(phonetScript);        
  
        return this._super.apply(this, arguments);
      },
    });
  });
  
