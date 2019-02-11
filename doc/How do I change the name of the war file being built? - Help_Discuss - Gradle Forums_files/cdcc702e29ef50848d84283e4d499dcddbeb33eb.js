
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga("create", "UA-4207603-1", "auto", "all", {
      "allowLinker": true
  });
  ga("create", "UA-4207603-10", "auto", "forums");
  ga("all.set", "transport", "beacon");
  ga("forums.set", "transport", "beacon");
  ga("all.require", "linker");
  ga("all.linker:autoLink", ["gradle.com", "gradle.org"], false, true);
  ga("all.send", "pageview");
  ga("forums.send", "pageview");
  
/**
 * Given an event object, determine if the source element was a link, and track it with Google Analytics if it goes to another domain.
 * @param {Event} evt object that should be fired due to a link click.
 * @return boolean if link was successfully tracked.
 */
function trackOutbound(evt) {
  var targetLink = closestLink(getEventTarget(evt));
  if (!targetLink) {
    return false;
  }

  var href = targetLink.getAttribute("href");
  if (!href || href.substring(0, 4) !== "http") {
    return false;
  }

  if(href.indexOf(document.domain) === -1 || !document.domain) {
    ga("forums.send", {hitType: "event", eventCategory: document.location.pathname, eventAction: "outbound referral", eventLabel: href});
    ga("all.send", {hitType: "event", eventCategory: document.location.href, eventAction: "outbound referral", eventLabel: href});
    return true;
  }
  return false;
}

function closestLink(el) {
  while (el !== null && el.tagName !== "A") {
    el = el.parentNode;
  }
  return el;
}

/**
 * Returns the HTML element that an event occured upon.
 * @param {Event} evt object.
 * @return HTMLElement event target.
 */
function getEventTarget(evt) {
  var eventTarget;
  if (!evt) {
    evt = window.event;
  }
  if (evt.target) {
    eventTarget = evt.target;
  } else if (evt.srcElement) {
    eventTarget = evt.srcElement;
  }
  return eventTarget;
}

document.addEventListener("click", trackOutbound, false);


piAId = '69052';
piCId = '11108';

(function() {
	function async_load(){
		var s = document.createElement('script'); s.type = 'text/javascript';
		s.src = ('https:' == document.location.protocol ? 'https://pi' : 'http://cdn') + '.pardot.com/pd.js';
		var c = document.getElementsByTagName('script')[0]; c.parentNode.insertBefore(s, c);
	}
	if(window.attachEvent) { window.attachEvent('onload', async_load); }
	else { window.addEventListener('load', async_load, false); }
})();


    $(document).ready(function() {
        $("a[href*='gradle.']").addClass('no-track-link');
    });

