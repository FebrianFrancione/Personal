// $('input').on('change', function() {
//     $('body').toggleClass('blue');
//   });
  
$(document).ready(function() {
  $('#autoWidth').lightSlider({
    autoWidth:true,
    loop: true,
    onSliderLoad: function() {
      $('#autoWidth').removeClass('cS-hidden');
    }
  });
});


/* <div class="box">
  <p class="marvel">Azure</p>
    <img src="./images/AZ-304.png" alt="Azure Solutions Architect Certification" class="model">
    <!-- details -->
    <div class="details">
      <!-- logo-character -->
      <img src="./images/microsoft.jpg" alt="Azure Solutions Architect Certification" class="logo" width="100px" style="height: auto;">
      <!-- character details -->
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    </div>
</div> */