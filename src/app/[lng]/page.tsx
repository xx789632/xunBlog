import Link from "next/link";
import { useTranslation } from '../i18n'


interface Props {
  params: {
    lng: string;
  };
}

export default async function Home({params:{lng}}: Props) {
    const {t} =await useTranslation(lng, 'common');

  return (
      <>
        {t('hello')}
        <h1>Hi there!</h1>
        <Link href={`/${lng}/second-page`}>
          second page
        </Link>
      </>
  );
}
