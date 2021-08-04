import { FaUserEdit as icon } from 'react-icons/fa'

export default {
    title: 'Нийтлэгч',
    name: 'publisher',
    type: 'document',
    icon,
    fields: [
        {
            title: "Нийтлэгчийн нэр",
            name: "title",
            type: "string",
        },
        {
            title: "Нийтлэгчийн зураг",
            name: "picture",
            type: "image",
        }
    ],
}
