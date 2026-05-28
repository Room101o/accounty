export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Your financial overview at a glance.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {["Total Revenue", "Expenses", "Outstanding Invoices", "Net Profit"].map(
          (label) => (
            <div
              key={label}
              className="rounded-xl border bg-card p-6 shadow-sm"
            >
              <p className="text-sm font-medium text-muted-foreground">{label}</p>
              <p className="mt-2 text-3xl font-bold">—</p>
            </div>
          )
        )}
      </div>
    </div>
  );
}
