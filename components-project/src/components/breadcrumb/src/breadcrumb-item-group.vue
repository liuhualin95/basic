<template>
  <li
    v-clickoutside="clickoutsideHandle"
    :class="baseClass">
    <template v-if="showEllipsis">
      <span
        class="bui-breadcrumb-content bui-breadcrumb-ellipsis"
        @click="handleEllipsisClick"
      >...</span>
      <byted-icon
        v-if="separatorIconName"
        :name="separatorIconName"
        class="bui-breadcrumb-separator"
        @click="handleExtraOutsideClick"/>
      <span
        v-else
        class="bui-breadcrumb-separator"
        @click="handleExtraOutsideClick"
      >{{ separator }}</span>
    </template>
    <bui-row-collapse-transition
      v-if="mode === 'horizontal'"
      :leave-to-width="transitionLeaveToWidth"
      @before-enter-event="beforeEnterEvent"
      @after-leave-event="afterLeaveEvent"
    >
      <span
        v-show="isExpand"
        class="bui-slot-horizontal-container"
      ><slot/></span>
    </bui-row-collapse-transition>
    <bui-collapse-transition
      v-if="mode === 'vertical'"
    >
      <div
        v-show="isExpand"
        class="bui-slot-vertical-container"
      ><slot/></div>
    </bui-collapse-transition>
  </li>
</template>
<script>
import {CSS_PREFIX} from '../../base.js';
import clickoutside from 'Src/directives/clickoutside';
import BuiRowCollapseTransition from 'Src/utils/row-collapse-transition.vue';
import BuiCollapseTransition from 'Src/utils/collapse-transition.vue';

export default {
  name: `${CSS_PREFIX}breadcrumb-item-group`,
  directives: {clickoutside},
  inject: ['breadcrumb'],
  components: {
    BuiRowCollapseTransition,
    BuiCollapseTransition,
  },
  props: {
    // vertical || horizontal
    mode: {
      type: String,
      default: 'horizontal',
      validator: (val) => ['vertical', 'horizontal'].indexOf(val) !== -1,
    },
    expand: {
      type: Boolean,
      default: false,
    },
    leaveToWidth: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isExpand: false,
      separator: '',
      separatorIconName: '',
      // control ellipsis show or hidden before animation starts or after animation ends
      flag: true,
      initialWidth: 0,
    };
  },
  computed: {
    baseClass() {
      const classArr = [`${CSS_PREFIX}breadcrumb-item-group`];
      return classArr;
    },
    transitionLeaveToWidth() {
      return this.leaveToWidth || this.initialWidth || 0;
    },
    showEllipsis() {
      return (this.mode === 'horizontal' && !this.isExpand && this.flag) || this.mode === 'vertical';
    },
  },
  watch: {
    expand() {
      this.isExpand = this.expand;
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initialWidth = this.$el.offsetWidth + 'px';
    });
    this.isExpand = this.expand;
    this.separator = this.breadcrumb.separator;
    this.separatorIconName = this.breadcrumb.separatorIconName;
  },
  methods: {
    clickoutsideHandle() {
      if (this.mode === 'vertical' && this.isExpand) {
        this.isExpand = false;
        this.$emit('ellipsis-click', this.isExpand);
      }
    },
    handleEllipsisClick(evt) {
      if (this.mode === 'horizontal') {
        this.isExpand = true;
      } else if (this.mode === 'vertical') {
        this.isExpand = !this.isExpand;
      }
      this.$emit('ellipsis-click', this.isExpand);
    },
    handleExtraOutsideClick() {
      if (this.mode === 'vertical' && this.isExpand) {
        this.isExpand = false;
        this.$emit('ellipsis-click', this.isExpand);
      }
    },
    beforeEnterEvent() {
      this.flag = false;
    },
    afterLeaveEvent(el) {
      this.flag = true;
      this.$emit('after-leave-event', el);
    },
  },
};
</script>

