create table user_session
(
    user_session bigserial not null
        constraint user_session_pk
            primary key,
    user_id      bigserial not null
        constraint user_session_users_user_id_fk
            references users,
    active       boolean
);
