create table season_listings
(
    title       varchar(50)                                                        not null,
    aired       date                                                               not null,
    description text,
    viewed      integer default 0,
    season_id integer not null
        constraint season_listings_pk
            primary key,
    thumbnail   varchar(120)
);

