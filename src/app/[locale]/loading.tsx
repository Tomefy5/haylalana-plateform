export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-haylalana-bg-primary">
            <div className="relative flex flex-col items-center">
                {/* Logo/Spinner Container */}
                <div className="relative w-24 h-24 mb-4">
                    {/* Cercle extérieur animé */}
                    <div className="absolute inset-0 rounded-full border-4 border-haylalana-brand/20 border-t-haylalana-brand animate-spin" />

                    {/* Cercle intérieur */}
                    <div className="absolute inset-4 rounded-full border-4 border-haylalana-accent/20 border-b-haylalana-accent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />

                    {/* Centre */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl animate-pulse">⚖️</span>
                    </div>
                </div>

                {/* Texte de chargement */}
                <div className="flex flex-col items-center gap-1 animate-pulse">
                    <h3 className="text-haylalana-brand font-semibold text-lg">Haylalàna</h3>
                    <p className="text-haylalana-text-tertiary text-sm">Chargement...</p>
                </div>
            </div>
        </div>
    );
}
