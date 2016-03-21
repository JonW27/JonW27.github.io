$(document).ready(function() {

	$( '#form1' ).submit
	(
		function()
		{
			var formData = new FormData();
			formData.append( 'answer', $( '[name="password"]' ).prop( 'value' ) );

			$.ajax({
				type: 'POST',
				url: 'check.php',
				data: formData,
				dataType: 'JSON',
				processData: false,
				contentType: false,
				success: function( data )
				{
						$( '#response' ).empty();
						$( '#response' ).text( data.reply ).css( 'color', '#0e0' ).show();
				}
			});

			return false;
		}
	);

	$( "#logout" ).click
	(
		function()
		{
			window.location.replace( 'logout.php' );
		}
	);

});
