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

insert into cards (crd_type, crd_value, crd_img) values ('Solar', 0 , 'images/solar2.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Nebula', 0 , 'images/nebula2.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Stardust', 0 , 'images/stardust2.png');
insert into cards (crd_type, crd_value, crd_img) values ('Vortex', 0 , 'images/vortex2.png');  
insert into cards (crd_type, crd_value, crd_img) values ('Solar', 0 , 'images/solar3.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Nebula', 0 , 'images/nebula3.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Stardust', 0 , 'images/stardust3.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Vortex', 0 , 'images/vortex3.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Solar', 0 , 'images/solar4.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Nebula', 0 , 'images/nebula4.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Stardust', 0 , 'images/stardust4.png');
insert into cards (crd_type, crd_value, crd_img) values ('Vortex', 0 , 'images/vortex4.png');  
insert into cards (crd_type, crd_value, crd_img) values ('Solar', 0 , 'images/solar5.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Nebula', 0 , 'images/nebula5.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Stardust', 0 , 'images/stardust5.png');
insert into cards (crd_type, crd_value, crd_img) values ('Vortex', 0 , 'images/vortex5.png');   
insert into cards (crd_type, crd_value, crd_img) values ('Solar', 0 , 'images/solar6.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Nebula', 0 , 'images/nebula6.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Stardust', 0 , 'images/stardust6.png');
insert into cards (crd_type, crd_value, crd_img) values ('Vortex', 0 , 'images/vortex6.png');       
insert into cards (crd_type, crd_value, crd_img) values ('Vortex', 2 , 'images/vortexQ.png');
insert into cards (crd_type, crd_value, crd_img) values ('Nebula', 2 , 'images/nebulaQ.png');
insert into cards (crd_type, crd_value, crd_img) values ('Solar', 2 , 'images/solarQ.png');
insert into cards (crd_type, crd_value, crd_img) values ('Sardust', 2 , 'images/stardustQ.png');
insert into cards (crd_type, crd_value, crd_img) values ('Vortex', 3 , 'images/vortexJ.png');
insert into cards (crd_type, crd_value, crd_img) values ('Nebula', 3 , 'images/nebulaJ.png');
insert into cards (crd_type, crd_value, crd_img) values ('Solar', 3 , 'images/solarJ.png');
insert into cards (crd_type, crd_value, crd_img) values ('Sardust', 3 , 'images/stardustJ.png');
insert into cards (crd_type, crd_value, crd_img) values ('Vortex', 4 , 'images/vortexK.png');
insert into cards (crd_type, crd_value, crd_img) values ('Nebula', 4 , 'images/nebulaK.png');
insert into cards (crd_type, crd_value, crd_img) values ('Solar', 4 , 'images/solarK.png');
insert into cards (crd_type, crd_value, crd_img) values ('Sardust', 4 , 'images/stardustK.png');
insert into cards (crd_type, crd_value, crd_img) values ('Solar', 10 , 'images/solar7.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Nebula', 10 , 'images/nebula7.png'); 
insert into cards (crd_type, crd_value, crd_img) values ('Stardust', 10 , 'images/stardust7.png');
insert into cards (crd_type, crd_value, crd_img) values ('Vortex', 10 , 'images/vortex7.png');  
insert into cards (crd_type, crd_value, crd_img) values ('Vortex', 11 , 'images/vortexA.png');
insert into cards (crd_type, crd_value, crd_img) values ('Nebula', 11 , 'images/nebulaA.png');
insert into cards (crd_type, crd_value, crd_img) values ('Solar', 11, 'images/solarA.png');
insert into cards (crd_type, crd_value, crd_img) values ('Sardust', 11, 'images/stardustA.png');       

