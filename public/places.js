(function() {
  var placesAutocomplete = places({
    appId: 'plSX7JKR2QGL',
    apiKey: 'b71271f5a1e59990763b68a51bc60530',
    container: document.querySelector('#form-address'),
    templates: {
      value: function(suggestion) {
        return suggestion.name;
      }
    }
  }).configure({
    type: 'address'
  });
  placesAutocomplete.on('change', function resultSelected(e) {
    document.querySelector('#form-state').value = e.suggestion.administrative || '';
    document.querySelector('#form-city').value = e.suggestion.city || '';
    document.querySelector('#form-zip').value = e.suggestion.postcode || '';
  });
})();
