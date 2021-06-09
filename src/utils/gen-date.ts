import * as moment from 'moment';

export function getDate(): Date {
    return moment().add(10, 'days').toDate();
}