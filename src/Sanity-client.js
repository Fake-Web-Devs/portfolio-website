import sanityClient from "@sanity/client"

export default sanityClient({
    projectId: "ismacdif", //go to /sanityreactblog/sanity.json and search under "api"
    dataset: "production"
})