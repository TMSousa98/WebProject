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

insert into cards (crd_type, crd_value, crd_img) values ('Solar2', 2 , 'images/solar2.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Nebula2', 2 , 'images/nebula2.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Stardust2', 2 , 'images/stardust2.png');
insert into cards (crd_type, crd_value, crd_img) values ('Vortex2', 2 , 'images/vortex2.png');  
insert into cards (crd_type, crd_value, crd_img) values ('Solar3', 3 , 'images/solar3.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Nebula3', 3 , 'images/nebula3.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Stardust3', 3 , 'images/stardust3.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Vortex3', 3 , 'images/vortex3.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Solar4', 4 , 'images/solar4.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Nebula4', 4 , 'images/nebula4.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Stardust4', 4 , 'images/stardust4.png');
insert into cards (crd_type, crd_value, crd_img) values ('Vortex4', 4 , 'images/vortex4.png');  
insert into cards (crd_type, crd_value, crd_img) values ('Solar5', 5 , 'images/solar5.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Nebula5', 5 , 'images/nebula5.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Stardust5', 5 , 'images/stardust5.png');
insert into cards (crd_type, crd_value, crd_img) values ('Vortex5', 5 , 'images/vortex5.png');   
insert into cards (crd_type, crd_value, crd_img) values ('Solar6', 6 , 'images/solar6.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Nebula6', 6 , 'images/nebula6.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Stardust6', 6 , 'images/stardust6.png');
insert into cards (crd_type, crd_value, crd_img) values ('Vortex6', 6 , 'images/vortex6.png');   
insert into cards (crd_type, crd_value, crd_img) values ('Solar7', 7 , 'images/solar7.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Nebula7', 7 , 'images/nebula7.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Stardust7', 7 , 'images/stardust7.png');
insert into cards (crd_type, crd_value, crd_img) values ('Vortex7', 7 , 'images/vortex7.png');   
insert into cards (crd_type, crd_value, crd_img) values ('Solar8', 8 , 'images/solar8.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Nebula8', 8 , 'images/nebula8.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Stardust8', 8 , 'images/stardust8.png');
insert into cards (crd_type, crd_value, crd_img) values ('Vortex8', 8 , 'images/vortex8.png');   
insert into cards (crd_type, crd_value, crd_img) values ('Solar9', 9 , 'images/solar9.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Nebula9', 9 , 'images/nebula9.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Stardust9', 9 , 'images/stardust9.png');
insert into cards (crd_type, crd_value, crd_img) values ('Vortex9', 9, 'images/vortex9.png');   
insert into cards (crd_type, crd_value, crd_img) values ('Solar10', 10 , 'images/solar10.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Nebula10', 10 , 'images/nebula10.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Stardust10', 10 , 'images/stardust10.png');
insert into cards (crd_type, crd_value, crd_img) values ('Vortex10', 10 , 'images/vortex10.png');   
insert into cards (crd_type, crd_value, crd_img) values ('VortexJ', 11 , 'images/vortexJ.png');
insert into cards (crd_type, crd_value, crd_img) values ('NebulaJ', 11 , 'images/nebulaJ.png');
insert into cards (crd_type, crd_value, crd_img) values ('SolarJ', 11 , 'images/solarJ.png');
insert into cards (crd_type, crd_value, crd_img) values ('SardustJ', 11 , 'images/stardustJ.png');
insert into cards (crd_type, crd_value, crd_img) values ('VortexQ', 12 , 'images/vortexQ.png');
insert into cards (crd_type, crd_value, crd_img) values ('NebulaQ', 12 , 'images/nebulaQ.png');
insert into cards (crd_type, crd_value, crd_img) values ('SolarQ', 12 , 'images/solarQ.png');
insert into cards (crd_type, crd_value, crd_img) values ('SardustQ', 12 , 'images/stardustQ.png');
insert into cards (crd_type, crd_value, crd_img) values ('VortexK', 13 , 'images/vortexK.png');
insert into cards (crd_type, crd_value, crd_img) values ('NebulaK', 13 , 'images/nebulaK.png');
insert into cards (crd_type, crd_value, crd_img) values ('SolarK', 13 , 'images/solarK.png');
insert into cards (crd_type, crd_value, crd_img) values ('SardustK', 13 , 'images/stardustK.png');
insert into cards (crd_type, crd_value, crd_img) values ('VortexA', 14 , 'images/vortexA.png');
insert into cards (crd_type, crd_value, crd_img) values ('NebulaA', 14 , 'images/nebulaA.png');
insert into cards (crd_type, crd_value, crd_img) values ('SolarA', 14 , 'images/solarA.png');
insert into cards (crd_type, crd_value, crd_img) values ('SardustA', 14 , 'images/stardustA.png');       

