import AlertFeed from "../components/AlertFeed";
import StatCard from "../components/StatCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b12] text-white p-6">
      <section className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-green-400 font-semibold">Reactive Sentinel</p>
          <h1 className="text-4xl md:text-6xl font-bold mt-2">Never miss an on-chain event again.</h1>
          <p className="text-gray-400 mt-4 max-w-2xl">
            Real-time whale alerts, exchange flows, burns, staking activity, and automation powered by Reactive Network.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <StatCard title="Live Alerts" value="12" label="last hour" />
          <StatCard title="Whale Volume" value="$184K" label="tracked today" />
          <StatCard title="Burn Events" value="3" label="detected" />
          <StatCard title="Confidence" value="87/100" label="top signal" />
        </div>

        <AlertFeed />
      </section>
    </main>
  );
}
