$(document).ready(function() {

	$( '#form1' ).submit
	(
		function()
		{
			var formData = new FormData();
			formData.append( 'user', $( '[name="user"]' ).prop( 'value' ) );
			formData.append( 'pass', $( '[name="pass"]' ).prop( 'value' ) );

			$.ajax({
				type: 'POST',
				url: 'login.php',
				data: formData,
				dataType: 'JSON',
				processData: false,
				contentType: false,
				success: function( data )
				{
					if( data.correct == 1 )
					{
						location.reload();
					}
					else
					{
						$( '#response' ).empty();
						$( '#response' ).text( data.reply ).css( 'color', 'red' ).show().fadeOut( 2000 );
					}
				}
			});

			return false;
		}
	);

	$( '#form2' ).submit
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
					if( data.correct == 0 )
					{
						$( '#response' ).empty();
						$( '#response' ).text( data.reply ).css( 'color', '#0e0' ).show();
					}
					else
					{
						$( '#response' ).empty();
						$( '#response' ).text( data.reply ).css( 'color', 'red' ).show().fadeOut( 2000 );
					}
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
