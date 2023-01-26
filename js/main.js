'use strict';
let header = $(`<div class="nav-container">
<header>
<style>

/*=========
  sidenav
==========*/

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  background-color:#04021a;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  text-align:center;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #3FE4DB;
  display: block;
  transition: 0.3s;

}

.sidenav a:hover{
  color: #fff;
}
 
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}
.iconsidenav{
  visibility: hidden;
}

@media screen and (max-width: 500px){
  .nav-li{
    visibility:hidden;
    width: 10px;
  }
  .iconsidenav{
  visibility: visible;
  font-size: 1.5em;
  transform: translateY(-30%);
  font-weight: 600;
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  color: #3FE4DB;
  display: block;
  transition: 0.3s;

}

.iconsidenav:hover{
  color: #fff;
}
}</style>
  <a class="logo" href="index.html">ACM IGDTUW</a>
  <nav class="nav-itself">
    <ul>
      <li><a class="nav-li" href="events.html">Events</a></li>
      <li><a class="nav-li" href="team.html">About Our Team</a></li>
      <li><a class="nav-li" href="emp.html">Past Workshops</a></li>
      <li><div class="iconsidenav"><span onclick="openNav()">&#9776;</span></div></li>
    </ul>
  </nav>
  <div id="mySidenav" class="sidenav">
          <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
          <ul>
            <li><a href="team.html">Our Team</a></li>
            <li><a href="events.html">Events</a></li>
            <li><a href="emp.html">Past Workshops</a></li>
            <li><a href="Message.html">Message</a></li>
          </ul>
        </div>
        <script>
          function openNav() {
            document.getElementById("mySidenav").style.width = "100%";
          }

          function closeNav() {
            document.getElementById("mySidenav").style.width = "0";
          }
          </script>  
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
