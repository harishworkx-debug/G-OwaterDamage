import { business } from '@/data/business';
import CallButton from '@/components/ui/CallButton';

export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[999999] border-t border-white/10 bg-navy-900/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-2xl shadow-navy-950/50 backdrop-blur md:hidden">
      <CallButton label={`Call ${business.phoneDisplay}`} className="w-full" />
    </div>
  );
}
