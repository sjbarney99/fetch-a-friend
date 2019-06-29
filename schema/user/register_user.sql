INSERT INTO user_table (first_name, last_name, username, email, password, profilepic)
VALUES ($1, $2, $3, $4, $5, $6)
returning *;