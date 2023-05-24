--TABLA DE PRODUCTO

-- Deshabilitar restricciones de clave foránea para permitir el borrado de tablas
ALTER TABLE SHOPPINGCART DISABLE CONSTRAINT FK_PRODUCT;

ALTER TABLE SHOPPINGCART DISABLE CONSTRAINT FK_COFFEEUSER;

-- Eliminar tablas en orden inverso de creación para evitar conflictos de dependencia
DROP TABLE SHOPPINGCART;

DROP TABLE COFFEEUSER;

DROP TABLE PRODUCT;