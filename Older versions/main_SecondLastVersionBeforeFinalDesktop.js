$(document).ready(() => {

  $('.piece1').on('click', () => {
    $('.piece1-media').fadeIn();
    $('.description').fadeIn();
    $('.piece1-description').fadeIn();
    $('.piece1-media').siblings().hide();
    $('.piece1-description').siblings().hide();
  });

  $('.piece2').on('click', () => {
    $('.piece2-media').fadeIn();
    $('.description').fadeIn();
    $('.piece2-description').fadeIn();
    $('.piece2-media').siblings().hide();
    $('.piece2-description').siblings().hide();
  });

  $('.piece3').on('click', () => {
    $('.piece3-media').fadeIn();
    $('.description').fadeIn();
    $('.piece3-description').fadeIn();
    $('.piece3-media').siblings().hide();
    $('.piece3-description').siblings().hide();
  });

  $('.piece4').on('click', () => {
    $('.piece4-media').fadeIn();
    $('.description').fadeIn();
    $('.piece4-description').fadeIn();
    $('.piece4-media').siblings().hide();
    $('.piece4-description').siblings().hide();
  });

  $('.piece5').on('click', () => {
    $('.piece5-media').fadeIn();
    $('.description').fadeIn();
    $('.piece5-description').fadeIn();
    $('.piece5-media').siblings().hide();
    $('.piece5-description').siblings().hide();
  });

  $('.NewYork').on('click', () => {
    $('.NewYork-media').fadeIn();
    $('.description').fadeIn();
    $('.NewYork-description').fadeIn();
    $('.NewYork-media').siblings().hide();
    $('.NewYork-description').siblings().hide();
  });

  $('.piece6').on('click', () => {
    $('.piece6-media').fadeIn();
    $('.description').fadeIn();
    $('.piece6-description').fadeIn();
    $('.piece6-media').siblings().hide();
    $('.piece6-description').siblings().hide();
  });

  $('.piece7').on('click', () => {
    $('.piece7-media').fadeIn();
    $('.description').fadeIn();
    $('.piece7-description').fadeIn();
    $('.piece7-media').siblings().hide();
    $('.piece7-description').siblings().hide();
  });

  $('.piece8').on('click', () => {
    $('.piece8-media').fadeIn();
    $('.description').fadeIn();
    $('.piece8-description').fadeIn();
    $('.piece8-media').siblings().hide();
    $('.piece8-description').siblings().hide();
  });

  $('.piece9').on('click', () => {
    $('.piece9-media').fadeIn();
    $('.description').hide();
    $('.piece9-media').siblings().hide();
    $('.piece9-description').siblings().hide();
  });

  $('.piece10').on('click', () => {
    $('.piece10-media').fadeIn();
    $('.VRcontainer1').fadeIn();
    $('.description').fadeIn();
    $('.piece10-description').fadeIn();
    $('.piece10-media').siblings().hide();
    $('.piece10-description').siblings().hide();
  });

  $('.piece11').on('click', () => {
    $('.piece11-media').fadeIn();
    $('.description').hide();
    $('.piece11-media').siblings().hide();
    $('.piece11-description').siblings().hide();
  });

  $('.piece12').on('click', () => {
    $('.piece12-media').fadeIn();
    $('.description').hide();
    $('.piece12-media').siblings().hide();
    $('.piece12-description').siblings().hide();
  });

  $('.webdev').on('click', () => {
    $('.description').fadeIn();
    $('.webdev-description').fadeIn();
    $('.webdev-media').siblings().hide();
    $('.webdev-description').siblings().hide();
  });

  $('.piece13').on('click', () => {
    $('.piece13-media').fadeIn();
    $('.description').fadeIn();
    $('.piece13-description').fadeIn();
    $('.piece13-media').siblings().hide();
    $('.piece13-description').siblings().hide();
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
