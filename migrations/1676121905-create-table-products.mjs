export async function up(sql) {
  await sql`
CREATE TABLE products(
id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
type varchar(50) NOT NULL,
site_name varchar(50) NOT NULL,
name varchar(300) NOT NULL,
price integer NOT NULL,
img varchar(100) NOT NULL,
short_description varchar(200) NOT NULL,
long_description varchar(600) NOT NULL
);
  `;
}

export async function down(sql) {
  await sql`
  DROP TABLE products
  `;
}
