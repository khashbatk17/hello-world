

export class News  {
    newsId: number;
    imageUrl: string;
    subject: string;
    snippet: string;
    createdDatetime: string;
    isActive: boolean;

    constructor(
        newsId?: number,
        imageUrl?: string,
        subject?: string,
        snippet?: string,
        createdDatetime?: string,
        isActive?: boolean,
    ) {
        this.newsId = newsId ?? 0;
        this.imageUrl = imageUrl ?? '';
        this.subject = subject ?? '';
        this.snippet = snippet ?? '';
        this.createdDatetime = createdDatetime ?? '';
        this.isActive = isActive ?? false;
    }
}