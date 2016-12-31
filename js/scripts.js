/**
 * ek9.co scripts.js
 * author: ek9 <dev@ek9.co> 2016
 */

/**
 * navigation & hamburger menu toggle script
 */
(function (window, document) {

    var menu            = document.getElementById('menu'),
        hamburgerMenu   = document.getElementById('hamburgerMenu'),
        content         = document.getElementById('main');

    function toggleClass(element, className) {
        var classes = element.className.split(/\s+/),
            length = classes.length,
            i = 0;

        for(; i < length; i++) {
          if (classes[i] === className) {
            classes.splice(i, 1);
            break;
          }
        }
        // The className is not found
        if (length === classes.length) {
            classes.push(className);
        }

        element.className = classes.join(' ');
    }

    function toggleAll(e) {
        var active = 'active';

        e.preventDefault();
        toggleClass(menu, active);
        toggleClass(hamburgerMenu, active);
    }

    hamburgerMenu.onclick = function (e) {
        toggleAll(e);
    };

    content.onclick = function(e) {
        if (menu.className.indexOf('active') !== -1) {
            toggleAll(e);
        }
    };

}(this, this.document));
