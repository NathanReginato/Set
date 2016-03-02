console.log("facebook");

$.ajaxSetup({
  cache: true
});

function updateStatusCallback() {
  alert('Status updated!!');
}

$.getScript('//connect.facebook.net/en_US/sdk.js', function() {
  FB.init({
    appId: '1710219289192635',
    version: 'v2.5' // or v2.0, v2.1, v2.2, v2.3
  });
  $('#loginbutton,#feedbutton').removeAttr('disabled');
  FB.getLoginStatus(updateStatusCallback);

$(document).delegate('.share', 'click', function() {
    console.log('clicked');
    FB.ui({
      method: 'share_open_graph',
      action_type: 'og.likes',
      action_properties: JSON.stringify({
        object: 'https://developers.facebook.com/docs/',
      })
    }, function(response) {
      // Debug response (optional)
      console.log(response);
    });
  })
});
