// leanModal v1.1 by Ray Stone - http://finelysliced.com.au
// Dual licensed under the MIT and GPL
(function(e){e.fn.extend({leanModal:function(t){function i(t){e("#lean_overlay").fadeOut(200);e(t).css({display:"none"})}var n={top:100,overlay:.5,closeButton:null},r=e("<div id='lean_overlay'></div>");e("body").append(r);t=e.extend(n,t);return this.each(function(){var n=t;e(this).click(function(t){var r=e(this).attr("href");e("#lean_overlay").click(function(){i(r)});e(n.closeButton).click(function(){i(r)});var s=e(r).outerHeight(),u=e(r).outerWidth();e("#lean_overlay").css({display:"block",opacity:0});e("#lean_overlay").fadeTo(200,n.overlay);e(r).css({display:"block",position:"absolute",opacity:0,"z-index":11e3,left:"50%","margin-left":-(u/2)+"px",top:n.top+"px"});e(r).fadeTo(200,1);t.preventDefault()})})}})})(jQuery);