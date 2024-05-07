import { ArrowDownIcon, ArrowRightIcon, ArrowUpIcon, Ban } from 'lucide-vue-next';

export const priorities = reactive<Priority[]>([
  { label: 'Low', value: 'low', color: 'bg-sky-300', icon: h(ArrowDownIcon) },
  { label: 'Medium', value: 'medium', color: 'bg-amber-400', icon: h(ArrowRightIcon) },
  { label: 'High', value: 'high', color: 'bg-red-500', icon: h(ArrowUpIcon) },
  { label: 'None', value: 'none', color: 'bg-zinc-900', icon: h(Ban) }
]);
