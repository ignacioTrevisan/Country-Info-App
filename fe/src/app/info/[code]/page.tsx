import { CountryInfo } from '@/app/components/countryInfo'
import { GetCountrieInfo } from '@/app/core/uses-cases/getCountrieInfo'
import type { Metadata, ResolvingMetadata } from 'next'


interface Props {
    params: Promise<{
        code: string
    }>
}

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
    // read route params
    const code = (await params).code

    return {
        title: `${code} info`,
        description: `${code} description`,
        openGraph: {
            title: code,
            description: code ?? '',

        },
    }
}

export default async function Page({ params }: Props) {
    const code = (await params).code;
    const resp = await GetCountrieInfo(code);
    if (!resp?.data) return;
    return (
        <>
            <CountryInfo info={resp.data} />
        </>
    );
};