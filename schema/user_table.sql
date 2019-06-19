create table user_table (
    id serial PRIMARY KEY not null,
    first_name varchar not null,
    last_name varchar not null,
    username varchar not null,
    email varchar not null,
    profilepic varchar not null
)