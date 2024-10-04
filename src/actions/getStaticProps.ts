import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

interface Props {
    locale: string
}
export async function getStaticProps({ locale }: Props) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                'common'
            ])),
            // Will be passed to the page component as props
        },
    }
}
