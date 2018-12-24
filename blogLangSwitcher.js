function loadBlogLangSwitcher(){
  if (document.querySelector('.lang_switcher_class').getAttribute('id') == "custom_lang_switcher") { 
    var current_lang = document.getElementById('current_lang').getAttribute('data-language');
    var current_url = document.getElementById('current_lang').getAttribute('data-url');
    function setAttributes(el, attrs) {
  		for(var key in attrs) {
   		  el.setAttribute(key, attrs[key]);
  		}
		}
    var rel_links = Array.from(document.querySelectorAll('.lang_switcher_link.rel_lang'));
    for(l = 0; l < rel_links.length; l ++){
    	var this_rel_link = document.createElement('link');
    	setAttributes(this_rel_link, {
      "rel": "alternate",
    	"hreflang":rel_links[l].dataset.language,
      "href": rel_links[l].dataset.url
    	});
			document.head.append(this_rel_link);
    };
		document.getElementsByTagName('html')[0].setAttribute('lang', current_lang);
    document.querySelector('meta[http-equiv="content-language"]').setAttribute('content', current_lang);
  	setTimeout(function(){
      var lang_switchers = Array.from(document.querySelectorAll('span.hs_cos_wrapper_type_language_switcher'));
      for(b = 0; b < lang_switchers.length; b ++) {
      	var blog_links = document.querySelector('.lang_switcher_class').cloneNode(true);
        lang_switchers[b].setAttribute('id','blogLangSwitcher'+(b+1).toString());
        lang_switchers[b].appendChild(blog_links); 
	}   
      document.getElementById('lang_switcher_container').remove();
      }, 100);
  };
}; loadBlogLangSwitcher();