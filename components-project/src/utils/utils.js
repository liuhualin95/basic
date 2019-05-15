/**
 *
 *
 * Any basic methods here .
 *
 *
 * Copyright 2017 ByteDance, Inc.
 * Licensed under MIT
 *
 */

/* global window module*/
import AsyncValidator from 'async-validator';

module.exports = {

  /**
   *
   * @param {object} source
   * @return {object}
   * Deep copy of any object .
   *
   *
   *
   *
   */
  copy: function(source) {
    let str; let newobj;
    try {
      newobj = source.constructor === Array ? [] : {};
    } catch (e) {
      return;
    }
    try {
      str = JSON.stringify(source);
      newobj = JSON.parse(str);
    } catch (e) {
      for (const i in source) {
        if (typeof source[i] === 'object') {
          newobj[i] = this.copy(source[i]);
        } else {
          source[i];
        }
      }
    }
    return newobj;
  },
  // 深克隆
  deepCopy: function(source) {
    // 如果source是对象
    if (typeof (source) == 'object' && source !== null) {
      // 有必要区分数组和普通对象
      const o = Object.prototype.toString.call(source) == '[object Array]' ? [] : {};
      // 遍历source的自有属性
      for (const key in source) {
        // 如果key是source的自有属性
        if (source.hasOwnProperty(key)) {
          o[key] = this.deepCopy(source[key]);
          // arguments.callee调的是当前的deepCopy函数
        }
      }
      return o;
    } else {
      // 如果source是原始类型的值，直接返回
      return source;
    }
  },


  /**
   * 获取 url 参数
   *
   */
  urlParams: function(href) {
    href = href || window.location.search;
    const data = {};


    const reg = /([^?=&]+)(=([^&]*))?/g;
    if (href) {
      href.replace(reg, function($0, $1, $2, $3) {
        data[$1] = $3;
      });
    }
    return data;
  },

  Validator: AsyncValidator,

  /**
   * 获取指定长度的随机字符串
   * @param  {} length=0
   */
  getRandomStr: function(length = 0) {
    const chars = 'asdfghjklzxcvbnmqwertyuiopASDFGHJKLZXCVBNMQWERTYUIOP1234567890';
    let str = '';
    for (let i = 0; i < length; i++) {
      str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
  },
};
