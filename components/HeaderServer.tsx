import { loadHomeJson } from '@/lib/loadJson';
import HeaderClient from './HeaderClient';

export default function HeaderServer() {
  const data = loadHomeJson();
  const migrationProcesses = data.data.migration_processes.au;

  return (
    <HeaderClient migrationProcesses={migrationProcesses} />
  );
}
