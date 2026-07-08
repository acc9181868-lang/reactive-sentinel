const alerts = [
  { icon: "🐋", title: "Whale transfer detected", body: "1,250,000 REACT moved from wallet 0x9C28...1443A", score: 86 },
  { icon: "🏦", title: "Exchange outflow", body: "500,000 REACT left a tracked exchange wallet", score: 91 },
  { icon: "🔥", title: "Burn event", body: "5,000 REACT sent to burn address", score: 78 },
  { icon: "🔒", title: "Staking activity", body: "100,000 REACT staked by validator wallet", score: 82 }
];

export default function AlertFeed() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
      <div className="p-5 border-b border-white/10">
        <h2 className="text-2xl font-bold">Live Alert Feed</h2>
        <p className="text-gray-400">MVP placeholder data — next step is connecting real RPC events.</p>
      </div>
      <div className="divide-y divide-white/10">
        {alerts.map((alert, index) => (
          <div key={index} className="p-5 flex items-start gap-4">
            <span className="text-3xl">{alert.icon}</span>
            <div className="flex-1">
              <p className="font-semibold">{alert.title}</p>
              <p className="text-gray-400 mt-1">{alert.body}</p>
            </div>
            <div className="text-right">
              <p className="text-green-400 font-bold">{alert.score}/100</p>
              <p className="text-gray-500 text-xs">confidence</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
