CREATE TABLE USERS(
  ID SERIAL PRIMARY KEY,
  EMAIL VARCHAR NOT NULL,
  PASSHASH VARCHAR NOT NULL,
  USERNAME VARCHAR
);

CREATE TABLE MESSAGES(
  MESSAGE_ID SERIAL PRIMARY KEY,
  MESSAGETEXT VARCHAR NOT NULL,
  MESSAGEOWNER_ID INT NOT NULL,
  CONSTRAINTS FK_OWNER
  FOREIGN KEY(MESSAGEOWNER_ID)
  REFERENCES USERS(ID)
)

INSERT INTO USERS(USERNAME, PASSHASH) VALUES($1,$2);
