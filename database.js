import * as SQLite from 'expo-sqlite';
import { SECTION_LIST_MOCK_DATA } from './utils';

const db = SQLite.openDatabase('little_lemon');

export async function createTable() {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql(
          'create table if not exists menuitems (id integer primary key not null, uuid text, title text, price text, category text);'
        );
      },
      reject,
      resolve
    );
  });
}

export async function getMenuItems() {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql('select * from menuitems', [], (_, { rows }) => {
        resolve(rows._array);
      });
    });
  });
}

export function saveMenuItems(menuItems) {
  db.transaction((tx) => {
    // Create an array of SQL value strings from the menuItems
    const values = menuItems.map(
      ({ id, title, price, category }) =>
        `(${id}, '${title}', '${price}', '${category}')`
    );

    // Join the value strings into a single SQL statement
    const sqlStatement = `INSERT INTO menuitems (id, title, price, category) VALUES ${values.join(', ')}`;

    // Execute the SQL statement
    tx.executeSql(sqlStatement);
  });
}

export async function filterByQueryAndCategories(query, activeCategories) {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      const categoryConditions = activeCategories
        .map((category) => `category = '${category}'`)
        .join(" OR ");

      const sqlStatement = `
        SELECT *
        FROM menuitems
        WHERE title LIKE '%${query}%'
        ${activeCategories.length ? `AND (${categoryConditions})` : ""}
      `;

      tx.executeSql(sqlStatement, [], (_, { rows }) => {
        resolve(rows._array);
      });
    }, reject);
  });
}
