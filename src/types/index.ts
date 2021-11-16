export type NewsType = {
    source: {
        id: string,
        name: string
    },
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string
}

export type ResponseType = {
    status: string,
    code: string,
    message: string,
    totalResults: number,
    articles: NewsType[]
}

export type NewsStateType = {
    data: NewsType[],
    currentNews: NewsType | null,
    filterValue: string
    isLoading: boolean,
    error: string
}
