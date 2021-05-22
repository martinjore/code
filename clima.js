let url="http : //api.weatherstack.com/current";
$.get(url, function(respuesta)
{

console.log(respuesta)

}, JSON)

$.ajax({
     url: 'https://api.weatherstack.com/current',
     data: {
     access_key: 02df164f0bec26ab4e31b1c2c54a9d41,
     query: 'New York'
     },
     dataType: 'json',
     success: function(apiResponse) {
      
      $("#temperaturaActual").html(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
     }
     });

    




