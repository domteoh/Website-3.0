$(document).ready(() => {

  $('.enter-button').on('click', () => {
    $('.landing').fadeOut();
    $('.nav .content .media .description').fadeIn();
    $('.media-1').fadeOut("fast");
    $('.media-1').siblings().fadeOut("fast");
    $('.description').fadeOut("fast");
  });

  $('.home').on('click', () => {
    $('.media-1').fadeOut("fast");
    $('.media-1').siblings().fadeOut("fast");
    $('.description').fadeOut("fast");
  });

  $('.piece1').on('click', () => {
    $('.media').fadeIn();
    $('.media-1').fadeIn();
    $('.description').fadeIn();
    $('.description-1').fadeIn();
    $('.media-1').siblings().hide();
    $('.description-1').siblings().hide();
  });

  $('.piece2').on('click', () => {
    $('.media').fadeIn();
    $('.media-2').fadeIn();
    $('.description').fadeIn();
    $('.description-2').fadeIn();
    $('.media-2').siblings().hide();
    $('.description-2').siblings().hide();
  });

  $('.piece3').on('click', () => {
    $('.media').fadeIn();
    $('.media-3').fadeIn();
    $('.description').fadeIn();
    $('.description-3').fadeIn();
    $('.media-3').siblings().hide();
    $('.description-3').siblings().hide();
  });

  $('.piece4').on('click', () => {
    $('.media').fadeIn();
    $('.media-4').fadeIn();
    $('.description').fadeIn();
    $('.description-4').fadeIn();
    $('.media-4').siblings().hide();
    $('.description-4').siblings().hide();
  });

  $('.piece5').on('click', () => {
    $('.media').fadeIn();
    $('.media-5').fadeIn();
    $('.description').fadeIn();
    $('.description-5').fadeIn();
    $('.media-5').siblings().hide();
    $('.description-5').siblings().hide();
  });

  $('.NewYork').on('click', () => {
    $('.media').fadeIn();
    $('.media-NY').fadeIn();
    $('.description').fadeIn();
    $('.description-NY').fadeIn();
    $('.media-NY').siblings().hide();
    $('.description-NY').siblings().hide();
  });

  $('.piece6').on('click', () => {
    $('.media').fadeIn();
    $('.media-6').fadeIn();
    $('.description').fadeIn();
    $('.description-6').fadeIn();
    $('.media-6').siblings().hide();
    $('.description-6').siblings().hide();
  });

  $('.piece7').on('click', () => {
    $('.media').fadeIn();
    $('.media-7').fadeIn();
    $('.description').fadeIn();
    $('.description-7').fadeIn();
    $('.media-7').siblings().hide();
    $('.description-7').siblings().hide();
  });

  $('.piece8').on('click', () => {
    $('.media').fadeIn();
    $('.media-8').fadeIn();
    $('.description').fadeIn();
    $('.description-8').fadeIn();
    $('.media-8').siblings().hide();
    $('.description-8').siblings().hide();
  });

  $('.piece9').on('click', () => {
    $('.media').fadeIn();
    $('.media-9').fadeIn();
    $('.description').hide();
    $('.media-9').siblings().hide();
    $('.description-9').siblings().hide();
  });

  $('.piece10').on('click', () => {
    $('.media').fadeIn();
    $('.media-10').fadeIn();
    $('.VRcontainer1').fadeIn();
    $('.description').fadeIn();
    $('.description-10').fadeIn();
    $('.media-10').siblings().hide();
    $('.description-10').siblings().hide();
  });

  $('.piece11').on('click', () => {
    $('.media').fadeIn();
    $('.media-11').fadeIn();
    $('.description').hide();
    $('.media-11').siblings().hide();
    $('.description-11').siblings().hide();
  });

  $('.piece12').on('click', () => {
    $('.media').fadeIn();
    $('.media-12').fadeIn();
    $('.description').hide();
    $('.media-12').siblings().hide();
    $('.description-12').siblings().hide();
  });

  $('.webdev').on('click', () => {
    $('.media').fadeIn();
    $('.description').fadeOut();
    $('.media-webdev').fadeIn();
    $('.media-webdev').siblings().hide();
    $('.description-webdev').siblings().hide();
  });

  $('.piece13').on('click', () => {
    $('.media').fadeIn();
    $('.media-13').fadeIn();
    $('.description').fadeOut();
    $('.description-13').fadeOut();
    $('.media-13').siblings().hide();
    $('.description-13').siblings().hide();
  });



// 360 Image Viewer

  window.addEventListener('load', onVrViewLoad);

  function onVrViewLoad() {
    // Selector '#vrview' finds element with id 'vrview'.
    var vrView = new VRView.Player('#vrview1', {
      image: 'https://raw.githubusercontent.com/domteoh/domteoh/master/img/360_2.jpeg',
      height: '400px'
    });

    var vrView = new VRView.Player('#vrview2', {
      image: 'https://raw.githubusercontent.com/domteoh/domteoh/master/img/360_3.jpeg',
      height: '400px'
    });

    var vrView = new VRView.Player('#vrview3', {
      image: 'https://raw.githubusercontent.com/domteoh/domteoh/master/img/360_1.jpeg',
      height: '400px'
    });
  }

  $('.image1').on('click', () => {
    $('.VRcontainer1').fadeIn();
    $('.VRcontainer1').siblings().hide();
  });

  $('.image2').on('click', () => {
    $('.VRcontainer2').fadeIn();
    $('.VRcontainer2').siblings().hide();
  });

  $('.image3').on('click', () => {
    $('.VRcontainer3').fadeIn();
    $('.VRcontainer3').siblings().hide();
  });

});
