import { useTranslation } from 'react-i18next';

export function Home() {
  const { t } = useTranslation();

  return (
    <main>
      <h1>{t('hello')}</h1>
    </main>
  );
}
