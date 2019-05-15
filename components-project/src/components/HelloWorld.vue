<template>
  <div>
    <basic-breadcrumb
      v-model="itemList"
      :click-event="handleItemClick"
      separator-icon-name="angle-right"
      customize/>
    <byted-button
      style="margin-bottom: 20px;"
      type="danger"
      plain
      @click="addEvt">
      <byted-icon
        name="plus"
        color="#d9534f"
        style="vertical-align: -2px;"
      />
      七喜说可乐真笨
    </byted-button>
    <byted-button
      style="margin-bottom: 20px;"
      type="danger"
      plain
      @click="deleteEvt">
      <byted-icon
        name="plus"
        color="#d9534f"
        style="vertical-align: -2px;"
      />
      可乐说七喜好喝
    </byted-button>

    <basic-breadcrumb separator-icon-name="angle-right">
      <basic-breadcrumb-item
        v-for="opt in itemList"
        :key="opt.value"
        :href="opt.href"
        @click="handleItemClick">
        {{ opt.text }}
      </basic-breadcrumb-item>
    </basic-breadcrumb>

    <basic-breadcrumb separator-icon-name="angle-right">
      <basic-breadcrumb-item
        v-for="opt in itemList2"
        :key="opt.value"
        :href="opt.href"
        :router="opt.router"
        :to="opt.to"
        :replace="opt.replace"
        :max-width="opt.maxWidth"
        @click="handleItemClick">
        <byted-icon
          :name="opt.iconName"
        />
        {{ opt.text }}
      </basic-breadcrumb-item>
    </basic-breadcrumb>

    <basic-breadcrumb separator-icon-name="angle-right">
      <basic-breadcrumb-item
        v-for="opt in itemList2"
        :key="opt.value"
        :href="opt.href"
        :max-width="opt.maxWidth"
        @click="handleItemClick">
        <byted-icon
          :name="opt.iconName"
        />
      </basic-breadcrumb-item>
    </basic-breadcrumb>

    <basic-breadcrumb separator="/">
      <basic-breadcrumb-item
        href="http://www.baidu.com/"
      >营销</basic-breadcrumb-item>

      <basic-breadcrumb-item-group
        :leave-to-width="transitionLeaveToWidth"
        :expand="horizontalExpand">
        <basic-breadcrumb-item
          v-for="item in itemList"
          :key="item.val"
          :href="item.href"
        ><byted-icon name="home"/>{{ item.text }}</basic-breadcrumb-item>
      </basic-breadcrumb-item-group>

      <basic-breadcrumb-item
        max-width="120px"
      >导航中间项就是这么酷酷酷酷酷酷酷酷酷酷酷酷酷酷酷酷</basic-breadcrumb-item>

      <basic-breadcrumb-item-group
        :leave-to-width="transitionLeaveToWidth"
        :expand="verticalExpand"
        mode="vertical">
        <basic-breadcrumb-item
          v-for="item in itemList"
          :key="item.val"
          :href="item.href"
        ><byted-icon name="home"/>{{ item.text }}</basic-breadcrumb-item>
      </basic-breadcrumb-item-group>

      <basic-breadcrumb-item>导航最终项</basic-breadcrumb-item>
    </basic-breadcrumb>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemList: [{
        val: 0,
        text: '营销链路',
      }],
      itemList2: [{
        val: 0,
        text: '营销',
        iconName: 'home',
        href: '',
        maxWidth: '',
      }, {
        val: 1,
        text: '营销数据营销数据营销数据营销数据营销数据营销数据营销数据营销数据营销数据营销数据营销数据营销数据营销数据营销数据营销数据营销数据',
        iconName: 'image',
        href: '',
        maxWidth: '120px',
        router: true,
        to: {path: '/menu/'},
      }, {
        val: 2,
        text: '营销链路',
        iconName: 'time',
        href: '',
        maxWidth: '',
        router: true,
        to: {path: '/menu/'},
        replace: true,
      }],
      horizontalExpand: false,
      verticalExpand: false,
      transitionLeaveToWidth: '33px',
    };
  },
  mounted() {
  },
  methods: {
    addEvt() {
      const len = this.itemList.length;
      this.itemList.push({
        val: len,
        text: '营销链路'+len,
      });
    },
    deleteEvt() {
      this.itemList.pop();
    },
    handleItemClick(evt) {
    },
  },
};
</script>
<style type="text/css">
  .btn.btn-danger.byted-button.plain:active:focus .bui-icon-plus.byted-icon {
    fill: #fff!important;
  }
</style>
