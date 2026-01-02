'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { RoleSelection } from './role-selection';
import { CitizenForm } from './citizen-form';
import { ProForm } from './pro-form';

type Step = 'role' | 'form';
type Role = 'citizen' | 'pro' | null;

export function RegisterFlow() {
    const [step, setStep] = useState<Step>('role');
    const [selectedRole, setSelectedRole] = useState<Role>(null);

    const handleRoleSelect = (role: 'citizen' | 'pro') => {
        setSelectedRole(role);
        setStep('form');
    };

    const handleBack = () => {
        setStep('role');
        setSelectedRole(null);
    };

    return (
        <Card className="w-full max-w-3xl mx-auto p-6 md:p-10 shadow-2xl border-0 bg-white/95 backdrop-blur-sm mt-10">
            {step === 'role' && (
                <RoleSelection onSelectRole={handleRoleSelect} />
            )}

            {step === 'form' && selectedRole === 'citizen' && (
                <CitizenForm onBack={handleBack} />
            )}

            {step === 'form' && selectedRole === 'pro' && (
                <ProForm onBack={handleBack} />
            )}
        </Card>
    );
}
