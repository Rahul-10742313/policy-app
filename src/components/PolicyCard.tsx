import externalLinkIcon from "../assets/externalLinkIcon.svg";
import type { PolicyCardProps } from "../types/types";
import { formatDate } from "../utilities/common";
import Button from "./Button";

const PolicyCard: React.FC<PolicyCardProps> = ({ policy }) => {
  return (
    <article className="rounded-xl bg-secondary-color shadow-card px-5 py-5 sm:px-7 sm:py-6" tabIndex={0} aria-label={`Policy No. ${policy.policyNumber}`}>
      <div
        className="
          flex flex-col gap-4
          lg:grid lg:grid-cols-[minmax(0,1.4fr)_minmax(220px,0.8fr)_auto]
          lg:gap-x-6 lg:gap-y-4 lg:items-start
        "
      >
        {/* Policy details */}
        <div className="order-0 lg:order-none lg:col-start-1 lg:row-start-1 lg:min-w-max">
          <h2 className="text-lg sm:text-xl font-bold">
            <span className="text-main">Policy number:</span>{" "}
            <span className="font-semibold text-ink">
              {policy.policyNumber}
            </span>
          </h2>

          <div className="mt-4 grid gap-2 text-sm sm:text-[15px]">
            <div>
              <span className="font-semibold">Destination:</span>{" "}
              <span className="text-ink">
                {policy.destinations.map((dest) => dest.name).join(", ")}
              </span>
            </div>

            {policy.type === "Single Trip" ? (
              <>
                <div>
                  <span className="font-semibold">Policy start date:</span>{" "}
                  <span className="text-ink">
                    {formatDate(policy.policyStart)}
                  </span>
                </div>
                <div>
                  <span className="font-semibold">
                    Maximum trip duration:
                  </span>{" "}
                  <span className="text-ink">
                    Up to {policy.maxTripDuration} days
                  </span>
                </div>
              </>
            ) : (
              <div>
                <span className="font-semibold">Travel date:</span>{" "}
                <span className="text-ink">
                  {formatDate(policy.policyStart)} -{" "}
                  {formatDate(policy.policyEnd)}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Plan */}
        <div className="order-1 lg:order-none lg:col-start-2 lg:row-start-1 lg:pl-6 lg:border-l lg:border-gray-200 lg:ml-[10%] lg:mt-[18%]">
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
        </div>

        {/* Links */}
        <div className="order-2 lg:order-none mt-4 lg:mt-0 flex flex-wrap gap-x-6 gap-y-2 text-sm lg:col-start-1 lg:row-start-2 lg:min-w-max">
          <a
            href="#"
            className="inline-flex items-center gap-2 underline decoration-gray-300 underline-offset-4
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue focus-visible:ring-offset-2"
          >           
          <img
            src={externalLinkIcon}
            alt="External link"
            className="w-4 h-4"
          />
            View PDS
          </a>

          <a
            href="#"
            className="inline-flex items-center gap-2 underline decoration-gray-300 underline-offset-4
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandBlue focus-visible:ring-offset-2"
          >
            <img
              src={externalLinkIcon}
              alt="External link"
              className="w-4 h-4"
            />
            Certificate of Insurance
          </a>
        </div>

        {/* Buttons */}
        <div className="order-3 lg:order-none lg:col-start-3 lg:row-start-1 lg:row-span-2 lg:pl-6">
          <div className="grid gap-3">
            <Button
              onClick={() => console.log("Clicked Make a claim button")}
              className="primary-button"
            >
              Make a claim
            </Button>

            <Button
              onClick={() => console.log("Clicked Manage my policy button")}
              className="secondary-button"
            >
              Manage my policy
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PolicyCard;