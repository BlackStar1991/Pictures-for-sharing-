window.onload = function () {

		var $elem = $('#bigBlock div');
		var len = $('#bigBlock div').length;
		var i = 0,
				j = 0,
				maxI = 7,
				maxJ = 4;


		var Jpicture = [{
				'backgroundImage' : ['url("dancer1-400x385.png")', 'url("snowboarder-400x385.png")', 'url("skydayving-400x385.png")', 'url("rockclimber-400x385.png")']

		}];








		var howManyPicture = Jpicture.length;

		console.log(Jpicture[0].backgroundImage[0]);

		var picture = [{
						//picture1
						'width': [20, 25, 20, 20, 20, 10, 30],
						'height': [45, 55, 20, 35, 15, 12, 35],

						'top': [10, 8, 6, 4, 27, 44, 58],
						'left': [10, 31, 57, 78, 57, 57, 10],

						'backgroundColor': ['#ED5A00', '#8BCC00', '#ED5A00', '#ED5A00', '#ED5A00', '#653838', '#ED5A00'],
						'backgroundPositionX': [6, -112, -238, -338, -238, -238, -9],
						'backgroundPositionY': [0, 4, 10, 17, -92, -178, -237],

						'zIndex': [6, 7, 5, 4, 3, 2, 1]
		},
				{
						//picture2
						'width': [45, 55, 20, 35, 15, 12, 35],
						'height': [20, 25, 20, 20, 20, 10, 30],


						'top': [76, 50, 30, 29, 27, 43, 0],
						'left': [38, 5, 6, 27, 63, 79, 27],

						'backgroundColor': ['black', 'black', '#ED5A00', '#ED5A00', '#ED5A00', '#ED5A00', '#ED5A00'],
						'backgroundPositionX': [-165, 0, -5, -110, -292, -365, -110],
						'backgroundPositionY': [-295, -170, -70, -70, -62, -135, 70],

						'zIndex': [7, 6, 5, 4, 3, 2, 1]
				},

				{
						//picture3
						'width': [20, 25, 20, 20, 20, 10, 30],
						'height': [45, 55, 20, 35, 15, 12, 35],

						'top': [36, 8, 64, 64, 35, 15, 0],
						'left': [57, 31, 15, 36, 10, 88, 57],

						'backgroundColor': ['#ED5A00', '#ED5A00', '#ED5A00', '#ED5A00', '#ED5A00', '#ED5A00', '#ED5A00'],
						'backgroundPositionX': [-245, -112, -35, -140, -10, -390, -243],
						'backgroundPositionY': [-130, 4, -270, -270, -130, -30, 45],

						'zIndex': [5, 6, 2, 1, 7, 3, 4]
				},

				{
						//picture4

						'width': [45, 55, 20, 35, 15, 12, 35],
						'height': [20, 25, 20, 20, 20, 10, 30],

						'top': [21, 42, 0, 68, 21, 31, 62],
						'left': [25, 41, 63, 41, 71, 12, 5 ],

						'backgroundColor': ['#ED5A00', '#ED5A00', '#ED5A00', '#ED5A00', '#ED5A00', '#ED5A00', '#ED5A00'],
						'backgroundPositionX': [-75, -155, -270, -153, -305, -10, 0],
						'backgroundPositionY': [-50, -150, 50, -280, -50, -100, -235],

						'zIndex': [4, 5, 3, 1, 2, 6, 7]
				}

		];

		flipFrame = function() {
				if (i == maxI) {
						i = 0;
						j++;
				}

				if (j == maxJ) {
						i = 0;
						j = 0;
				}

				console.log('Flipping slide: ' + i + ' / ' + j);

				i++;
		}


		setInterval(flipFrame, 1000);

		for (j=0; j<howManyPicture; j++){


		function change() {



				// for ( j=0; j< howManyPicture + 1; j++){ // Работает не корректно

						$elem.each(function (i, el) {




								// $(el).css({
								//
								// 		'top': picture[j].top[i] + '%',
								// 		'left': picture[j].left[i] + '%',
								// 		'backgroundImage': Jpicture[j],
								// 		'backgroundColor': picture[j].backgroundColor[i],
								// 		'backgroundPositionX': picture[j].backgroundPositionX[i] + 'px',
								// 		'backgroundPositionY': picture[j].backgroundPositionY[i] + 'px',
								// 		'zIndex': picture[j].zIndex[i],
								// 		'backgroundRepeat': 'no-repeat'
								// });

								var step1 = {
										'width': picture[j].width[i] + '%',
										'height': picture[j].height[i] + '%',

										'top': picture[j].top[i] + '%',
										'left': picture[j].left[i] + '%',
										'backgroundImage': Jpicture[0].backgroundImage[j],
										'backgroundColor': picture[j].backgroundColor[i],
										'backgroundPositionX': picture[j].backgroundPositionX[i] + 'px',
										'backgroundPositionY': picture[j].backgroundPositionY[i] + 'px',
										'zIndex': picture[j].zIndex[i],
										'backgroundRepeat': 'no-repeat'
								};

								var step2 = {

										'width': picture[j + 1].width[i] + '%',
										'height': picture[j + 1].height[i] + '%',
										'top': picture[j + 1].top[i] + '%',
										'left': picture[j + 1].left[i] + '%',
										'backgroundImage': Jpicture[0].backgroundImage[j + 1],
										'backgroundColor': picture[j + 1].backgroundColor[i],
										'backgroundPositionX': picture[j + 1].backgroundPositionX[i] + 'px',
										'backgroundPositionY': picture[j + 1].backgroundPositionY[i] + 'px',
										'zIndex': picture[j + 1].zIndex[i],
										'backgroundRepeat': 'no-repeat'
								};

								$(el).css(step1);

								setInterval(function () {
										$(el).animate(step2, 3000);
								}, 1000 * i);

								console.log('i = ' + [i] + 'j = ' + [j]);

								// setTimeout(function () {
								//
								// 		el.style.width = el.scrollHeight + 'px';
								// 		el.style.height = el.scrollWidth + 'px';
								//
								//
								// }, 1000);

								setInterval(function () {
										$(el).addClass('animated flip');
								}, 1000 * i); // Продолжительность анимации одного дива 1сек
						});

		}

		}



		change();
		// setTimeout(change, 2000);
		// console.log(picture1.backgroundPositionX[0]);

}

