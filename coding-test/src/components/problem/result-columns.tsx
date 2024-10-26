"use client";

import { Button } from "@/components/ui/button";
import { Problem, Result } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { redirect, useRouter } from "next/navigation";
import { Badge } from "../ui/badge";
import { cn, formatDate } from "@/lib/utils";

export const columns: ColumnDef<Result>[] = [
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return (
        <div className="flex flex-col gap-1">
          <h1
            className={cn("text-md font-medium", {
              "text-teal-600": row.original.status === "Accepted",
              "text-red-600": row.original.status === "Wrong Answer",
            })}
          >
            {row.original.status}
          </h1>
          <h1 className="text-xs font-normal">
            {formatDate(row.original.time)}
          </h1>
        </div>
      );
    },
  },
  {
    accessorKey: "language",
    header: "Language",
    cell: ({ row }) => <Badge variant="secondary">{row.getValue("language")}</Badge>,
  },
  {
    accessorKey: "runtime",
    header: "Runtime",
  },
  {
    accessorKey: "memory",
    header: "Memory",
  },
];
