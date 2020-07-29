export const fetchBenches = (data, filters) => (
    $.ajax({
        method: "GET",
        url: "/api/benches",
        data,
        filters,
        error: console.log(err)
    })
);

export const createBench = benchForm => (
    $.ajax({
        method: 'POST',
        url: '/api/benches',
        data: benchForm,
        contentType: false,
        processData: false
    })
);

export const fetchBench = benchId => (
    $.ajax({
        method: 'GET',
        url: `/api/benches/${benchId}`
    })
);

export const createReview = review => (
    $.ajax({
        method: 'POST',
        url: '/api/reviews',
        data: { review }
    })
);