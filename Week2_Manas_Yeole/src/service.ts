import pool from './pgConfig';

export const storeFilteredOrderIDs = async (orderIDs: string[]) => {
    for (const orderId of orderIDs) {
      const query = 'INSERT INTO orders (orderID) VALUES ($1)';
      await pool.query(query, [orderId]);
    }
    
}