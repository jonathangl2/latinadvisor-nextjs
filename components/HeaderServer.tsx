import { loadHomeJson } from '@/lib/loadJson';
import HeaderClient from './HeaderClient';
import { getDictionary } from '@/lib/i18n';

type Props = {
  locale?: string;
};

export default async function HeaderServer({ locale }: Props) {

  const data = loadHomeJson();
  const migrationProcesses = data.data.migration_processes.au;
  const dict = await getDictionary(locale);
  
  return (
    <HeaderClient 
      migrationProcesses={migrationProcesses}
      dict={dict}
    />
  );
}