"use client";

import { useMemo, useState } from "react";
import type { ChangeEvent } from "react";
import { menu } from "@/lib/menu";

type Group = "all" | "hair" | "beauty" | "body" | "packages";
const filters: { id: Group; label: string }[] = [
  { id: "all", label: "All" },
  { id: "hair", label: "Hair & grooming" },
  { id: "beauty", label: "Beauty & skin" },
  { id: "body", label: "Body massage" },
  { id: "packages", label: "Combos & memberships" },
];

export default function ServiceMenu() {
  const [active, setActive] = useState<Group>("all");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string[]>(["women-hair"]);

  const visible = useMemo(() => {
    const term = search.trim().toLocaleLowerCase();
    return menu
      .filter((category) => active === "all" || category.group === active)
      .map((category) => ({
        ...category,
        items: term ? category.items.filter((item) => `${item.name} ${item.detail ?? ""} ${category.title}`.toLocaleLowerCase().includes(term)) : category.items,
      }))
      .filter((category) => category.items.length > 0);
  }, [active, search]);

  return (
    <div className="service-directory">
      <div className="menu-controls">
        <div className="menu-filters" aria-label="Filter treatments by type">
          {filters.map((filter) => <button key={filter.id} type="button" aria-pressed={active === filter.id} className={active === filter.id ? "filter-pill is-active" : "filter-pill"} onClick={() => { setActive(filter.id); setExpanded([]); }}>{filter.label}</button>)}
        </div>
        <label className="menu-search"><svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.6"/><path d="m16 16 5 5"/></svg><span className="sr-only">Search treatments</span><input type="search" placeholder="Find a treatment..." value={search} onChange={(event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)} /></label>
      </div>
      <p className="menu-count" aria-live="polite">EXPLORE {visible.length} SERVICE {visible.length === 1 ? "CATEGORY" : "CATEGORIES"}</p>
      <div className="menu-accordions">
        {visible.length === 0 ? <div className="menu-empty">We couldn&apos;t find that treatment. Try another search or category.</div> : visible.map((category) => {
          const open = search.trim() !== "" || expanded.includes(category.id);
          const regionId = `menu-panel-${category.id}`;
          return <section className={`menu-accordion ${open ? "is-expanded" : ""}`} key={category.id}>
            <h3 className="menu-heading"><button type="button" aria-expanded={open} aria-controls={regionId} onClick={() => setExpanded((current) => current.includes(category.id) ? current.filter((id) => id !== category.id) : [...current, category.id])}>
              <span className="menu-no">{String(menu.findIndex((cat) => cat.id === category.id) + 1).padStart(2, "0")}</span>
              <span className="menu-name">{category.title}<small>{category.eyebrow.split("/")[1]?.trim()} · {category.items.length} services</small></span>
              <span className="menu-plus" aria-hidden="true"><i /><i /></span>
            </button></h3>
            <div id={regionId} className="menu-accordion-content" hidden={!open}>
              {category.description && <p className="menu-intro">{category.description}</p>}
              <div className="menu-items">{category.items.map((item) => <div className="menu-item" key={`${category.id}-${item.name}`}><div><span className="menu-item-name">{item.name}</span>{item.detail && <small>{item.detail}</small>}</div><span className="menu-item-price">{item.price}</span></div>)}</div>
            </div>
          </section>;
        })}
      </div>
      <div className="menu-after">
        <div><span className="overline">FOUND YOUR RITUAL?</span><h3>Let&apos;s make a<br /><em>moment of it.</em></h3><p>Our reception team will help you arrange your appointment.</p></div>
        <a href="tel:+918249000620" className="button-primary"><span>Call to book</span><span className="button-arrow" aria-hidden="true">↗</span></a>
      </div>
      <p className="menu-disclaimer">Prices are from S DIVA&apos;s supplied menu and may change. “From” prices depend on the treatment. Please confirm current pricing, inclusions and availability with the salon.</p>
    </div>
  );
}
