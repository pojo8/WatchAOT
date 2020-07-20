create table aot_episodes
(
    episode_id serial  not null
        constraint aot_episodes_pk
            primary key,
    title      varchar(60),
    season_id  integer not null
        constraint fk_season_id
            references season_listings,
    source1    varchar(70),
    source2    varchar(70),
    source3    varchar(70),
    source4    varchar(70),
    column_8   integer,
    views      integer
);
