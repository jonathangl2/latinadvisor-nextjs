import { loadHomeJson } from '@/lib/loadJson';
import HeaderClient from './HeaderClient';

type Props = {
  locale?: string;
};

export default function HeaderServer({ locale }: Props) {
  const data = loadHomeJson();
  const migrationProcesses = data.data.migration_processes.au;

  return (
    <HeaderClient 
      migrationProcesses={migrationProcesses}
    />
  );
}