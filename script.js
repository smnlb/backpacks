$(function()
{
    $(document).ready(function(){
        var buttonadd = '<span><button class="btn btn-success btn-add" type="button"><span class="glyphicon glyphicon-plus"></span></button></span>';
        var fvrhtmlclone = '<div class="fvrclonned">'+$(".fvrduplicate").html()+buttonadd+'</div>';
        $( ".fvrduplicate" ).html(fvrhtmlclone);
        $( ".fvrduplicate" ).after('<div class="fvrclone"></div>');

        $(document).on('click', '.btn-add', function(e)
        {
            e.preventDefault();
    
            $( ".fvrclone" ).append(fvrhtmlclone);
                  $(this).removeClass('btn-add').addClass('btn-remove')
                .removeClass('btn-success').addClass('btn-danger')
                .html('<span class="glyphicon glyphicon-minus"></span>');
            
        }).on('click', '.btn-remove', function(e)
        {
            $(this).parents('.fvrclonned').remove();
    
    		e.preventDefault();
    		return false;
    	});

    });
    
    
// FUNÇÂO DE TESTE    
  function showValues() {
    var fields = $( ":input" ).serializeArray();
    $( "#results" ).empty();
    jQuery.each( fields, function( i, field ) {
      $( "#results" ).append( field.value + " " );
    });
  }    
    
    $( "form" ).submit(function( event ) {
      showValues();
      console.log( $( this ).serializeArray() );
      event.preventDefault();
    });    

});
