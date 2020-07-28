create table season_listings
(
    season_id integer not null
        constraint season_listings_pk
            primary key,
    title varchar(50) not null,
    aired date not null,
    description text,
    viewed integer default 0,
    thumbnail varchar(70)
);

