$(document).ready(function(e) {
		var container = $('#card-item');
	
		container.isotope({
			animationEngine : 'best-available',
			animationOptions: {
				duration: 200,
				queue: false
			},
			layoutMode: 'fitRows'
		});	
	
		$('#filters a').click(function(){
			$('#filters a').removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			container.isotope({ filter: selector });
			setProjects();		
			return false;
		});		
		
		function splitColumns( ) { 
			var winWidth = $(window).width( ), columnNumb = 1;			
			
			if (winWidth > 1024) {
				columnNumb = 4;
			} else if (winWidth > 900) {
				columnNumb = 2;
			} else if (winWidth > 479) {
				columnNumb = 2;
			} else if (winWidth < 479) {
				columnNumb = 1;
			}
			
			return columnNumb;
		}		
		
		function setColumns( ) { 
			var winWidth = $(window).width( ), 
				columnNumb = splitColumns( ), 
				postWidth = Math.floor(winWidth / columnNumb);
			
			container.find('.rt-item').each(function () { 
				$(this).css( { 
					width : postWidth + 'px' 
				});
			});
		}		
		
		function setProjects( ) {
			setColumns( ); // 디바이스 해상도에 따라 컬럼을 설정
			container.isotope('reLayout');
		}
		
		$('.botton').click(function(e){ 
	   		if($(this).hasClass('up')){
				$(this).parents('.card-wrap').animate({'margin-top':'-275px'}, 200);
				$(this).addClass('down');
				$(this).removeClass('up');
				$(this).children().attr({"src":"sub02/imgs/sub02-card-down.png"});
			}else{
				$(this).parents('.card-wrap').animate({'margin-top':0}, 200);
				$(this).addClass('up');
				$(this).removeClass('down');
				$(this).children().attr({"src":"sub02/imgs/sub02-card-up.png"});
				}

     	}); 
		
    });