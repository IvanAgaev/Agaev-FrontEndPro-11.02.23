
export const isRequired = value => value ? null : "Поле обов'язкове";

export const isIntegerVal = value => Number.isInteger(+value) ? null : "Допустимі цілі числа";

export const isGreatThan = (value, maxLength) => value <= maxLength ? null : `Число не більше ніж ${maxLength}`;

export const isLessThan = (value, minLength) => value >= minLength ? null : `Число не менше ніж ${minLength}`;
