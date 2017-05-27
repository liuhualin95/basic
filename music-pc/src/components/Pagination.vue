<template>
	<div class="paganition" v-if="this.pageNo>1">
		<ul>
			<li @click="prev"
			:class="{gray: 1===current}">上一页</li
			><li @click="goPage(1)"
			:class="{active: 1===current}">1</li
			><li v-if="prevEllipsis" class="no-hover">...</li
			><li v-for="index in pages"
			@click="goPage(index)"
			:class="{active: index===current}">{{index}}</li
			><li v-if="nextEllipsis" class="no-hover">...</li
			><li @click="goPage(pageNo)"
			:class="{active: pageNo===current}">{{pageNo}}</li
			><li @click="next"
			:class="{gray: pageNo===current}">下一页</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
			pageNo: {
				type: Number,
				default: 1
			},
			current: {
				type: Number,
				default: 1
			}
		},
		data(){
			return {
				prevEllipsis: false,
				nextEllipsis: false
			}
		},
		computed: {
			pages(){
				let res = []
				if(this.pageNo<=10){
					this.prevEllipsis = false
					this.nextEllipsis = false
					for(let i=2;i<this.pageNo;i++)
						res.push(i)
					return res
				}
				if(this.current > 5){
					this.prevEllipsis = true
					if(this.current >= this.pageNo-4){
						this.nextEllipsis = false
							for(let i=this.pageNo-7;i<this.pageNo;i++)
								res.push(i)
							return res
					}
					res.push(this.current - 3)
					res.push(this.current - 2)
					res.push(this.current - 1)
				}else{
					this.prevEllipsis = false
					for(let i=2;i<this.current;i++)
						res.push(i)
				}
				if(this.current != 1 && this.current != this.pageNo)
					res.push(this.current)
				if(this.current < this.pageNo-4){
					this.nextEllipsis = true
					if(this.prevEllipsis == false){
							for(let i=this.current+1;res.length<7;i++)
								res.push(i)
							return res
					}
					res.push(this.current + 1)
					res.push(this.current + 2)
					res.push(this.current + 3)
				}else{
					this.nextEllipsis = false
					for(let i=this.current+1;i<this.pageNo;i++)
						res.push(i)
				}
				return res
			}
		},
		methods: {
			goPage(index){
				this.$emit('goPage', index)
			},
			prev(){
				if(this.current === 1)
					return
				this.$emit('goPage', this.current-1)
			},
			next(){
				if(this.current === this.pageNo)
					return
				this.$emit('goPage', this.current+1)
			}
		}
	}
</script>

<style scoped lang='scss'>
	@import '../style/pagination'
</style>