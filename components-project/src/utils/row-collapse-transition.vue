<template>
  <transition
    name="RowCollapseTransition"
    @beforeEnter = "beforeEnter"
    @enter = "enter"
    @afterEnter = "afterEnter"
    @beforeLeave = "beforeLeave"
    @leave = "leave"
    @afterLeave = "afterLeave"
  >
    <slot/>
  </transition>
</template>
<script>
import {addClass, removeClass} from 'Src/utils/dom';

export default {
  props: {
    leaveToWidth: {
      type: [String, Number],
      default: 0,
    },
  },
  methods: {
    beforeEnter(el) {
      this.$emit('before-enter-event', el);
      addClass(el, 'row-collapse-transition');
      if (!el.dataset) el.dataset = {};

      el.dataset.oldPaddingLeft = el.style.paddingLeft;
      el.dataset.oldPaddingRight = el.style.paddingRight;

      el.style.width = this.leaveToWidth;
      el.style.paddingLeft = 0;
      el.style.paddingRight = 0;
    },
    enter(el) {
      el.dataset.oldOverflow = el.style.overflow;
      if (el.scrollWidth !== 0) {
        el.style.width = el.scrollWidth + 'px';
        el.style.paddingLeft = el.dataset.oldPaddingLeft;
        el.style.paddingRight = el.dataset.oldPaddingRight;
      } else {
        el.style.width = '';
        el.style.paddingLeft = el.dataset.oldPaddingLeft;
        el.style.paddingRight = el.dataset.oldPaddingRight;
      }

      el.style.overflow = 'hidden';
    },
    afterEnter(el) {
      removeClass(el, 'row-collapse-transition');
      el.style.width = '';
      el.style.overflow = el.dataset.oldOverflow;
    },
    beforeLeave(el) {
      if (!el.dataset) el.dataset = {};
      el.dataset.oldPaddingLeft = el.style.paddingLeft;
      el.dataset.oldPaddingRight = el.style.paddingRight;
      el.dataset.oldOverflow = el.style.overflow;
      el.style.width = el.scrollWidth + 'px';
      el.style.overflow = 'hidden';
    },

    leave(el) {
      if (el.scrollWidth !== 0) {
        addClass(el, 'row-collapse-transition');
        el.style.width = this.leaveToWidth;
        el.style.paddingLeft = 0;
        el.style.paddingRight = 0;
      }
    },

    afterLeave(el) {
      removeClass(el, 'row-collapse-transition');
      el.style.width = '';
      el.style.overflow = el.dataset.oldOverflow;
      el.style.paddingLeft = el.dataset.oldPaddingLeft;
      el.style.paddingRight = el.dataset.oldPaddingRight;
      this.$emit('after-leave-event', el);
    },
  },
};
</script>
