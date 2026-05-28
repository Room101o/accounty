"use client";

import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import type { Id, Doc } from "@/convex/_generated/dataModel";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const accountSchema = z.object({
  number: z
    .string()
    .min(1, "Account number is required")
    .max(20, "Account number must be 20 characters or less")
    .regex(/^[\d\w-]+$/, "Only letters, numbers, and hyphens allowed"),
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be 100 characters or less"),
  type: z.enum(["asset", "liability", "equity", "income", "expense"], {
    error: "Account type is required",
  }),
  description: z
    .string()
    .max(300, "Description must be 300 characters or less")
    .optional()
    .or(z.literal("")),
  parentId: z.string().optional(),
  normalBalance: z.enum(["debit", "credit"], {
    error: "Normal balance is required",
  }),
});

type AccountFormValues = z.infer<typeof accountSchema>;

type AccountType = AccountFormValues["type"];

const DEFAULT_NORMAL_BALANCE: Record<AccountType, "debit" | "credit"> = {
  asset: "debit",
  expense: "debit",
  liability: "credit",
  equity: "credit",
  income: "credit",
};

interface AccountSheetProps {
  open: boolean;
  onClose: () => void;
  editing: Doc<"accounts"> | null;
}

export function AccountSheet({ open, onClose, editing }: AccountSheetProps) {
  const accounts = useQuery(api.accounts.list) ?? [];
  const create = useMutation(api.accounts.create);
  const update = useMutation(api.accounts.update);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AccountFormValues>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      number: "",
      name: "",
      type: "asset",
      description: "",
      parentId: "",
      normalBalance: "debit",
    },
  });

  useEffect(() => {
    if (open) {
      reset(
        editing
          ? {
              number: editing.number,
              name: editing.name,
              type: editing.type,
              description: editing.description ?? "",
              parentId: editing.parentId ?? "",
              normalBalance: editing.normalBalance,
            }
          : {
              number: "",
              name: "",
              type: "asset",
              description: "",
              parentId: "",
              normalBalance: "debit",
            },
      );
    }
  }, [open, editing, reset]);

  function handleTypeChange(val: AccountType, onChange: (v: AccountType) => void) {
    onChange(val);
    setValue("normalBalance", DEFAULT_NORMAL_BALANCE[val]);
  }

  async function onSubmit(values: AccountFormValues) {
    const payload = {
      number: values.number,
      name: values.name,
      type: values.type,
      description: values.description || undefined,
      parentId: (values.parentId as Id<"accounts">) || undefined,
      normalBalance: values.normalBalance,
    };
    if (editing) {
      await update({ id: editing._id, ...payload });
    } else {
      await create(payload);
    }
    onClose();
  }

  const parentOptions = accounts.filter(
    (a) => a.isActive && a._id !== editing?._id,
  );

  return (
    <Sheet open={open} onOpenChange={(o) => !o && onClose()}>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader>
          <SheetTitle>{editing ? "Edit Account" : "New Account"}</SheetTitle>
        </SheetHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="number">Account Number</Label>
              <Input
                id="number"
                {...register("number")}
                placeholder="1000"
              />
              {errors.number && (
                <p className="text-xs text-destructive">{errors.number.message}</p>
              )}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="type">Type</Label>
              <Controller
                name="type"
                control={control}
                render={({ field }) => (
                  <Select
                    value={field.value}
                    onValueChange={(v) => handleTypeChange(v as AccountType, field.onChange)}
                  >
                    <SelectTrigger id="type">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asset">Asset</SelectItem>
                      <SelectItem value="liability">Liability</SelectItem>
                      <SelectItem value="equity">Equity</SelectItem>
                      <SelectItem value="income">Income</SelectItem>
                      <SelectItem value="expense">Expense</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.type && (
                <p className="text-xs text-destructive">{errors.type.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="name">Account Name</Label>
            <Input
              id="name"
              {...register("name")}
              placeholder="Cash and Cash Equivalents"
            />
            {errors.name && (
              <p className="text-xs text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              {...register("description")}
              placeholder="Optional description"
              rows={2}
            />
            {errors.description && (
              <p className="text-xs text-destructive">{errors.description.message}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="parent">Parent Account</Label>
            <Controller
              name="parentId"
              control={control}
              render={({ field }) => (
                <Select
                  value={field.value ?? ""}
                  onValueChange={(v) => field.onChange(v ?? "")}
                >
                  <SelectTrigger id="parent">
                    <SelectValue placeholder="None (top-level)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">None (top-level)</SelectItem>
                    {parentOptions.map((a) => (
                      <SelectItem key={a._id} value={a._id}>
                        {a.number} — {a.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="normalBalance">Normal Balance</Label>
            <Controller
              name="normalBalance"
              control={control}
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger id="normalBalance">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="debit">Debit</SelectItem>
                    <SelectItem value="credit">Credit</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.normalBalance && (
              <p className="text-xs text-destructive">{errors.normalBalance.message}</p>
            )}
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving…" : editing ? "Save Changes" : "Create Account"}
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
}
