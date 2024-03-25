export default async function postRegister(name1, name2, email, login_pwd) {
    const credentials = {
        name1,
        name2,
        email,
        login_pwd,
    }

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/rcms-api/1/member/register`,
        {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
        },
    )
    return await res.json();
}