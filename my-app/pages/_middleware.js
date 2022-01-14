import { NextResponse, NextRequest } from 'next/server'
export async function middleware(req, ev) {
    const { pathname } = req.nextUrl
    if (pathname == '/taylor_guitars') {
        return NextResponse.redirect('/taylorGuitars')
    } if (pathname == '/martin_guitars')
        return NextResponse.redirect('/martinGuitars')
    if (pathname == '/gibson_guitars')
        return NextResponse.redirect('/gibsonGuitars')
    if (pathname == '/fender_guitars')
        return NextResponse.redirect('/fenderGuitars')
        if (pathname == '/prs_guitars')
        return NextResponse.redirect('/prsGuitars')

    return NextResponse.next()
}