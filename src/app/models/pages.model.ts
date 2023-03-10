export interface PagesModel {

    id: number,
    name: string,
    note: any,
    is_active: string,
    _lft: string,
    _rgt: 41,
    parent_id: string,
    created_at: Date,
    updated_at: Date,
    order: string,
    contents: [
        {
            id: number,
            type: string,
            position: string,
            image: string,
            title: string,
            descritive: string,
            attachment: any,
            model: any,
            url: string,
            status: string,
            open: string,
            start_date: Date,
            end_date: Date,
            tags: any,
            bond: any,
            credits: string,
            note: any,
            published_at: Date,
            slug: string,
            subtitle: string,
            created_at: Date,
            updated_at: Date,
            endpoint: string,
            pivot: {
                page_id: string,
                content_id: string,
                created_at: Date,
                updated_at: Date,
            }
        },
    ]
    children: [],
}