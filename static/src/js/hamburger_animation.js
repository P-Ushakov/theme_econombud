//HAMBURGER
odoo.define("website.hamburger_animation_code", function (require) {
  "use strict";

  //var Dialog = require('web.Dialog');
  var publicWidget = require("web.public.widget");

  publicWidget.registry.hamburgerAnimation = publicWidget.Widget.extend({
    selector: "#wrapwrap",

    start: function () {
      let burgers = document.getElementsByClassName("navbar-toggler");
      //let burger = burgers.item(0)

      for (let burger of burgers) {
        let burgerSecondSpan = document.createElement("SPAN");
        let burgerThirdSpan = document.createElement("SPAN");
        burger.classList.add("collapsed");
        burger.appendChild(burgerSecondSpan);
        burger.appendChild(burgerThirdSpan);
        //console.log("span added")
      }

      return this._super.apply(this, arguments);
    },
  });
});
