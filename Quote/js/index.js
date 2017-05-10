<!-- Credit to Darrel (https://codepen.io/darrell1226/pen/mJQmoel--!>
$(document).ready(function(){
  var quotes = ["Resiko terbesar adalah tidak mengambil resiko sama sekali. Dalam dunia yang berubah dengan sangat cepat ini, satu-satunya strategi yang dijamin gagal adalah tidak mengambil resiko. - Mark Zuckerberg","Facebook aslinya tidak dibangun untuk menjadi perusahaan. Facebook dibangun untuk misi sosial – untuk membuat dunia lebih terbuka dan saling terhubung - Mark Zuckerberg","Dengan memberikan orang kekuatan untuk berbagi, kami membuat dunia menjadi lebih transparan. - Mark Zuckerberg", "Banyak orang yang penasaran dengan cerita Facebook hingga bisa menjadi seperti ini. Sebenarnya ceritanya sangatlah membosankan. Maksud saya, kami hanya duduk bersama komputer kami selama enam tahun untuk coding. - Mark Zuckerberg", "Jalan seorang hacker adalah pendekatan untuk membangun yang mencakup perbaikan dan iterasi secara terus-menerus. Hacker percaya bahwa sesuatu itu bisa selalu menjadi lebih baik, dan tidak ada yang sempurna. - Mark Zuckerberg", "Mungkin orang bisa menjadi sangat cerdas atau memiliki keahlian yang bisa langsung diaplikasikan, tetapi jika mereka tidak percaya dengan apa yang mereka punya, mereka tidak akan bisa bekerja keras - Mark Zuckerberg"];
  var backgroundColors = ['#6495ED', '#FF7F50', '#00CED1', '#00BFFF', '#FFD700', '#CD5C5C', '#F0E68C', '#ADD8E6', '#E0FFFF', '#90EE90', '#20B2AA', '#87CEFA', '#B0C4DE','#FFA500','#BC8F8F','#2E8B57','#FFF5EE','#C0C0C0'];
  var rand = quotes[Math.floor( Math.random() * quotes.length )];
  var index;
  $('blockquote').text(rand);  
  $('.quote').click(function(){
    index = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
    $('body').css('background-color', index);
    $('blockquote').text(quotes[Math.floor( Math.random() * quotes.length )]);
  });
  $('.tweet').click(function(){
    $('.tweet a').attr('href','https://twitter.com/intent/tweet?text='+encodeURIComponent(rand));
  });
});