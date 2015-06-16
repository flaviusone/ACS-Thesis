CREATE TABLE post_table (
    "id" serial NOT NULL PRIMARY KEY,
    "author_name" varchar(30) NOT NULL,
    "text" varchar(200) NOT NULL,
    "created_at" timestamp with time zone NOT NULL
);