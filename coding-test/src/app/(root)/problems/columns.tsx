"use client";

import { Button } from "@/components/ui/button";
import { Problem } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { redirect, useRouter } from "next/navigation";

export const columns: ColumnDef<Problem>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "title",

    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "difficulty",
    header: "Difficulty",
  },
  {
    accessorKey: "solve",
    header: "Solve",
    cell: ({ row }) => {
      const router = useRouter();
      return (
        <Button
          variant="default"
          onClick={() => {
            console.log(row);
            router.push(`problems/${row.original.id}`)
          }}
        >
          Solve
        </Button>
      );
    },
  },
];
