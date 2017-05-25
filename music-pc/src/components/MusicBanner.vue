<template>
<!--   轮播图实现思路：
  1、写一个ul里面三个li放图（第七张第一张第二张），同时用transform写好位置
  li上添加transition有个动态效果
  2、写一个定时器，classbox里面最后一个出栈，然后放到数组首位
  3、以顺序加载为例子，'right'(class)下一个出现的位置是0，就把第一张图的src
  的index替换为nextImgIndex，是1就把第二张图的src的index替换为nextImgIndex
  4、点击进行change的时候就是看e.target.className里面是什么类，是left就是prevImg，是right就nextImg
  5、下面小列表用v-for去写，比较nowImgIndex和index，相等active，差1就prev和next
  6、skip的话就是nowImgIndex和index不止差1，根据差值写个for循环prev和next，同时设置isSkip为true，根据index添加skip-left，skip-right
  动画效果的话，用index使类left对应skip-left，right对应skip-right，再写skip的
  transform的scale小一点，然后transition设置为none，然后把isSkip的值过20ms设置为false，取消skip-left，skip-right类，这样就会变回之前的transform和transition了 -->
  <div class="banner-container">
    <div class="img-container" 
      @mouseover="clear"
      @mouseout="set"
      @click="change('', $event)">
      <ul>
        <li :class="[classBox[0],{
            'is-next': isNext,
            'is-prev': isPrev,
            'skip-left': isSkip && leftIndex === 0,
            'skip-center': isSkip && centerIndex === 0,
            'skip-right': isSkip && rightIndex === 0
          }]">
          <img :src="imgList[firstIndex]">
        </li>
        <li :class="[classBox[1],{
            'is-next': isNext,
            'is-prev': isPrev,
            'skip-left': isSkip && leftIndex === 1,
            'skip-center': isSkip && centerIndex === 1,
            'skip-right': isSkip && rightIndex === 1
          }]">
          <img :src="imgList[secondIndex]">
        </li>
        <li :class="[classBox[2],{
            'is-next': isNext,
            'is-prev': isPrev,
            'skip-left': isSkip && leftIndex === 2,
            'skip-center': isSkip && centerIndex === 2,
            'skip-right': isSkip && rightIndex === 2
          }]">
          <img :src="imgList[thirdIndex]">
        </li>
      </ul>
    </div>
    <ul class="box-list">
      <li 
        class="box" 
        v-for="(item, index) in imgList"
        :class="{active: index === nowImgIndex}"
        @mouseover="skip(index)"
        @mouseout="set"
        ></li>
    </ul>
  </div>
</template>

<script>

export default{
  props: {
    imgs: {
      type: Array,
      default: []
    },
    time: {
      type: Number,//不能用小写number
      default: 3000
    }
  },
  data(){
    return {
      imgList: this.imgs,
      classBox: ['left','center','right'],
      firstIndex: this.imgs.length-1,
      secondIndex: 0,
      thirdIndex: 1,
      nowImgIndex: 0,
      nextImgIndex: 2,
      lastImgIndex: this.imgs.length-2,
      nextRightIndex: 0,
      nextLeftIndex: 2,
      timer: '',
      isNext: true,
      isPrev: false,
      isSkip: false
    }
  },
  computed: {
    imgListLen(){
      return this.imgList.length;
    },
    leftIndex(){
      let i = -1;
      this.classBox.forEach( (item, index) => {
        if(item === 'left'){
          i = index;
        }
      })
      return i;
    },
    centerIndex(){
      let i = -1;
      this.classBox.forEach( (item, index) => {
        if(item === 'center')
          i = index;
      })
      return i;
    },
    rightIndex(){
      let i = -1;
      this.classBox.forEach( (item, index) => {
        if(item === 'right')
          i = index;
      })
      return i;
    }
  },
  mounted(){
    this.timer = setInterval(this.nextImg, this.time);
  },
  methods: {
    nextImg(){
      let item = this.classBox.pop();
      this.classBox.unshift(item);
      if(this.nextRightIndex === 0){
        this.firstIndex = this.nextImgIndex;
      }else if(this.nextRightIndex === 1){
        this.secondIndex = this.nextImgIndex;
      }else{
        this.thirdIndex = this.nextImgIndex;
      }
      this.nextRightIndex = this.nextRightIndex === 2 ? 
        0 : this.nextRightIndex + 1;
      this.nextLeftIndex = this.nextLeftIndex === 2 ? 
        0 : this.nextLeftIndex + 1; 
      this.nextImgIndex = this.nextImgIndex === this.imgListLen - 1 ? 
        0 : this.nextImgIndex + 1;
      this.lastImgIndex = this.lastImgIndex === this.imgListLen - 1 ? 
        0 : this.lastImgIndex + 1;
      this.nowImgIndex = this.nowImgIndex === this.imgListLen - 1 ? 
        0 : this.nowImgIndex + 1;
      this.isNext = true;
      this.isPrev = false;
    },
    prevImg(){
      let item = this.classBox.shift();
      this.classBox.push(item);
      if(this.nextLeftIndex === 0){
        this.firstIndex = this.lastImgIndex;
      }else if(this.nextLeftIndex === 1){
        this.secondIndex = this.lastImgIndex;
      }else{
        this.thirdIndex = this.lastImgIndex;
      }
      this.nextRightIndex = this.nextRightIndex === 0 ? 
        2 : this.nextRightIndex - 1;
      this.nextLeftIndex = this.nextLeftIndex === 0 ? 
        2 : this.nextLeftIndex - 1; 
      this.nextImgIndex = this.nextImgIndex === 0 ? 
        this.imgListLen - 1 : this.nextImgIndex - 1;
      this.lastImgIndex = this.lastImgIndex === 0 ? 
        this.imgListLen - 1 : this.lastImgIndex - 1;
      this.nowImgIndex = this.nowImgIndex === 0 ? 
        this.imgListLen - 1 : this.nowImgIndex - 1;
      this.isNext = false;
      this.isPrev = true;
    },
    set(){
      this.timer = setInterval(this.nextImg, this.time);
    },
    clear(){
      clearInterval(this.timer);
    },
    change(arg, event){
      if(arg === 'prev') this.prevImg();
      if(arg === 'next') this.nextImg();
      if(event.target.className.indexOf('left')>=0) this.prevImg();
      if(event.target.className.indexOf('center')>=0) return;
      if(event.target.className.indexOf('right')>=0) this.nextImg();
    },
    skip(index){
      clearInterval(this.timer);
      if(index === this.nowImgIndex) return;
      if(this.nowImgIndex === this.imgListLen-1 && index === 0)
          this.nextImg();
      else if(this.nowImgIndex === 0 && index === this.imgListLen-1)
          this.prevImg();
      else if(index === this.nowImgIndex-1)
        this.prevImg();
      else if(index === this.nowImgIndex+1)
        this.nextImg();
      else
        this.skipMore(index);
    },
    skipMore(index){
      this.isSkip = true;
      if(index < this.nowImgIndex)
        for(let i=0, len=this.nowImgIndex-index; i<len; i++)
          this.prevImg();
      else
        for(let i=0, len=index-this.nowImgIndex; i<len; i++)
          this.nextImg();
      setTimeout( () => {
        this.isSkip = false;
      }, 20);
    }
  }
}
</script>

<style scoped lang='scss'>
  @import '../style/music-banner'
</style>