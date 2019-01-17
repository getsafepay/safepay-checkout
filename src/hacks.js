import { ZalgoPromise } from 'zalgo-promise/src';
import { Button } from './button';
import { Checkout } from './checkout';
import { patchMethod } from './lib';

if (Button.xprops && Button.xprops.validate) {
  let enabled = true;
  Button.xprops.validate({
    enable() {
        enabled = true;
    },

    disable() {
        enabled = false;
    }
  });

  patchMethod(Checkout, 'renderTo', ({ callOriginal }) => {
    if (enabled) {
        return callOriginal();
    }
    return new ZalgoPromise();
  });
}