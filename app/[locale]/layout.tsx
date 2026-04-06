import HeaderServer from '@/components/HeaderServer'
import Footer from '@/components/Footer'
import { generateLocaleParams } from '@/lib/i18n'

export function generateStaticParams() {
  return generateLocaleParams();
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: any }>;
}) {
  const { locale } = await params;

  return (
    <>
      <HeaderServer />
      <main>{children}</main>
      <Footer locale={locale} />
    </>
  );
}