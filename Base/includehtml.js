
Skip to content

    Why GitHub
                          


                    
Team
Enterprise
Explore
                      

                    
Marketplace
Pricing
                       


                        

Sign in
Sign up
xmoonlight 
includeHTML

127

    30

Code
Issues
Pull requests
Actions
Projects
Wiki
Security

    Insights

includeHTMLincludeHTML.js 
@xmoonlight
xmoonlight update
Latest commit 32af6bc on 9 Sep 2018
History
1 contributor
181 lines (161 sloc) 5.98 KB

License CC BY-SA 4.0
Addition requirements keep and copy license file into every software copy, keep and copy all license headers in files and license file without any changes.
Copyright (C) xmoonlight, 2016, All Rights Reserved
httpsgithub.comxmoonlightincludeHTML
Product includeHTML
Language javascript
Version 2.0

(function(){
 var includeHTMLplaces=[];
 var prevCSS;

 function load(dst, url, callback) {
    var xmlhttp;
    if (window.XMLHttpRequest) xmlhttp = new XMLHttpRequest();
    else xmlhttp = new ActiveXObject(Microsoft.XMLHTTP);
    xmlhttp.onreadystatechange = function() 
    {
        if (xmlhttp.readyState == XMLHttpRequest.DONE ) 
        {
           if(xmlhttp.status == 200){
              dst.innerHTML = xmlhttp.responseText;
              statusText = success;
           }
           else {
              statusText = error;
           }
               callback(xmlhttp.responseText, statusText, xmlhttp);
        }
    }

     try {      
      xmlhttp.open(GET, url, true);
      xmlhttp.send();
     } catch(e) {callback(true, 'error', false);}

 }

function loadRes(src, destination, callback) {
   var obj;
   var type;
   if (src.match(.htmi)) {  htmhtml
    type='html';
   } else if (src.match(.jsi)) { javascript
    obj = document.createElement(script);
    obj.type = textjavascript;
    obj.src = src;
    type='js';
  } else if (src.match(.cssi)) { css stylesheet
    obj = document.createElement(link);
    obj.rel = stylesheet;
    obj.type = textcss;
    obj.href = src;
    type='css';
 } else if (src.match(.txti)) { txt
    type='txt';
 } else { place
    type='place';
 }

  if(obj) {
    if (obj.readyState){  IE
        obj.onreadystatechange = function(){
            if (obj.readyState == loaded 
                    obj.readyState == complete){
                obj.onreadystatechange = null;
    	        if (type==='js') obj.parentNode.removeChild(obj);
    	        else if (type==='css') {
                    if (prevCSS) obj.parentNode.removeChild(prevCSS);
                    prevCSS=obj; 
                }
                includeHTMLplaces[src]=destination;
                if (callback) callback();
            }
        };
    } else {  Others
        obj.onload = function(){
		     if (type==='js') this.parentNode.removeChild(this);
                     else if (type==='css') {
                         if (prevCSS) this.parentNode.removeChild(prevCSS);
                         prevCSS=this;
                     }
                     includeHTMLplaces[src]=destination;
		     if (callback) callback();
        };
    }
   	  document.getElementsByTagName(head)[0].appendChild(obj);
  }
}

window.includeHTML = function (src, destination, callback) {
  if(!destination) destination=0;
  if (src==='places') return includeHTMLplaces;
  else if (typeof(destination)=='string') {
     destination=document.body.querySelectorAll('include[src='+destination+'],div[data-src='+destination+'],div[data-include='+destination+']')[0];

     if(destination.hasAttribute(src)) destination.setAttribute('src',src);
     if(destination.hasAttribute(data-src)) destination.setAttribute('data-src',src);
     if(destination.hasAttribute(data-include)) destination.setAttribute('data-include',src);

     includeHTMLplaces[src]=destination;
  } else {
     includeHTMLplaces[src]=destination;
  }

  if (src.match(.htm.txti))
    load(destination,src,function ( response, status, xhr ) { load HTML-markup
  if (status===error) {
       var iframe = document.createElement('iframe');
       iframe.onload = function() {
           if(!response && document.location.protocol.indexOf('http')==-1) { всё, приехали...
                 if (navigator.userAgent.match(Chromei)!==-1) выводим подсказку.
                       msg='For Chrome add parameter in shortcut link'+n+'path_chrome_dirchrome.exe --allow-file-access-from-files';
                 alert(navigator.userAgent+nResponse +response+nURL +src+n-------n+msg);
           }
           destination.innerHTML = window[this.name].document.body.innerHTML;
           iframe.parentNode.removeChild( iframe );
           includeHTMLplaces[src]=destination;
           includeHTMLAuto(destination);
           if (callback) callback();
       }

       iframe.style.display = 'none';
       iframe.name = 'includer'+src+Math.random();
       iframe.src = src;
       document.body.appendChild(iframe);
    } else {
            includeHTMLplaces[src]=destination;
            includeHTMLAuto(destination);
            if(callback) callback();
    }
  });
  else  { 
        loadRes(src, destination, callback);
  }

 }


  function includeHTMLAuto(node) {
      var includes;
        includes=node.querySelectorAll('include,div[data-src],div[data-include]');
        for (var i=0; iincludes.length;i++) {
          if(includes[i].getAttribute(src)) includeHTML(includes[i].getAttribute(src), includes[i]);
          else if (includes[i].getAttribute(data-src)) includeHTML(includes[i].getAttribute(data-src), includes[i]);
          else if (includes[i].getAttribute(data-include)) includeHTML(includes[i].getAttribute(data-include), includes[i]);
        }
  }

  var old_onload=window.onload;
  window.onload=function(){
     old_onload&&old_onload();
     includeHTMLAuto(document.body);
  }

})();


USAGE
  1.Tag div data-src=menu.htmldiv
         div data-include=menu.htmldiv
         divinclude scr=menu.htmlincludediv
         div data-src=logdiv
  2.Async
      script
        includeHTML('header.html', document.getElementById('header'));
        includeHTML('menu.html', document.getElementById('mainMenu'));
        includeHTML('green.css');
        includeHTML('js1.js');
        includeHTML('log.txt', 'log');
      script
  3.Sync
      includeHTML('header.html', document.getElementById('header'), function(){
        includeHTML('menu.html', document.getElementById('mainMenu'));
      });


    © 2021 GitHub, Inc.
    Terms
    Privacy
    Security
    Status
    Docs

    Contact GitHub
    Pricing
    API
    Training
    Blog
    About

Loading complete