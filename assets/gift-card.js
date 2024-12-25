$(function() {
  var config = {
    qrCode: '#QrCode',
    printButton: '#PrintGiftCard',
    giftCardCode: '#GiftCardDigits'
  };

  var $qrCode = $(config.qrCode);

  new QRCode($qrCode[0], {
    text: $qrCode.attr('data-identifier'),
    width: 120,
    height: 120,
    imageAltText: theme.strings.qrImageAlt
  });

  $(config.printButton).on('click', function() {
    window.print();
  });

  $(config.giftCardCode).on('focus', this.select);
});
