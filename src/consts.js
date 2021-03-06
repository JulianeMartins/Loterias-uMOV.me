export const CHANGE_DEFAULT_CONFIG = "CHANGE_DEFAULT_CONFIG";
export const CLEAR_SELECTED_DOZENS = "CLEAR_SELECTED_DOZENS";
export const CHANGE_SELECTED_DOZENS = "CHANGE_SELECTED_DOZENS";
export const TYPE_SENA = "SENA";
export const TYPE_QUINA = "QUINA";
export const SENA = {
  name: TYPE_SENA,
  startsIn: 1,
  min_of_dozens: 6,
  max_of_dozens: 15,
  amount_of_dozens: 60,
  prices: [
    { amount: 6, price: 4.5 },
    { amount: 7, price: 31.5 },
    { amount: 8, price: 126 },
    { amount: 9, price: 378 },
    { amount: 10, price: 945 },
    { amount: 11, price: 2079 },
    { amount: 12, price: 4158 },
    { amount: 13, price: 7722 },
    { amount: 14, price: 13513.5 },
    { amount: 15, price: 22522.5 },
  ],
};

export const QUINA = {
  name: TYPE_QUINA,
  startsIn: 0,
  min_of_dozens: 5,
  max_of_dozens: 15,
  amount_of_dozens: 81,
  prices: [
    { amount: 5, price: 2 },
    { amount: 6, price: 12 },
    { amount: 7, price: 42 },
    { amount: 8, price: 112 },
    { amount: 9, price: 252 },
    { amount: 10, price: 504 },
    { amount: 11, price: 924 },
    { amount: 12, price: 1584 },
    { amount: 13, price: 2574 },
    { amount: 14, price: 4004 },
    { amount: 15, price: 6006 },
  ],
};
