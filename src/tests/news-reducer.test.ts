import {NewsStateType, NewsType} from "../types";
import {newsSlice, setCurrentNews, setFilterValue} from "../store/reducers/news-reducer";

let filterValue: string;
let startState: NewsStateType;
let news: NewsType;

beforeEach(() => {
    filterValue = 'test value'
    news = {
        source: {
            id: "nbc-news",
            name: "NBC News"
        },
        author: "Chantal Da Silva, Denise Chow, Alan Kaytukov, Reuters",
        title: "Russia confirms anti-satellite missile test, dismisses U.S. space debris concerns - NBC News",
        description: "Russia confirmed that it conducted an anti-satellite missile test that U.S. officials say endangered astronauts aboard the International Space Station.",
        url: "https://www.nbcnews.com/news/world/russia-confirms-anti-satellite-missile-test-dismisses-us-space-debris-rcna5680",
        urlToImage: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2021-11/211116-russia-space-mb-1214-f95c25.jpg",
        publishedAt: "2021-11-16T14:29:50Z",
        content: "Russia confirmed Tuesday that it conducted a missile test targeting an old space satellite, but rejected accusations from the United States and allies that it risked endangering astronauts aboard the… [+3814 chars]"
    }
    startState = {
        data: [],
        currentNews: null,
        filterValue: '',
        error: '',
        isLoading: false
    }
})

test('correct value should be set', () => {
    const action = setFilterValue(filterValue)
    const endState = newsSlice.reducer(startState, action)

    expect(endState.filterValue).toBe(filterValue)
})

test('correct news should be set', () => {
    const action = setCurrentNews(news)
    const endState = newsSlice.reducer(startState,action)

    expect(endState.currentNews?.source.id).toBe("nbc-news")
});