
$(document).ready(function () { 

  // show/hide ajax loader //
  $(document).ajaxStart(function(){
    $('.loader').show();
  });

  $(document).ajaxComplete(function(){
    $('.loader').hide();
  });

  // on change event triggering select list //
  $('.select').on('change', function () {  
    
    var sectionSelection = $(this).val();   

    ajaxLoader(sectionSelection);  

  }); // end of on change //

  function ajaxLoader(selected) {  

    var url = 'https://api.nytimes.com/svc/topstories/v2/' + selected + '.json';
    url += '?' + $.param({
      'api-key': 'e82c553e3a1b42babf51d20ade81079e'
    });

    $.ajax({
      method: 'GET',
      url: url,
    })
    .done(function (data) {
      $('.logo').css('width', '140px');
      $('.logo').css('padding-top', '0px');
      $('.gallery').empty();

      var articlesWithImages = data.results.filter(function(article) {  
        return article.multimedia[0];
      });

      var twelveArticles = articlesWithImages.slice(0, 12);
    
      var articlesHtml = '';

      $.each(twelveArticles, function(index, article) {
        articlesHtml += '<div class="article">'; 
        articlesHtml += '<a href="' + article.short_url + '">';
        articlesHtml += article.abstract;
        articlesHtml += '<img src="' + article.multimedia[4].url + '" />';
        articlesHtml += '</a></div>';
        console.log(article);
      });
      
      $('.gallery').append(articlesHtml);
      
    }) // end ajaxLoader
    .always(function() {
      $('.loading-text').remove();
    });
  }
}); // end doc ready