import ExternalLinkIcon from "./ExternalLink";

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { day: "2-digit", month: "short", year: "numeric" });
}

export function PolicyCard({ policy }) {
  return (
    <div>
        <article className="rounded-xl bg-white shadow-card px-5 py-5 sm:px-7 sm:py-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            {/* Left content */}
            <div className="min-w-0 flex-1">
              <h2 className="text-lg sm:text-xl font-bold">
                <span className="text-brandBlue">Policy number:</span>{" "}
                <span className="font-semibold text-ink">{policy.policyNumber}</span>
              </h2>

              <div className="mt-4 grid gap-2 text-sm sm:text-[15px]">
                <div>
                  <span className="font-semibold">Destination:</span>{" "}
                  <span className="text-ink">{policy.destinations.map(dest => dest.name).join(", ")}</span>
                </div>

                {policy.type === "Single Trip" ? (
                  <>
                    <div>
                      <span className="font-semibold">Policy start date:</span>{" "}
                      <span className="text-ink">{formatDate(policy.policyStart)}</span>
                    </div>
                    <div>
                      <span className="font-semibold">Maximum trip duration:</span>{" "}
                      <span className="text-ink">Up to {policy.maxTripDuration} days</span>
                    </div>
                  </>
                ) : (
                  <div>
                    <span className="font-semibold">Travel date:</span>{" "}
                    <span className="text-ink">
                      {formatDate(policy.policyStart)} - {formatDate(policy.policyEnd)}
                    </span>
                  </div>
                )}
              </div>

              {/* Links row (desktop + mobile) */}
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 underline decoration-gray-300 underline-offset-4
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue focus-visible:ring-offset-2"
                >
                  <ExternalLinkIcon />
                  View PDS
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 underline decoration-gray-300 underline-offset-4
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue focus-visible:ring-offset-2"
                >
                  <ExternalLinkIcon />
                  Certificate of Insurance
                </a>
              </div>
            </div>

            {/* Right column (desktop). On mobile it stacks below. */}
            <div className="lg:w-[320px] lg:pl-6 lg:border-l lg:border-gray-200">
              <div className="grid gap-2 text-sm sm:text-[15px]">
                <div>
                  <span className="font-semibold">Plan:</span>{" "}
                  <span className="text-ink">{policy.planName}</span>
                </div>
                <div>
                  <span className="font-semibold">Excess:</span>{" "}
                  <span className="text-ink">${policy.excess}</span>
                </div>
              </div>

              <div className="mt-4 grid gap-3">
                <button
                  type="button"
                  className="h-11 rounded-full border-2 border-brandBlue bg-brandYellow text-brandBlue font-semibold
                            hover:bg-[#ffd96a] active:bg-[#ffd14a]
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue focus-visible:ring-offset-2
                            w-full lg:w-auto lg:min-w-[220px]"
                >
                  Make a claim
                </button>

                <button
                  type="button"
                  className="h-11 rounded-full border-2 border-brandBlue bg-white text-brandBlue font-semibold
                            hover:bg-[#ffd96a] active:bg-gray-100
                            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue focus-visible:ring-offset-2
                            w-full lg:w-auto lg:min-w-[220px]"
                >
                  Manage my policy
                </button>
              </div>
            </div>
          </div>
        </article>
    </div>
  );
}