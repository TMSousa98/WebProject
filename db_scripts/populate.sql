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

insert into cards (crd_value, crd_img) values (1, '');
insert into cards (crd_value, crd_img) values (2, '');
insert into cards (crd_value, crd_img) values (3, '');
insert into cards (crd_value, crd_img) values (4, '');
insert into cards (crd_value, crd_img) values (5, '');
insert into cards (crd_value, crd_img) values (6, '');
insert into cards (crd_value, crd_img) values (7, '');
insert into cards (crd_value, crd_img) values (8, '');
insert into cards (crd_value, crd_img) values (9, '');
insert into cards (crd_value, crd_img) values (10, '');
insert into cards (crd_value, crd_img) values (11, '');
insert into cards (crd_value, crd_img) values (12, '');
insert into cards (crd_value, crd_img) values (13, '');




