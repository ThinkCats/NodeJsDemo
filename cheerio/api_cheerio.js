var txt='<ul id="fruits"><li class="apple">APPLE</li><li class="orange">Orange</li><li class="pear">Pear</hi></ul>';
var cheerio=require('cheerio');

var $=cheerio.load(txt);
console.log($('.apple','#fruits').text());
console.log($('ul .apple').attr('class'));
console.log($('li[class=orange]').html());

var fruits=[];
$('li').each(function(i,elem){
	fruits[i]=$(this).text();
});
fruits.join(',');
console.log(fruits);
