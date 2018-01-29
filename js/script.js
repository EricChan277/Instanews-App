
$(document).ready(function () {  // runcoderun //

  $(document).ajaxStart(function(){
    $('.loader').show();
  });

  $(document).ajaxComplete(function(){
    $('.loader').hide();
  });

  $('.select').on('change', function () {  // on change event triggering select list //
    
    var sectionSelection = $(this).val();  // gets dropdown value // 

    ajaxLoader(sectionSelection);  // call the ajaxLoader function and pass in the variable sectionSelection //

  }); // end of on change //

  function ajaxLoader(selected) {  // Ajax Loader - load NYTimes articles and append to html //

    var url = 'https://api.nytimes.com/svc/topstories/v2/' + selected + '.json';
    url += '?' + $.param({
      'api-key': 'e82c553e3a1b42babf51d20ade81079e'
    });

   
    $.ajax({
      method: 'GET',
      url: url,
    })
    .done(function (data) {
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