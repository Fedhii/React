export const login = user => (
    $.ajax({
        method: "POST",
        url: 'api/sessions',
        data: { user }
    })
);

export const signup = user => (
    $.ajax({
        method: "POST",
        url: 'api/user',
        data: { user }
    })
);

export const logout = () => (
    $.ajax({
        method: "DELETE",
        url: "api/session"
    })
);