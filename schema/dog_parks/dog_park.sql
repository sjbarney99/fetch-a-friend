create table dog_park (
    id serial PRIMARY KEY not null,
    park_name varchar not null,
    park_address varchar not null,
    city varchar not null,
    park_state varchar not null,
    zipcode varchar not null,
    descriptions varchar
)