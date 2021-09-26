const parts = [ 
		{
			component: 'Battery', available: [
									{
										name: 'CNHL Black series', 
										price: 20,
										link: 'https://chinahobbyline.com/shop/detail/284/',
										info: {
											nomVol: 22.2,
											cellCount: '6s',
											capacity: 1300,
											cRating: [100, 200],
											weight: 230,
											connectors: 'XT60',
											balLead: 'JST-XH'
										}
									},
																	{
										name: 'Tattu R-Line Series', 
										price: 25,
										link: 'https://www.genstattu.com/TA-RL4-130C-1300-6S1P',
										info: {
											nomVol: 22.2,
											cellCount: '6s',
											capacity: 1300,
											cRating: [130, 260],
											weight: 220,
											connectors: 'XT60',
											balLead: 'JST-XHR'
										}
									},
																		{
										name: 'Auline EX', 
										price: 22.2,
										link: 'https://www.au-line.com/collections/5s/products/auline-6s-1050mah-22-2v-120c-xt60-for-5in-fpv-racing-and-freestyle',
										info: {
											nomVol: 22.2,
											cellCount: '6s',
											capacity: 1050,
											cRating: [120, '-'],
											weight: 193.6,
											connectors: 'XT60',
											balLead: 'JST-XH'
										}
									}
								]
		},
		{
			component: "Frame", available: [
										{	
											name: 'Foxeer Aura 5" Freestyle', 
											price: 21.99,
											link: 'https://www.foxeer.com/foxeer-aura-5-freestyle-frame-t700-g-349',
											picPath: '../images/Foxeer-5-inch-Aura-Freestyle-Frame-T700-top_1265x-removebg-preview.png',
											info: {
													propSize: 5,
													weight: 115,
													mounting: [20,30.5],
													cmMounting: [19, 20],
													wheelBase: 220,
													armThk: 5,
													}
												},

										{	
											name: 'Armattan Badger 5" Frame', 
											price: 29,
											link: 'https://armattanquads.com/badger-1/',
											info: {
													propSize: 5,
													weight: 130,
													mounting: [20,30.5],
													cmMounting: 21,
													wheelBase: 236,
													armThk: 4,
													}
												},
										{	
											name: 'GEPRC GEP-MK4 5"', 
											price: 21.00,
											link: 'https://geprc.com/product/gep-mark4-frame/',
											info: {
													propSize: 5,
													batteryLocation: 'Top',
													weight: 102,
													mounting: [20,30.5],
													cmMounting: 20,
													wheelBase: 225,
													armThk: 5,
													}
												},

								],
		},		
		{
				component: 'Motors', available: [
									{
									 name: 'T-Motor F60 Pro IV V2', 
									 price: 20,
									 link: 'https://store.tmotor.com/goods.php?id=958',
									 picPath: '../images/958_P_1578642701015.png',
									 info: {
									 	KV: 1750,
									 	ratedVol: '4-6s',
									 	shaftDia: 4,
									 	weight: 32.3,
									 	idleCur: 1.2,
									 	peakCur: 36,
									 	intRes: 70,
									 }

									},
									{
									 name: 'T-Motor Pacer V2 2207 1950Kv', 
									 price: 20.44,
									 link: 'https://store.tmotor.com/goods.php?id=1145 ',
									 info: {
									 	KV: 1950,
									 	ratedVol: '6s',
									 	shaftDia: 4,
									 	weight: 30.4,
									 	idleCur: 1.1,
									 	peakCur: 36,
									 	intRes: 56.5,
									 }

									},
									{
									 name: 'T-Motor VELOX V2 2207', 
									 price: 25,
									 link: 'https://store.tmotor.com/goods.php?id=1105',
									 info: {
									 	KV: 1750,
									 	ratedVol: '6s',
									 	shaftDia: 4,
									 	weight: 34.3,
									 	idleCur: 1.1,
									 	peakCur: 36.6,
									 	intRes: 59,
									 }

									},
									],
		},

		{
				component: "ESC", available: [
									{
									 name: 'Holybro Tekko32 F4 Metal 32Bit', 
									 price: 25,
									 link: 'http://www.holybro.com/product/tekko32-f4-4in1-esc45a/',
									 picPath: '../images/Holybro_Tekko32_F4_Metal_32Bit_65A_30x30_4in1_ESC.png',
									 info: {
									 	constCurr: '65Ax4',
									 	burstCurr: '70Ax4',
									 	Software: 'DShot300/600/1200',
									 	powerRate: '4-6s LiPo', 
									 	weight: 15.8,
									 	mounting: 30,
									 	}
									 },
									 {
									 name: 'Diatone Mamba F50 32Bit', 
									 price: 20.33,
									 link: 'https://www.racedayquads.com/collections/4in1-escs/products/diatone-mamba-f50-32bit-50a-3-6s-30x30-4in1-esc',
									 info: {
									 	constCurr: '50Ax4',
									 	burstCurr: '60Ax4',
									 	Software: 'DShot300/600/1200',
									 	powerRate: '3-6s LiPo',
									 	weight: '',
									 	mounting: 30,

									 	}
									 },
									 {
									 name: 'T-Motor VELOX V2 2207', 
									 price: 20,
									 link: 'https://store.tmotor.com/goods.php?id=821',
									 info: {
									 	constCurr: '55Ax4',
									 	burstCurr: '75Ax4',
									 	Software: 'DSHOT150/300/600/1200',
									 	powerRate: '6s LiPo',
									 	weight: 17.3,
									 	mounting: 30,
									 	},
									 }
									],
		},

		{
				component: "FC", available: [
									{
									 name: 'Diatone Mamba F405 MK2', 
									 price: 20.99,
									 link: 'https://www.racedayquads.com/collections/full-size-30x30-flight-controllers/products/diatone-mamba-f405-flight-controller',
									 info: {
									 	UARTs: 5,
									 	firmware: 'FURYF4OSD',
									 	inVolt: '3-6s LiPo',
									 	BEC: '3.3V @ .5A /// 5-9V @ 2A',
									 	MCU: 'STM32F405',
									 	gyro: 'MPU6000',
									 	flash: 16,
									 	OSD: 'AT7456E',
									 	weight: 6,
									 	},
									 },
									 {
									 name: 'T-Motor Velox F722', 
									 price: 20,
									 link: 'https://uav-en.tmotor.com/html/2021/FC_0513/726.html',
									 info: {
									 	UARTs: 6,
									 	firmware: 'TMOTORF7V2',
									 	inVolt: '3-6s LiPo',
									 	BEC: '5V @ 3A',
									 	MCU: 'STM32F722RET6',
									 	gyro: 'MPU6000',
									 	flash: 16,
									 	OSD: 'AT7456',
									 	weight: 7,
									 	},
									 },
									 {
									 name: 'Holybro Kakute F7 V1.5', 
									 price: 22,
									 link: 'http://www.holybro.com/product/kakute-f7-v1-5/',
									 info: {
									 	UARTs: 6,
									 	firmware: 'KAKUTEF7',
									 	inVolt: '3-6s LiPo',
									 	BEC: '',
									 	MCU: 'STM32F745',
									 	gyro: 'MPU6000 (SPI)',
									 	flash: '',
									 	OSD: 'Betaflight',
									 	weight: 8,
									 	},
									 }
									],
		},
		{
			component: "RX", available: [
									 {
									 name: 'TBS Crossfire Nano Rx', 
									 price: 22,
									 link: 'https://www.team-blacksheep.com/products/prod:xf_nano_div_rx',
									 info: {
									 	numChan: 8,
									 	sigOut: 'SBUS',
									 	inptPower: '5V',
									 	connector: 'U.FL',
									 	rxType: 'Serial',
									 	weight: 1.8,
									 }
									},
									{
									 name: 'FrSky R-XSR', 
									 price: 20,
									 link: 'https://www.racedayquads.com/products/frsky-r-xsr-s-bus-micro-receiver?_pos=2245&_sid=109148d7d&_ss=r',
									 info: {
									 	numChan: 16,
									 	sigOut: 'SBUS/PPM',
									 	inptPower: '4-10v',
									 	connector: 'IPLEX',
									 	rxType: 'Serial',
									 	weight: 1.5,
									 }
									},
									{
									 name: 'RadioMaster R81', 
									 price: 25,
									 link: 'https://www.radiomasterrc.com/articleb-133.html',
									 info: {
									 	numChan: 8,
									 	sigOut: 'SBUS',
									 	inptPower: '4.5-6v',
									 	connector: 'IPLEX',
									 	rxType: 'Serial',
									 	weight: 2,
									 }
									},
									],
		},
		{
				component: "VTX", available: [
									{
									 name: 'FXT ARES', 
									 price: 24,
									 link: 'https://www.szfxt.com/fxt-ares-58ghz-pit-25mw-200mw-600mw-1w-long-range-fpv-smart-audio-video-transmitter_p0045.html',
									 info: {
									 	output: 'PIT/25mW,200mW,600mW, 1W',
									 	freq: 5.8,
									 	smartAudio: true,
									 	inpVol: '7-28',
									 	antenna: 'MMCX',
									 	channels: '5 frequency groups, 37 transmission channels',
									 	consumption: '200mA@25mW,300mA@200mW, 380mA@600mW, 480mA@1W',
									 	weight: 10.5,
									 	},
									 },
									 {
									 name: 'Rush FPV Tank II Ultimate', 
									 price: 20,
									 link: 'https://www.racedayquads.com/collections/rush-fpv-products/products/rush-fpv-tank-ii-ultimate-30x30-25-800mw-5-8ghz-vtx-w-smart-audio-mmcx',
									 info: {
									 	output: 'PIT/25mW,200mW,500mW, 800mW',
									 	freq: 5.8,
									 	smartAudio: true,
									 	inpVol: '7-36',
									 	antenna: 'MMCX',
									 	channels: '',
									 	consumption: '',
									 	weight: 6.8,
									 	},
									 },
									 {
									 name: 'Holybro Atlatl HV V2', 
									 price: 22,
									 link: 'http://www.holybro.com/product/atlatl-hv-v2/',
									 info: {
									 	output: 'PIT/25mW,200mW,500mW, 800mW',
									 	freq: 5.8,
									 	smartAudio: true,
									 	inpVol: '7-28',
									 	antenna: 'MMCX',
									 	channels: '48CH RaceBand',
									 	consumption: '',
									 	weight: 9.3,
									 	},
									 },
									],
		},
		{
				component: 'Camera', available: [
									{
									name: 'Caddx Ratel ', 
									price: 24,
									link: 'https://caddxfpv.com/collections/caddx-ratel-fpv-camera/products/11',
									 info: {
									 	size: 'Micro',
									 	TVL: 1200,
									 	sigSys: 'PAL / NTSC Switchable',
									 	scFmt: '4:3 / 16:9 Switchable',
									 	imgSen: "1/1.8 Inch Starlight",
									 	minIl: '0.0001Lux',
									 	pwr: '5-40V',
									 	weight: 11,
									 }
									},
									{
									name: 'Foxeer T-Rex', 
									price: 23,
									link: 'https://www.foxeer.com/foxeer-t-rex-micro-1500tvl-6ms-latency-super-wdr-fpv-camera-g-308',
									 info: {
									 	size: 'Micro',
									 	TVL: 1500,
									 	sigSys: 'PAL / NTSC Switchable',
									 	scFmt: '4:3 / 16:9 Switchable',
									 	imgSen: 'CMOS 2MP',
									 	minIl: '4.5V~16V',
									 	pwr: '',
									 	weight: 8.6,
									 }
									},
									{
									name: 'RunCam Phoenix 2', 
									price: 22,
									link: 'https://shop.runcam.com/runcam-phoenix-2/',
									 info: {
									 	size: 'Micro',
									 	TVL: 100,
									 	sigSys: 'PAL / NTSC Switchable',
									 	scFmt: '4:3 / 16:9 Switchable',
									 	imgSen: '1/2" COMS',
									 	minIl: '0.001Lux',
									 	pwr: '5-36V',
									 	weight: 9,
									 }
									},

								]
		},
		{
				component: 'Antenna', available: [
									{
										name: 'Foxeer Pagoda Pro',
										price: 70,
										link: 'https://www.foxeer.com/FOXEER-Pagoda-PRO-58G-RHCP-FPV-Antenna-g-111',
										info: {
											gain: 2,
											polar: 'RHCP',
											connector: 'SMA',
											weight: 15,
										}
									},
									{
										name: 'TrueRC OCP Long 115mm',
										price: 30,
										link: 'https://www.truerc.ca/shop/5-8ghz-2/transmitter/ocp-5-8',
										info: {
											gain: 1.6,
											polar: 'RHCP',
											connector: 'SMA',
											weight: 9.8,
										}
									},
									{
										name: 'Rush FPV Cherry',
										price: 12,
										link: 'https://www.racedayquads.com/products/rush-fpv-cherry-5-8ghz-long-sma-antenna-2-pack-rhcp-or-lhcp?variant=31996417671281',
										info: {
											gain: 1.2,
											polar: 'RHCP',
											connector: 'SMA',
											weight: 10,
										}
									},
								]
		},
		{
				component: 'Propellors', available: [
											{
												name: 'Gemfan Hurricane 51433',
												price: 30,
												link: 'http://www.gemfanhobby.com/show.aspx?id=258&cid=41',
												info: {
													propPitch: 4.33,
													shaftDia: 5,
													numBlades: 3,
													hubThk: 7,
													weight: 3.8,
												}
											},
											{
												name: 'HQ Prop Ethix P3B',
												price: 7,
												link: 'https://www.hqprop.com/ethix-p3b-peanut-butter-jelly-prop-2cw2ccw-poly-carbonate-p0289.html',
												info: {
													propPitch: 3,
													shaftDia: 5,
													numBlades: 2,
													hubThk: 7,
													weight: 2.6,
												}
											},
											{
												name: 'DAL Nepal N1',
												price: 40,
												link: 'https://www.racedayquads.com/products/dal-nepal-n1-5143-tri-blade-5-prop-4-pack-choose-your-color?variant=31331255451761',
												info: {
													propPitch: 4.35,
													shaftDia: 5,
													numBlades: 3,
													hubThk: 7,
													weight: 3.8,
												}
											},
										]
		}

	] 


module.exports = parts;