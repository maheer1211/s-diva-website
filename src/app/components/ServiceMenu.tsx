"use client";

import { useMemo, useState } from "react";
import { menu } from "@/lib/menu";

type Group = "all" | "hair" | "beauty" | "body" | "packages";
const filters: { id: Group; label: string }[] = [
  { id: "all", label: "All treatments" },
  { id: "hair", label: "Hair & grooming" },
  { id: "beauty", label: "Beauty & skin" },
  { id: "body", label: "Body massage" },
  { id: "packages", label: "Combos & memberships" },
];

export default function ServiceMenu() {
  const [active, setActive] = useState<Group>("all");
  const [search, setSearch] = useState("");

  const visible = useMemo(() => {
    const term = search.trim().toLocaleLowerCase();
    return menu
      .filter((category) => active === "all" || category.group === active)
      .map((category) => ({
        ...category,
        items: term
          ? category.items.filter((item) => `${item.name} ${item.detail ?? ""} ${category.title}`.toLocaleLowerCase().includes(term))
          : category.items,
      }))
      .filter((category) => category.items.length > 0);
  }, [active, search]);

  return (
    <div>
      <div className="menu-controls">
        <div className="menu-filters" role="group" aria-label="Filter treatments by category">
          {filters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              aria-pressed={active === filter.id}
              className={`filter-pill ${active === filter.id ? "filter-pill-active" : ""}`}
              onClick={() => setActive(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        <label className="menu-search">
          <span className="sr-only">Search treatments</span>
          <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/></svg>
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Find a treatment..." type="search" />
        </label>
      </div>

      <div className="menu-grid" aria-live="polite">
        {visible.length === 0 ? (
          <div className="menu-empty">No treatments match your search. Try another name or category.</div>
        ) : visible.map((category) => (
          <section key={category.id} className="menu-card" aria-labelledby={`${category.id}-title`}>
            <div className="menu-card-header">
              <p className="eyebrow menu-card-label">{category.eyebrow}</p>
              <h3 id={`${category.id}-title`} className="menu-card-title">{category.title}</h3>
              {category.description && <p className="menu-card-description">{category.description}</p>}
            </div>
            <div className="menu-items">
              {category.items.map((item) => (
                <div key={`${category.id}-${item.name}`} className="menu-item">
                  <div className="min-w-0">
                    <p className="menu-item-name">{item.name}</p>
                    {item.detail && <p className="menu-item-detail">{item.detail}</p>}
                  </div>
                  <span className="menu-item-price">{item.price}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="menu-booking-panel">
        <div>
          <p className="eyebrow text-[#c7a777]">FOUND YOUR RITUAL?</p>
          <h3 className="font-display text-[clamp(2rem,4vw,3.25rem)] leading-tight text-white">Your next moment of calm awaits.</h3>
          <p className="mt-3 max-w-lg text-[#d5cec1]">Browse the menu, then call our reception directly. Our team will help you arrange an appointment.</p>
        </div>
        <a className="button-gold shrink-0" href="tel:+918249000620">Call to book <span aria-hidden="true">↗</span></a>
      </div>
      <p className="menu-disclaimer">Prices are from S DIVA’s supplied menu and may change. “From” prices depend on the service. Contact the salon to confirm the final price, inclusions and availability.</p>
    </div>
  );
}
