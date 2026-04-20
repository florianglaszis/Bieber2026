import { trip } from "@/data/trip";
import { Phone, MessageCircle, Receipt, Lightbulb, Package, CheckSquare } from "lucide-react";

const { info } = trip;

export default function InfoPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Useful Info</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Emergency numbers, tips, and packing list
        </p>
      </div>

      {/* Emergency contacts */}
      <section>
        <p className="section-title flex items-center gap-1.5">
          <Phone size={12} />
          Emergency contacts
        </p>
        <div className="card divide-y divide-orange-50 dark:divide-gray-700">
          {info.emergencyContacts.map((c) => (
            <div key={c.label} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
              <span className="text-sm text-gray-600 dark:text-gray-300">{c.label}</span>
              <a
                href={`tel:${c.number}`}
                className="text-sm font-bold text-orange-500 dark:text-orange-400 font-mono"
              >
                {c.number}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Group chat & expenses */}
      <section className="grid grid-cols-2 gap-3">
        {info.groupChatLink && (
          <a
            href={info.groupChatLink}
            target="_blank"
            rel="noopener noreferrer"
            className="card flex flex-col items-center gap-2 text-center hover:border-orange-300
                       active:scale-95 transition-all duration-150 cursor-pointer"
          >
            <MessageCircle size={24} className="text-green-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Group Chat</span>
          </a>
        )}
        {info.expensesLink && (
          <a
            href={info.expensesLink}
            target="_blank"
            rel="noopener noreferrer"
            className="card flex flex-col items-center gap-2 text-center hover:border-orange-300
                       active:scale-95 transition-all duration-150 cursor-pointer"
          >
            <Receipt size={24} className="text-orange-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Splitwise
            </span>
          </a>
        )}
      </section>

      {/* Local tips */}
      <section>
        <p className="section-title flex items-center gap-1.5">
          <Lightbulb size={12} />
          Local tips
        </p>
        <div className="card space-y-3">
          {info.localTips.map((tip, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-orange-400 font-bold text-xs mt-0.5 w-4 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-snug">{tip}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Packing list */}
      <section>
        <p className="section-title flex items-center gap-1.5">
          <Package size={12} />
          Packing list
        </p>
        <div className="space-y-3">
          {info.packingList.map((group) => (
            <div key={group.category} className="card">
              <p className="font-semibold text-sm text-gray-700 dark:text-gray-200 mb-2">
                {group.category}
              </p>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300"
                  >
                    <CheckSquare size={14} className="text-orange-300 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
