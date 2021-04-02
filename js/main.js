'use strict';
let header = $(`<div class="nav-container">
<header>
  <a class="logo" href="index.html">ACM IGDTUW</a>
  <nav class="nav-itself">
    <ul>
      <li><a class="nav-li" href="events.html">Events</a></li>
      <li><a class="nav-li" href="team.html">Executive Body</a></li>
      <li><a class="nav-li" href="emp.html">Past Workshops</a></li>
    </ul>
  </nav>  
</header>
</div>`)

let footer = $(`
<section class="footer">
<div class="footer-container">
  <div class="footer-images">
    <img src="img/igdtuwlogo.jpg" alt="IGDTUW Logo">  
  </div>
  <p class="footer-desc desc">ACM Student Chapter at IGDTUW is the technical society at Department of Information Technology, IGDTUW. It is student driven society where active student members organize plethora of events during the semester.</p>
  <div class="footer-social">
    <h1 class="title footer-social-title">Reach out to us!</h1>
    <ul>
      <li><a data-toggle="tooltip" data-placement="top" title="Follow us on Facebook" class="soc_tooltip" href="https://www.facebook.com/AcmStudentChaptersIGIT/" target="_blank"><img class="social-icon" src="assets/facebook-icon.svg" alt="Check out ACM IGDTUW on Facebook"></a></li>
      <li><a data-toggle="tooltip" data-placement="top" title="Follow us on LinkedIn" class="soc_tooltip"  href="https://www.linkedin.com/company/acm-student-chapter-igdtuw/"  target="_blank"><img class="social-icon" src="assets/linkedin-icon.svg" alt="Check out ACM IGDTUW on LinkedIn"></a></li>
      <li><a data-toggle="tooltip" data-placement="top" title="Follow us on Twitter" class="soc_tooltip"  href="https://twitter.com/AcmIgdtuw" target="_blank"><img class="social-icon" src="assets/twitter-icon.svg" alt="Check out ACM IGDTUW on Twitter"></a></li>
      <li><a data-toggle="tooltip" data-placement="top" title="Follow us on Instagram" class="soc_tooltip"  href="https://www.instagram.com/acm_igdtuw/" target="_blank"><img class="social-icon" src="assets/instagram-icon.svg" alt="Check out ACM IGDTUW on Instagram"></a></li>    
    </ul>
  </div>  
</div>
</section>
<!-- COPYRIGHT SECTION BEGINS -->
<section class="copyright-section">
    <p class="copyright-desc">Designed & Developed By ACM IGDTUW Student Chapter</p>
</section>
<!-- COPYRIGHT SECTION ENDS -->

`);

$(function () {
    let bodyElement = $(`body`);
    bodyElement.prepend(header);
    bodyElement.append(footer);
});


/* ----------------------------------------------------------- */
	/*  12. SCROLL UP BUTTON
	/* ----------------------------------------------------------- */
jQuery(function($){
	//Check to see if the window is top if not then display button

  $(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
   
  //Click event to scroll to top

  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });



});