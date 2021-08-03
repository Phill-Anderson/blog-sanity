import { MdLocalMovies as icon } from 'react-icons/md'

export default {
    name: 'blog',
    title: 'Блог',
    type: 'document',
    icon,
    fields: [
        {
            title: "Блогийн гарчиг",
            name: "title",
            type: "string",
            description: "80 тэмдэгтээс бүү хэтрүүлээрэй",
            validation: (Rule) => [
                Rule.required().min(10).warning("Гарчиг хамгийн багадаа 10 үсгээс тогтоно"),
                Rule.required().max(80).error("Гарчиг 80 тэмдэгтээс хэтрэхгүй байх ёстой"),
            ],
        },
        {
            title: "Дэд гарчиг",
            name: "subtitle",
            type: "string",
            description: "Блогийн төрлийг текстээр бичих",
        },
        {
            title: "Нийтлэлч",
            name: "publisher",
            type: "reference",
            to: [{ type: "publisher" }],
        },
        {
            title: "Блогийн зураг",
            name: "cover_image",
            type: "image"
        },
        {
            name: "content",
            type: "array",
            title: "Блогийн агуулга",
            of: [
                {
                    type: "block",
                },
                {
                    type: "image",
                }, {
                    type: "code",
                }
            ]
        },
        {
            title: "Огноо",
            name: "date",
            type: "datetime",
        },
        {
            title: "Слаг",
            name: "slug",
            type: "slug",
            options: {
                source: "title",
                slugify: (input) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
            }
        }
    ],
}
