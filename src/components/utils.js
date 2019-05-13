export default function parseQueryString(str) { // Används till Auth.js
  let ret = Object.create(null);

  if (typeof str !== 'string') {
    return ret;
  }

  str = str.trim().replace(/^(\?|#|&)/, '');

  if (!str) {
    return ret;
  }

  str.split('&').forEach(function (param) {
    let parts = param.replace(/\+/g, ' ').split('=');
    // Firefox (pre 40) decodes `%3D` to `=`
    // https://github.com/sindresorhus/query-string/pull/37
    let key = parts.shift();
    let val = parts.length > 0 ? parts.join('=') : undefined;

    key = decodeURIComponent(key);

    // missing `=` should be `null`:
    // http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
    val = val === undefined ? null : decodeURIComponent(val);

    if (ret[key] === undefined) {
      ret[key] = val;
    } else if (Array.isArray(ret[key])) {
      ret[key].push(val);
    } else {
      ret[key] = [ret[key], val];
    }
  });

  return ret;
}

export function breadcrumbs(path) {
  let breadcrumbsArray = [];
  const splitpath = path.split("/").filter(x => {
    return x !== "";
  });

  let previous = "";
  for (let path of splitpath) {
    let newPath = "";
    if (breadcrumbsArray.length === 0) {
      newPath = "/" + path;
      previous += newPath;
    } else {
      newPath = previous + "/" + path;
      previous += "/" + path;
    }
    let pathObj = { 
      name: path,
      path: newPath,
    };
    breadcrumbsArray.push(pathObj);
  }
  return breadcrumbsArray;
};