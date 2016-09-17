//플러그인
jQuery.fn.paging = function( options, callback ) {
  var paging = {
      el : $(this),
      setEvent : function() {
          var el = this.el;
          var opts = this.opts;
          var callback = this.callback;
          var that = this;

          //Event
          el.find('.pageNum').off('click').on('click',function(e){
              e.preventDefault();
              el.find('.on').removeClass('on');
              $(this).addClass('on');
              if( $(this).text() != opts.curPage ) {
                  opts.curPage = $(this).find('span').text();
                  callback( $(this).text()*1 );
              }
          });

          //Arrow Move Page
          var arrow = function( returnPage ) {
              opts.curPage = returnPage;
              that.setOpts( that.opts, that.callback ).drawPaging().setEvent();
              callback( returnPage );
          }

          el.find('.firstPage').off('click').on('click',function(e) {
              e.preventDefault();
              arrow( 1 );
          });
		  if ( opts.totalCount == 0) {
			   el.find('.prevPage').off('click');
			   el.find('.nextPage').off('click');
		  } else  {
			  el.find('.prevPage').off('click').on('click',function(e) {
				  e.preventDefault();
				  var targetPage = opts.curPage * 1 - 1 ;
				  var returnPage = targetPage > 1 ? targetPage: 1;
				  arrow( returnPage );
			  });

			  el.find('.nextPage').off('click').on('click',function(e) {
				  e.preventDefault();
				  var targetPage = opts.curPage * 1 + 1 ;
				  var returnPage = targetPage > opts.endPage ? opts.endPage : targetPage;
				  arrow( returnPage );
			  });
		  }
          el.find('.lastPage').off('click').on('click',function(e) {
              e.preventDefault();
              arrow( opts.endPage );
          });
      },
      drawPaging : function() {
          var callback = this.callback;
          var opts = this.opts;
          var that = this.el, html = '', className;

			//Arrow
			html+= '<a class="prevPage"><img src="http://img.yonhapnews.co.kr/basic/svc/14_images/btn_page_prev.gif" alt="이전 페이지"/></a>\n';
			//Number
			if ( opts.totalCount == 0) {
				html += '<strong class="pageNum">1</strong>\n';
			} else {
			var strong = opts.curPage;
				for( var i = opts.firstPage; i < opts.lastPage +1; i++ ) {
						if( strong == i ) {
							html += '<strong class="pageNum">' + i + '</strong>\n';
						}
						else {
							html += '<a href="#" class="pageNum">' + i + '</a>\n';
						}
				}
			}
          //Arrow
          html+= '<a class="nextPage"><img src="http://img.yonhapnews.co.kr/basic/svc/14_images/btn_page_next.gif" alt="다음 페이지"/></a>';
          that.html( html );
          return this;
      },
      opts : '',
      setOpts : function( options, callback ) {
          var callback  = this.callback = callback || function( data ) {};
          var opts = this.opts = { pagingSize : 10, pageSize : 10, curPage : 1 };
          for( opt in options ) { opts[opt] = options[opt]; }
          if( !callback ) { callback = function(){};}
          //callback( options );

          //유효한 첫번째 페이지부터 마지막 페이지 번호
          opts.startPage = 1;

          //마지막 페이지!!
          var endPage = 0;
          if( opts.endPage ) {
              endPage = opts.endPage;
          }
          else {
              endPage = ~~( opts.totalCount / opts.pageSize );

              //마지막 페이지가 0으로 나눠떨어진다면 상관없지만 남은 수가 있다면 페이지 하나를 더 추가해준다.
              opts.endPage = opts.totalCount % opts.pageSize == 0 ? endPage : endPage + 1;
          }

          //요청한 현재 페이지가 마지막 페이지보다 크다면 마지막 페이지를 보여준다. 만약 1보다 작다면 첫페이지를 보여준다.
          if( opts.curPage > opts.endPage ) {
              opts.curPage = opts.endPage;
          }
          else if( opts.curPage < 1 ) {
              opts.curPage = 1;
          }

          //그려줄 첫번재 페이지 번호
          opts.firstPage = (~~(opts.curPage / opts.pagingSize ) * opts.pagingSize ) + 1;

          //그려줄 마지막 페이지 번호
          opts.lastPage = opts.firstPage + opts.pagingSize - 1;

          //선택된 페이징 사이즈로 나뉘어 떨어지는 페이지의 표시를 위해 한페이 전으로 돌아감
          if( opts.curPage % opts.pagingSize == 0 ) {
              opts.firstPage -= opts.pagingSize;
              opts.lastPage -= opts.pagingSize;
          }
          if( opts.lastPage > opts.endPage ) {
              opts.lastPage = opts.endPage;
          }

          this.el.data('opts', opts )
          return this;
      },
      init : function( options, callback ) {
          this.setOpts( options, callback ).drawPaging().setEvent();
      }
  }
  paging.init( options, callback );
}
