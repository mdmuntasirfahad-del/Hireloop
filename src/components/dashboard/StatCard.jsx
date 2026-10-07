import React from 'react';
import { Card } from '@heroui/react';
import {
  FileText,
  Persons,
  Bolt,
  CircleCheck,
} from '@gravity-ui/icons';

/**
 * Single Stat Card Component
 */
export function StatCard({ title, value, icon: Icon }) {
  return (
    <Card className="p-5  bg-zinc-900 border border-zinc-800 rounded-2xl flex flex-col justify-between gap-6 shadow-md transition-all hover:border-zinc-700">
      {/* Icon Badge */}
      <div>
        <div className="w-10 h-10 rounded-lg bg-zinc-800 border border-zinc-700/50 flex items-center justify-center text-zinc-300">
          {Icon && <Icon className="w-5 h-5" />}
        </div>
      </div>

      {/* Title & Value */}
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium text-zinc-400 tracking-wide">
          {title}
        </span>
        <span className="text-2xl font-bold text-white tracking-tight">
          {value}
        </span>
      </div>
    </Card>
  );
}