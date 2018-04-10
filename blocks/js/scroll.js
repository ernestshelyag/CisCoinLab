function onePageScroll(element) {

    var settings = {
            sectionContainer: "section",
            easing: "ease",
            animationTime: 500},
        el = document.querySelector(element),
        sections = document.querySelectorAll(settings.sectionContainer),
        topPos = 0,
        lastAnimation = 0,
        paginationList = "",
        body = document.querySelector("body");

    this.init = function() {

        _addClass(el, "onepage-wrapper")
        el.style.position = "relative";

        for( var i = 0; i < sections.length; i++){
            _addClass(sections[i], "ops-section")
            sections[i].dataset.index = i + 1;
            topPos = topPos + 100;
            paginationList += "<li><a data-index='" + (i + 1) + "' href='#" + (i + 1) + "'></a></li>";
        }
        if (!$(element).hasClass('personal')) {
            _swipeEvents(el);
            document.addEventListener("swipeDown", function (event) {
                if (!_hasClass(body, "disabled-onepage-scroll")) event.preventDefault();
                moveUp(el);
            });
            document.addEventListener("swipeUp", function (event) {
                if (!_hasClass(body, "disabled-onepage-scroll")) event.preventDefault();
                moveDown(el);
            });
        }

        var pagination = document.createElement("ul");
        pagination.setAttribute("class", "onepage-pagination");

        body.appendChild(pagination)
        pagination.innerHTML = paginationList;
        var posTop = (document.querySelector(".onepage-pagination").offsetHeight / 2) * -1;
        document.querySelector(".onepage-pagination").style.marginTop = posTop;


        _addClass(document.querySelector(settings.sectionContainer + "[data-index='1']"), "active");
        _addClass(body, "one-page-scroll");
        _addClass(document.querySelector(".onepage-pagination li a[data-index='1']"), "active");

        _paginationHandler = function() {
            var page_index = this.dataset.index;
            moveTo(el, page_index);
            goBack();
        };

        var pagination_links = document.querySelectorAll(".onepage-pagination li a");

        for( var i = 0; i < pagination_links.length; i++){
            pagination_links[i].addEventListener('click', _paginationHandler);
        }


        if ($(element).hasClass('personal') && $( window ).width()<1560)  {
            console.log("sss");
        } else {
            _mouseWheelHandler = function(event) {
                event.preventDefault();
                var delta = event.wheelDelta || -event.detail;
                if (!_hasClass(body, "disabled-onepage-scroll")) _init_scroll(event, delta);
            };
        }



        document.addEventListener('mousewheel', _mouseWheelHandler);
        document.addEventListener('DOMMouseScroll', _mouseWheelHandler);

        _keydownHandler = function(e) {
            var tag = e.target.tagName.toLowerCase();

            if (!_hasClass(body, "disabled-onepage-scroll")) {
                switch(e.which) {
                    case 38:
                        if (tag != 'input' && tag != 'textarea') moveUp(el)
                        break;
                    case 40:
                        if (tag != 'input' && tag != 'textarea') moveDown(el)
                        break;
                    default: return;
                }
            }
            return false;
        };

        document.onkeydown = _keydownHandler;

        return false;
    };

    _swipeEvents = function(el){
        var startX,
            startY;

        document.addEventListener("touchstart", touchstart);

        function touchstart(event) {
            var touches = event.touches;
            if (touches && touches.length) {
                startX = touches[0].pageX;
                startY = touches[0].pageY;
                document.addEventListener("touchmove", touchmove);
            }
        }

        function touchmove(event) {
            var touches = event.touches;
            if (touches && touches.length) {
                event.preventDefault();
                var deltaX = startX - touches[0].pageX;
                var deltaY = startY - touches[0].pageY;

                if (deltaY >= 50) {
                    var event = new Event('swipeUp');
                    document.dispatchEvent(event);
                }
                if (deltaY <= -50) {
                    var event = new Event('swipeDown');
                    document.dispatchEvent(event);
                }
                if (Math.abs(deltaX) >= 50 || Math.abs(deltaY) >= 50) {
                    document.removeEventListener('touchmove', touchmove);
                }
            }
        }
    };

    _trim = function(str) {
        return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
    };

    _hasClass = function(ele,cls) {
        if (ele.className) {
            return ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
        } else {
            return ele.className = cls;
        }
    };

    _addClass = function(ele,cls) {
        if (!_hasClass(ele,cls)) ele.className += " "+cls;
        ele.className = _trim(ele.className)
    };

    _removeClass = function(ele,cls) {
        if (_hasClass(ele,cls)) {
            var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
            ele.className=ele.className.replace(reg,' ');
        }
        ele.className = _trim(ele.className)
    };

    _whichTransitionEvent = function(){
        var t;
        var el = document.createElement('fakeelement');
        var transitions = {
            'transition':'transitionend',
            'OTransition':'oTransitionEnd',
            'MozTransition':'transitionend',
            'WebkitTransition':'webkitTransitionEnd'};
        for(t in transitions){
            if( el.style[t] !== undefined ){
                return transitions[t];
            }}};

    _scrollTo = function(element, to, duration) {
        if (duration < 0) return;
        var difference = to - element.scrollTop;
        var perTick = difference / duration * 10;

        setTimeout(function() {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop == to) return;
            _scrollTo(element, to, duration - 10);
        }, 10);
    };

    _transformPage = function(el2, settings, pos, index, next_el) {

        var transformCSS = "-webkit-transform: translate3d(0, " + pos + "%, 0); -webkit-transition: -webkit-transform " + settings.animationTime + "ms " + settings.easing + "; -moz-transform: translate3d(0, " + pos + "%, 0); -moz-transition: -moz-transform " + settings.animationTime + "ms " + settings.easing + "; -ms-transform: translate3d(0, " + pos + "%, 0); -ms-transition: -ms-transform " + settings.animationTime + "ms " + settings.easing + "; transform: translate3d(0, " + pos + "%, 0); transition: transform " + settings.animationTime + "ms " + settings.easing + ";";

        el2.style.cssText = transformCSS;

        var transitionEnd = _whichTransitionEvent();
        el2.addEventListener(transitionEnd, endAnimation, false);

        function endAnimation() {
            el2.removeEventListener(transitionEnd, endAnimation)
        }
    };

    _init_scroll = function(event, delta) {
        var deltaOfInterest = delta,
            timeNow = new Date().getTime();
        if(timeNow - lastAnimation < + settings.animationTime) {
            event.preventDefault();
            return;
        }
        if (deltaOfInterest < 0) {
            moveDown(el)
        } else {
            moveUp(el)
        }
        lastAnimation = timeNow;
    };

    this.moveDown = function(el3) {

        if (typeof el3 == "string") el3 = document.querySelector(el3);

        var index = document.querySelector(settings.sectionContainer +".active").dataset.index,
            current = document.querySelector(settings.sectionContainer + "[data-index='" + index + "']"),
            next = document.querySelector(settings.sectionContainer + "[data-index='" + (parseInt(index) + 1) + "']");

        if(!next) {
            return
        }else {
            pos = (index * 100) * -1;
        }
        var next_index = next.dataset.index;
        _removeClass(current, "active");
        _addClass(next, "active");

        _removeClass(document.querySelector(".onepage-pagination li a" + "[data-index='" + index + "']"), "active");
        _addClass(document.querySelector(".onepage-pagination li a" + "[data-index='" + next_index + "']"), "active");

        _transformPage(el3, settings, pos, next_index, next);
        goForvard();
    };

    this.moveUp = function(el4) {

        if (typeof el4 == "string") el4 = document.querySelector(el4);

        var index = document.querySelector(settings.sectionContainer +".active").dataset.index,
            current = document.querySelector(settings.sectionContainer + "[data-index='" + index + "']"),
            next = document.querySelector(settings.sectionContainer + "[data-index='" + (parseInt(index) - 1) + "']");

        if(!next) {
            return
        }else {
            pos = ((next.dataset.index - 1) * 100) * -1;
        }
        var next_index = next.dataset.index;
        _removeClass(current, "active")
        _addClass(next, "active")

        _removeClass(document.querySelector(".onepage-pagination li a" + "[data-index='" + index + "']"), "active");
        _addClass(document.querySelector(".onepage-pagination li a" + "[data-index='" + next_index + "']"), "active");

        _transformPage(el4, settings, pos, next_index, next);
        goBack();
    };

    this.moveTo = function(el5, page_index) {

        if (typeof el5 == "string") el5 = document.querySelector(el5);

        var current = document.querySelector(settings.sectionContainer + ".active"),
            next = document.querySelector(settings.sectionContainer + "[data-index='" + (page_index) + "']");

        if(next) {
            var next_index = next.dataset.index;
            _removeClass(current, "active");
            _addClass(next, "active");
            _removeClass(document.querySelector(".onepage-pagination li a" + ".active"), "active");
            _addClass(document.querySelector(".onepage-pagination li a" + "[data-index='" + (page_index) + "']"), "active");

            pos = ((page_index - 1) * 100) * -1;

            _transformPage(el5, settings, pos, page_index, next);
        }
    };

    $('.ancor').on('click', function () {
        moveTo(el, 3);
        goBack();
    });

    this.init();
}

