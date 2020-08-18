create table aot_episodes
(
    episode_id serial not null
        constraint aot_episodes_pk
            primary key,
    episode_title  varchar(80),
    episode_number varchar(5),
    season_id integer not null
        constraint season_id_fk
            references season_listings,
    source1 varchar(120),
    source2 varchar(120),
    source3 varchar(120),
    source4 varchar(120),
    source5 varchar(120),
    source6 varchar(120),
    aired date,
    views integer default 0
);
