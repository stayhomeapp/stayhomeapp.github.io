$(document).ready(function(){

			$('.menuBtn').click(function() {
				if($('.menuBtn').hasClass('clicked')) {
					$(this).removeClass('clicked');
					$('.mainMenu').removeClass('flip');
					$('.container').removeClass('flip');
				}
				else {
					$(this).addClass('clicked');
					$('.mainMenu').addClass('flip');
					$('.container').addClass('flip');
				}
			});

			$(".mainMenu a").click(function(e) {
				e.preventDefault();
				
				_this	=	$(this);
				_page	=	_this.data('page');

				$('.menuBtn').removeClass('clicked');
				$('.mainMenu').removeClass('flip');
				$('.container').removeClass('flip');

			    $('.mainMenu a').removeClass('active');
			    _this.addClass('active');

			    $(".page").removeClass("active fade");
			    $(".page-" + _page).addClass("active fade");

			    setTimeout(function() {
					$("html, body").animate({ scrollTop: 0 }, "slow");
			    }, 500);
			    

			});
		});
