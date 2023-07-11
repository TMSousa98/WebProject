create database mygame;

use mygame;

create table user (
    usr_id int not null auto_increment,
    usr_name varchar(60) not null,
    usr_pass varchar(200) not null, 
    usr_token varchar(200),
    primary key (usr_id));

create table game (
    gm_id int not null auto_increment,
    gm_turn int not null default 1,
    gm_state_id int not null,
    gm_turn_timestamp TIMESTAMP,
    gm_next_user int,
    primary key (gm_id));

create table hand (
	hnd_id int not null auto_increment,
    hnd_usr int,
    hnd_gm int not null,
    primary key (hnd_id));

create table hand_cards (
	hc_id int not null auto_increment,
    hc_hand_id int not null,
    hc_card_id int not null,
    primary key (hc_id));
    
create table turns (
	turn_id int not null auto_increment,
	gm_id int not null,
    crd_id int not null,
    usr_id int not null,
    primary key (turn_id));

create table cards(
	crd_id int not null auto_increment,
	crd_type varchar(60) not null,
    crd_value int not null,
    crd_img varchar(255) not null,
    primary key (crd_id));
    
create table battle (
    bat_id int not null auto_increment,
    bat_ug_id int not null, 
    bat_cardid int not null,
    bat_turn int not null,
    primary key (bat_id));

create table game_state (
    gst_id int not null auto_increment,
    gst_state varchar(60) not null,
    primary key (gst_id));

create table user_game (
    ug_id int not null auto_increment,
    ug_order int,
    ug_user_id int not null,
    ug_game_id int not null,
    ug_state_id int not null,
    primary key (ug_id));

create table user_game_state (
    ugst_id int not null auto_increment,
    ugst_state varchar(60) not null,
    primary key (ugst_id));


create table scoreboard (
    sb_id int not null auto_increment,
    sb_user_game_id int not null,
    sb_state_id int not null,
    sb_points int not null,
    primary key (sb_id));

 create table scoreboard_state (
    sbs_id int not null auto_increment,
    sbs_state varchar(60) not null,
    primary key (sbs_id));


# Foreign Keys

alter table hand_cards add constraint hand_fk_hand_cards_id
			foreign key (hc_hand_id) references hand(hnd_id)
            ON DELETE NO ACTION ON UPDATE NO ACTION;

alter table hand add constraint hand_fk_hnd_usr
			foreign key (hnd_usr) references user(usr_id)
			ON DELETE NO ACTION ON UPDATE NO ACTION;

alter table turns add constraint turns_fk_gm_id
			foreign key (gm_id) references game(gm_id)
            ON DELETE NO ACTION ON UPDATE NO ACTION;

alter table turns add constraint turns_fk_user_id
			foreign key (usr_id) references user(usr_id)
            ON DELETE NO ACTION ON UPDATE NO ACTION;
            
alter table turns add constraint turns_fk_crd_id
			foreign key (crd_id) references cards(crd_id)
            ON DELETE NO ACTION ON UPDATE NO ACTION;

alter table game add constraint game_fk_match_state
            foreign key (gm_state_id) references game_state(gst_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;

alter table game add constraint game_fk_next_user
            foreign key (gm_next_user) references user_game(ug_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;
            
alter table battle add constraint battle_fk_ug_id
			foreign key (bat_ug_id) references user_game(ug_id)
            ON DELETE NO ACTION ON UPDATE NO ACTION;
            
alter table battle add constraint battle_fk_card_id
			foreign key (bat_cardid) references cards(crd_id)
            ON DELETE NO ACTION ON UPDATE NO ACTION;

alter table user_game add constraint user_game_fk_user
            foreign key (ug_user_id) references user(usr_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;

alter table user_game add constraint user_game_fk_game
            foreign key (ug_game_id) references game(gm_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;

alter table user_game add constraint user_game_fk_user_game_state
            foreign key (ug_state_id) references user_game_state(ugst_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;

alter table scoreboard add constraint scoreboard_fk_user_game
            foreign key (sb_user_game_id) references user_game(ug_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;  

alter table scoreboard add constraint scoreboard_fk_scoreboard_state
            foreign key (sb_state_id) references scoreboard_state(sbs_id) 
			ON DELETE NO ACTION ON UPDATE NO ACTION;