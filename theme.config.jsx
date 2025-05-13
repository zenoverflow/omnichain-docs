import { useRouter } from "next/router";

const description = "Efficient visual programming for AI language models";

export default {
    logo: <span>OmniChain</span>,
    project: {
        link: "https://github.com/zenoverflow/omnichain",
    },
    docsRepositoryBase: "https://github.com/zenoverflow/omnichain-docs",
    editLink: {
        component: null,
    },
    feedback: {
        content: null,
    },
    head: (
        <>
            <meta name="description" content={description}></meta>
            <meta property="og:type" content="website" />
            <meta property="og:title" content="OmniChain" />
            <meta property="og:description" content={description} />
            <meta
                property="og:image"
                content="https://omnichain.zenoverflow.com/images/screenshot-section.png"
            />
        </>
    ),
    useNextSeoProps() {
        const { asPath } = useRouter();
        if (asPath !== "/") {
            return {
                titleTemplate: "OmniChain - %s",
            };
        } else {
            return {
                titleTemplate: "OmniChain",
            };
        }
    },
    footer: {
        text: (
            <span>
                MIT {new Date().getFullYear()} ©{" zenoverflow "}
            </span>
        ),
    },
    // ... other theme options
};
