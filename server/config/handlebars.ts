/// <reference path="../../index.d.ts"/>
import * as hbs from 'express-hbs';

export default function () {
    hbs.registerHelper('list', (context, options) => {
        let ret = '<ul class="navigator">';

        for (let i = 0, j = context.length; i < j; i++) {
            ret = ret + options.fn(context[i]);
        }

        return ret + '</ul>';
    });
}
