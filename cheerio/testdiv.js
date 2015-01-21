var cheerio=require('cheerio');
var data='<div class="col title"><img src="http://detail.tmall.com/item.htm" /></div>';

var $=cheerio.load(data);
console.log($('div.col.title img').attr('src'));
