CREATE TABLE PRODUCT(
    PRODUCT_ID NUMBER(5),
    PRODUCT_NAME VARCHAR2(30),
    PRODUCT_TYPE NUMBER(1),
    PRODUCT_PRICE NUMBER(5, 2),
    PRODUCT_TITLE VARCHAR2(300),
    PRODUCT_DESC VARCHAR2(800),
    PRODUCT_IMG VARCHAR2(400),
    CONSTRAINT PK_PRODUCT PRIMARY KEY (PRODUCT_ID)
);

/*SECUENCIA PARA GENREAR NUEVOS ID*/
CREATE SEQUENCE PRODUCT_SEQ START WITH 1;

CREATE TABLE COFFEEUSER(
    COFFEEUSER_ID NUMBER(5),
    COFFEEUSER_NAME VARCHAR2(30),
    COFFEEUSER_PASS VARCHAR2(30),
    COFFEEUSER_EMAIL VARCHAR2(30),
    CONSTRAINT PK_COFFEEUSER PRIMARY KEY (COFFEEUSER_ID) CONSTRAINT UQ_COFFEEUSER UNIQUE (COFFEEUSER_EMAIL)
);

CREATE TABLE SHOPPINGCART(
    SHOPPINGCART_ID NUMBER(5),
    COFFEEUSER_ID NUMBER(5),
    PRODUCT_ID NUMBER(5),
    QUANTITY NUMBER(2),
    CONSTRAINT PK_SHOPPINGCART PRIMARY KEY (SHOPPINGCART_ID),
    CONSTRAINT FK_COFFEEUSER FOREIGN KEY (COFFEEUSER_ID) REFERENCES COFFEEUSER(COFFEEUSER_ID),
    CONSTRAINT FK_PRODUCT FOREIGN KEY (PRODUCT_ID) REFERENCES PRODUCT(PRODUCT_ID),
    CONSTRAINT UQ_SHOPPINGCART UNIQUE (COFFEEUSER_ID, PRODUCT_ID)
);