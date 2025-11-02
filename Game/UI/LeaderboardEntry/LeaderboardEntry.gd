extends Control

@onready var rank_label = $HBoxContainer/Rank
@onready var user_label = $HBoxContainer/UserLabel
@onready var score_label = $HBoxContainer/ScoreLabel
@onready var water_consumed_label = $WaterConsumedLabel
@onready var water_wasted_label = $WaterWastedLabel

func setLabels(rank: int, user: String, score: int, waterConsumed: int, waterWasted: int):
	var userCleaned = user.remove_char("\n".unicode_at(0));
	
	rank_label.text  = str(rank);
	user_label.text = userCleaned;
	score_label.text = str(score);
	water_consumed_label.text = 'Water drank: ' + str(waterConsumed) + ' ml';
	water_wasted_label.text = 'Water wasted: ' + str(waterWasted) + ' ml';
