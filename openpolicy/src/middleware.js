import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/"],
    ignoredRoutes: ["/favicon.ico", "/logo.webp"]
})

export const config = {
    matcher: ["/((?!.+\\.[//w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}