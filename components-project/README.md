# components-project

> A Vue.js components project

## breadcrumb

### prop

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |:-------------|:-----|:-----|
| separator      | 分割本文 | string | / |
| separato-icon-name | 分割icon, 依赖bui | string | - |
| customize | 是否定制, 启用后需要传入options（必须）/ellipsis-len/mode-trans-len/click-event, 不启用时为默认slot, 自行配置 | boolean | false |
| v-model | 数组内容, 每一项包括如 val, text, href等信息 | Array | [] |
| ellipsis-len | options数组长度超过该值后会显示省略号 | number | 3 |
| mode-trans-len | 动画从横向变更为竖向的options数组长度 | number | 8 |
| click-event | 单项item的点击事件 | function | - |


### slot

  `byted-breadcrumb-item`

  `byted-breadcrumb-item-group` 包含省略号

  其他任意内容

## breadcrumb-item-group

### prop

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |:-------------|:-----|:-----|
| mode      | 动画模式, 仅支持vertical/horizontal | string | horizontal |
| expand | 当前面包屑是否为展开状态, 非展开状态会展示省略号 | boolean | false |
| leave-to-width | 当前内容在动画收缩后及展开前的长度, 防止抖动 | string | - |

### event

| 事件名        | 说明           | 参数  |
| ------------- |:-------------|:-----|
| ellipsis-click | 省略号的点击事件 | 当前展开状态expand |

## breadcrumb-item

### prop

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |:-------------|:-----|:-----|
| href      | 链接 | string | - |
| max-width | 最大宽度, 超出显示省略号 | string | - |
| router | 是否开启路由模式, 前置条件: 未设置href | boolean | false |
| to | 路由对象 | string/object | {} |
| replace | 在使用 to 进行路由跳转时, 启用 replace 将不会向 history 添加新记录 | boolean | false |

### event

| 事件名        | 说明           | 参数  |
| ------------- |:-------------|:-----|
| click | 单项item的点击事件 | mouseevt |