import Mock from 'mockjs'

Mock.mock('http://playsong.comments.com', {
	'comments|15': [{
    	'avatar' : '@image("250x250", "@color", "@word")',
        'name'   : '@cname',
        'content': '@cparagraph',
        'time'   : '@datetime("yyyy年MM月dd日 HH:mm")'
    }]
})