"use client";
import { Button } from "@/components/ui/button";
import { UseMobileSideBar } from "@/hooks/UseMobileSideBar";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import SideBar from "./SideBar";
  
type Props = {};

const MobileSideBar = (props: Props) => {
  const pathname = usePathname();
  const [IsMounted, setIsMounted] = useState(false);
  const onOpen = UseMobileSideBar((state) => state.onOpen);
  const onClose = UseMobileSideBar((state) => state.onClose);
  const isOpen = UseMobileSideBar((state) => state.isOpen);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    onClose();
  }, [pathname,onClose]);

  if (!IsMounted) return null;

  return <>
  <Button
  onClick={onOpen}
  className="block md:hidden mr-2"
  variant={"ghost"}
  size={"sm"}
  >
    <Menu className="size-4"/>
  </Button>
  <Sheet open={isOpen} onOpenChange={onClose}>
  <SheetContent
  side={"left"}
  className="p-2 pt-10"
  >
    <SideBar storageKey={"t-sidebar-mobile-state"}/>
  </SheetContent>
</Sheet>
</>;
};

export default MobileSideBar;
