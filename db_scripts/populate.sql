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
insert into cards (crd_type, crd_value, crd_img) values ('Solar4', 4 , 'images/solar4.jpg'); 
insert into cards (crd_type, crd_value, crd_img) values ('Nebula4', 4 , 'images/nebula4.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Stardust4', 4 , 'images/stardust4.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Solar5', 5 , 'images/solar5.jpg'); 
insert into cards (crd_type, crd_value, crd_img) values ('Nebula5', 5 , 'images/nebula5.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Stardust5', 5 , 'images/stardust5.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Solar6', 6 , 'images/solar6.jpg'); 
insert into cards (crd_type, crd_value, crd_img) values ('Nebula6', 6 , 'images/nebula6.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Stardust6', 6 , 'images/stardust6.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Solar7', 7 , 'images/solar7.jpg'); 
insert into cards (crd_type, crd_value, crd_img) values ('Nebula7', 7 , 'images/nebula7.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Stardust7', 7 , 'images/stardust7.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Solar8', 8 , 'images/solar8.jpg'); 
insert into cards (crd_type, crd_value, crd_img) values ('Nebula8', 8 , 'images/nebula8.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Stardust8', 8 , 'images/stardust8.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Solar9', 9 , 'images/solar9.jpg'); 
insert into cards (crd_type, crd_value, crd_img) values ('Nebula9', 9 , 'images/nebula9.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Stardust9', 9 , 'images/stardust9.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Solar10', 10 , 'images/solar10.jpg'); 
insert into cards (crd_type, crd_value, crd_img) values ('Nebula10', 10 , 'images/nebula10.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Stardust10', 10 , 'images/stardust10.png'); 

