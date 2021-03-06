create table users
(
    user_id          bigserial   not null
        constraint users_pk
            primary key,
    email            varchar(80) not null
        constraint users_pk_2
            unique,
    username         varchar(25) not null,
    password_hash    varchar     not null,
    pwd_reset_expiry timestamp with time zone,
    reset_pwd        boolean default false,
    password_expiry  timestamp
);
