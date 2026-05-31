export function TrustBar() {
  return (
    <div className="border-b bg-card py-5">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-x-10 gap-y-4 opacity-75">
          <div className="text-xs uppercase tracking-[2px] font-medium text-muted-foreground">
            Featured in leading workplaces across
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm font-semibold text-muted-foreground">
            <div>Salt Lake Sector V</div>
            <div>New Town Rajarhat</div>
            <div>IT Parks</div>
            <div>Manufacturing Hubs</div>
            <div>BFSI &amp; Corporate Offices</div>
          </div>
        </div>
      </div>
    </div>
  );
}
