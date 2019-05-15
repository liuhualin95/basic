import Breadcrumb from './src/breadcrumb.vue';
import BreadcrumbItem from './src/breadcrumb-item.vue';
import BreadcrumbItemGroup from './src/breadcrumb-item-group.vue';


Breadcrumb.install = function(Vue) {
  Vue.component(Breadcrumb.name, Breadcrumb);
  Vue.component(BreadcrumbItem.name, BreadcrumbItem);
  Vue.component(BreadcrumbItemGroup.name, BreadcrumbItemGroup);
};

export default Breadcrumb;
