<template>
  <li :class="baseClass">
    <a
      v-if="href"
      :href="href"
      :style="itemStyle"
      class="bui-breadcrumb-content"
      @click="handleClick"
    ><slot/></a>
    <span
      v-else
      :style="itemStyle"
      :class="['bui-breadcrumb-content', {'bui-breadcrumb-is-link': router && to}]"
      @click="handleClick"
    ><slot/></span>
    <byted-icon
      v-if="separatorIconName"
      :name="separatorIconName"
      class="bui-breadcrumb-separator"/>
    <span
      v-else
      class="bui-breadcrumb-separator"
    >{{ separator }}</span>
  </li>
</template>
<script>
import {CSS_PREFIX} from '../../base.js';

export default {
  name: `${CSS_PREFIX}breadcrumb-item`,
  inject: ['breadcrumb'],
  props: {
    href: {
      type: String,
      default: '',
    },
    maxWidth: {
      type: String,
      default: '',
    },
    router: {
      type: Boolean,
      default: false,
    },
    to: {
      type: [String, Object],
      default() {
        return {};
      },
    },
    replace: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      separator: '',
      separatorIconName: '',
    };
  },
  computed: {
    baseClass() {
      return [`${CSS_PREFIX}breadcrumb-item`];
    },
    itemStyle() {
      return this.maxWidth ? {
        'max-width': this.maxWidth,
        'overflow': 'hidden',
        'text-overflow': 'ellipsis',
        'white-space': 'nowrap',
      } : {};
    },
  },
  mounted() {
    this.separator = this.breadcrumb.separator;
    this.separatorIconName = this.breadcrumb.separatorIconName;
  },
  methods: {
    handleClick(evt) {
      if (this.router) {
        const {to, $router} = this;
        if (!to || !$router) return;
        this.replace ? $router.replace(to) : $router.push(to);
      }
      this.$emit('click', evt);
    },
  },
};
</script>