export default function ListingsLoading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="animate-pulse">
        <div className="h-64 bg-muted" />
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="h-8 bg-muted rounded-sm w-1/3 mb-4" />
          <div className="h-4 bg-muted rounded-sm w-1/2" />
        </div>
      </div>
    </div>
  );
}
