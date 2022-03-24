export default function selectionFilter({series, films}) {
    //getting the genres for series and films


    /* The above code is creating a list of objects. Each object has a title and data. The data is a filtered list of items
    from the series/films array. */
    return {
        series: [
            {
                title: "Documentaries",
                data: series.filter((item) => item.genre === 'documentaries')
            },
            {
                title: "Comedies",
                data: series.filter((item) => item.genre === 'comedies')
            },
            {
                title: "Children",
                data: series.filter((item) => item.genre === 'children')
            },
            {
                title: "Crime",
                data: series.filter((item) => item.genre === 'crime')
            },
            {
                title: "Feel Good",
                data: series.filter((item) => item.genre === 'feel-good')
            }
        ],
        films : [
            {
                title: "Drama",
                data: films.filter((item) => item.genre === 'drama')
            },
            {
                title: "Thriller",
                data: films.filter((item) => item.genre === 'thriller')
            },
            {
                title: "Children",
                data: films.filter((item) => item.genre === 'children')
            },
            {
                title: "Suspense",
                data: films.filter((item) => item.genre === 'suspense')
            },
            {
                title: "Romance",
                data: films.filter((item) => item.genre === 'romance')
            }
        ]

    }
}