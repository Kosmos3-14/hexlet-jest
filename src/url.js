/*
Реализуйте абстракцию для работы с URL. Она должна извлекать и менять части адреса. Интерфейс:
- make(url) - Конструктор. Создает урл.
- setProtocol(data, protocol) - Сеттер. Меняет схему.
- getProtocol(data) - Селектор (геттер). Извлекает схему.
- setHost(data, host) - Сеттер. Меняет хост.
- getHost(data) - Геттер. Извлекает хост.
- setPath(data, path) - Сеттер. Меняет строку запроса.
- getPath(data) - Геттер. Извлекает строку запроса.
- setQueryParam(data, key, value) - Сеттер. Устанавливает значение для параметра запроса.
- getQueryParam(data, paramName, default = null) - Геттер. Извлекает значение для параметра запроса.
Третьим параметром функция принимает значение по умолчанию, которое возвращается тогда,
когда в запросе не было такого параметра.
- toString(data) - Геттер. Преобразует урл в строковой вид.
*/

const make = (url) => {
  const protocol = url.split('://')[0];
  const host = url.split('://')[1].split('/')[0];
  const path = url.split('://')[1].split('/')[1].split('?')[0];
  const query = url.split('://')[1].split('/')[1].split('?')[1];
  const queryObj = {};
  if (query) {
    const queryArr = query.split('&');
    queryArr.forEach((item) => {
      const key = item.split('=')[0];
      const value = item.split('=')[1];
      queryObj[key] = value;
    });
  }
  return {
    protocol,
    host,
    path,
    query: queryObj,
  };
};

const setProtocol = (data, protocol) => {
  data.protocol = protocol;
};

const getProtocol = (data) => data.protocol;

const setHost = (data, host) => {
  data.host = host;
};

const getHost = (data) => data.host;

const setPath = (data, path) => {
  data.path = path;
};

const getPath = (data) => data.path;

const setQueryParam = (data, key, value) => {
  data.query[key] = value;
};

const getQueryParam = (data, paramName, defaultParam = null) => {
  if (data.query[paramName]) {
    return data.query[paramName];
  }
  return defaultParam;
};

const toString = (data) => {
  const queryArr = [];
  Object.keys(data.query).forEach((key) => {
    queryArr.push(`${key}=${data.query[key]}`);
  });
  return `${data.protocol}://${data.host}/${data.path}?${queryArr.join('&')}`;
};

export {
  make,
  setProtocol,
  getProtocol,
  setHost,
  getHost,
  setPath,
  getPath,
  setQueryParam,
  getQueryParam,
  toString,
};
