// jQueryのロード
(function(func) {
	// jQuery
	var scr = document.createElement('script');
	scr.src = '//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js';
	scr.onload = function() { func(jQuery.noConflict(true)); };
	document.body.appendChild(scr);
})(function($) {
	// コード本体ここから～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～

	// チェック対象定義（タグ名-アトリビュート名）…いくらでも追加可
	var resultStrArr = {
		"link-href"   : [],
		"script-src"  : [],
		"a-href"      : [],
		"area-href"   : [],
		"img-src"   : [],
		"form-action" : []
	};

	for(key in resultStrArr) {
		var tTag = key.split('-')[0];
		var tAtt = key.split('-')[1];
		$('html ' + tTag).each(function(n) {
			if(typeof $(this).attr(tAtt) !== 'undefined') {
				// prevではcanonicalをチェックしない
				if(location.hostname.match(/prev\./) && tTag == 'link' && tAtt == 'href' && $(this).attr('rel') == 'canonical') {
					resultStrArr[key][n] = 'skipped canonical';
				} else {
					if($(this).attr(tAtt).indexOf('tci-test.securesite.jp/x/b/') == -1) {
						resultStrArr[key][n] = findTestStr($(this).attr(tAtt));
					}
				}
			}
		});
	}

	var outHtmlStr = '';
	for(key in resultStrArr) {
		outHtmlStr += '<dl class="' + key + '"><dt><span class="key">' + key + '</span></dt>';
		for(var i=0; i<resultStrArr[key].length; i++) {
			if(typeof resultStrArr[key][i] !== 'undefined') {
				// パラメータ外し
				if(resultStrArr[key][i].indexOf('?') != -1) {
					resultStrArr[key][i] = resultStrArr[key][i].split('?')[0];
				}
				// クラス付け（発見）
				var foundFlag = resultStrArr[key][i].match(/\<em\>/) ? 'found ' : '';
				// クラス付け（フルパス）
				var fullpathFlag = resultStrArr[key][i].match(/^(http|\/\/)/) ? 'http ' : '';
				// クラス付け（除外）
				var hiddenFlag = resultStrArr[key][i].match(/(c\.iogous\.com|yjtag\.yahoo\.co\.jp\/tag|b92\.yahoo\.co\.jp|ana\.demdex\.net\/event\?|allnipponairwayscolt\.tt\.omtrdc\.net)/) ? 'hidden ' : '';
				outHtmlStr += '<dd class="' + foundFlag + fullpathFlag + hiddenFlag + '">' + resultStrArr[key][i] + '</dd>';
			}
		}
		outHtmlStr += '</dl>';
	}
	
	// filter
	var filterTool = '<div class="filterTool"><span class="btn-filter">Filter : <span class="filter-status">Off</span></span></div>';
	// baseタグ
	var baseResultStr = $('base').length > 0 ? '<strong>&lt;BASE&gt;タグが'+$('base').length+'個見つかりました。</strong>' : '&lt;BASE&gt;タグはありません。';
	baseResultStr = '<div id="report-for-base-tag">' + baseResultStr + '</div>';

	$('body').append('<div id="tesutostr">' + filterTool + baseResultStr + outHtmlStr + '</div>');
	$('body').append('<style>\
	#tesutostr { position:fixed; z-index:1174126; bottom:0; left:50%; margin-left:-500px; width:1000px; height:50%; overflow:auto; background-color:rgba(255,255,255,.98); box-shadow:0 0 8px rgba(0,0,0,.6); }\
	#tesutostr #report-for-base-tag { font-family:"meiryo"; padding:16px; background-color:#f0f0f0; color:#444; }\
	#tesutostr #report-for-base-tag strong { font-weight:bold; color:#e00; font-size:28px; }\
	#tesutostr dl { margin:15px; font-family:"Verdana"; }\
	#tesutostr dl dt { font-family:"Yu Gothic",sans-serif; font-weight:500; font-size:20px; border:1px solid #ddd; border-radius:4px; padding:8px; margin-bottom:4px; cursor:pointer; box-shadow:-1px -1px 2px rgba(0, 0, 0, 0.7) inset, 0 -15px 10px rgba(0, 0, 0, 0.08) inset; }\
	#tesutostr dl dt:hover { background-color:#f0f0f0; }\
	#tesutostr dl dt span { display:inline-block; vertical-align:middle; }\
	#tesutostr dl dt span.key { width:8em; }\
	#tesutostr dl dt span.count { font-size:11px; width:4.5em; text-align:center; background-color:#fff; border:1px solid #ccc; box-shadow:-1px -1px 0 rgba(0,0,0,.3),1px 1px 0 #fff; border-radius:3px; padding:4px 8px; margin-left:8px; }\
	#tesutostr dl dt span.count.wow { font-size:13px; background-color:#e00; color:#fff; font-weight:800; }\
	#tesutostr dl dd { display:none; text-align:left; font-size:10px; color:#555; word-break:break-all; border:1px solid transparent; margin-bottom:1px; }\
	#tesutostr dl dd.found { border-color:#f00; }\
	#tesutostr dl dd.http { color:#00d; }\
	#tesutostr dl dd.hidden { display:none; }\
	#tesutostr dl dd.show { display:block}\
    #tesutostr dl.filter dd {display:none !important;}\
    #tesutostr dl.filter dd.found {display:block !important;}\
	#tesutostr dl dd em { font-style:normal; font-weight:bold; background-color:#f00; color:#fff; }\
	#tesutostr .filterTool { position: fixed; left: 50%; transform: translateX(-50%); z-index: 9999; padding: 5px 20px; cursor: pointer; color: #fff; background: #de1054;}\
	</style>');

	$('#tesutostr dl').each(function(){
		$(this).find('dt').append('<span class="count">' + $(this).find('dd.found:not(.hidden)').length + '/' + $(this).find('dd').length + '</span>');
		$(this).find('dt').click(function(){
			$(this).parent('dl').find('dd:not(.hidden)').each(function(){ $(this).toggleClass("show"); });
		});
	});

    $('.btn-filter').click(function(){
        $("#tesutostr dl").toggleClass("filter");
		let text = $(this).find('.filter-status').text();
		let newtext = text == 'On' ? 'Off' : 'On';
		$(this).find('.filter-status').text(newtext);
    })

	$('#tesutostr dl dt .count').each(function(){
		if(($(this).text().split('/')[0] - 0) > 0 ) {
			$(this).addClass('wow');
		}
	});

	function findTestStr(str) {
		if(str.match(/(wwpj5|8083|10\.1\.35\.105|10\.34\.94\.23|cls|dev|\-kensho|lmt|mnt|stage|stg|tadam|tamcmobile|[^la]test|tfs|training|tsPDA|\-tst|download\.macromedia\.com|P182\-113|P182\-116|P182\-114|P182\-117|kadam|ksearch|tsearch|seino|tradam|directanswer|kaib|anasitesearch|\/language\-masters\/|prev\-bak\.|(mnt1|tst|stg)\.test\.|aem\-tec\.|ana-mig\.tci-dm\.jp|\.digitalmarketing\.jp|\.trans\-cosmos\-dmi\.co.jp|ana\.co\-site\.jp|prev\.www)/)) {
			str = str.replace(/(wwpj5|8083|10\.1\.35\.105|10\.34\.94\.23|cls|dev|\-kensho|lmt|mnt|stage|stg|tadam|tamcmobile|[^la]test|tfs|training|tsPDA|\-tst|download\.macromedia\.com|P182\-113|P182\-116|P182\-114|P182\-117|kadam|ksearch|tsearch|seino|tradam|directanswer|kaib|anasitesearch|\/language\-masters\/|prev\-bak\.|(mnt1|tst|stg)\.test\.|aem\-tec\.|ana-mig\.tci-dm\.jp|\.digitalmarketing\.jp|\.trans\-cosmos\-dmi\.co\.jp|ana\.co\-site\.jp|prev\.www)/g, '<em>$1</em>');
		}
		return str;
	}

	// コード本体ここまで～～～～～～～～～～～～～～～～～～～～～～～～～～～～～～
});



/*
\/language\-masters\/|prev\-bak\.|(mnt1|tst|stg)\.test\.|aem\-tec\.|ana-mig\.tci-dm\.jp|\.digitalmarketing\.jp|\.trans\-cosmos\-dmi\.co.jp|ana\.co\-site\.jp|prev\.www
*/