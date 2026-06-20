import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import Header from "./Header";
import { Link } from "react-router";
import { useSelector } from "react-redux";

function Home() {
  const isAuthenticated = useSelector((store) => store.user.isAuthenticated);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ShaderGradientCanvas
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
        className="z-0"
        pixelDensity={1.5}
        fov={45}
      >
        <ShaderGradient
          animate="on"
          axesHelper="off"
          brightness={1.2}
          cAzimuthAngle={180}
          cDistance={3.6}
          cPolarAngle={90}
          cameraZoom={1}
          color1="#7dd3fc"
          color2="#0ea5e9"
          color3="#075985"
          // color1="#deffe5"
          // color2="#72dbd7"
          // color3="#80bfe1"
          destination="onCanvas"
          embedMode="off"
          envPreset="city"
          format="gif"
          fov={45}
          frameRate={10}
          gizmoHelper="hide"
          grain="off"
          lightType="3d"
          pixelDensity={1}
          positionX={-1.4}
          positionY={0}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.1}
          rotationX={0}
          rotationY={10}
          rotationZ={50}
          shader="defaults"
          type="plane"
          uAmplitude={1}
          uDensity={1.3}
          uFrequency={5.5}
          uSpeed={0.2}
          uStrength={4}
          uTime={0}
          wireframe={false}
        />
      </ShaderGradientCanvas>
      <div className=" absolute inset-0 z-50 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <div className="max-w-4xl bg-sky-300/20 backdrop-blur-sm p-2 rounded-xl shadow-md">
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 md:text-7xl">
            Focus on What Matters.
            <br />
            Stay Organized Every Day.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-700 md:text-xl">
            Manage your tasks, track your goals, and build better habits with a
            clean and distraction-free workspace designed to help you get things
            done.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to={isAuthenticated ? "/app" : "/login"}
              className="rounded-xl bg-slate-900 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105"
            >
              Get Started
            </Link>
          </div>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm font-medium text-slate-700">
            <div>✓ Easy Task Management</div>
            <div>✓ Daily Productivity Tracking</div>
            <div>✓ Clean & Modern Interface</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
