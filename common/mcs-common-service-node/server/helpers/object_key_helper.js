'use strict';


((keyHelper) => {
    keyHelper.keysToCamel = (o) => {
        if (o && Array.isArray(o)) {
            return o.map((i) => {
                return keyHelper.keysToCamel(i);
            });
        } else if (o && typeof o === 'object') {
            const n = {};
            Object.keys(o)
                .forEach((k) => {
                    n[keyHelper.toCamel(k)] = keyHelper.keysToCamel(o[k]);
                });
            return n;
        }
        return o;
    };

    keyHelper.keysToSnake = (o) => {
        if (o && Array.isArray(o)) {
            return o.map((i) => {
                return keyHelper.keysToSnake(i);
            });
        } else if (o && typeof o === 'object') {
            const n = {};
            Object.keys(o)
                .forEach((k) => {
                    n[keyHelper.toSnake(k)] = keyHelper.keysToSnake(o[k]);
                });
            return n;
        }
        return o;
    };

    keyHelper.toCamel = (string) => {
        return string.replace(/\s/g, '').replace(/(_\w)/g, (m) => {
            return m[1].toUpperCase();
        });
    }

    keyHelper.toSnake = (string) => {
        return string.replace(/\s/g, '').replace(/[\w]([A-Z])/g, (m) => {
            return m[0] + '_' + m[1];
        }).toLowerCase();
    }
})(module.exports);