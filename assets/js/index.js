(function (document, window, $) {
  $(document).ready(function(){
    updateProductListings();
    //ajaxifyContactForm();
  });

  function updateProductListings() {
    var listings = $('#product-listings>ul');
    
    // Create <div><div><p> structure required for ellipsis solution
    // http://www.mobify.com/blog/multiline-ellipsis-in-pure-css/
    var ellipsisDiv = document.createElement('div');
    ellipsisDiv.className = "ellipsis";
    var innerDiv = document.createElement('div');
    ellipsisDiv.appendChild(innerDiv);

    listings.children().each(function() {
      var ellipsisCopy = ellipsisDiv.cloneNode(true);
      $(this).children('p').detach().appendTo(ellipsisCopy.children[0]);
      $(this).append(ellipsisCopy);
    });
  }

  function ajaxifyContactForm () {
    var contactForm = $('#contact'),
        originalUrl = contactForm.attr('action');
        contactBtn  = $('.contact [type=submit]'),
        alert       = $('#contact-alert');

    contactBtn.on('click', function (e) {
      e.preventDefault();
      var url = [originalUrl, contactForm.serialize()].join('?'),
          img = $('<img></img');

      img.on('error', function (e) {
        console.log('known error', e);
      });

      contactBtn.val('Thank you');
      contactBtn.attr('disabled', true);
      img.attr('src', url);

    });
  }
})(document, window, $);
