'use client';
import { useLang } from '../lib/LangContext';

const KEYS = ['mq_stroke','mq_tbi','mq_cardiac','mq_ortho','mq_neuro','mq_ped','mq_geri','mq_spinal','mq_pulm','mq_sports','mq_post','mq_msk','mq_onco','mq_burn'];

export default function Marquee() {
  const { t } = useLang();
  const items = [...KEYS, ...KEYS];

  return (
    <div className="bg-[#044D40] overflow-hidden py-3.5 border-t border-white/[0.06]">
      <div className="marquee-track flex w-max">
        {items.map((key, i) => (
          <div key={i} className="flex items-center gap-2.5 px-6 text-[12px] font-semibold text-white/50 border-r border-white/10 whitespace-nowrap">
            <span className="text-white/20 text-[10px]">—</span>
            {t(key)}
          </div>
        ))}
      </div>
    </div>
  );
}
