<template>
  <ol :class="baseClass">
    <template v-if="customize">
      <template v-if="options.length <= ellipsisLen">
        <basic-breadcrumb-item
          v-for="opt in options"
          :key="opt.value"
          :href="opt.href"
          @click="handleItemClick(opt, options)">
          <span v-html="opt.text"/>
        </basic-breadcrumb-item>
      </template>

      <template v-else>
        <basic-breadcrumb-item
          v-for="opt in options.slice(0, ellipsisLen - 1)"
          :key="opt.value"
          :href="opt.href"
          @click="handleItemClick(opt, options)">
          <span v-html="opt.text"/>
        </basic-breadcrumb-item>

        <basic-breadcrumb-item-group
          :mode="mode"
          :expand="expand"
          @ellipsis-click="changeExpand"
          @after-leave-event="afterLeaveEvent">
          <basic-breadcrumb-item
            v-for="opt in options.slice(ellipsisLen - 1, options.length-1)"
            :key="opt.value"
            :href="opt.href"
            @click="handleItemClick(opt, options)">
            <span v-html="opt.text"/>
          </basic-breadcrumb-item>
        </basic-breadcrumb-item-group>

        <basic-breadcrumb-item @click="handleItemClick(options[options.length-1], options)">
          <span v-html="options[options.length-1].text"/>
        </basic-breadcrumb-item>
      </template>
    </template>

    <slot v-else/>
  </ol>
</template>
<script>
import {CSS_PREFIX} from '../../base.js';

export default {
  name: `${CSS_PREFIX}breadcrumb`,
  props: {
    separator: {
      type: String,
      default: '/',
    },
    separatorIconName: {
      type: String,
      default: '',
    },
    customize: {
      type: Boolean,
      default: false,
    },
    value: {
      type: Array,
      default() {
        return [];
      },
    },
    // show ellipsis when the length of options larger than ellipsisLen
    ellipsisLen: {
      type: Number,
      default: 3,
    },
    // mode transform form horizontal to vertical
    modeTransLen: {
      type: Number,
      default: 8,
    },
    clickEvent: {
      type: Function,
      default() {
        return () => {};
      },
    },
  },
  provide() {
    return {
      breadcrumb: this,
    };
  },
  data() {
    return {
      mode: 'horizontal',
      expand: true,
      options: [],
    };
  },
  computed: {
    baseClass() {
      return [`${CSS_PREFIX}breadcrumb`];
    },
  },
  watch: {
    value(newVal) {
      this.options = newVal.slice();
    },
    options(newVal) {
      if (newVal && !this.expand) {
        this.mode = newVal.length >= this.modeTransLen
          ? 'vertical'
          : 'horizontal';
      }
      if (newVal && newVal.length > this.ellipsisLen) {
        this.expand = false;
      }
    },
  },
  mounted() {
    this.options = this.value.slice() || [];
  },
  methods: {
    handleItemClick(option) {
      let curIndex;
      this.options.some((item, index) => {
        if (item.val === option.val) {
          curIndex = index;
          return true;
        }
      });
      this.options = this.options.slice(0, curIndex + 1);

      this.mode = this.options.length >= this.modeTransLen
        ? 'vertical'
        : 'horizontal';
      this.$emit('input', this.options);

      this.clickEvent(option, this.options);
    },
    changeExpand(isExpand) {
      this.expand = isExpand;
    },
    afterLeaveEvent() {
      if (this.options.length >= this.modeTransLen) {
        this.mode = 'vertical';
        this.$nextTick(()=> {
          this.expand = true;
        });
      }
    },
  },
};
</script>

<style lang='less'>
  @import './breadcrumb.less';
</style>