/*!
 * reloadCSS.js
 *
 * Copyright (c) 2010-2011 Robert Accettura (http://robert.accettura.com)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
 */
 
function reloadCSS(){
    // Param Name
    // You could update this if you want to use something else.  This should be fine however.
    var param = '_rjatimestamp'; 

    // Timestamp
    var ts = new Date().getTime();

    var style = document.getElementsByTagName('link');

    for(var i=0; i<style.length; i++){
        if(style[i].rel == "stylesheet"){

            // Update Timestamp if one is already there
            var re = new RegExp(param+"=([^\&]+)","g");
            var newHref = style[i].href.replace(re, param + "=" + ts);

            // If there isn't one we'll need to add one
            if(newHref.indexOf(param) == -1){

                var appnd = "&";

                // Are there already query args?
                if(newHref.indexOf("?") == -1){
                    appnd = '?';           
                }

                newHref += appnd + param+ "=" + ts;
            }
            style[i].href = newHref;
        }
    }
}
