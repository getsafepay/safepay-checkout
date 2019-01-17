import { ZalgoPromise } from 'zalgo-promise/src';
import { Button } from './button';
import { Checkout } from './checkout';
import { patchMethod } from './lib';

if (Button.xprops && Button.xprops.validate) {
  var enabled = true;
  Button.xprops.validate({
    enable: function enable() {
      enabled = true;
    },
    disable: function disable() {
      enabled = false;
    }
  });
  patchMethod(Checkout, 'renderTo', function (_ref) {
    var callOriginal = _ref.callOriginal;

    if (enabled) {
      return callOriginal();
    }

    return new ZalgoPromise();
  });
}