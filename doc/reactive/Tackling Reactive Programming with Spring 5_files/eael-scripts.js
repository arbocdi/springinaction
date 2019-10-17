(function ($) {
	"use strict";
	var ToggleHandler = function ( $scope, $ ) {
        var toggle_elem             = $scope.find('.eael-toggle-container').eq(0);
        $(toggle_elem).each(function () {
            var $toggle_target      = $(this).data('toggle-target');
            var $toggle_switch      = $($toggle_target).find('.eael-toggle-switch');
            $($toggle_target).find('.eael-primary-toggle-label').addClass("active");
            $($toggle_switch).toggle(
                function() {
                    var $parent_container = $(this).closest('.eael-toggle-container');
                    console.log($parent_container);
                    $($parent_container).find('.eael-toggle-content-wrap').removeClass("primary");
                    $($parent_container).children('.eael-toggle-content-wrap').addClass("secondary");
                    $($parent_container).find('.eael-toggle-switch-container').addClass("eael-toggle-switch-on");
                    $(this).parent().parent().find('.eael-primary-toggle-label').removeClass("active");
                    $(this).parent().parent().find('.eael-secondary-toggle-label').addClass("active");
                },
                function() {
                    var $parent_container = $(this).closest('.eael-toggle-container');
                    $($parent_container).children('.eael-toggle-content-wrap').addClass("primary");
                    $($parent_container).children('.eael-toggle-content-wrap').removeClass("secondary");
                    $($parent_container).find('.eael-toggle-switch-container').removeClass("eael-toggle-switch-on");
                    $(this).parent().parent().find('.eael-primary-toggle-label').addClass("active");
                    $(this).parent().parent().find('.eael-secondary-toggle-label').removeClass("active");
                }
            );
        });
    };

    var FlipCarousel = function( $scope, $ ) {
        var flipCarousel_elem = $scope.find('.eael-flip-carousel').eq(0);
        $(flipCarousel_elem).each(function() {
            var style = $(this).data('style'),
                start = $(this).data('start'),
                fadeIn = $(this).data('fadein'),
                loop = $(this).data('loop'),
                autoplay = $(this).data('autoplay'),
                pauseOnHover = $(this).data('pauseonhover'),
                spacing = $(this).data('spacing'),
                click = $(this).data('click'),
                scrollwheel = $(this).data('scrollwheel'),
                touch = $(this).data('touch'),
                buttons = $(this).data('buttons'),
                buttonPrev = $(this).data('buttonprev'),
                buttonNext = $(this).data('buttonnext');

            $(this).flipster({
                style: style,
                start: start,
                fadeIn: fadeIn,
                loop: loop,
                autoplay: autoplay,
                pauseOnHover: pauseOnHover,
                spacing: spacing,
                click: click,
                scrollwheel: scrollwheel,
                tocuh: touch,
                buttons: buttons,
                buttonPrev: '<i class="flip-custom-nav ' + buttonPrev + '"></i>',
                buttonNext: '<i class="flip-custom-nav ' + buttonNext + '"></i>',
            });
        });
    }

    var FilterGallery = function( $scope, $ ) {
        var filtergallery_elem = $scope.find('.eael-filter-gallery-wrapper').eq(0);

        $(filtergallery_elem).each(function() {
            var gridStyle = $(this).data('grid-style'),
                ref = $(this).find('.item').data('ref'),
                duration = $(this).data('duration'),
                effects = $(this).data('effects'),
                popup = $(this).data('popup'),
                galleryEnabled = $(this).data('gallery-enabled');
            var mixer = mixitup( $(this), {
                controls: {
                    scope: 'local'
                },
                selectors: {
                    target: '[data-ref~="'+ref+'"]'
                },
                animation: {
                    enable: true,
                    duration: ''+duration+'',
                    effects: ''+effects+'',
                    easing: 'cubic-bezier(0.245, 0.045, 0.955, 1)',
                }
            } );

            // Set Background Image
            if( gridStyle == 'eael-hoverer' || gridStyle == 'eael-tiles' ) {
                var postColumn = $(this).find( '.eael-filter-gallery-container .item' );
                postColumn.each( function() {
                    let dataBg = $(this).attr( 'data-item-bg' );
                    $(this).css( 'background-image', 'url( '+ dataBg +' )' );
                } );
            }
            // Magnific Popup
            if( true == popup ) {
                $(this).find('.eael-magnific-link').magnificPopup({
                    type: 'image',
                    gallery:{
                        enabled: galleryEnabled
                    },
                    callbacks: {
                        close: function() {
                            $( '#elementor-lightbox' ).hide();
                        }
                    }
                });
            }
        });
    }

    var InstagramGallery = function( $scope, $ ) {

        var instagramGallery = $scope.find('.eael-instagram-feed').eq(0);
        $(instagramGallery).each(function() {
            var get = $(this).find('.eael-insta-grid').data('get'),
                tagName = $(this).find('.eael-insta-grid').data('tag-name'),
                userId = $(this).find('.eael-insta-grid').data('user-id'),
                clientId = $(this).find('.eael-insta-grid').data('client-id'),
                accessToken = $(this).find('.eael-insta-grid').data('access-token'),
                limit = $(this).find('.eael-insta-grid').data('limit'),
                resolution = $(this).find('.eael-insta-grid').data('resolution'),
                sortBy = $(this).find('.eael-insta-grid').data('sort-by'),
                target = $(this).find('.eael-insta-grid').data('target');

            var loadButton = $(this).find('.eael-load-more-button');
            var feed = new Instafeed({
                get: ''+get+'',
                tagName: ''+tagName+'',
                userId: userId,
                clientId: ''+clientId+'',
                accessToken: ''+accessToken+'',
                limit: ''+limit+'',
                resolution: ''+resolution+'',
                sortBy: ''+sortBy+'',
                target: ''+target+'',
                template: '<div class="eael-insta-feed eael-insta-box"><div class="eael-insta-feed-inner"><div class="eael-insta-feed-wrap"><div class="eael-insta-img-wrap"><img src="{{image}}" /></div><div class="eael-insta-info-wrap"><div class="eael-insta-likes-comments"><p> <i class="fa fa-heart-o" aria-hidden="true"></i> {{likes}}</p> <p><i class="fa fa-comment-o" aria-hidden="true"></i> {{comments}}</p> </div><?php echo $show_caption; ?></div><?php echo $enable_link; ?></div></div></div>',
                after: function() {
                    var el = $(this);
                    if (el.classList)
                        el.classList.add('show');
                    else
                        el.className += ' ' + 'show';
                },
                // every time we load more, run this function
                after: function() {
                    // disable button if no more results to load
                    if (!this.hasNext()) {
                        $(loadButton).parent().addClass( 'no-pagination' );
                        loadButton.attr('disabled', 'disabled');
                    }
                },
                success: function() {
                    $(this).find('.eael-insta-grid').masonry();
                    $(loadButton).removeClass( 'button--loading' );
                    $(loadButton).find( 'span' ).html( 'Load More' );
                }
            });

            // bind the load more button
            loadButton.on('click', function() {
                console.log('clicked');
                feed.next();
                $(loadButton).addClass( 'button--loading' );
                $(loadButton).find( 'span' ).html( 'Loading...' );
            });

            feed.run();

            $(window).load(function() {
                $(this).find('.eael-insta-grid').masonry({
                    itemSelector: '.eael-insta-feed',
                    percentPosition: true,
                    columnWidth: '.eael-insta-box'
                });
            });
        });
    }

    $(window).on('elementor/frontend/init', function () {
        elementorFrontend.hooks.addAction('frontend/element_ready/eael-toggle.default', ToggleHandler);
        elementorFrontend.hooks.addAction('frontend/element_ready/eael-flip-carousel.default', FlipCarousel);
        elementorFrontend.hooks.addAction('frontend/element_ready/eael-filterable-gallery.default', FilterGallery);
        elementorFrontend.hooks.addAction('frontend/element_ready/eael-dynamic-filterable-gallery.default', FilterGallery);
        elementorFrontend.hooks.addAction('frontend/element_ready/eael-instafeed.default', InstagramGallery);
    });
}(jQuery));