import { Meteors } from "../components/MeteorBackground";
import { StarsCanvas } from "../components/StarBackground";

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative bg-black">
      <StarsCanvas className="absolute inset-0 z-0" value={5000} />
      <Meteors />

      <div className="relative z-10 flex items-center justify-center flex-col gap-8 min-h-screen">
        <h1 className="font-bold text-4xl text-center text-primary">
          Erro 404
        </h1>
        <h2 className="font-bold text-3xl text-center text-muted">
          Página não encontrada
        </h2>
      </div>
    </div>
  );
};
