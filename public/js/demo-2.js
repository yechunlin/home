(function() {

    var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

    // Main
    initHeader();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: 0, y: height};

        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height+'px';

        canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create particles
        circles = [];
        for(var x = 0; x < width*0.5; x++) {
            var c = new Circle();
            circles.push(c);
        }
        animate();
    }

    // Event handling
    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in circles) {
                circles[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }

    // Canvas manipulation
    function Circle() {
        var _this = this;

        // constructor
        (function() {
            _this.pos = {};
            init();
        })();

        function init() {
            _this.pos.x = Math.random()*width;
            _this.pos.y = height+Math.random()*100;
            _this.alpha = 0.1+Math.random()*0.3;
            _this.scale = 0.1+Math.random()*0.3;
            _this.velocity = Math.random();
        }

        this.draw = function() {
            if(_this.alpha <= 0) {
                init();
            }
            _this.pos.y -= _this.velocity;
            _this.alpha -= 0.0005;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';
            ctx.fill();
        };
    }

	var textData = [
		[   '欢迎访问我的小站',
			'背景是南京市的一个傍晚，拍摄于谷阳世纪大厦19楼，主角是紫峰大厦世界第10高楼，随便瞅瞅的，反正没写好呢，哟嚯嚯嚯！',
			'天凉好个秋啊！'
		],
		[   'The Imitation Game',
			'Sometimes it s the very people who no one imagines anything of. who do the things that no one can imagine.',
			'Who will fall in love with ordinary？'
		],
		[   '一个孤独的程序员',
			'我被青春闪了腰，后来就再也没有起来；想着躺着也能敲代码，于是指尖飞舞，妄想只要足够快，就能摆脱现状，后来程序出了bug；想着只要写成无bug的程序就能走出困境，后来......，困境中ing!',
			'小嘛小二郎啊,背着书包上学堂......'
		],
		[   '超大陆天下第一',
			'第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一第一',
			'哈哈哈哈'
		]
	];
	setData(0);
	var bt = $('.bt-point');
	bt.click(function(){
		bt.removeAttr('id',"red-pt");
		$(this).attr('id','red-pt');
		var __index = $(this).index();
		setData(__index);
	})
	//塞数据
	function setData(index){
		$('.ct-title').text(textData[index][0]);
		$('.ct-normal').text(textData[index][1]);
		$('.ct-sma').text(textData[index][2]);
	}
	var gotobox = $('.goto');
	gotobox.click(function(){
		window.location.href='/index'	
	})
})();