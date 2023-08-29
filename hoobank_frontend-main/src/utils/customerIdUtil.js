import { nanoid } from 'nanoid'

export const getCustomerId = () => {
    var customer_id = nanoid(8);
    return customer_id;
}