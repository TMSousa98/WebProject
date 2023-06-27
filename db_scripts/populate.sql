# Do not change the order or names of states 
#(the code is assuming specific IDs and names)
# You can add more in the end
insert into game_state (gst_state) values ('Waiting');
insert into game_state (gst_state) values ('Started');
insert into game_state (gst_state) values ('Finished');
insert into game_state (gst_state) values ('Canceled');

# Do not change the order, but you can add more in the end
insert into user_game_state (ugst_state) values ('Waiting');
insert into user_game_state (ugst_state) values ('Playing');
insert into user_game_state (ugst_state) values ('Score');
insert into user_game_state (ugst_state) values ('End');

# Possible end game states
insert into scoreboard_state (sbs_state) values ('Tied');
insert into scoreboard_state (sbs_state) values ('Lost');
insert into scoreboard_state (sbs_state) values ('Won');

insert into cards (crd_type, crd_value, crd_img) values ('Solar', 2 , 'images/solar.jpg'); 
insert into cards (crd_type, crd_value, crd_img) values ('Nebula', 2 , 'images/nebula.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Stardust', 2 , 'images/stardust.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Solar3', 3 , 'images/solar3.jpg'); 
insert into cards (crd_type, crd_value, crd_img) values ('Nebula3', 3 , 'images/nebula3.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Stardust3', 3 , 'images/stardust3.png'); 

