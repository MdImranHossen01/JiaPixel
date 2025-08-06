import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {

    const dummyUserData ={
        role: "admin",
        email: "test@admin.com"
    }

    const isServicesPage = request.nextUrl.pathname.startsWith('/services')
    const isAdmin = dummyUserData.role === 'admin'

    if(isServicesPage && !isAdmin) 
        return NextResponse.redirect(new URL('/', request.url))

  return NextResponse.next()
}
 
