-- Creación de un paquete PL/SQL para el plan de contingencia
CREATE OR REPLACE PACKAGE COFFEE_SHOP_CONTINGENCY_PLAN AS
 -- Procedimiento para realizar un pedido
    PROCEDURE PLACE_ORDER(
        P_COFFEE_USER_ID IN NUMBER,
        P_PRODUCT_ID IN NUMBER,
        P_QUANTITY IN NUMBER
    );
 -- Procedimiento para agregar un nuevo empleado
    PROCEDURE ADD_EMPLOYEE(
        P_EMPLOYEE_ID IN NUMBER,
        P_EMPLOYEE_NAME IN VARCHAR2,
        P_LAST_NAME IN VARCHAR2,
        P_ADDRESS IN VARCHAR2,
        P_EMPLOYEE_EMAIL IN VARCHAR2
    );
 -- Procedimiento para actualizar la dirección de una tienda
    PROCEDURE UPDATE_STORE_ADDRESS(
        P_STORE_ID IN NUMBER,
        P_STORE_ADDRESS IN VARCHAR2
    );
 -- Procedimiento para agregar un nuevo empleado a una tienda
    PROCEDURE ADD_STORE_STAFF(
        P_EMPLOYEE_ID IN NUMBER,
        P_STORE_ID IN NUMBER,
        P_SCHEDULE IN VARCHAR2,
        P_POSITION IN VARCHAR2,
        P_SALARY IN NUMBER
    );
 -- Procedimiento para realizar un ajuste de stock
    PROCEDURE ADJUST_STOCK(
        P_STORE_ID IN NUMBER,
        P_PRODUCT_ID IN NUMBER,
        P_QUANTITY IN NUMBER
    );
 -- Procedimiento para eliminar un producto y sus pedidos asociados
    PROCEDURE DELETE_PRODUCT(
        P_PRODUCT_ID IN NUMBER
    );
 -- Procedimiento para eliminar un empleado y sus asignaciones en las tiendas
    PROCEDURE DELETE_EMPLOYEE(
        P_EMPLOYEE_ID IN NUMBER
    );
 -- Procedimiento para eliminar una tienda y sus empleados asociados
    PROCEDURE DELETE_STORE(
        P_STORE_ID IN NUMBER
    );
 -- Procedimiento para eliminar una orden y sus detalles asociados
    PROCEDURE DELETE_ORDER(
        P_ORDER_ID IN NUMBER
    );
END;
/

-- Implementación de los procedimientos del plan de contingencia
CREATE OR REPLACE PACKAGE BODY COFFEE_SHOP_CONTINGENCY_PLAN AS
 -- Procedimiento para realizar un pedido
    PROCEDURE PLACE_ORDER(
        P_COFFEE_USER_ID IN NUMBER,
        P_PRODUCT_ID IN NUMBER,
        P_QUANTITY IN NUMBER
    ) AS
        V_ORDER_ID NUMBER;
    BEGIN
 -- Generar un número de pedido único
        SELECT
            ORDER_SEQUENCE.NEXTVAL INTO V_ORDER_ID
        FROM
            DUAL;
 -- Insertar el pedido en la tabla ORDER_USER
        INSERT INTO ORDER_USER (
            ORDER_ID,
            COFFEE_USER_ID,
            PRODUCT_ID,
            ORDER_STATUS
        ) VALUES (
            V_ORDER_ID,
            P_COFFEE_USER_ID,
            P_PRODUCT_ID,
            'PENDING'
        );
 -- Insertar los detalles del pedido en la tabla ORDER_DETAILS
        INSERT INTO ORDER_DETAILS (
            ORDER_ID,
            PRODUCT_ID,
            DATE_ADDED
        ) VALUES (
            V_ORDER_ID,
            P_PRODUCT_ID,
            SYSDATE
        );
 -- Actualizar el stock
        UPDATE STOCK
        SET
            STOCK_QUANTITY = STOCK_QUANTITY - P_QUANTITY
        WHERE
            PRODUCT_ID = P_PRODUCT_ID;
        COMMIT;
    EXCEPTION
        WHEN OTHERS THEN
            ROLLBACK;
            RAISE;
    END;
 -- Procedimiento para agregar un nuevo empleado
    PROCEDURE ADD_EMPLOYEE(
        P_EMPLOYEE_ID IN NUMBER,
        P_EMPLOYEE_NAME IN VARCHAR2,
        P_LAST_NAME IN VARCHAR2,
        P_ADDRESS IN VARCHAR2,
        P_EMPLOYEE_EMAIL IN VARCHAR2
    ) AS
    BEGIN
 -- Insertar el nuevo empleado en la tabla EMPLOYEE
        INSERT INTO EMPLOYEE (
            EMPLOYEE_ID,
            EMPLOYEE_NAME,
            LAST_NAME,
            ADDRESS,
            EMPLOYEE_EMAIL
        ) VALUES (
            P_EMPLOYEE_ID,
            P_EMPLOYEE_NAME,
            P_LAST_NAME,
            P_ADDRESS,
            P_EMPLOYEE_EMAIL
        );
        COMMIT;
    EXCEPTION
        WHEN OTHERS THEN
            ROLLBACK;
            RAISE;
    END;
 -- Procedimiento para actualizar la dirección de una tienda
    PROCEDURE UPDATE_STORE_ADDRESS(
        P_STORE_ID IN NUMBER,
        P_STORE_ADDRESS IN VARCHAR2
    ) AS
    BEGIN
 -- Actualizar la dirección de la tienda en la tabla STORE
        UPDATE STORE
        SET
            STORE_ADDRESS = P_STORE_ADDRESS
        WHERE
            STORE_ID = P_STORE_ID;
        COMMIT;
    EXCEPTION
        WHEN OTHERS THEN
            ROLLBACK;
            RAISE;
    END;
 -- Procedimiento para agregar un nuevo empleado a una tienda
    PROCEDURE ADD_STORE_STAFF(
        P_EMPLOYEE_ID IN NUMBER,
        P_STORE_ID IN NUMBER,
        P_SCHEDULE IN VARCHAR2,
        P_POSITION IN VARCHAR2,
        P_SALARY IN NUMBER
    ) AS
    BEGIN
 -- Insertar la asignación del empleado en la tabla STORE_STAFF
        INSERT INTO STORE_STAFF (
            EMPLOYEE_ID,
            STORE_ID,
            SCHEDULE,
            POSITION,
            SALARY
        ) VALUES (
            P_EMPLOYEE_ID,
            P_STORE_ID,
            P_SCHEDULE,
            P_POSITION,
            P_SALARY
        );
        COMMIT;
    EXCEPTION
        WHEN OTHERS THEN
            ROLLBACK;
            RAISE;
    END;
 -- Procedimiento para realizar un ajuste de stock
    PROCEDURE ADJUST_STOCK(
        P_STORE_ID IN NUMBER,
        P_PRODUCT_ID IN NUMBER,
        P_QUANTITY IN NUMBER
    ) AS
    BEGIN
 -- Actualizar el stock
        UPDATE STOCK
        SET
            STOCK_QUANTITY = STOCK_QUANTITY + P_QUANTITY
        WHERE
            STORE_ID = P_STORE_ID
            AND PRODUCT_ID = P_PRODUCT_ID;
        COMMIT;
    EXCEPTION
        WHEN OTHERS THEN
            ROLLBACK;
            RAISE;
    END;
 -- Procedimiento para eliminar un producto y sus pedidos asociados
    PROCEDURE DELETE_PRODUCT(
        P_PRODUCT_ID IN NUMBER
    ) AS
    BEGIN
 -- Eliminar los pedidos asociados al producto
        DELETE FROM ORDER_USER
        WHERE
            PRODUCT_ID = P_PRODUCT_ID;
 -- Eliminar los detalles de los pedidos asociados al producto
        DELETE FROM ORDER_DETAILS
        WHERE
            PRODUCT_ID = P_PRODUCT_ID;
 -- Eliminar el producto
        DELETE FROM PRODUCT
        WHERE
            PRODUCT_ID = P_PRODUCT_ID;
        COMMIT;
    EXCEPTION
        WHEN OTHERS THEN
            ROLLBACK;
            RAISE;
    END;
 -- Procedimiento para eliminar un empleado y sus asignaciones en las tiendas
    PROCEDURE DELETE_EMPLOYEE(
        P_EMPLOYEE_ID IN NUMBER
    ) AS
    BEGIN
 -- Eliminar las asignaciones del empleado en las tiendas
        DELETE FROM STORE_STAFF
        WHERE
            EMPLOYEE_ID = P_EMPLOYEE_ID;
 -- Eliminar el empleado
        DELETE FROM EMPLOYEE
        WHERE
            EMPLOYEE_ID = P_EMPLOYEE_ID;
        COMMIT;
    EXCEPTION
        WHEN OTHERS THEN
            ROLLBACK;
            RAISE;
    END;
 -- Procedimiento para eliminar una tienda y sus empleados asociados
    PROCEDURE DELETE_STORE(
        P_STORE_ID IN NUMBER
    ) AS
    BEGIN
 -- Eliminar los empleados asociados a la tienda
        DELETE FROM STORE_STAFF
        WHERE
            STORE_ID = P_STORE_ID;
 -- Eliminar la tienda
        DELETE FROM STORE
        WHERE
            STORE_ID = P_STORE_ID;
        COMMIT;
    EXCEPTION
        WHEN OTHERS THEN
            ROLLBACK;
            RAISE;
    END;
 -- Procedimiento para eliminar una orden y sus detalles asociados
    PROCEDURE DELETE_ORDER(
        P_ORDER_ID IN NUMBER
    ) AS
    BEGIN
 -- Eliminar los detalles de la orden
        DELETE FROM ORDER_DETAILS
        WHERE
            ORDER_ID = P_ORDER_ID;
 -- Eliminar la orden
        DELETE FROM ORDER_USER
        WHERE
            ORDER_ID = P_ORDER_ID;
        COMMIT;
    EXCEPTION
        WHEN OTHERS THEN
            ROLLBACK;
            RAISE;
    END;
END;
/