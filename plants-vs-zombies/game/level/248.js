oS.Init(
	{
		PName: [
			oPeashooter,
			oSunFlower,
			oCherryBomb,
			oWallNut,
			oPotatoMine,
			oSnowPea,
			oChomper,
			oRepeater,
			oPuffShroom,
			oSunShroom,
			oFumeShroom,
			oGraveBuster,
			oHypnoShroom,
			oScaredyShroom,
			oIceShroom,
			oDoomShroom,
			oLilyPad,
			oSquash,
			oThreepeater,
			oTangleKlep,
			oJalapeno,
			oSpikeweed,
			oTorchwood,
			oTallNut,
			oCactus,
			oPlantern,
			oSplitPea,
			oStarfruit,
			oPumpkinHead,
			oFlowerPot,
			oCoffeeBean,
			oGarlic,
			oSeaShroom,
			oOxygen,
			ostar,
			oTTS,
			oSeaAnemone,
			oGatlingPea,
			oGloomShroom,
			oTwinSunflower,
			oSpikerock,
			oTenManNut,
			oSnowRepeater,
			oCattail,
			oLotusRoot,
			oIceFumeShroom,
			oLaserBean,
			oBigChomper,
			oFlamesMushroom,
		],
		ZName: [
			oZombie,
			oMustacheZombie,
			oConeheadZombie,
			oBucketheadZombie,
			oFootballZombie,
			oHeiFootballZombie,
			oCFootballZombie,
			oPoleVaultingZombie,
			oCPoleVaultingZombie,
			oNewspaperZombie,
			oScreenDoorZombie,
			oTrashZombie,
			oDuckyTubeZombie1,
			oDuckyTubeZombie2,
			oDuckyTubeZombie3,
			oDuckyTubeZombie4,
			oSnorkelZombie,
			oCSnorkelZombie,
			oSubZombie,
			oSmallZombie,
			oSmallDuckyTubeZombie1,
			oSmallConeheadZombie,
			oSmallFootballZombie,
			oDolphinRiderZombie,
			oCDolphinRiderZombie,
			oImp,
			oJX,
			oJackinTheBoxZombie,
			oCJackinTheBoxZombie,
			oCZombie,
			oCConeheadZombie,
			oCBucketheadZombie,
			othugZombie,
			oEunZombie,
			oZZ,
			oXBZombie,
			oCXZombie,
			oCNewspaperZombie,
		],
		PicArr: (function () {
			return ["images/interface/background4.jpg"];
		})(),
		backgroundImage: "images/interface/background4.jpg",
		CanSelectCard: 1,
		LF: [0, 1, 1, 2, 2, 1, 1],
		DKind: 0,
		LevelName: "常青之塔 98层",
		LvlEName: 248,
		SunNum: 9900,
		CanSelectCard: 1,
		Coord: 2,
		HaveFog: 5,
		StartGameMusic: "RigorMormist",
		LargeWaveFlag: {
			4: $("imgFlag4"),
			8: $("imgFlag3"),
			12: $("imgFlag2"),
			16: $("imgFlag1"),
		},
	},
	{
		AZ: [
			[oZombie, 1, 1],
			[oMustacheZombie, 1, 2],
			[oConeheadZombie, 1, 3],
			[oBucketheadZombie, 1, 4],
			[oFootballZombie, 1, 5],
			[oHeiFootballZombie, 1, 6],
			[oCFootballZombie, 1, 7],
			[oPoleVaultingZombie, 1, 8],
			[oCPoleVaultingZombie, 1, 9],
			[oNewspaperZombie, 1, 10],
			[oCNewspaperZombie, 1, 11],
			[oScreenDoorZombie, 1, 12],
			[oTrashZombie, 1, 11],
			[oDuckyTubeZombie1, 1, 12],
			[oDuckyTubeZombie2, 1, 11],
			[oDuckyTubeZombie3, 1, 12],
			[oDuckyTubeZombie4, 1, 11],
			[oSnorkelZombie, 1, 10],
			[oCSnorkelZombie, 1, 9],
			[oSubZombie, 1, 8],
			[oSmallZombie, 1, 7],
			[oSmallDuckyTubeZombie1, 1, 6],
			[oSmallConeheadZombie, 1, 5],
			[oSmallFootballZombie, 1, 4],
			[oDolphinRiderZombie, 1, 2],
			[oCDolphinRiderZombie, 1, 3],
			[oImp, 1, 4],
			[oJX, 1, 5],
			[oJackinTheBoxZombie, 1, 6],
			[oCJackinTheBoxZombie, 1, 7],
			[oCZombie, 1, 8],
			[oCConeheadZombie, 1, 9],
			[oCBucketheadZombie, 1, 10],
			[othugZombie, 1, 11],
			[oEunZombie, 1, 12],
			[oZZ, 1, 11],
			[oXBZombie, 1, 10],
			[oXBZombie, 1, 9],
			[oCXZombie, 1, 8],
		],
		FlagNum: 16,
		FlagToSumNum: {
			a1: [45, 164, 282, 328, 371],
			a2: [45, 164, 282, 328, 371],
		},
		FlagToMonitor: {
			3: [ShowLargeWave, 0],
			7: [ShowLargeWave, 0],
			11: [ShowLargeWave, 0],
			15: [ShowFinalWave, 0],
		},
		FlagToEnd() {
			NewImg("imgSF", "images/interface/trophy.png", "left:260px;top:233px", EDAll, {
				onclick() {
					SelectModal(249);
				},
			});
			NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:676px", EDAll);
		},
	}
);
