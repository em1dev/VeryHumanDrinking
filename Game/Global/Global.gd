extends Node2D

func playUISFX():
	$UISfx.play();

func playEndSFX():
	$EndGameSFX.play();

var API_URL = 'http://localhost:8989/entry';
