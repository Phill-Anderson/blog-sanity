import { FaMenorah as icon } from 'react-icons/fa'

export default {
    title: 'Категор',
    name: 'category',
    type: 'document',
    icon,
    fields: [
        {
            title: "Категорийн нэр",
            name: "title",
            type: "string",
        },
        {
            title: "Категорийн зураг",
            name: "picture",
            type: "image",
        }
    ],
}
