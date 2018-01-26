// ** runcoderun ** //
$(document).ready(function () {

  /** Change event on select list **/
  $('.select').on("change", function () {

    // ** gets dropdown value **// 
    var sectionSelection = $(this).val();

    // call the ajaxLoader function and pass in the variable sectionSelection
    ajaxLoader(sectionSelection);

  }); // .on change

  /** Ajax Loader load NYTimes articles and append to html **/
  function ajaxLoader(selected) {

    $('body').append('<div class="loading-text">Loading</div>');

    // $('.loader').hide();
    // $(document).ajaxStart(function(){
    //   $('.loader').show();
    // });
    // $(document).ajaxComplete(function(){
    //   $('.loader').hide();
    // });

    // ** gifloader here  ** //
    // beforeSend: function() {
    //   $(".loader").show();
    // },
    // success: function(data) {
    //   $(".loader").hide();
    // }

    var url = 'https://api.nytimes.com/svc/topstories/v2/' + selected + '.json';
    url += '?' + $.param({
      'api-key': "e82c553e3a1b42babf51d20ade81079e"
    });

    // ** ajax request ** //
    $.ajax({
      method: 'GET',
      url: url,
    }).done(function (data) {

      console.log(data);
      // $('.gallery').empty();

      // var topStory = data.results;

      // console.log(topStory);
      
      // ** filtering stories ** //
      $.each(data, function (index, value) {

      });

    })
    .always(function(){
      $('.loading-text').remove();
    });

  }// end ajaxLoader


}); // end doc ready