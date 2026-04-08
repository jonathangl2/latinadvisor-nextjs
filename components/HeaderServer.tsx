import { API_URL } from '@/lib/url';
import HeaderClient from './HeaderClient';
import { getDictionary, type Locale } from '@/lib/i18n';

type Props = {
  locale: Locale;
};

async function getMigrationProcesses(locale: Locale) {
  try {
    const res = await fetch(
      `${API_URL}/api/migration-processes?locale=${locale}&fields[0]=slug&fields[1]=title&sort=createdAt:asc`,
      { next: { revalidate: 60 } }
    );
    
    if (!res.ok) {
      console.error('Failed to fetch migration processes:', res.status);
      return [];
    }
    
    const data = await res.json();
    return data.data || [];
  } catch (err) {
    console.error('Error fetching migration processes:', err);
    return [];
  }
}

export default async function HeaderServer({ locale }: Props) {
  const dict = await getDictionary(locale);
  const migrationProcesses = await getMigrationProcesses(locale);
  
  return (
    <HeaderClient 
      migrationProcesses={migrationProcesses}
      dict={dict}
    />
  );
}