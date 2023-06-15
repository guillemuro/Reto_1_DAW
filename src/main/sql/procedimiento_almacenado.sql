CREATE OR REPLACE PROCEDURE ADD_SALE_HISTORY(
    P_ORDER_NUMBER_ID IN ORDER_USER.ORDER_NUMBER_ID%TYPE,
    P_COFFEE_USER_ID IN ORDER_USER.COFFEE_USER_ID%TYPE,
    P_ORDER_STATUS IN ORDER_USER.ORDER_STATUS%TYPE,
    P_TOTAL IN ORDER_USER.TOTAL%TYPE,
    P_DATE_ORDER IN ORDER_USER.DATE_ORDER%TYPE
) AS
BEGIN
 -- Insertar el historial de ventas
    INSERT INTO SALE_HISTORY (
        ORDER_NUMBER_ID,
        COFFEE_USER_ID,
        ORDER_STATUS,
        TOTAL,
        DATE_ORDER
    ) VALUES (
        P_ORDER_NUMBER_ID,
        P_COFFEE_USER_ID,
        P_ORDER_STATUS,
        P_TOTAL,
        P_DATE_ORDER
    );
    COMMIT;
EXCEPTION
    WHEN DUP_VAL_ON_INDEX THEN
 -- Capturar la excepción de violación de restricción UNIQUE
 -- Realizar las acciones correspondientes
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error: Violación de restricción UNIQUE. El registro ya existe en SALE_HISTORY.');
    WHEN NO_DATA_FOUND THEN
 -- Capturar la excepción cuando no se encuentra ningún registro
 -- Realizar las acciones correspondientes
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Error: No se encontraron registros correspondientes a la consulta.');
    WHEN OTHERS THEN
 -- Capturar cualquier otra excepción no controlada
 -- Realizar las acciones correspondientes
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('ERROR: '
            || SQLCODE
            || ' : '
            || SQLERRM);
        RAISE;
END;