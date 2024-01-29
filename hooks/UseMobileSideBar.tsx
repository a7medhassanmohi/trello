import React from 'react'
import {create} from "zustand"
type UseMobileSideBarStore = {
    isOpen:boolean,
    onOpen:()=>void,
    onClose:()=>void,
}

export const UseMobileSideBar = create<UseMobileSideBarStore>((set)=>({
    isOpen:false,
    onOpen:()=>set({isOpen:true}),
    onClose:()=>set({isOpen:false})
}))

