;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-zhongfu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M521.700071 859.171873c-182.75749 9.113821-348.072407-117.434779-380.668906-300.463086-28.101947-157.700479 50.90009-309.349461 185.165858-382.409127l0 149.657332c0 12.570477 10.305613 22.778156 23.003404 22.778156l23.029986 0c12.697991 0 23.000006-10.207679 23.000006-22.778156L395.230418 120.924405 395.230418 98.143451c0-12.590464-10.302015-22.778156-23.000006-22.778156l-23.029986 0L142.080653 75.365294c-12.697391 0-23.003404 10.187693-23.003404 22.778156l0 22.780955c0 12.592462 10.301616 22.780555 23.003404 22.780555l106.596927 0C116.519384 237.720018 42.886507 401.312102 73.047658 570.570745c39.221408 220.260264 240.263701 372.013775 460.777193 356.66618L521.700071 859.171873zM852.517777 855.883103l-74.095963 0c130.417977-94.853889 202.572056-256.767512 172.450479-424.225375C911.15702 210.745906 707.582643 58.553093 484.306424 73.968242l12.277676 68.232338c185.055932-9.123414 352.440046 117.794935 385.452663 301.354082 30.213515 168.021481-61.97618 329.201601-213.617767 396.309302L668.418996 673.640264c0-12.592462-10.319004-22.780555-23.025389-22.780555l-23.0094 0c-12.718377 0-23.016395 10.188092-23.016395 22.780555l0 205.024593 0 22.789549c0 12.584468 10.298018 22.782553 23.016395 22.782553l23.0094 0 207.12417 0c12.72837 0 23.029386-10.198086 23.029386-22.782553l0-22.789549C875.547163 866.073194 865.24215 855.883103 852.517777 855.883103z"  ></path>' +
    '' +
    '<path d="M525.520433 858.986759c19.077497 0 34.545794 15.464203 34.545794 34.547841 0 19.077497-15.468296 34.549887-34.545794 34.549887-19.081591 0-34.55091-15.47239-34.55091-34.549887C490.969523 874.450962 506.437819 858.986759 525.520433 858.986759z"  ></path>' +
    '' +
    '<path d="M491.091296 108.002806m-34.547841 0a33.761 33.761 0 1 0 69.095681 0 33.761 33.761 0 1 0-69.095681 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)