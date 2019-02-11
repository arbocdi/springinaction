// Polyfill Element.matches()
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}
// Polyfill Element.closest()
if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        var el = this;
        if (!document.documentElement.contains(el)) return null;
        do {
            if (typeof el.matches === "function" && el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null);
        return null;
    };
}

var GRADLE_VERSION = location.pathname.replace("/", "").split("/", 3)[0];

/**
 * Given a version string, replace "/current" with "/$version" in the site header.
 * @param version String
 */
function versionizeDocsUrls(version) {
    function versionizeLink(linkEl) {
        var versionizedHref = linkEl.getAttribute("href")
            .replace(/^\/(dsl|release-notes|userguide|javadoc)/g, "/current/$1")
            .replace(/^\/current/g, "/" + version);
        linkEl.setAttribute("href", versionizedHref);
    }

    Array.prototype.slice.call(document.querySelectorAll(".site-header a[href]"), 0).forEach(versionizeLink);
    Array.prototype.slice.call(document.querySelectorAll(".docs-navigation a[href]"), 0).forEach(versionizeLink);
    Array.prototype.slice.call(document.querySelectorAll(".site-footer a[href]"), 0).forEach(versionizeLink);
}

function registerNavigationActions() {
    var navigationButton = document.querySelector(".site-header__navigation-button");
    var navigationCollapsible = document.querySelector(".site-header__navigation-collapsible");

    if (navigationButton) {
        navigationButton.addEventListener("click", function () {
            navigationCollapsible.classList.toggle("site-header__navigation-collapsible--collapse");
        });
    }

    var allSubmenus = document.querySelectorAll(".site-header__navigation-submenu-section");
    Array.prototype.forEach.call(allSubmenus, function (submenu) {
        var focusinOpensSubmenu = false;

        document.addEventListener("focusout", function (event) {
            if (submenu.contains(event.target)) {
                focusinOpensSubmenu = false;
            }
        });

        document.addEventListener("focusin", function () {
            if (submenu.contains(document.activeElement)) {
                submenu.classList.add("open");
                focusinOpensSubmenu = true;
            } else {
                submenu.classList.remove("open");
            }
        });

        document.addEventListener("click", function (event) {
            if (!focusinOpensSubmenu) {
                if (submenu.contains(event.target)) {
                    submenu.classList.toggle("open");
                } else {
                    submenu.classList.remove("open");
                }
            } else {
                focusinOpensSubmenu = false;
            }
        });
    });
}

// Add "active" class to TOC link corresponding to subsection at top of page
function setActiveSubsection(activeHref) {
    var tocLinkToActivate = document.querySelector(".toc a[href$='"+activeHref+"']");
    var currentActiveTOCLink = document.querySelector(".toc a.active");
    if (tocLinkToActivate != null) {
        if (currentActiveTOCLink != null && currentActiveTOCLink !== tocLinkToActivate) {
            currentActiveTOCLink.classList.remove("active");
        }
        tocLinkToActivate.classList.add("active");
    }
}

function calculateActiveSubsectionFromLink(event) {
    var closestLink = event.target.closest("a[href]");
    if (closestLink) {
        setActiveSubsection(closestLink.getAttribute("href"));
    }
}

function calculateActiveSubsectionFromScrollPosition() {
    var subsections = document.querySelectorAll("h2[id] > a.anchor,h2.title > a[name],h3.title > a[name]");

    // Assign active section: take advantage of fact that querySelectorAll returns elements in source order
    var activeSection = subsections[0];
    Array.prototype.forEach.call(subsections, function(section) {
        if (Math.floor(section.offsetTop) <= (window.scrollY + 50)) {
            activeSection = section;
        }
    });

    if (activeSection != null && activeSection.hasAttribute("href")) {
        setActiveSubsection(activeSection.getAttribute("href"));
    }
}

function postProcessUserguideNavigation() {
    [].forEach.call(document.querySelectorAll(".docs-navigation a[href$='"+ window.location.pathname +"']"), function(link) {
        // Add "active" to all links same as current URL
        link.classList.add("active");

        // Expand all parent navigation
        var parentListEl = link.closest("li");
        while (parentListEl !== null) {
            var dropDownEl = parentListEl.querySelector(".nav-dropdown");
            if (dropDownEl !== null) {
                dropDownEl.classList.add("expanded");
            }
            parentListEl = parentListEl.parentNode.closest("li");
        }
    });

    function throttle(fn, periodMs) {
        var time = Date.now();
        var context = this;
        var args = Array.prototype.slice.call(arguments);
        return function() {
            if ((time + periodMs - Date.now()) < 0) {
                fn.apply(context, args);
                time = Date.now();
            }
        }
    }

    window.addEventListener("click", calculateActiveSubsectionFromLink);
    window.addEventListener("scroll", throttle(calculateActiveSubsectionFromScrollPosition, 50));
    calculateActiveSubsectionFromScrollPosition();
}

function initializeSearch() {
    var searchInputSelector = "#search-input";
    if (document.querySelector(searchInputSelector) != null && typeof window.docsearch === "function") {
        document.querySelector(".docs-navigation .search-container").style.display = "block";
        window.docsearch({
            apiKey: '5eb5540d6bd412c7e6d2c687bf10a395',
            indexName: 'gradle',
            inputSelector: searchInputSelector,
            autocompleteOptions: {
                keyboardShortcuts: ['/']
            },
            debug: false,
            transformData: function(suggestions) {
                return suggestions.map(function(suggestion) {
                    suggestion.url = suggestion.url.replace(/\/current\//, "/" + GRADLE_VERSION + "/");

                    // Rewrite top level hierarchy for DSL Reference pages
                    if (suggestion.anchor.substring(0, 10) === "org.gradle") {
                        suggestion.hierarchy.lvl0 = "DSL Reference";
                    }
                    return suggestion;
                });
            }
        });
    }
}

function postProcessNavigation() {
    versionizeDocsUrls(GRADLE_VERSION);
    registerNavigationActions();
    postProcessUserguideNavigation();
    initializeSearch();
}

function postProcessFooter() {
    var footerTimeEl = document.querySelector("footer time");
    if (footerTimeEl !== null) {
        footerTimeEl.innerHTML = new Date().getFullYear();
    }

    includeNewsletterSubscribeForm();
}

function includeNewsletterSubscribeForm() {
    var newsletterSubscribeContainer = document.querySelector(".newsletter-form__container");
    // Replace form with a CAPTCHA-enabled one
    if (newsletterSubscribeContainer != null) {
        newsletterSubscribeContainer.innerHTML = "<iframe id='newsletter-form-frame' src='https://go.gradle.com/l/68052/2018-09-07/bk6wml' style='display: block; width: 100%; border: 0;'></iframe>";
    }
}

function handleChapterMeta() {
    var path = location.pathname.replace("/", "").split("/", 3)[2];
    if (path) {
        // Restore previously selected rating
        var storageKey = "gradle-userguide-rating-" + path.replace(/\..*$/, "");
        var currentRating = window.localStorage.getItem(storageKey);
        var currentRatingEl = document.querySelector(".js-rating-widget .js-rating[data-label='" + currentRating + "']");
        if (currentRatingEl !== null) {
            currentRatingEl.classList.add("selected");
        }
    }

    // Store selected rating and persist display
    var ratingElements = document.querySelectorAll(".js-rating-widget .js-rating");
    [].forEach.call(ratingElements, function (el) {
        el.addEventListener("click", function (event) {
            var oldRatingEl = document.querySelector(".js-rating-widget .selected");
            if (oldRatingEl !== null) {
                oldRatingEl.classList.remove("selected");
            }

            var newRatingEl = event.currentTarget;
            newRatingEl.classList.add("selected");
            window.localStorage.setItem(storageKey, newRatingEl.getAttribute("data-label"));
        });
    });

    // Inject quick edit link
    var editLinkEl = document.querySelector(".js-chapter-meta .js-edit-link");
    if (editLinkEl !== null) {
        var editLinkBase = editLinkEl.getAttribute("href");
        editLinkEl.setAttribute("href", editLinkBase + path.replace(".html", ".adoc"));
    }
}

function postProcessCodeBlocks() {
    // Assumptions:
    //  1) All siblings that are marked with class="multi-language-sample" should be grouped
    //  2) Only one language can be selected per domain (to allow selection to persist across all docs pages)
    //  3) There is exactly 1 small set of languages to choose from. This does not allow for multiple language preferences. For example, users cannot prefer both Kotlin and ZSH.
    //  4) Only 1 sample of each language can exist in the same collection.

    var GRADLE_DSLs = ["groovy", "kotlin"];
    var preferredBuildScriptLanguage = initPreferredBuildScriptLanguage();

    // Ensure preferred DSL is valid, defaulting to Groovy DSL
    function initPreferredBuildScriptLanguage() {
        var lang = window.localStorage.getItem("preferred-gradle-dsl");
        if (GRADLE_DSLs.indexOf(lang) === -1) {
            window.localStorage.setItem("preferred-gradle-dsl", "groovy");
            lang = "groovy";
        }
        return lang;
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function processSampleEl(sampleEl, prefLangId) {
        var codeEl = sampleEl.querySelector("code[data-lang]");
        if (codeEl != null) {
            sampleEl.setAttribute("data-lang", codeEl.getAttribute("data-lang"));
            if (codeEl.getAttribute("data-lang") !== prefLangId) {
                sampleEl.classList.add("hidden");
            } else {
                sampleEl.classList.remove("hidden");
            }
        }
    }

    function switchSampleLanguage(languageId) {
        var multiLanguageSampleElements = [].slice.call(document.querySelectorAll(".multi-language-sample"));

        // Array of Arrays, each top-level array representing a single collection of samples
        var multiLanguageSets = [];
        for (var i = 0; i < multiLanguageSampleElements.length; i++) {
            var currentCollection = [multiLanguageSampleElements[i]];
            var currentSampleElement = multiLanguageSampleElements[i];
            processSampleEl(currentSampleElement, languageId);
            while (currentSampleElement.nextElementSibling != null && currentSampleElement.nextElementSibling.classList.contains("multi-language-sample")) {
                currentCollection.push(currentSampleElement.nextElementSibling);
                currentSampleElement = currentSampleElement.nextElementSibling;
                processSampleEl(currentSampleElement, languageId);
                i++;
            }

            multiLanguageSets.push(currentCollection);
        }

        multiLanguageSets.forEach(function (sampleCollection) {
            // Create selector element if not existing
            if (sampleCollection.length > 1 &&
                (sampleCollection[0].previousElementSibling == null ||
                    !sampleCollection[0].previousElementSibling.classList.contains("multi-language-selector"))) {
                var languageSelectorFragment = document.createDocumentFragment();
                var multiLanguageSelectorElement = document.createElement("div");
                multiLanguageSelectorElement.classList.add("multi-language-selector");
                languageSelectorFragment.appendChild(multiLanguageSelectorElement);


                sampleCollection.forEach(function (sampleEl) {
                    var optionEl = document.createElement("code");
                    var sampleLanguage = sampleEl.getAttribute("data-lang");
                    optionEl.setAttribute("data-lang", sampleLanguage);
                    optionEl.setAttribute("role", "button");
                    optionEl.classList.add("language-option");

                    optionEl.innerText = capitalizeFirstLetter(sampleLanguage);

                    optionEl.addEventListener("click", function updatePreferredLanguage(evt) {
                        var preferredLanguageId = optionEl.getAttribute("data-lang");
                        window.localStorage.setItem("preferred-gradle-dsl", preferredLanguageId);

                        // Record how far down the page the clicked element is before switching all samples
                        var beforeOffset = evt.target.offsetTop;

                        switchSampleLanguage(preferredLanguageId);

                        // Scroll the window to account for content height differences between different sample languages
                        window.scrollBy(0, evt.target.offsetTop - beforeOffset);
                    });
                    multiLanguageSelectorElement.appendChild(optionEl);
                });
                sampleCollection[0].parentNode.insertBefore(languageSelectorFragment, sampleCollection[0]);
            }
        });

        [].slice.call(document.querySelectorAll(".multi-language-selector .language-option")).forEach(function (optionEl) {
            if (optionEl.getAttribute("data-lang") === languageId) {
                optionEl.classList.add("selected");
            } else {
                optionEl.classList.remove("selected");
            }
        });

        [].slice.call(document.querySelectorAll(".multi-language-text")).forEach(function (el) {
            if (!el.classList.contains("lang-" + languageId)) {
                el.classList.add("hidden");
            } else {
                el.classList.remove("hidden");
            }
        });
    }

    switchSampleLanguage(preferredBuildScriptLanguage);
}

function initializeVersioning(version) {
    function createVersion(href, linkText) {
        var fragment = document.createDocumentFragment();
        var submenuItemEl = document.createElement('div');
        submenuItemEl.className = "site-header__navigation-submenu-item";
        var submenuItemLinkEl = document.createElement('a');
        submenuItemLinkEl.target = "_top";
        submenuItemLinkEl.className = "site-header__navigation-submenu-item-link";
        submenuItemLinkEl.setAttribute("href", href);
        var submenuItemTextEl = document.createElement('span');
        submenuItemTextEl.className = "site-header__navigation-submenu-item-link-text";
        submenuItemTextEl.textContent = linkText;
        submenuItemLinkEl.appendChild(submenuItemTextEl);
        submenuItemEl.appendChild(submenuItemLinkEl);
        fragment.appendChild(submenuItemEl);
        return fragment;
    }

    var versionHistoryStorageKey = "gradle-doc-version-history";
    var siteHeaderVersionEl = document.querySelector(".site-header-version");
    if (siteHeaderVersionEl != null) {
        siteHeaderVersionEl.textContent = version;

        window.addEventListener('load', function initializeVersionSelector() {
            if (typeof window.fetch === "function") {
                fetch("/docs-version-selector.html")
                    .then(function(response) {
                        return response.text();
                    }).then(function (value) {
                        siteHeaderVersionEl.innerHTML = value;
                        document.querySelector(".js-site-header__version-select .site-header-version").textContent = version;
                        var versionOptionsContainerEl = document.querySelector(".js-site-header__version-select .site-header__navigation-submenu");

                        // Manage versionHistory as a self-organizing LRA list of max length 4
                        var versionHistoryValue = window.localStorage.getItem(versionHistoryStorageKey);
                        var versionHistory = ["4.10.2", "4.9", "4.8.1"];
                        if (versionHistoryValue != null) {
                            versionHistory = versionHistoryValue.split(",").filter(function(v) { return v !== version });
                        }

                        // Add recently visited Gradle versions to the version selector with a link to all releases
                        versionHistory.forEach(function (v) {
                            var versionFragment = createVersion("/" + v, "Gradle Docs " + v);
                            versionOptionsContainerEl.appendChild(versionFragment);
                        });
                        var allVersionsFragment = createVersion("https://gradle.org/releases/", "All versions");
                        versionOptionsContainerEl.appendChild(allVersionsFragment);

                        // Add current version to head of the list unless it's a nightly version
                        if (version.indexOf("+") === -1) {
                            versionHistory.unshift(version);
                        }
                        var newVersionHistory = versionHistory.slice(0, 4).join(",");
                        window.localStorage.setItem(versionHistoryStorageKey, newVersionHistory);
                });
            }
        });
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    (function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,"script","https://www.google-analytics.com/analytics.js","ga");

    window.ga("create", "UA-4207603-1", "auto", "all", {
        "allowLinker": true
    });
    window.ga("create", "UA-4207603-7", "auto", "docs");
    window.ga("all.set", "transport", "beacon");
    window.ga("docs.set", "transport", "beacon");
    window.ga("all.send", "pageview");
    window.ga("docs.send", "pageview");

    window.ga("all.require", "linker");
    window.ga("all.linker:autoLink", ["gradle.com"], false, true);

    window.ga("all.require", "maxScrollTracker", {
        timeZone: "America/Los_Angeles",
        maxScrollMetricIndex: 1
    });

    window.ga("docs.require", "maxScrollTracker", {
        timeZone: "America/Los_Angeles",
        maxScrollMetricIndex: 1
    });

    /**
     * Given an event object, determine if the source element was a link, and track it with Google Analytics if it goes to another domain.
     * @param {Event} evt object that should be fired due to a link click.
     * @return boolean if link was successfully tracked.
     */
    function trackOutbound(evt) {
        var targetLink = evt.target.closest("a");
        if (!targetLink) {
            return false;
        }

        var href = targetLink.getAttribute("href");
        if (!href || href.substring(0, 4) !== "http") {
            return false;
        }

        if(href.indexOf(document.domain) === -1 || !document.domain) {
            ga("docs.send", {hitType: "event", eventCategory: "Outbound Referral", eventAction: "Clicked", eventLabel: href});
            ga("all.send", {hitType: "event", eventCategory: "Outbound Referral", eventAction: "Clicked", eventLabel: href});
            return true;
        }
        return false;
    }

    function trackCustomEvent(evt) {
        var eventTarget = evt.target.closest(".js-analytics-event");
        if (eventTarget !== null) {
            var eventAction = eventTarget.getAttribute("data-action");
            var eventLabel = eventTarget.getAttribute("data-label");
            ga("docs.send", {hitType: "event", eventCategory: document.location.pathname, eventAction: eventAction, eventLabel: eventLabel});
            return true;
        }
        return false;
    }

    document.addEventListener("click", trackOutbound, false);
    document.addEventListener("click", trackCustomEvent, false);

    window.piAId = '69052';
    window.piCId = '2332';
    (function() {
        function async_load() {
            var s = document.createElement('script'); s.type = "text/javascript";
            s.src = ('https:' == document.location.protocol ? 'https://pi' : 'http://cdn') + '.pardot.com/pd.js';
            var c = document.getElementsByTagName('script')[0]; c.parentNode.insertBefore(s, c);
        }
        if(window.attachEvent) { window.attachEvent('onload', async_load); }
        else { window.addEventListener('load', async_load, false); }
    })();

    postProcessNavigation();
    handleChapterMeta();
    postProcessCodeBlocks();
    postProcessFooter();
    initializeVersioning(window.siteDecorateVersion);
});
