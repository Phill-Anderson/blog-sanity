import { ImBooks } from 'react-icons/im'

export default {
    name: 'blog',
    title: 'Блог',
    type: 'document',
    icon: ImBooks,
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
            title: "Категор",
            name: "category",
            type: "reference",
            to: [{ type: "category" }],
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
            type: "image",
            fields: [
                {
                    title: "Зургийн тайлбар",
                    name: "alt",
                    type: "text",
                    options: {
                        isHighlighted: true,
                    },
                }
            ],
            options: {
                hotspot: true,
            }
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
                    fields: [
                        {
                            title: "Зургийн тайлбар",
                            name: "alt",
                            type: "text",
                            options: {
                                isHighlighted: true,
                            },
                        },
                        {
                            title: "Зургийн байрлал",
                            name: "position",
                            type: "string",
                            options: {
                                isHighlighted: true,
                                list: [
                                    { title: 'Голлуулж', value: 'center' },
                                    { title: 'Зүүн талд', value: 'left' },
                                    { title: 'Баруун талд', value: 'right' },
                                ],
                                layout: "radio",
                            },
                        }
                    ],
                    options: {
                        hotspot: true
                    }
                }, {
                    type: "code",
                    options: {
                        withFilename: true,
                    },
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
