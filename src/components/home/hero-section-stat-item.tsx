import React from "react";
import { LucideIcon } from "lucide-react";

interface StatItemProps {
    icon: LucideIcon,
    label: string,
    value: string | number
}

export default function StatItem({ icon: Icon, label, value }: StatItemProps) {
    return (
        <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-haylalana-brand/10">
                <Icon className="w-5 h-5 text-haylalana-brand" aria-hidden="true" />
            </div>
            <div className="text-left">
                <div className="font-bold text-haylalana-heading-primary text-lg">{value}</div>
                <div className="text-haylalana-text-tertiary text-xs mt-1">{label}</div>
            </div>
        </div>
    );
}