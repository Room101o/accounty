"use client";

import { useState, useMemo } from "react";
import { useQuery, useMutation } from "convex/react";
import { useOrganization } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";
import type { Doc } from "@/convex/_generated/dataModel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Pencil, Archive } from "lucide-react";
import { AccountSheet } from "./_components/account-sheet";

type AccountType = "asset" | "liability" | "equity" | "income" | "expense";

const TYPE_ORDER: AccountType[] = ["asset", "liability", "equity", "income", "expense"];

const TYPE_LABEL: Record<AccountType, string> = {
  asset: "Assets",
  liability: "Liabilities",
  equity: "Equity",
  income: "Income",
  expense: "Expenses",
};

const TYPE_BADGE: Record<AccountType, string> = {
  asset: "bg-blue-100 text-blue-700",
  liability: "bg-red-100 text-red-700",
  equity: "bg-purple-100 text-purple-700",
  income: "bg-green-100 text-green-700",
  expense: "bg-orange-100 text-orange-700",
};

const EDITOR_ROLES = ["org:admin", "org:accountant"];

export default function AccountsPage() {
  const { membership } = useOrganization();
  const canEdit = EDITOR_ROLES.includes(membership?.role ?? "");

  const accounts = useQuery(api.accounts.list);
  const archive = useMutation(api.accounts.archive);

  const [search, setSearch] = useState("");
  const [sheetOpen, setSheetOpen] = useState(false);
  const [editing, setEditing] = useState<Doc<"accounts"> | null>(null);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return (accounts ?? []).filter(
      (a) =>
        a.isActive &&
        (a.name.toLowerCase().includes(q) || a.number.includes(q)),
    );
  }, [accounts, search]);

  const grouped = useMemo(() => {
    return TYPE_ORDER.map((type) => ({
      type,
      items: filtered
        .filter((a) => a.type === type)
        .sort((a, b) => a.number.localeCompare(b.number)),
    })).filter((g) => g.items.length > 0);
  }, [filtered]);

  function openCreate() {
    setEditing(null);
    setSheetOpen(true);
  }

  function openEdit(account: Doc<"accounts">) {
    setEditing(account);
    setSheetOpen(true);
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Chart of Accounts</h1>
          <p className="text-sm text-muted-foreground">
            {accounts
              ? `${accounts.filter((a) => a.isActive).length} active accounts`
              : "Loading…"}
          </p>
        </div>
        {canEdit && (
          <Button onClick={openCreate}>
            <Plus className="mr-2 h-4 w-4" />
            New Account
          </Button>
        )}
      </div>

      <Input
        placeholder="Search by name or number…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-sm"
      />

      {accounts === undefined ? (
        <div className="text-sm text-muted-foreground py-8 text-center">Loading…</div>
      ) : grouped.length === 0 ? (
        <div className="text-sm text-muted-foreground py-8 text-center">
          {search
            ? "No accounts match your search."
            : "No accounts yet. Create your first account."}
        </div>
      ) : (
        <div className="space-y-6">
          {grouped.map(({ type, items }) => (
            <div key={type}>
              <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                {TYPE_LABEL[type]}
              </h2>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-28">Number</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead className="hidden md:table-cell">Type</TableHead>
                      <TableHead className="hidden md:table-cell">Normal Balance</TableHead>
                      <TableHead className="hidden lg:table-cell">Description</TableHead>
                      {canEdit && <TableHead className="w-20 text-right">Actions</TableHead>}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {items.map((account) => (
                      <TableRow key={account._id}>
                        <TableCell className="font-mono text-sm">{account.number}</TableCell>
                        <TableCell className="font-medium">{account.name}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${TYPE_BADGE[account.type]}`}
                          >
                            {TYPE_LABEL[account.type].replace(/s$/, "")}
                          </span>
                        </TableCell>
                        <TableCell className="hidden md:table-cell capitalize text-sm text-muted-foreground">
                          {account.normalBalance}
                        </TableCell>
                        <TableCell className="hidden lg:table-cell text-sm text-muted-foreground truncate max-w-xs">
                          {account.description ?? "—"}
                        </TableCell>
                        {canEdit && (
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-1">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-7 w-7"
                                onClick={() => openEdit(account)}
                              >
                                <Pencil className="h-3.5 w-3.5" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-7 w-7 text-muted-foreground hover:text-destructive"
                                onClick={() => archive({ id: account._id })}
                              >
                                <Archive className="h-3.5 w-3.5" />
                              </Button>
                            </div>
                          </TableCell>
                        )}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          ))}
        </div>
      )}

      <AccountSheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        editing={editing}
      />
    </div>
  );
}
